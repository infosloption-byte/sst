import { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import { asset } from '@/lib/assets'
import type { GalleryItem } from '@/data/gallery'
import { Lightbox } from './Lightbox'

interface GalleryProps {
  items: GalleryItem[]
  /** Accessible name for the list. */
  label: string
  /** Smaller, denser grid (used for the footer reels). */
  compact?: boolean
}

/** Responsive thumbnail grid. Thumbnails open in the lightbox; clips play as video. */
export function Gallery({ items, label, compact = false }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null)
  if (items.length === 0) return null

  return (
    <>
      <ul className={`gallery${compact ? ' gallery--compact' : ''}`} aria-label={label}>
        {items.map((item, i) => (
          <li className="gallery__item" key={item.id}>
            <button
              type="button"
              className="gallery__button"
              onClick={() => setActive(i)}
              aria-label={item.video ? `Play video: ${item.alt}` : `View larger: ${item.alt}`}
            >
              <img
                src={asset(item.image)}
                alt={item.alt}
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
              />
              {item.video && (
                <span className="gallery__play" aria-hidden="true">
                  <FaPlay />
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        items={items}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
      />
    </>
  )
}
