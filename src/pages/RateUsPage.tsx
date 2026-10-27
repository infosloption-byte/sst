import { SITE } from '@/config/site'
import { media } from '@/lib/assets'
import { Seo } from '@/seo/Seo'
import { Accordion } from '@/components/ui/Accordion'
import { InnerPageHero } from '@/components/ui/Hero'
import { SocialIcons } from '@/components/ui/SocialIcons'
import { ReelsSection } from '@/components/layout/Sections'
import { SiteFooterExtended } from '@/components/layout/SiteFooter'

export function RateUsPage() {
  return (
    <>
      <Seo path="/rateus" />
      <InnerPageHero
        id="reviews-page"
        title="Comments & Reviews"
        subtitle="Here is what our amazing clients are saying about us"
      />

      <section className="pt-8 ct-05 content-section">
        <div className="container stone--shape">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column wow fadeInRight">
                <span className="section-id">Review Us</span>
                <h2 className="h2-md">Give the pleasure of yourself to us</h2>
                <Accordion
                  initiallyOpen={['google', 'follow']}
                  items={[
                    {
                      id: 'google',
                      title: 'Rate Us on Google',
                      content: (
                        <p className="mb-0">
                          <a
                            href={SITE.googleReviewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'underline', color: '#fff' }}
                          >
                            {SITE.googleReviewUrl}
                          </a>
                        </p>
                      ),
                    },
                    {
                      id: 'follow',
                      title: 'Follow us on',
                      content: <SocialIcons sizeClass="ico-60" light />,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-2">
              <div className="ct-05-img right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src={media('sst/review-qr.png')}
                  alt="QR code to review Southern Star Tattoo on Google"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReelsSection />
      <SiteFooterExtended />
    </>
  )
}
