import { useState } from 'react'
import type { FormEvent } from 'react'
import { SITE, HOURS_COMPACT, HOURS_FOOTER } from '@/config/site'
import { Link } from '@/router'
import { SocialIcons } from '../ui/SocialIcons'

const FOOT_LINKS = [
  { to: '/aboutus', label: 'About' },
  { to: '/tattoos', label: 'Tattoo' },
  { to: '/piercing', label: 'Piercing' },
  { to: '/appointment', label: 'Book Now' },
  { to: '/rateus', label: 'Rate Us' },
  { to: '/contactus', label: 'Contact' },
]

/** Social icons, page links and copyright (bottom of every page). */
function FooterBottom() {
  return (
    <>
      <div className="container text-center color--black">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <SocialIcons />
            <div className="footer-links">
              <ul className="foo-links clearfix">
                {FOOT_LINKS.map((link) => (
                  <li key={link.to}>
                    <p>
                      <Link to={link.to}>{link.label}</Link>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="row">
            <div className="col">
              <div className="footer-copyright">
                <p>&copy; 2025 {SITE.name}. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/** Plain footer (home and About pages). */
export function SiteFooter() {
  return (
    <footer id="footer-2" className="py-6 footer division">
      <FooterBottom />
    </footer>
  )
}

type Status = 'idle' | 'sending' | 'done' | 'error'

/** Footer with contact details, working hours and the mailing-list form (inner pages). */
export function SiteFooterExtended() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined

  const subscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!endpoint) {
      const subject = encodeURIComponent('Mailing list signup')
      const body = encodeURIComponent(`Please add ${email} to the mailing list.`)
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
      setStatus('done')
      return
    }
    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error(String(response.status))
      setEmail('')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer id="footer-2" className="py-6 footer division">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer-contacts">
              <h5 className="h5-md">Get in Touch</h5>
              <address>
                <p>
                  327, Galle Road, <br /> Pannamgoda, Hikkaduwa
                </p>
              </address>
              <p className="footer-phone">
                <a href={`tel:${SITE.phone.e164}`}>Phone: {SITE.phone.display}</a>
              </p>
              <p className="footer-email">
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="footer-info">
              <h5 className="h5-md">Working Hours</h5>
              {HOURS_FOOTER.map((days) => (
                <p key={days}>
                  {days}: <span>{HOURS_COMPACT}</span>
                </p>
              ))}
              <p className="footer-booking-link">
                <Link to="/appointment">Book a Service</Link>
              </p>
            </div>
          </div>

          <div className="col-sm-10 col-md-7 col-lg-5">
            <div className="footer-form">
              <h5 className="h5-md">Stay in the Know</h5>
              <p>Subscribe our mailing list and be the first to know about special deals!</p>
              <form className="newsletter-form" onSubmit={subscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    id="s-email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                  />
                  <span className="input-group-btn ico-15">
                    <button type="submit" className="btn btn--black hover--tra-black" disabled={status === 'sending'}>
                      Subscribe
                    </button>
                  </span>
                </div>
                <label htmlFor="s-email" className="form-notification" role="status" style={{ display: 'block' }}>
                  {status === 'done' && 'Thank you! You are on the list.'}
                  {status === 'error' && 'Sorry, something went wrong. Please try again.'}
                </label>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <FooterBottom />
    </footer>
  )
}
