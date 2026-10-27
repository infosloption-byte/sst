import { Link } from '@/router'
import { Seo } from '@/seo/Seo'
import { InnerPageTitle } from '@/components/ui/Hero'
import { SiteFooter } from '@/components/layout/SiteFooter'

export function NotFoundPage() {
  return (
    <>
      <Seo path="/404" noindex />
      <InnerPageTitle
        id="contacts-page"
        title="Page not found"
        subtitle="The page you are looking for may have moved."
        className="pt-8 pb-8"
      />
      <div className="container text-center pb-8">
        <Link to="/" className="btn btn--gold hover--tra-white">
          Back to Home
        </Link>{' '}
        <Link to="/tattoos" className="btn btn--tra-black hover--black">
          View Tattoos
        </Link>
      </div>
      <SiteFooter />
    </>
  )
}
