import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { SITE } from '@/config/site'

const LINKS = [
  { ...SITE.social.facebook, icon: <FaFacebookF aria-hidden="true" /> },
  { ...SITE.social.youtube, icon: <FaYoutube aria-hidden="true" /> },
  { ...SITE.social.instagram, icon: <FaInstagram aria-hidden="true" /> },
  { ...SITE.social.tiktok, icon: <FaTiktok aria-hidden="true" /> },
]

export function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Social media">
      {LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`${SITE.name} on ${link.label}`}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
