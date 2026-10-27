import { SITE } from '@/config/site'
import { piercingPortfolio } from '@/data/gallery'
import { Seo } from '@/seo/Seo'
import { Gallery } from '@/components/ui/Gallery'
import { InnerPageTitle } from '@/components/ui/Hero'
import { ReelsSection } from '@/components/layout/Sections'
import { SiteFooterExtended } from '@/components/layout/SiteFooter'

export function PiercingPage() {
  return (
    <>
      <Seo path="/piercing" />
      <InnerPageTitle
        id="reviews-page"
        title="It’s Time For a Pierce"
        subtitle="The perfect combination of pain and art"
      />
      <div id="gallery-1" className="gallery-section division">
        <div className="container">
          <Gallery
            items={piercingPortfolio}
            rowClass="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
            label="Piercing portfolio"
          />
          <div className="row">
            <div className="col">
              <div className="more-btn">
                <a
                  href={SITE.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="btn btn--tra-black hover--black"
                >
                  Visit Our Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReelsSection />
      <SiteFooterExtended />
    </>
  )
}
