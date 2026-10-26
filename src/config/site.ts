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
  logo: '/images/sst-edited.png',
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
    'https://www.google.com/maps?q=Southern+Star+Tattoo,+327+Galle+Road,+Pannamgoda,+Hikkaduwa,+Sri+Lanka&output=embed',
} as const

export const absoluteUrl = (path: string): string => `${SITE.url}${path}`

export const whatsappUrl = (message = 'Hello! I want to book a tattoo'): string =>
  `https://wa.me/${SITE.phone.whatsapp}?text=${encodeURIComponent(message)}`

/** Opening hours as display rows (the studio opens every day at the same time). */
export const HOURS_ROWS: ReadonlyArray<{ days: string; hours: string }> = [
  { days: 'Monday - Friday', hours: SITE.hours.label },
  { days: 'Saturday', hours: SITE.hours.label },
  { days: 'Sunday', hours: SITE.hours.label },
]
