import { tattooPortfolio } from '@/data/gallery'
import { Seo } from '@/seo/Seo'
import { imageGallerySchema } from '@/seo/schema'
import { Gallery } from '@/components/ui/Gallery'
import { InnerPageTitle } from '@/components/ui/Hero'
import { ReelsSection } from '@/components/layout/Sections'
import { SiteFooterExtended } from '@/components/layout/SiteFooter'

export function TattoosPage() {
  return (
    <>
      <Seo
        path="/tattoos"
        type="CollectionPage"
        extra={[imageGallerySchema('/tattoos', 'Tattoo work by Southern Star Tattoo', tattooPortfolio)]}
      />
      <InnerPageTitle
        id="reviews-page"
        title="It’s Time For a Change"
        subtitle="The perfect combination of beauty and relaxation"
      />
      <div id="gallery-1" className="gallery-section division">
        <div className="container">
          <Gallery
            items={tattooPortfolio}
            rowClass="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
            label="Tattoo portfolio"
          />
        </div>
      </div>
      <ReelsSection />
      <SiteFooterExtended />
    </>
  )
}
