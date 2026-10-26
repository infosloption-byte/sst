import { FaInstagram } from 'react-icons/fa6'
import { SITE } from '@/config/site'
import { tattooPortfolio } from '@/data/gallery'
import { Seo } from '@/seo/Seo'
import { imageGallerySchema } from '@/seo/schema'
import { Button } from '@/components/ui/Button'
import { Gallery } from '@/components/ui/Gallery'
import { NewsletterBand } from '@/components/ui/NewsletterBand'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function TattoosPage() {
  return (
    <>
      <Seo
        path="/tattoos"
        type="CollectionPage"
        extra={[imageGallerySchema('/tattoos', 'Tattoo work by Southern Star Tattoo', tattooPortfolio)]}
      />
      <PageHero
        path="/tattoos"
        title="It's Time For a Change"
        lead="The perfect combination of beauty and relaxation."
      />

      <section className="section" aria-labelledby="tattoo-work-title">
        <div className="container">
          <SectionHeading
            eyebrow="Fine line &middot; Dot work &middot; Colored &middot; Shading"
            title="Our Tattoo Work"
            id="tattoo-work-title"
          >
            Every piece is custom designed in our Hikkaduwa studio. Tap any photo to look closer, or
            play the clips to see the work in progress.
          </SectionHeading>
          <Gallery items={tattooPortfolio} label="Tattoo work and video clips" />
          <div className="section-action">
            <Button
              href={SITE.social.instagram.url}
              external
              variant="outline"
              icon={<FaInstagram aria-hidden="true" />}
            >
              See more on Instagram
            </Button>
          </div>
        </div>
      </section>

      <NewsletterBand />
    </>
  )
}
