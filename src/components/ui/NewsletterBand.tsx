import { whatsappUrl } from '@/config/site'
import { Button } from './Button'
import { NewsletterForm } from './NewsletterForm'
import { SectionHeading } from './SectionHeading'

/** "Stay in the Know" call-to-action shown above the footer on inner pages. */
export function NewsletterBand() {
  return (
    <section className="section section--alt" aria-labelledby="newsletter-title">
      <div className="container newsletter-band">
        <SectionHeading
          id="newsletter-title"
          eyebrow="Special deals"
          title="Stay in the Know"
        >
          Subscribe to our mailing list and be the first to know about special deals!
        </SectionHeading>
        <NewsletterForm />
        <Button href={whatsappUrl()} external variant="outline">
          Book a Service
        </Button>
      </div>
    </section>
  )
}
