/**
 * Single source of truth for business facts. Used by the UI, the JSON-LD
 * structured data, sitemap/robots/llms.txt generation and the FAQ.
 * Change a detail here and it updates everywhere.
 */
export const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const

export const SITE = {
  name: 'Southern Star Tattoo',
  url: 'https://southernstartattoo.info',
  locale: 'en_LK',
  tagline: 'The Tattoo That Gives You Style',
  description:
    'Custom tattoo and piercing studio in Hikkaduwa, Sri Lanka, established in 2010. Fine line, dotwork, colour and shading tattoos. Open daily 9am-9pm.',
  foundingYear: '2010',
  logo: '/assets/front/images/sst/sst-edited.png',
  phone: {
    display: '+94 77 104 9485',
    e164: '+94771049485',
    whatsapp: '94771049485',
  },
  email: 'info.southernstartattoo@gmail.com',
  address: {
    street: '327 Galle Road, Pannamgoda',
    locality: 'Hikkaduwa',
    region: 'Southern Province',
    country: 'Sri Lanka',
    countryCode: 'LK',
    landmark: 'In front of Hotel Hikka Tranz',
  },
  hours: {
    open: '09:00',
    close: '21:00',
    label: '9:00 AM - 9:00 PM',
  },
  artist: {
    name: 'Rukshan',
    nickname: 'Loku Malli',
    title: 'Master Tattoo Artist',
  },
  social: {
    instagram: {
      label: 'Instagram',
      handle: '@southernstartattoo_',
      url: 'https://www.instagram.com/southernstartattoo_',
    },
    facebook: {
      label: 'Facebook',
      handle: 'southernstar.1993',
      url: 'https://www.facebook.com/southernstar.1993/',
    },
    youtube: {
      label: 'YouTube',
      handle: '@southernstartattoo4648',
      url: 'https://www.youtube.com/@southernstartattoo4648',
    },
    tiktok: {
      label: 'TikTok',
      handle: '@southernstartattoostudio',
      url: 'https://www.tiktok.com/@southernstartattoostudio',
    },
  },
  googleReviewUrl: 'https://g.page/r/CTEBW0Pbok0REBM/review',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Southern+Star+Tattoo+327+Galle+Road+Pannamgoda+Hikkaduwa',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.23244838446715!2d80.10124259901787!3d6.131463666194388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177c69a253c77%3A0x114da2db435b0131!2sSouthern%20Star%20Tattoo%20-%20Hikkaduwa!5e0!3m2!1sen!2slk!4v1732258544507!5m2!1sen!2slk',
  geo: { latitude: 6.131463666194388, longitude: 80.10124259901787 },
} as const

export const absoluteUrl = (path: string): string => `${SITE.url}${path}`

export const whatsappUrl = (message = 'Hello! I want to book a tattoo'): string =>
  `https://wa.me/${SITE.phone.whatsapp}?text=${encodeURIComponent(message)}`

/** Hours as the original site shows them in its location block and contact page. */
export const HOURS_SPLIT: readonly string[] = ['Mon – Wed', 'Thursday', 'Friday', 'Sun - Sun']

/** Hours as shown in the footer ("Get in Touch" block). */
export const HOURS_FOOTER: readonly string[] = ['Mon-Fri', 'Saturday', 'Sunday']

/** Time range in the compact style the original uses, e.g. "09:00AM - 09:00PM". */
export const HOURS_COMPACT = '09:00AM - 09:00PM'

/** Time range in the spaced style used in the table, e.g. "09:00 AM - 09:00 PM". */
export const HOURS_SPACED = '09:00 AM - 09:00 PM'
