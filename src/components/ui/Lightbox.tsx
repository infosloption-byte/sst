import { useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import { asset } from '@/lib/assets'
import type { GalleryItem } from '@/data/gallery'

interface LightboxProps {
  items: GalleryItem[]
  /** Index of the open item, or null when closed. */
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

/** Modal viewer built on the native <dialog> (focus trap, Esc to close). Plays video clips. */
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
      className="lightbox"
      aria-label="Gallery viewer"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
    >
      {item && (
        <div className="lightbox__body">
          <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
            <FaXmark aria-hidden="true" />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--prev"
                onClick={() => step(-1)}
                aria-label="Previous"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                onClick={() => step(1)}
                aria-label="Next"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </>
          )}
          {item.video ? (
            <video
              key={item.video}
              className="lightbox__media"
              src={asset(item.video)}
              poster={asset(item.image)}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              key={item.id}
              className="lightbox__media"
              src={asset(item.full ?? item.image)}
              alt={item.alt}
            />
          )}
        </div>
      )}
    </dialog>
  )
}
