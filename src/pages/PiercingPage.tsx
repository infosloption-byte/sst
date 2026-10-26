import { FaWhatsapp } from 'react-icons/fa6'
import { SITE, whatsappUrl } from '@/config/site'
import { piercingPortfolio } from '@/data/gallery'
import { Seo } from '@/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Gallery } from '@/components/ui/Gallery'
import { NewsletterBand } from '@/components/ui/NewsletterBand'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function PiercingPage() {
  return (
    <>
      <Seo path="/piercing" />
      <PageHero
        path="/piercing"
        title="It's Time For a Pierce"
        lead="The perfect combination of pain and art."
      />

      <section className="section" aria-labelledby="piercing-title">
        <div className="container">
          <SectionHeading
            eyebrow="Safe &middot; Hygienic &middot; Friendly"
            title={`Professional piercing in ${SITE.address.locality}`}
            id="piercing-title"
          >
            Southern Star Tattoo is a professional piercing and tattoo shop established in{' '}
            {SITE.foundingYear}. Our experienced team delivers consistent quality and safe, friendly
            service, and our master artist {SITE.artist.name} holds an NVQ Level 4 qualification in
            tattoo and piercing.
          </SectionHeading>
          <Gallery items={piercingPortfolio} label="Piercing work" />
          <div className="section-action">
            <Button href={whatsappUrl('Hello! I want to book a piercing')} external icon={<FaWhatsapp aria-hidden="true" />}>
              Book a Piercing
            </Button>
          </div>
        </div>
      </section>

      <NewsletterBand />
    </>
  )
}
