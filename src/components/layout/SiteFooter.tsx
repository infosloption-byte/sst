import { ROUTES } from '@/config/routes'
import { SITE, whatsappUrl } from '@/config/site'
import { reels } from '@/data/gallery'
import { asset } from '@/lib/assets'
import { Link } from '@/router'
import { ContactList } from '../ui/ContactList'
import { Gallery } from '../ui/Gallery'
import { HoursTable } from '../ui/HoursTable'
import { SocialLinks } from '../ui/SocialLinks'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="footer-reels" aria-labelledby="follow-title">
        <div className="container">
          <h2 className="footer-reels__title" id="follow-title">
            Follow:{' '}
            <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer me">
              {SITE.social.instagram.handle}
            </a>
          </h2>
          <Gallery items={reels} label="Recent video clips" compact />
        </div>
      </section>

      <div className="container footer-grid">
        <div className="footer-col footer-col--brand">
          <Link to="/" className="brand" aria-label={`${SITE.name} - home`}>
            <img src={asset(SITE.logo)} alt="" height={56} loading="lazy" />
          </Link>
          <p>
            Custom tattoo and piercing studio in {SITE.address.locality}, Sri Lanka, since{' '}
            {SITE.foundingYear}.
          </p>
          <SocialLinks />
        </div>

        <div className="footer-col">
          <h2 className="footer-title">Opening Hours</h2>
          <HoursTable />
        </div>

        <div className="footer-col">
          <h2 className="footer-title">Our Location</h2>
          <ContactList />
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2 className="footer-title">Explore</h2>
          <ul className="footer-links">
            {ROUTES.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.footerLabel}</Link>
              </li>
            ))}
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {SITE.name}. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
