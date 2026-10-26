# Southern Star Tattoo – React site

React rebuild of [southernstartattoo.info](https://southernstartattoo.info) (previously Laravel).
Every page is **prerendered to static HTML** at build time, so search engines and AI
assistants read full content without running JavaScript, and React then hydrates the page.

Runtime dependencies: React, React DOM, react-icons, two self-hosted fonts. Routing and
head/SEO management are built in (`src/router`, `src/seo`).

## Getting started

```bash
npm install
npm run dev        # development server
npm run build      # client build + server bundle + prerender into dist/
npm run preview    # serve dist/ locally
npm run typecheck
```

## Media (images and videos)

By default media loads from the live site (`https://southernstartattoo.info/images/...`),
so everything works immediately. To host it yourself:

1. Copy the Laravel `public/images` and `public/assets/front/images` folders into `./public/`
   (keeping the same paths, e.g. `public/images/1.jpeg`,
   `public/assets/front/images/sst/videos/v1.mp4`).
2. Set `VITE_ASSET_BASE=` (empty) in `.env`.

## Structure

```
src/
  config/      site.ts (business facts), routes.ts (paths + per-page SEO text)
  data/        gallery.ts (images/videos), content.ts (styles, FAQ)
  pages/       one component per page
  components/  layout/ (header, footer, WhatsApp) and ui/ (gallery, lightbox, forms, ...)
  seo/         head management, JSON-LD builders, sitemap/robots/llms.txt generators
  router/      small History-API router
  styles/      tokens.css (colors, fonts, spacing) + base/layout/components/sections
scripts/prerender.mjs   writes dist/*.html, sitemap.xml, robots.txt, llms.txt
public/                 favicon, manifest, .htaccess, _headers
```

Change a phone number, hours or address in `src/config/site.ts` and it updates the UI, the
structured data, `llms.txt` and the FAQ together. Colors and fonts live in `src/styles/tokens.css`.

## SEO and AI-search features

- Static HTML per page with unique title, description, canonical, Open Graph and Twitter tags
- JSON-LD: `TattooParlor` (address, hours, services, founder/artist, social profiles),
  `WebSite`, `BreadcrumbList`, `AboutPage`/`ContactPage`/`CollectionPage`, `ImageGallery`, `FAQPage`
- Visible FAQ on the Appointment page, written only from facts on the original site
- `sitemap.xml`, `robots.txt` and `llms.txt` generated from the route config at build time
- One `<h1>` per page, ordered headings, descriptive alt text, skip link, keyboard-accessible menu and lightbox
- Lazy-loaded images with fixed dimensions (no layout shift), system-font fallbacks, one CSS file
- Old `.html` URLs (`/aboutus.html`) 301-redirect to clean URLs (`/aboutus`)

## Deploying

Upload the contents of `dist/` to the web root.

- **Apache/cPanel:** `public/.htaccess` ships in `dist/` and handles clean URLs, the old `.html`
  redirects and the 404 page. Uncomment the HTTPS/non-www block on the production domain.
- **Netlify / Cloudflare Pages:** `_headers` is included; clean URLs work out of the box.

## Content to confirm with the client

- Gallery files for the Tattoo page (original has 36 images in four categories) and the
  Piercing page: edit `src/data/gallery.ts`.
- Opening hours: the site lists 9 AM–9 PM daily, while one sentence said "from 11am until late".
  9–9 is used everywhere; confirm.
- Inner-page wording was rebuilt from the live pages with typos fixed; compare against the Blade views.
- The mailing-list form needs an endpoint (`VITE_NEWSLETTER_ENDPOINT`); without one it opens an email to the studio.
