import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { usePath } from '@/router'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { WhatsAppFloat } from './WhatsAppFloat'

export function Layout({ children }: { children: ReactNode }) {
  const path = usePath()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  // After client-side navigation, move focus to the page content (screen readers, keyboard users).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [path])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" ref={mainRef} tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
