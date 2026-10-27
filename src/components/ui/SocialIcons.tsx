import { SITE } from '@/config/site'

interface SocialIconsProps {
  /** Icon size class from the template (ico-30 in the footer, ico-60 on Rate Us). */
  sizeClass?: string
  /** Extra inline colour override for icons placed on dark panels. */
  light?: boolean
}

const ITEMS = [
  { social: SITE.social.facebook, icon: 'flaticon-facebook' },
  { social: SITE.social.youtube, icon: 'flaticon-youtube' },
  { social: SITE.social.instagram, icon: 'flaticon-instagram' },
  { social: SITE.social.tiktok, icon: 'flaticon-tik-tok' },
]

/** Facebook / YouTube / Instagram / TikTok icon row (the template's "bottom-footer-socials"). */
export function SocialIcons({ sizeClass = 'ico-30', light = false }: SocialIconsProps) {
  return (
    <ul className={`bottom-footer-socials ${sizeClass} clearfix`}>
      {ITEMS.map(({ social, icon }) => (
        <li key={social.label}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`${SITE.name} on ${social.label}`}
          >
            <span className={icon} style={light ? { color: '#fff' } : undefined} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
