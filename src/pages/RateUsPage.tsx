import { FaStar } from 'react-icons/fa6'
import { SITE } from '@/config/site'
import { Seo } from '@/seo/Seo'
import { Button } from '@/components/ui/Button'
import { ContactList } from '@/components/ui/ContactList'
import { HoursTable } from '@/components/ui/HoursTable'
import { NewsletterBand } from '@/components/ui/NewsletterBand'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function RateUsPage() {
  return (
    <>
      <Seo path="/rateus" />
      <PageHero
        path="/rateus"
        title="Comments & Reviews"
        lead="Here is what our amazing clients are saying about us."
      />

      <section className="section" aria-labelledby="review-title">
        <div className="container">
          <SectionHeading
            id="review-title"
            eyebrow="Review Us"
            title="Share your experience with us"
          >
            Loved your tattoo or piercing? Rate us on Google and follow us on social media &mdash;
            it helps other people find a studio they can trust.
          </SectionHeading>
          <div className="section-action">
            <Button href={SITE.googleReviewUrl} external icon={<FaStar aria-hidden="true" />}>
              Rate Us on Google
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

      <NewsletterBand />
    </>
  )
}
