import { useEffect, useState } from 'react'
import { ROUTES } from '@/config/routes'
import { SITE } from '@/config/site'
import { media } from '@/lib/assets'
import { getScrollTop, onScroll } from '@/lib/scroll'
import { Link, usePath } from '@/router'

/**
 * The original template header (wsmenu): transparent over the hero, solid once
 * you scroll 80px, slide-in menu below 992px. The menu state lives on
 * <body class="wsactive">, exactly as the template's CSS expects.
 */
export function SiteHeader() {
  const path = usePath()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [path])

  useEffect(() => {
    document.body.classList.toggle('wsactive', open)
    return () => document.body.classList.remove('wsactive')
  }, [open])

  useEffect(() => {
    const update = () => setScrolled(getScrollTop() > 80)
    update()
    return onScroll(update)
  }, [])

  useEffect(() => {
    // Leaving the mobile layout closes the menu.
    const onResize = () => window.innerWidth >= 992 && setOpen(false)
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const logo = media('sst/sst-edited.png')

  return (
    <header id="header" className="tra-menu navbar-light white-scroll">
      <div className="header-wrapper">
        {/* Mobile header */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <Link to="/" className="logo-black" aria-label={`${SITE.name} home`}>
              <img src={logo} alt={`${SITE.name} logo`} width={160} height={56} />
            </Link>
            <Link to="/" className="logo-white" aria-label={`${SITE.name} home`}>
              <img src={logo} alt="" width={160} height={56} />
            </Link>
          </span>
          <a
            id="wsnavtoggle"
            className="wsanimated-arrow"
            role="button"
            tabIndex={0}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((value) => !value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setOpen((value) => !value)
              }
            }}
          >
            <span />
          </a>
        </div>

        {/* Desktop header + slide-in menu */}
        <div className={`wsmainfull menu clearfix${scrolled ? ' scroll' : ''}`}>
          <div className="wsmainwp clearfix">
            <div className="desktoplogo">
              <Link to="/" className="logo-black" aria-label={`${SITE.name} home`}>
                <img src={logo} alt={`${SITE.name} logo`} width={160} height={56} />
              </Link>
            </div>
            <div className="desktoplogo">
              <Link to="/" className="logo-white" aria-label={`${SITE.name} home`}>
                <img src={logo} alt="" width={160} height={56} />
              </Link>
            </div>

            <nav id="primary-nav" className="wsmenu clearfix" aria-label="Primary">
              <div className="overlapblackbg" onClick={() => setOpen(false)} />
              <ul className="wsmenu-list nav-gold">
                {ROUTES.map((route) => (
                  <li className="nl-simple" aria-haspopup="true" key={route.path}>
                    <Link
                      to={route.path}
                      className="h-link"
                      aria-current={path === route.path ? 'page' : undefined}
                    >
                      {route.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
