import { SITE } from '@/config/site'
import { media } from '@/lib/assets'
import { Link } from '@/router'
import { Seo } from '@/seo/Seo'
import { InnerPageHero } from '@/components/ui/Hero'
import { LocationSection, ReelsSection } from '@/components/layout/Sections'
import { SiteFooter } from '@/components/layout/SiteFooter'

const ARTIST_LINKS = [
  {
    href: 'https://www.facebook.com/profile.php?id=100063629918138&mibextid=LQQJ4d',
    icon: 'flaticon-facebook',
    title: 'Southern Star Tattoo Facebook profile',
  },
  {
    href: SITE.social.instagram.url,
    icon: 'flaticon-instagram',
    title: 'Southern Star Tattoo Instagram profile',
  },
  { href: SITE.social.youtube.url, icon: 'flaticon-youtube', title: 'Southern Star Tattoo YouTube channel' },
  { href: SITE.social.tiktok.url, icon: 'flaticon-tik-tok', title: 'Southern Star Tattoo TikTok channel' },
]

export function AboutPage() {
  return (
    <>
      <Seo path="/aboutus" type="AboutPage" />
      <InnerPageHero
        id="about-page"
        title="About Southern Star Tattoo Studio"
        subtitle="Tattoo Studio where you will feel unique and special"
      />

      {/* TEXT CONTENT 3 */}
      <section className="pt-8 ct-03 content-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="txt-block left-column wow fadeInRight">
                <div className="ct-03-txt">
                  <span className="section-id">Mind, Body and Soul</span>
                  <h2 className="h2-md">A place where you will feel unique</h2>
                  <p className="mb-5">
                    Southern Star Tattoo is a professional piercing &amp; tattoo shop established in 2010 excelling in
                    a variety of different services. Our professional and experienced employees will deliver
                    consistent quality, safe and friendly fine arts. We aim to work closely with our clients and
                    ensure that all our clients receive the best service.
                  </p>
                </div>
                <div className="ct-03-img" style={{ background: '#000', borderRadius: 10 }}>
                  <img
                    className="img-fluid"
                    src={media('sst/sst-01.png')}
                    alt="Southern Star Tattoo studio artwork"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                <div className="ct-03-img mb-5">
                  <img
                    className="img-fluid"
                    style={{ background: '#000', borderRadius: 10 }}
                    src={media('sst/shop.jpg')}
                    alt="Inside the Southern Star Tattoo studio in Hikkaduwa"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="ct-03-txt">
                  <p className="mb-2">
                    Our studio is a treasure-trove of tattoo relics, tattoo memorabilia and plain old cool stuff!
                    Every inch of every wall is covered in art and sculpture, collected from around the world over
                    decades of travel.
                  </p>
                  <p className="mb-2">
                    Our studio space is constantly evolving with new art, new tattoos, tattoo memorabilia and guest
                    artists. *As our studio is very busy with limited space, we kindly ask that you limit the people
                    accompanying you to just one.
                  </p>
                  <p className="mb-0">
                    There is plenty to see and do around our studio, so ideally it would be great if your friends and
                    family could meet you after your appointment - thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIST */}
      <section className="pt-8 artist-details division">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="artist-photo">
                <img
                  className="img-fluid"
                  src={media('sst/rukshan-madusanka-rs.jpg')}
                  alt="Rukshan (Loku Malli), master tattoo artist at Southern Star Tattoo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="artist-bio">
                <h2 className="h2-title">Rukshan - (Loku Malli)</h2>
                <div className="artist-data">
                  <p>
                    <span className="sm-title">Master Artist</span>
                  </p>
                  <p>
                    <span className="sm-title">Experience:</span> since 2010
                  </p>
                </div>
                <div className="tm-social ico-20 clearfix">
                  <ul className="clearfix">
                    {ARTIST_LINKS.map((link) => (
                      <li key={link.icon}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer me"
                          title={link.title}
                          aria-label={link.title}
                        >
                          <span className={link.icon} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Being introduced to the tattoo industry at a young age, Rukshan (Loku Malli) is passionate about
                  being an integral part of the tattoo and piercing industry and holds an NVQ Level 4 qualification.
                </p>
                <p>
                  Having an NVQ Level 4 qualification in the tattoo &amp; piercing industry, plus the business
                  experience of owning a local tattoo studio, he brings a vast knowledge to the tattoo culture in Sri
                  Lanka.
                </p>
                <div className="booking-link">
                  <Link to="/appointment" className="btn btn--tra-black hover--black">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
      <ReelsSection />
      <SiteFooter />
    </>
  )
}
