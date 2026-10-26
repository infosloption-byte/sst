import { FaEnvelope, FaLocationArrow, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { SITE, whatsappUrl } from '@/config/site'
import { Seo } from '@/seo/Seo'
import { Button } from '@/components/ui/Button'
import { ContactList } from '@/components/ui/ContactList'
import { HoursTable } from '@/components/ui/HoursTable'
import { NewsletterBand } from '@/components/ui/NewsletterBand'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactPage() {
  return (
    <>
      <Seo path="/contactus" type="ContactPage" />
      <PageHero
        path="/contactus"
        title="Contact Us"
        lead="We'd love to hear from you. Message us on WhatsApp for the fastest reply."
      />

      <section className="section" aria-labelledby="touch-title">
        <div className="container">
          <SectionHeading id="touch-title" eyebrow="Get in Touch" title="Visit, call or message us" />
          <div className="info-grid">
            <div className="info-card">
              <h2 className="info-card__title">Our Location</h2>
              <ContactList />
              <Button href={SITE.mapsUrl} external variant="outline" icon={<FaLocationArrow aria-hidden="true" />}>
                Get Directions
              </Button>
            </div>
            <div className="info-card">
              <h2 className="info-card__title">Working Hours</h2>
              <HoursTable />
            </div>
            <div className="info-card">
              <h2 className="info-card__title">Reach Us</h2>
              <div className="stack">
                <Button href={whatsappUrl()} external icon={<FaWhatsapp aria-hidden="true" />}>
                  WhatsApp
                </Button>
                <Button href={`tel:${SITE.phone.e164}`} variant="outline" icon={<FaPhone aria-hidden="true" />}>
                  Call {SITE.phone.display}
                </Button>
                <Button href={`mailto:${SITE.email}`} variant="outline" icon={<FaEnvelope aria-hidden="true" />}>
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-label="Map">
        <div className="container">
          <div className="map-frame">
            <iframe
              title="Map showing Southern Star Tattoo, 327 Galle Road, Pannamgoda, Hikkaduwa"
              src={SITE.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <NewsletterBand />
    </>
  )
}
