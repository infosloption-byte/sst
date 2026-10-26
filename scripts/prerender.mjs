/**
 * Prerender every route to static HTML.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle):
 *   1. loads the SSR bundle from ./.ssr
 *   2. renders each route into the client's dist/index.html template
 *   3. writes flat files (index.html, aboutus.html, ..., 404.html)
 *   4. writes sitemap.xml, robots.txt and llms.txt from the same route config
 */
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, '.ssr')

const ssr = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) {
    throw new Error(`dist/index.html is missing ${marker}; check index.html`)
  }
}

const fileFor = (route) => (route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`)

async function writePage(route, file) {
  const { html, head } = ssr.render(route)
  const page = template
    .replace('<!--app-head-->', () => head)
    .replace('<!--app-html-->', () => html)
  await fs.writeFile(path.join(dist, file), page)
  console.log(`  prerendered ${route.padEnd(14)} -> ${file}`)
}

console.log('Prerendering pages...')
for (const route of ssr.PRERENDER_PATHS) {
  await writePage(route, fileFor(route))
}
await writePage('/404', '404.html')

const today = new Date().toISOString().slice(0, 10)
await fs.writeFile(path.join(dist, 'sitemap.xml'), ssr.buildSitemap(today))
await fs.writeFile(path.join(dist, 'robots.txt'), ssr.buildRobotsTxt())
await fs.writeFile(path.join(dist, 'llms.txt'), ssr.buildLlmsTxt())
console.log('  wrote sitemap.xml, robots.txt, llms.txt')

await fs.rm(ssrDir, { recursive: true, force: true })
console.log('Done.')
