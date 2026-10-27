import type { ReactNode } from 'react'

interface InnerPageHeroProps {
  /** Template id that sets the banner image (about-page, booking-page, reviews-page). */
  id: string
  /** The page's single <h1>. */
  title: string
  subtitle?: ReactNode
}

/** Banner with a background photo (the template's "inner-page-hero"). */
export function InnerPageHero({ id, title, subtitle }: InnerPageHeroProps) {
  return (
    <section id={id} className="inner-page-hero division">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-hero-txt color--white">
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface InnerPageTitleProps {
  id: string
  title: string
  subtitle?: ReactNode
  /** Use h1 (inner pages) or h2 (when the page already has an h1). */
  as?: 'h1' | 'h2'
  className?: string
}

/** Plain title block (the template's "inner-page-title"). */
export function InnerPageTitle({ id, title, subtitle, as: Tag = 'h1', className = 'pb-6' }: InnerPageTitleProps) {
  return (
    <section id={id} className={`${className} inner-page-title division`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-title-txt">
              <Tag>{title}</Tag>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
