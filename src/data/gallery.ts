/**
 * Gallery media, in the same order as the original site. Paths are relative to
 * public/assets/front/images (see lib/assets.ts). Edit these lists to add or
 * change work - nothing else needs to change.
 */
export interface GalleryItem {
  id: string
  /** Thumbnail image (also the video poster). */
  image: string
  /** Set for video clips; the lightbox plays it. */
  video?: string
  /** Describes the artwork: used as alt text (accessibility + image SEO). */
  alt: string
}

const range = (from: number, to: number): number[] =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i)

const clip = (n: number): GalleryItem => ({
  id: `clip-${n}`,
  image: `sst/videos/${n}.jpeg`,
  video: `sst/videos/v${n}.mp4`,
  alt: `Tattoo work video clip ${n} - Southern Star Tattoo, Hikkaduwa`,
})

/** Home page "Few pieces of our work" (clips 1-12). */
export const featuredWork: GalleryItem[] = range(1, 12).map(clip)

/** "Follow @southernstartattoo_" strip shown on every page (clips 13-18). */
export const reels: GalleryItem[] = range(13, 18).map(clip)

/** Home page "Any Style. Any Length". */
export const styleGallery: GalleryItem[] = range(1, 8).map((n) => ({
  id: `style-${n}`,
  image: `gallery/tattoo-0${n}.png`,
  alt: `Custom tattoo design ${n} by Southern Star Tattoo, Hikkaduwa`,
}))

const STYLES = [
  { slug: 'blackgray', label: 'Black and grey' },
  { slug: 'colored', label: 'Colour' },
  { slug: 'dotwork', label: 'Dotwork' },
  { slug: 'maori', label: 'Maori-style' },
] as const

/** Tattoo page: 9 photos for each of four styles. */
export const tattooPortfolio: GalleryItem[] = STYLES.flatMap(({ slug, label }) =>
  range(1, 9).map((n) => ({
    id: `${slug}-${n}`,
    image: `sst/tattoo/${slug}-${n}.jpg`,
    alt: `${label} tattoo ${n} by Southern Star Tattoo, Hikkaduwa`,
  })),
)

/** Piercing page: photos 1-10; three of them open a video clip instead. */
const PIERCING_VIDEOS: Record<number, string> = { 5: 'v5', 7: 'v3', 10: 'v4' }

export const piercingPortfolio: GalleryItem[] = range(1, 10).map((n) => ({
  id: `piercing-${n}`,
  image: `sst/piercing/${n}.jpeg`,
  video: PIERCING_VIDEOS[n] ? `sst/piercing/${PIERCING_VIDEOS[n]}.mp4` : undefined,
  alt: `Piercing work ${n} - Southern Star Tattoo, Hikkaduwa`,
}))
