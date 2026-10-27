import { HOURS_COMPACT, SITE } from '@/config/site'
import { TATTOO_STYLES } from '@/data/content'
import { featuredWork, styleGallery } from '@/data/gallery'
import { media } from '@/lib/assets'
import { Link } from '@/router'
import { Seo } from '@/seo/Seo'
import { Gallery } from '@/components/ui/Gallery'
import { InnerPageTitle } from '@/components/ui/Hero'
import { LocationSection, ReelsSection } from '@/components/layout/Sections'
import { SiteFooter } from '@/components/layout/SiteFooter'

export function HomePage() {
  return (
    <>
      <Seo path="/" />

      {/* HERO */}
      <section id="hero-10" className="bg--fixed hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-10-txt color--white">
                <h1>The Tattoo That Gives You Style</h1>
                <p>
                  We provide best experience for you whilst simultaneously supporting your hygiene and reducing
                  your current costs.
                </p>
                <Link to="/tattoos" className="btn btn--gold hover--tra-white">
                  View Tattoos
                </Link>
              </div>
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="hero-10-schedule color--white text-end">
                <h5 className="h5-lg">Opening Hours</h5>
                <p>
                  Mon - Fri: <span>{HOURS_COMPACT.replace('09:00AM', '9:00AM')}</span>
                </p>
                <p>
                  Sat - Sun: <span>{HOURS_COMPACT.replace('09:00AM', '9:00AM')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT-6 */}
      <section className="pt-8 about-6 about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title text-center mb-6">
                <span className="section-id color--gold">Your Tattoo, Your Style</span>
                <h2 className="h2-title">We always care about our and your personal hygiene specially</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div id="a6-img-1" className="about-6-img">
                <img
                  className="img-fluid"
                  src={media('tattoo-04.png')}
                  alt="Fine tattoo artwork by Southern Star Tattoo, Hikkaduwa"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="col-lg-4 order-first order-lg-1">
              <div className="about-6-txt">
                <div className="a6-txt bg--smoke">
                  <h4 className="h4-md">Don&rsquo;t be ordinary, be extraordinary</h4>
                  <p className="mb-0">
                    You can depend on our 24/7 customer support to the work progress and task completion.
                  </p>
                </div>
                <div className="a6-img">
                  <img
                    className="img-fluid"
                    src={media('tattoo-06.png')}
                    alt="Tattoo design from Southern Star Tattoo studio"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 order-last order-lg-2">
              <div id="a6-img-2" className="about-6-img">
                <img
                  className="img-fluid"
                  src={media('tattoo-05.png')}
                  alt="Custom tattoo piece by Southern Star Tattoo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT-1 */}
      <section className="pt-8 about-1 about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="txt-block text-center">
                <span className="section-id">Indulge Yourself</span>
                <h2 className="h2-title">Your Secret Place of Art</h2>
                <p className="mb-0">
                  Our professional and experienced employees will deliver consistent quality, safe and friendly
                  fine arts. We aim to work closely with our clients and ensure that all our clients receive the
                  best service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES-2 */}
      <section id="services-2" className="pt-6 pb-6 services-section division">
        <div className="container">
          <div className="sbox-2-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              {TATTOO_STYLES.map((style, i) => (
                <div className="col" key={style.name}>
                  <div className={`sbox-2 sb-${i + 1} wow fadeInUp`}>
                    <div className="sbox-ico ico-65">
                      <span className={style.icon} aria-hidden="true" />
                    </div>
                    <div className="sbox-txt">
                      <h5 className="h5-lg">{style.name}</h5>
                      <p>{style.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InnerPageTitle
        id="reviews-page"
        as="h2"
        title="Few pieces of our work"
        subtitle="The perfect combination of art and passion"
      />

      {/* GALLERY-1 */}
      <div id="gallery-1" className="gallery-section division pb-6">
        <div className="container">
          <Gallery
            items={featuredWork}
            rowClass="row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-6"
            label="Tattoo work video clips"
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

      {/* CONTENT 1 */}
      <section className="shape--01 smoke--shape py-7 ct-01 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column wow fadeInRight">
                <span className="section-id color--gold">Declare Your patterns</span>
                <h2 className="h2-md">Empower your passion. Elevate your confident</h2>
                <p className="mb-0">
                  We&rsquo;re proud to be <strong className="text-color-light">Southern Star Tattoo</strong> Where
                  quality and standards matter and also trusted by over{' '}
                  <strong className="text-color-light">hundreds</strong> of satisfied users around the world,{' '}
                  <strong className="text-color-light">Southern Star Tattoo</strong> is a best tattoo artist in{' '}
                  <strong className="text-color-light">Sri Lanka.</strong> Southern Star Tattoo is a Sri Lanka owned
                  and operated tattoo studio, with a combined experience of over 10 years.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-2">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src={media('tattoo-01.png')}
                  alt="Tattoo artwork created at Southern Star Tattoo in Hikkaduwa"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg--06 bg--scroll ct-12 content-section" role="presentation" />

      {/* WORKING HOURS TABLE */}
      <section className="py-8 ct-table content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-table left-column wow fadeInRight">
                <table className="table">
                  <caption className="visually-hidden">Opening hours</caption>
                  <tbody>
                    {['Mon – Wed', 'Thursday', 'Friday'].map((day) => (
                      <tr key={day}>
                        <td>{day}</td>
                        <td> - </td>
                        <td className="text-end">09:00 AM - 09:00 PM</td>
                      </tr>
                    ))}
                    <tr className="last-tr">
                      <td>Sun - Sun</td>
                      <td>-</td>
                      <td className="text-end">09:00 AM - 09:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-2">
              <div className="right-column wow fadeInLeft">
                <span className="section-id color--gold">Time Schedule</span>
                <h2 className="h2-md">Working Hours</h2>
                <p className="mb-0">
                  Southern Star Tattoo is a custom design tattoo studio. Our shop is situated in front of Hotel Hikka
                  Tranz in Hikkaduwa, open 7 days a week from 9am until 9pm. We pride ourselves on our friendliness,
                  cleanliness and our down to earth attitude - Everyone is welcome!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEXT CONTENT 5 */}
      <section className="ct-05 content-section">
        <div className="container smoke--shape">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column wow fadeInRight">
                <span className="section-id color--gold">Try Different Things</span>
                <h2 className="h2-md">Are you ready to make a big change?</h2>
                <p>
                  Southern Star Tattoo is a professional piercing &amp; tattoo shop established in 2010 excelling in a
                  variety of different services. Our professional and experienced employees will deliver consistent
                  quality, safe and friendly fine arts. We aim to work closely with our clients and ensure that all
                  our clients receive the best service.
                </p>
                <p className="mb-0">
                  We provide best experience for you whilst simultaneously supporting your hygiene and reducing your
                  current costs. Our staff are trained and licensed in using environmentally friendly inks and
                  procedures to meet your expectations.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-2">
              <div className="ct-05-img right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src={media('tattoo-02.png')}
                  alt="Custom design tattoo by Southern Star Tattoo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY-2 */}
      <div id="gallery-2" className="py-8 gallery-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title text-center mb-6">
                <span className="section-id">You&rsquo;ll Like It Here!</span>
                <h2 className="h2-title">Any Style. Any Length</h2>
              </div>
            </div>
          </div>
          <Gallery
            items={styleGallery}
            rowClass="row-cols-1 row-cols-sm-2 row-cols-lg-4"
            variant="plain"
            label="Tattoo designs"
            idPrefix="img-2"
          />
          <div className="row">
            <div className="col">
              <div className="more-btn mt-6">
                <Link to="/tattoos" className="btn btn--tra-black hover--gold">
                  Check Our Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LocationSection />
      <ReelsSection />
      <SiteFooter />
    </>
  )
}
