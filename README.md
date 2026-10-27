# Southern Star Tattoo – React site

React rebuild of [southernstartattoo.info](https://southernstartattoo.info) (previously Laravel).
It reuses the original template's CSS and media, so the design matches the live site, and every
page is **prerendered to static HTML** at build time so search engines and AI assistants read full
content without running JavaScript. React then hydrates the page.

Runtime dependency: React only. Routing and head/SEO management are built in (`src/router`, `src/seo`).

## Getting started

```bash
npm install
npm run dev        # development server
npm run build      # client build + server bundle + prerender into dist/
npm run preview    # serve dist/ locally
npm run typecheck
```

## Structure

```
public/assets/front/
  css/site.css        original template styles (bootstrap grid, menu, theme, responsive), one minified file
  fonts/              template icon font (flaticon)
  images/             photos, logo, favicons, gallery images and video clips (same paths as the Laravel site)
src/
  config/      site.ts (business facts), routes.ts (paths + per-page SEO text)
  data/        gallery.ts (which images/videos appear where), content.ts (tattoo styles, FAQ)
  pages/       one component per page, mirroring the original Blade views
  components/  layout/ (header, footers, map, reels strip) and ui/ (gallery, lightbox, accordion, ...)
  seo/         head management, JSON-LD builders, sitemap/robots/llms.txt generators
  router/      small History-API router
  styles/app.css   small additions (lightbox, floating buttons)
scripts/
  prerender.mjs    writes dist/*.html, sitemap.xml, robots.txt, llms.txt
  build-css.mjs    rebuilds site.css from the original stylesheets (only needed if you edit them)
```

Change a phone number, hours or address in `src/config/site.ts` and it updates the UI, the structured
data, `llms.txt` and the FAQ together. Add or reorder photos and clips in `src/data/gallery.ts`.

## SEO and AI-search features

- Static HTML per page with unique title, description, canonical, Open Graph and Twitter tags
- JSON-LD: `TattooParlor` (address, geo, hours, services, artist, social profiles), `WebSite`,
  `BreadcrumbList`, `AboutPage`/`ContactPage`/`CollectionPage`, `ImageGallery`, `FAQPage`
- A visible FAQ on the Appointment page, written only from facts on the original site
- `sitemap.xml`, `robots.txt` and `llms.txt` generated from the route config at build time
- Exactly one `<h1>` per page, descriptive alt text on every image, lazy-loaded media, skip link,
  keyboard-accessible menu, lightbox and accordion
- Old `.html` URLs (`/aboutus.html`) 301-redirect to clean URLs (`/aboutus`); the media keeps the
  same `/assets/front/images/...` URLs as the live site

## Deploying

Upload the contents of `dist/` to the web root.

- **Apache/cPanel:** `public/.htaccess` ships in `dist/` and handles clean URLs, the old `.html`
  redirects and the 404 page. Uncomment the HTTPS/non-www block on the production domain.
- **Netlify / Cloudflare Pages:** `_headers` is included; clean URLs work out of the box.

## Notes for the client

- The Appointment page directs visitors to WhatsApp, as the live site does. The Laravel booking and
  contact forms posted to a server; this static site has none, so the Contact form opens the visitor's
  email app, and the footer mailing-list form does the same unless `VITE_NEWSLETTER_ENDPOINT` points
  to a service that accepts `{ "email": "..." }`.
- Opening hours are 9:00 AM - 9:00 PM every day everywhere (the old site had a "09:00PM - 09:00PM"
  typo for Sunday and a "from 11am" sentence).
- The original pages contained spelling mistakes ("hygene", "firrendly"); they are corrected here.
