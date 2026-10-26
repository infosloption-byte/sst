import { getRoute } from '@/config/routes'
import { Link } from '@/router'

interface PageHeroProps {
  /** Route path, used for the breadcrumb. */
  path: string
  /** The page's single <h1>. */
  title: string
  lead?: string
}

/** Title banner with breadcrumb for inner pages. */
export function PageHero({ path, title, lead }: PageHeroProps) {
  const crumb = getRoute(path)?.crumb ?? title
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
    </section>
  )
}
