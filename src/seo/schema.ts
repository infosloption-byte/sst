/**
 * schema.org JSON-LD builders. Search engines and AI assistants read this
 * to understand who the business is, where it is, when it is open and what
 * it offers. Facts come from src/config/site.ts.
 */
import { DAYS, SITE, absoluteUrl } from '@/config/site'
import { getRoute } from '@/config/routes'
import type { FaqItem } from '@/data/content'
import type { GalleryItem } from '@/data/gallery'

export const BUSINESS_ID = `${SITE.url}/#business`
export const WEBSITE_ID = `${SITE.url}/#website`

export function businessSchema() {
  return {
    '@type': 'TattooParlor',
    '@id': BUSINESS_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    description: SITE.description,
    slogan: SITE.tagline,
    foundingDate: SITE.foundingYear,
    image: absoluteUrl(SITE.logo),
    logo: absoluteUrl(SITE.logo),
    telephone: SITE.phone.e164,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    areaServed: { '@type': 'City', name: SITE.address.locality },
    hasMap: SITE.mapsUrl,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...DAYS],
        opens: SITE.hours.open,
        closes: SITE.hours.close,
      },
    ],
    knowsAbout: [
      'Tattoos',
      'Custom tattoo design',
      'Fine line tattoo',
      'Dotwork tattoo',
      'Colour tattoo',
      'Tattoo shading',
      'Body piercing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tattoo and piercing services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom tattoos',
            description:
              'Custom design tattoos in fine line, dotwork, colour and shading styles in Hikkaduwa.',
            url: absoluteUrl('/tattoos'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Body piercing',
            description: 'Professional, hygienic body piercing in Hikkaduwa.',
            url: absoluteUrl('/piercing'),
          },
        },
      ],
    },
    employee: {
      '@type': 'Person',
      name: `${SITE.artist.name} (${SITE.artist.nickname})`,
      jobTitle: SITE.artist.title,
      worksFor: { '@id': BUSINESS_ID },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phone.e164,
      email: SITE.email,
      availableLanguage: ['English', 'Sinhala'],
    },
    sameAs: [
      SITE.social.instagram.url,
      SITE.social.facebook.url,
      SITE.social.youtube.url,
      SITE.social.tiktok.url,
      SITE.googleReviewUrl,
    ],
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: 'en',
    publisher: { '@id': BUSINESS_ID },
  }
}

export type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'

export function pageSchema(path: string, type: PageType, title: string, description: string) {
  return {
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path === '/' ? '/' : path),
    name: title,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
  }
}

export function breadcrumbSchema(path: string) {
  const current = getRoute(path)
  const home = getRoute('/')
  const items = [{ name: home?.crumb ?? 'Home', url: `${SITE.url}/` }]
  if (path !== '/' && current) items.push({ name: current.crumb, url: absoluteUrl(path) })
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(items: readonly FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function imageGallerySchema(path: string, name: string, items: readonly GalleryItem[]) {
  return {
    '@type': 'ImageGallery',
    name,
    url: absoluteUrl(path),
    image: items.map((item) => ({
      '@type': 'ImageObject',
      contentUrl: absoluteUrl(item.image),
      name: item.alt,
      creator: { '@id': BUSINESS_ID },
    })),
  }
}

/** Wrap nodes in a single @graph document. */
export function graph(...nodes: unknown[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
