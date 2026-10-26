import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { SITE } from '@/config/site'

/** Address, phone and email, marked up as a single <address>. */
export function ContactList() {
  const a = SITE.address
  return (
    <address className="contact-list">
      <p>
        <FaLocationDot aria-hidden="true" />
        <span>
          {a.street}
          <br />
          {a.locality}, {a.country}
          <br />
          <small>{a.landmark}</small>
        </span>
      </p>
      <p>
        <FaPhone aria-hidden="true" />
        <a href={`tel:${SITE.phone.e164}`}>{SITE.phone.display}</a>
      </p>
      <p>
        <FaEnvelope aria-hidden="true" />
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </address>
  )
}
