/**
 * Generators for sitemap.xml, robots.txt and llms.txt, built from the same
 * route and business config as the pages so they never drift apart.
 */
import { ROUTES } from '@/config/routes'
import { SITE, absoluteUrl } from '@/config/site'

const urlFor = (path: string): string => (path === '/' ? `${SITE.url}/` : absoluteUrl(path))

export function buildSitemap(lastmod: string): string {
  const urls = ROUTES.map(
    (route) =>
      `  <url>\n    <loc>${urlFor(route.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  ).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function buildRobotsTxt(): string {
  return [
    '# Search engines and AI assistants (search, answer and training crawlers) are welcome.',
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${SITE.url}/sitemap.xml`,
    '',
  ].join('\n')
}

/** llms.txt: a concise, link-rich summary written for AI assistants (https://llmstxt.org). */
export function buildLlmsTxt(): string {
  const a = SITE.address
  const pages = ROUTES.map((r) => `- [${r.crumb}](${urlFor(r.path)}): ${r.description}`).join('\n')
  return `# ${SITE.name}

> ${SITE.name} is a custom tattoo and piercing studio in ${a.locality}, ${a.country}, established in ${SITE.foundingYear}. Master artist ${SITE.artist.name} (${SITE.artist.nickname}) holds an NVQ Level 4 qualification in tattoo and piercing. The studio is open every day, ${SITE.hours.label}.

## Key facts

- Business type: Tattoo parlor and body piercing studio
- Address: ${a.street}, ${a.locality}, ${a.country} (${a.landmark.toLowerCase()})
- Phone and WhatsApp: ${SITE.phone.display}
- Email: ${SITE.email}
- Opening hours: every day, ${SITE.hours.label}
- Tattoo styles: fine line, dot work, colored, shading; custom designs
- Booking: message the studio on WhatsApp at ${SITE.phone.display}
- Studio policy: space is limited, so please bring one companion only
- Hygiene: staff are trained and licensed in environmentally friendly inks and procedures

## Pages

${pages}

## Find us online

- [Instagram](${SITE.social.instagram.url})
- [Facebook](${SITE.social.facebook.url})
- [YouTube](${SITE.social.youtube.url})
- [TikTok](${SITE.social.tiktok.url})
- [Google reviews](${SITE.googleReviewUrl})
`
}
