import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  align?: 'center' | 'left'
  id?: string
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  as: Tag = 'h2',
  align = 'center',
  id,
  children,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="section-title" id={id}>
        {title}
      </Tag>
      {children && <p className="section-lead">{children}</p>}
    </header>
  )
}
