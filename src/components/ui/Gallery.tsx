import { useState } from 'react'
import { media } from '@/lib/assets'
import type { GalleryItem } from '@/data/gallery'
import { Lightbox } from './Lightbox'

interface GalleryProps {
  items: GalleryItem[]
  /** Bootstrap grid classes for the row, as used on the original pages. */
  rowClass: string
  /**
   * "overlay": thumbnail with the dark hover overlay (original #gallery-1 and #gallery-3).
   * "plain": thumbnail with the hover icon only (original home #gallery-2).
   */
  variant?: 'overlay' | 'plain'
  /** Explains what the grid contains (accessible name). */
  label: string
  /** Optional id for the first column wrapper's items, e.g. "img-3" gives img-3-1, img-3-2... */
  idPrefix?: string
}

/** The original template's gallery grid. Photos and video clips open in a lightbox. */
export function Gallery({ items, rowClass, variant = 'overlay', label, idPrefix }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null)
  if (items.length === 0) return null

  return (
    <>
      <div className={`row ${rowClass}`} role="list" aria-label={label}>
        {items.map((item, i) => {
          const isVideo = Boolean(item.video)
          const href = media(item.video ?? item.image)
          const link = (
            <div className={`image-data${isVideo ? ' gallery-video' : ''}`}>
              <div className="gallery-link ico-40 color--white">
                <a
                  className={isVideo ? 'video-popup1' : 'image-link'}
                  href={href}
                  aria-label={isVideo ? `Play video: ${item.alt}` : `View larger: ${item.alt}`}
                  onClick={(event) => {
                    event.preventDefault()
                    setActive(i)
                  }}
                >
                  <span className={isVideo ? 'flaticon-play' : 'flaticon-visibility'} aria-hidden="true" />
                </a>
              </div>
            </div>
          )
          const image = (
            <img className="img-fluid" src={media(item.image)} alt={item.alt} loading="lazy" decoding="async" />
          )
          return (
            <div className="col" role="listitem" key={item.id}>
              <div className="gallery-image" id={idPrefix ? `${idPrefix}-${i + 1}` : undefined}>
                {variant === 'overlay' ? (
                  <div className="hover-overlay">
                    {image}
                    <div className="item-overlay" />
                    {link}
                  </div>
                ) : (
                  <>
                    {image}
                    {link}
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <Lightbox items={items} index={active} onClose={() => setActive(null)} onIndexChange={setActive} />
    </>
  )
}
