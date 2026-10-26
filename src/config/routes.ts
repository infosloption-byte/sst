/**
 * Route registry: paths, navigation labels and per-page SEO metadata.
 * Page components are mapped to these paths in src/routes.tsx.
 *
 * The slugs are identical to the legacy Laravel site (without the .html
 * suffix), and the server config 301-redirects the old .html URLs.
 */
export interface RouteMeta {
  path: string
  navLabel: string
  footerLabel: string
  /** Name shown in breadcrumbs. */
  crumb: string
  /** <title>, ideally 60 characters or fewer. */
  title: string
  /** Meta description, ideally 120-160 characters. */
  description: string
}

export const ROUTES: readonly RouteMeta[] = [
  {
    path: '/',
    navLabel: 'Home',
    footerLabel: 'Home',
    crumb: 'Home',
    title: 'Tattoo & Piercing Studio in Hikkaduwa | Southern Star Tattoo',
    description:
      'Custom tattoo and piercing studio in Hikkaduwa, Sri Lanka, since 2010. Fine line, dotwork, colour and shading tattoos. Open daily 9am-9pm. Book on WhatsApp.',
  },
  {
    path: '/aboutus',
    navLabel: 'About Us',
    footerLabel: 'About',
    crumb: 'About Us',
    title: 'About Us | Southern Star Tattoo, Hikkaduwa',
    description:
      'Meet Southern Star Tattoo, a professional tattoo and piercing studio in Hikkaduwa established in 2010, led by master artist Rukshan (Loku Malli), NVQ Level 4.',
  },
  {
    path: '/tattoos',
    navLabel: 'Tattoo',
    footerLabel: 'Tattoo',
    crumb: 'Tattoo',
    title: 'Tattoo Designs & Portfolio | Southern Star Tattoo',
    description:
      'Browse tattoo work from Southern Star Tattoo in Hikkaduwa: fine line, dotwork, colour and shading designs, plus short video clips of our latest pieces.',
  },
  {
    path: '/piercing',
    navLabel: 'Piercing',
    footerLabel: 'Piercing',
    crumb: 'Piercing',
    title: 'Professional Piercing in Hikkaduwa | Southern Star Tattoo',
    description:
      'Safe, hygienic body piercing in Hikkaduwa, Sri Lanka from the experienced team at Southern Star Tattoo. Walk in or book on WhatsApp.',
  },
  {
    path: '/appointment',
    navLabel: 'Appointment',
    footerLabel: 'Book Now',
    crumb: 'Appointment',
    title: 'Book a Tattoo or Piercing Appointment | Southern Star Tattoo',
    description:
      'Book your tattoo or piercing at Southern Star Tattoo in Hikkaduwa. Message us on WhatsApp +94 77 104 9485. Open daily 9am-9pm. Find answers to common questions.',
  },
  {
    path: '/rateus',
    navLabel: 'Rate Us',
    footerLabel: 'Rate Us',
    crumb: 'Rate Us',
    title: 'Reviews & Rate Us | Southern Star Tattoo Hikkaduwa',
    description:
      'Read what clients say about Southern Star Tattoo in Hikkaduwa and share your own experience by rating us on Google.',
  },
  {
    path: '/contactus',
    navLabel: 'Contact Us',
    footerLabel: 'Contact',
    crumb: 'Contact Us',
    title: 'Contact & Location | Southern Star Tattoo, Hikkaduwa',
    description:
      'Find Southern Star Tattoo at 327 Galle Road, Pannamgoda, Hikkaduwa, in front of Hotel Hikka Tranz. Call, WhatsApp or email us. Open daily 9am-9pm.',
  },
] as const

export const getRoute = (path: string): RouteMeta | undefined =>
  ROUTES.find((route) => route.path === path)
