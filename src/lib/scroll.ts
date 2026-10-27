/**
 * The template's menu CSS makes <body> the scrolling element on small screens
 * (and the window on desktop), so scroll position has to be read and reset on both.
 */
export const getScrollTop = (): number =>
  Math.max(window.scrollY, document.body.scrollTop, document.documentElement.scrollTop)

export function scrollToTop(smooth = false): void {
  const behavior: ScrollBehavior = smooth ? 'smooth' : 'auto'
  window.scrollTo({ top: 0, left: 0, behavior })
  document.body.scrollTo?.({ top: 0, left: 0, behavior })
  document.documentElement.scrollTo?.({ top: 0, left: 0, behavior })
}

/** Listen for scroll on the window or on the body (scroll events from <body> do not bubble to window). */
export function onScroll(handler: () => void): () => void {
  window.addEventListener('scroll', handler, { passive: true, capture: true })
  return () => window.removeEventListener('scroll', handler, { capture: true })
}
