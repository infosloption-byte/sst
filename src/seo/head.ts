/**
 * Head management that works in both places:
 *  - at build time, pages register their metadata with a HeadCollector and
 *    the prerender script writes it into the static HTML <head>;
 *  - in the browser, the same data is applied to document.head on navigation.
 */
import { createContext } from 'react'

export interface HeadData {
  title: string
  description: string
  canonical: string
  robots: string
  image: string
  imageAlt: string
  ogType: string
  siteName: string
  locale: string
  jsonLd: unknown[]
}

export interface HeadCollector {
  data: HeadData | null
}

export const HeadCollectorContext = createContext<HeadCollector | null>(null)

interface Tag {
  tag: 'title' | 'meta' | 'link' | 'script'
  attrs: Record<string, string>
  text?: string
}

/** JSON for a <script>; "<" is escaped so content can never close the tag. */
const safeJson = (value: unknown): string => JSON.stringify(value).replace(/</g, '\\u003c')

export function headTags(d: HeadData): Tag[] {
  const tags: Tag[] = [
    { tag: 'title', attrs: {}, text: d.title },
    { tag: 'meta', attrs: { name: 'description', content: d.description } },
    { tag: 'meta', attrs: { name: 'robots', content: d.robots } },
    { tag: 'link', attrs: { rel: 'canonical', href: d.canonical } },
    { tag: 'link', attrs: { rel: 'alternate', hreflang: 'en', href: d.canonical } },
    { tag: 'link', attrs: { rel: 'alternate', hreflang: 'x-default', href: d.canonical } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: d.siteName } },
    { tag: 'meta', attrs: { property: 'og:type', content: d.ogType } },
    { tag: 'meta', attrs: { property: 'og:title', content: d.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: d.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: d.canonical } },
    { tag: 'meta', attrs: { property: 'og:locale', content: d.locale } },
    { tag: 'meta', attrs: { property: 'og:image', content: d.image } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: d.imageAlt } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: d.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: d.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: d.image } },
    { tag: 'meta', attrs: { name: 'twitter:image:alt', content: d.imageAlt } },
  ]
  for (const node of d.jsonLd) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: safeJson(node) })
  }
  return tags
}

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Serialise head tags for the prerendered HTML. */
export function renderHeadTags(d: HeadData): string {
  return headTags(d)
    .map((t) => {
      if (t.tag === 'title') return `<title data-seo>${escapeHtml(t.text ?? '')}</title>`
      const attrs = Object.entries(t.attrs)
        .map(([key, value]) => ` ${key}="${escapeHtml(value)}"`)
        .join('')
      if (t.tag === 'script') return `<script data-seo${attrs}>${t.text ?? ''}</script>`
      return `<${t.tag} data-seo${attrs}>`
    })
    .join('\n    ')
}

/** Apply head data to the live document (client-side navigation). */
export function applyHead(d: HeadData): void {
  document.title = d.title
  document.head.querySelectorAll('[data-seo]:not(title)').forEach((el) => el.remove())
  for (const t of headTags(d)) {
    if (t.tag === 'title') continue
    const el = document.createElement(t.tag)
    el.setAttribute('data-seo', '')
    for (const [key, value] of Object.entries(t.attrs)) el.setAttribute(key, value)
    if (t.text) el.textContent = t.text
    document.head.appendChild(el)
  }
}
