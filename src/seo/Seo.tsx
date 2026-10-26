import { useContext, useEffect } from 'react'
import { SITE, absoluteUrl } from '@/config/site'
import { getRoute } from '@/config/routes'
import { HeadCollectorContext, applyHead } from './head'
import type { HeadData } from './head'
import { breadcrumbSchema, businessSchema, graph, pageSchema, websiteSchema } from './schema'
import type { PageType } from './schema'

interface SeoProps {
  /** Route path, e.g. "/aboutus". Title and description come from config/routes.ts. */
  path: string
  /** schema.org page type. */
  type?: PageType
  /** Extra structured-data nodes for this page (FAQ, gallery, ...). */
  extra?: unknown[]
  /** Open Graph image path (defaults to the logo). */
  image?: string
  noindex?: boolean
}

const ROBOTS_INDEX = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
const ROBOTS_NOINDEX = 'noindex, follow'

/**
 * Declares the SEO metadata for a page. Renders nothing; the data is either
 * collected during prerender or applied to document.head in the browser.
 */
export function Seo({ path, type = 'WebPage', extra = [], image, noindex = false }: SeoProps) {
  const route = getRoute(path)
  const title = route?.title ?? `Page not found | ${SITE.name}`
  const description = route?.description ?? SITE.description

  const nodes: unknown[] = noindex
    ? []
    : [
        businessSchema(),
        ...(path === '/' ? [websiteSchema()] : []),
        pageSchema(path, type, title, description),
        breadcrumbSchema(path),
        ...extra,
      ]

  const data: HeadData = {
    title,
    description,
    canonical: path === '/' ? `${SITE.url}/` : absoluteUrl(path),
    robots: noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX,
    image: absoluteUrl(image ?? SITE.logo),
    imageAlt: `${SITE.name} - tattoo and piercing studio in ${SITE.address.locality}, Sri Lanka`,
    ogType: 'website',
    siteName: SITE.name,
    locale: SITE.locale,
    jsonLd: noindex ? [] : [graph(...nodes)],
  }

  // Prerender: hand the data to the collector (null in the browser).
  const collector = useContext(HeadCollectorContext)
  if (collector) collector.data = data

  // Browser: keep <head> in sync after client-side navigation.
  const serialized = JSON.stringify(data)
  useEffect(() => {
    applyHead(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized])

  return null
}
