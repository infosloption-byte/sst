/**
 * Resolve a media path (e.g. "/images/1.jpeg") to a URL.
 *
 * By default media is loaded from the live Laravel site so the app works
 * before any files are copied. After copying media into /public, set
 * VITE_ASSET_BASE= (empty) in .env to serve it from this site instead.
 */
const DEFAULT_BASE = 'https://southernstartattoo.info'

const rawBase = import.meta.env.VITE_ASSET_BASE as string | undefined
const BASE = (rawBase ?? DEFAULT_BASE).replace(/\/+$/, '')

export const asset = (path: string): string =>
  `${BASE}${path.startsWith('/') ? path : `/${path}`}`
