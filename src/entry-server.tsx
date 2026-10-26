/**
 * Server entry used at build time by scripts/prerender.mjs.
 * Styles and fonts are imported only by entry-client.tsx.
 */
import { renderToString } from 'react-dom/server'
import { App } from '@/App'
import { ROUTES } from '@/config/routes'
import { ServerRouter } from '@/router'
import { HeadCollectorContext, renderHeadTags } from '@/seo/head'
import type { HeadCollector } from '@/seo/head'

export { buildLlmsTxt, buildRobotsTxt, buildSitemap } from '@/seo/files'

export const PRERENDER_PATHS: string[] = ROUTES.map((route) => route.path)

export function render(url: string): { html: string; head: string } {
  const collector: HeadCollector = { data: null }
  const html = renderToString(
    <HeadCollectorContext.Provider value={collector}>
      <ServerRouter url={url}>
        <App />
      </ServerRouter>
    </HeadCollectorContext.Provider>,
  )
  return { html, head: collector.data ? renderHeadTags(collector.data) : '' }
}
