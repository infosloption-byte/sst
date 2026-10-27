import { useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'
import { media } from '@/lib/assets'
import type { GalleryItem } from '@/data/gallery'

interface LightboxProps {
  items: GalleryItem[]
  /** Index of the open item, or null when closed. */
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

/** Full-screen viewer for gallery photos and video clips (native <dialog>: focus trap, Esc to close). */
export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const item = index === null ? null : items[index]

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (item && !dialog.open) dialog.showModal()
    if (!item && dialog.open) dialog.close()
  }, [item])

  const step = (delta: number) => {
    if (index === null) return
    onIndexChange((index + delta + items.length) % items.length)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft') step(-1)
    if (event.key === 'ArrowRight') step(1)
  }

  return (
    <dialog
      ref={ref}
      className="sst-lightbox"
      aria-label="Gallery viewer"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
    >
      {item && (
        <div className="sst-lightbox__body">
          <button type="button" className="sst-lightbox__btn sst-lightbox__close" onClick={onClose} aria-label="Close">
            &times;
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                className="sst-lightbox__btn sst-lightbox__nav sst-lightbox__prev"
                onClick={() => step(-1)}
                aria-label="Previous"
              >
                &#8249;
              </button>
              <button
                type="button"
                className="sst-lightbox__btn sst-lightbox__nav sst-lightbox__next"
                onClick={() => step(1)}
                aria-label="Next"
              >
                &#8250;
              </button>
            </>
          )}
          {item.video ? (
            <video
              key={item.video}
              className="sst-lightbox__media"
              src={media(item.video)}
              poster={media(item.image)}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            <img key={item.id} className="sst-lightbox__media" src={media(item.image)} alt={item.alt} />
          )}
        </div>
      )}
    </dialog>
  )
}
