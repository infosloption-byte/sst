import { SITE, whatsappUrl } from '@/config/site'
import { FAQ } from '@/data/content'
import { Seo } from '@/seo/Seo'
import { faqSchema } from '@/seo/schema'
import { Accordion } from '@/components/ui/Accordion'
import { InnerPageHero } from '@/components/ui/Hero'
import { MapEmbed, ReelsSection } from '@/components/layout/Sections'
import { SiteFooterExtended } from '@/components/layout/SiteFooter'

export function AppointmentPage() {
  return (
    <>
      <Seo path="/appointment" extra={[faqSchema(FAQ)]} />
      <InnerPageHero
        id="booking-page"
        title="Book an Appointment"
        subtitle={`Please Contact Via WhatsApp ${SITE.phone.display}`}
      />

      {/* BOOKING: the live site takes bookings on WhatsApp */}
      <div id="booking-1" className="pt-8 pb-7 booking-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9 text-center" style={{ background: '#000', padding: '3%' }}>
              <p className="mb-4">
                Message us on WhatsApp with the tattoo or piercing you have in mind and we will help you pick a
                time.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold hover--tra-white"
              >
                Chat on WhatsApp
              </a>
              <p className="mt-4 mb-0">
                Prefer to call? <a href={`tel:${SITE.phone.e164}`}>{SITE.phone.display}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <MapEmbed />

      {/* FAQ */}
      <section className="pt-8 pb-7 ct-05 content-section" aria-labelledby="faq-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-5">
                <span className="section-id">Before you visit</span>
                <h2 className="h2-title" id="faq-title">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion
                single
                initiallyOpen={[]}
                items={FAQ.map((item) => ({
                  id: item.question,
                  title: item.question,
                  content: <p className="mb-0">{item.answer}</p>,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <ReelsSection />
      <SiteFooterExtended />
    </>
  )
}
