/**
 * A tiny History-API router. The site is a handful of static, prerendered
 * pages, so this is all that is needed - and it keeps React as the only
 * runtime dependency.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { scrollToTop } from '@/lib/scroll'

interface RouterValue {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterValue>({ path: '/', navigate: () => {} })

/** "/aboutus.html" -> "/aboutus", "/index.html" -> "/", "/tattoos/" -> "/tattoos". */
export function normalizePath(input: string): string {
  let p = input.split(/[?#]/)[0] || '/'
  p = p.replace(/\/index\.html$/, '/').replace(/\.html$/, '')
  if (p.length > 1) p = p.replace(/\/+$/, '')
  return p || '/'
}

/** Used while prerendering: the path is fixed and navigation is a no-op. */
export function ServerRouter({ url, children }: { url: string; children: ReactNode }) {
  const value = useMemo<RouterValue>(
    () => ({ path: normalizePath(url), navigate: () => {} }),
    [url],
  )
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

/** Used in the browser. */
export function BrowserRouter({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    // Tidy legacy URLs such as /aboutus.html without a reload.
    const clean = normalizePath(window.location.pathname)
    if (clean !== window.location.pathname) {
      window.history.replaceState(null, '', clean + window.location.search + window.location.hash)
    }
    const onPop = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to: string) => {
    const next = normalizePath(to)
    if (next !== normalizePath(window.location.pathname)) {
      window.history.pushState(null, '', next)
      setPath(next)
    }
    scrollToTop()
  }, [])

  const value = useMemo<RouterValue>(() => ({ path, navigate }), [path, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export const usePath = (): string => useContext(RouterContext).path

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useContext(RouterContext)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === '_blank'
    ) {
      return
    }
    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

/** A Link that marks itself as the current page. */
export function NavLink({ to, className, ...rest }: LinkProps) {
  const active = usePath() === normalizePath(to)
  const classes = [className, active ? 'is-active' : ''].filter(Boolean).join(' ')
  return <Link to={to} className={classes} aria-current={active ? 'page' : undefined} {...rest} />
}
