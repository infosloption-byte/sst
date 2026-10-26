/**
 * Gallery media. Paths are relative to the site root (the same paths the
 * Laravel site used) and are resolved through asset().
 *
 * To add or change work, edit these lists - nothing else needs to change.
 */
export interface GalleryItem {
  id: string
  /** Thumbnail / poster image. */
  image: string
  /** Larger image shown in the lightbox (defaults to `image`). */
  full?: string
  /** If set, the lightbox plays this video. */
  video?: string
  /** Describe the artwork - used as alt text for accessibility and image SEO. */
  alt: string
}

const range = (from: number, to: number): number[] =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i)

const clip = (n: number): GalleryItem => ({
  id: `clip-${n}`,
  image: `/images/${n}.jpeg`,
  video: `/assets/front/images/sst/videos/v${n}.mp4`,
  alt: `Tattoo work by Southern Star Tattoo, Hikkaduwa - video clip ${n}`,
})

/** Home page "Few pieces of our work" (images 1-12 with videos). */
export const featuredWork: GalleryItem[] = range(1, 12).map(clip)

/** Short clips shown above the footer on every page (images 13-18). */
export const reels: GalleryItem[] = range(13, 18).map(clip)

const STYLE_FILES = [
  '/images/tattoo-01.png',
  '/images/tattoo-02_1.png',
  '/images/tattoo-03.png',
  '/images/tattoo-04_1.png',
  '/images/tattoo-05_1.png',
  '/images/tattoo-06_1.png',
  '/images/tattoo-07.png',
  '/images/tattoo-08.png',
]

/** Home page "Any Style. Any Length" gallery. */
export const styleGallery: GalleryItem[] = STYLE_FILES.map((image, i) => ({
  id: `style-${i + 1}`,
  image,
  // Full-size versions exist for the first seven; the eighth uses its thumbnail.
  full: i < 7 ? `/assets/front/images/gallery/tattoo-0${i + 1}.png` : image,
  alt: `Tattoo design ${i + 1} by Southern Star Tattoo, Hikkaduwa`,
}))

/** Tattoo page portfolio. */
export const tattooPortfolio: GalleryItem[] = [...styleGallery, ...featuredWork]

/** Piercing page portfolio. Add items here as piercing photos become available. */
export const piercingPortfolio: GalleryItem[] = []
