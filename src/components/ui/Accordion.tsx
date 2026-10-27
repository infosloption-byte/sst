import { useState } from 'react'
import type { ReactNode } from 'react'

export interface AccordionEntry {
  id: string
  title: ReactNode
  content: ReactNode
}

/** The template's accordion. Items listed in `initiallyOpen` start expanded. */
export function Accordion({
  items,
  initiallyOpen = [],
  single = false,
}: {
  items: AccordionEntry[]
  initiallyOpen?: string[]
  /** Only one item open at a time (as the original script does). */
  single?: boolean
}) {
  const [open, setOpen] = useState<string[]>(initiallyOpen)

  const toggle = (id: string) =>
    setOpen((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : single ? [id] : [...current, id],
    )

  return (
    <div className="accordion accordion-wrapper mt-5">
      <ul className="accordion">
        {items.map((item) => {
          const isOpen = open.includes(item.id)
          return (
            <li className={`accordion-item${isOpen ? ' is-active' : ''}`} key={item.id}>
              <div
                className="accordion-thumb"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    toggle(item.id)
                  }
                }}
              >
                <p>{item.title}</p>
              </div>
              <div className="accordion-panel" style={{ display: isOpen ? 'block' : 'none' }}>
                {item.content}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
