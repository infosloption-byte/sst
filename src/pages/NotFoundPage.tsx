import { Seo } from '@/seo/Seo'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <>
      <Seo path="/404" noindex />
      <section className="section not-found">
        <div className="container container--narrow">
          <p className="eyebrow">Error 404</p>
          <h1 className="section-title">This page could not be found</h1>
          <p>The page you are looking for may have moved. Head back to the home page or browse our work.</p>
          <div className="section-action section-action--row">
            <Button href="/">Back to Home</Button>
            <Button href="/tattoos" variant="outline">
              View Tattoos
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
