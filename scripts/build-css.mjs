/**
 * Rebuilds public/assets/front/css/site.css from the original template
 * stylesheets (kept in the old-sst repo). Only needed if you change them:
 *   node scripts/build-css.mjs /path/to/old-sst/assets/front/css
 *
 * - concatenates the stylesheets the live site uses, in the original order
 * - lets the template's heading rules also match <h1> (so each page can have a
 *   real <h1> without changing how it looks)
 * - minifies with esbuild (installed together with Vite)
 */
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { transform } from 'esbuild'

const srcDir = process.argv[2]
if (!srcDir) throw new Error('Usage: node scripts/build-css.mjs <path to original css folder>')

const FILES = [
  'bootstrap.min.css',
  'flaticon.css',
  'menu.css',
  'dropdown-effects/fade-down.css',
  'lunar.css',
  'animate.css',
  'style.css',
  'responsive.css',
]

let css = ''
for (const file of FILES) css += `\n/* ${file} */\n` + (await fs.readFile(path.join(srcDir, file), 'utf8'))

css = css.replace(/(\.(?:hero-10-txt|page-hero-txt|page-title-txt)) h2\b/g, '$1 h2,$1 h1')

const { code } = await transform(css, { loader: 'css', minify: true })
const out = path.join(process.cwd(), 'public/assets/front/css/site.css')
await fs.mkdir(path.dirname(out), { recursive: true })
await fs.writeFile(out, code)
console.log(`site.css: ${(code.length / 1024).toFixed(0)} KB`)
