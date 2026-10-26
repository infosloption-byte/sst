import { useEffect, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ROUTES } from '@/config/routes'
import { SITE } from '@/config/site'
import { asset } from '@/lib/assets'
import { Link, NavLink, usePath } from '@/router'

export function SiteHeader() {
  const path = usePath()
  const [open, setOpen] = useState(false)

  // Close the menu after navigating.
  useEffect(() => setOpen(false), [path])

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return
    document.body.classList.add('nav-open')
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={`${SITE.name} - home`}>
          <img src={asset(SITE.logo)} alt={`${SITE.name} logo`} height={48} />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {ROUTES.map((route) => (
              <li key={route.path}>
                <NavLink to={route.path}>{route.navLabel}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
