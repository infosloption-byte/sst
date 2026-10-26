import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { SITE, whatsappUrl } from '@/config/site'
import { FAQ } from '@/data/content'
import { Seo } from '@/seo/Seo'
import { faqSchema } from '@/seo/schema'
import { Button } from '@/components/ui/Button'
import { ContactList } from '@/components/ui/ContactList'
import { Faq } from '@/components/ui/Faq'
import { HoursTable } from '@/components/ui/HoursTable'
import { NewsletterBand } from '@/components/ui/NewsletterBand'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AppointmentPage() {
  return (
    <>
      <Seo path="/appointment" extra={[faqSchema(FAQ)]} />
      <PageHero path="/appointment" title="Book an Appointment" />

      <section className="section" aria-labelledby="book-title">
        <div className="container">
          <SectionHeading
            id="book-title"
            eyebrow="The fastest way to book"
            title={`Please Contact Via WhatsApp ${SITE.phone.display}`}
          >
            Tell us what you have in mind and we will help you pick a time. You can also follow our
            latest work on Instagram.
          </SectionHeading>
          <div className="section-action section-action--row">
            <Button href={whatsappUrl()} external icon={<FaWhatsapp aria-hidden="true" />}>
              Chat on WhatsApp
            </Button>
            <Button
              href={SITE.social.instagram.url}
              external
              variant="outline"
              icon={<FaInstagram aria-hidden="true" />}
            >
              Follow {SITE.social.instagram.handle}
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="touch-title">
        <div className="container info-grid info-grid--two">
          <div className="info-card">
            <h2 id="touch-title" className="info-card__title">
              Get in Touch
            </h2>
            <ContactList />
          </div>
          <div className="info-card">
            <h2 className="info-card__title">Working Hours</h2>
            <HoursTable />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Before you visit" title="Frequently Asked Questions" id="faq-title" />
          <Faq items={FAQ} />
        </div>
      </section>

      <NewsletterBand />
    </>
  )
}
