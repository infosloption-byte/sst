import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { whatsappUrl } from '@/config/site'
import { getScrollTop, onScroll, scrollToTop } from '@/lib/scroll'
import { usePath } from '@/router'
import { SiteHeader } from './SiteHeader'

/** Fades sections in as they scroll into view (the template's "wow" animations). */
function useScrollReveal(path: string) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.wow'))
    if (!items.length || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.classList.add('animated')
          el.style.visibility = 'visible'
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    for (const el of items) {
      // Only hide what is below the fold; anything already visible stays put.
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
        el.style.visibility = 'hidden'
        observer.observe(el)
      }
    }
    return () => observer.disconnect()
  }, [path])
}

/** Back-to-top button (the template's #scrollUp). */
function ScrollUp() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => setVisible(getScrollTop() > 600)
    update()
    return onScroll(update)
  }, [])
  return (
    <a
      id="scrollUp"
      href="#top"
      aria-label="Back to top"
      style={{ display: visible ? 'block' : 'none', zIndex: 99999 }}
      onClick={(event) => {
        event.preventDefault()
        scrollToTop(true)
      }}
    />
  )
}

function WhatsAppFloat() {
  return (
    <a
      className="sst-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a tattoo on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.8 2 6.8L3.2 29l6.6-1.7c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.7 13-12.9S23.200 3 16 3zm0 23.700c-2 0-3.900-.6-5.500-1.600l-.4-.2-3.900 1 1-3.800-.3-.4a10.600 10.600 0 0 1-1.700-5.800C5.200 9.900 10 5.200 16 5.200s10.800 4.700 10.800 10.600S22 26.700 16 26.700zm5.900-7.900c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200s-.8 1-1 1.200c-.2.200-.4.200-.7.100-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.300-.2-.3 0-.5.100-.7l.5-.6c.2-.2.200-.3.300-.5.100-.2.100-.4 0-.6l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400-.3.300-1.200 1.100-1.200 2.800s1.200 3.200 1.400 3.400c.2.200 2.400 3.700 5.800 5.100.8.400 1.500.6 2 .7.8.3 1.600.2 2.200.1.700-.1 1.900-.8 2.200-1.500.3-.7.300-1.400.2-1.500-.1-.2-.3-.3-.6-.4z"
        />
      </svg>
    </a>
  )
}

export function Layout({ children }: { children: ReactNode }) {
  const path = usePath()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  useScrollReveal(path)

  // After client-side navigation, move focus to the page content (screen readers, keyboard users).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [path])

  return (
    <div id="page" className="page">
      <a className="sst-skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" ref={mainRef} tabIndex={-1}>
        {children}
      </main>
      <ScrollUp />
      <WhatsAppFloat />
    </div>
  )
}
