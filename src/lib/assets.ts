/** URL of a file under public/assets/front/images (e.g. media('sst/videos/v1.mp4')). */
export const media = (path: string): string => `/assets/front/images/${path.replace(/^\/+/, '')}`
