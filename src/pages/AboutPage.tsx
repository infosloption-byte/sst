import { FaInstagram } from 'react-icons/fa6'
import { SITE } from '@/config/site'
import { asset } from '@/lib/assets'
import { Seo } from '@/seo/Seo'
import { Button } from '@/components/ui/Button'
import { ContactList } from '@/components/ui/ContactList'
import { HoursTable } from '@/components/ui/HoursTable'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AboutPage() {
  const { artist } = SITE
  return (
    <>
      <Seo path="/aboutus" type="AboutPage" />
      <PageHero path="/aboutus" title="About Southern Star Tattoo Studio" />

      <section className="section" aria-labelledby="unique-title">
        <div className="container split">
          <div className="split__copy">
            <SectionHeading
              as="h2"
              id="unique-title"
              align="left"
              eyebrow={`Since ${SITE.foundingYear}`}
              title="A place where you will feel unique"
            />
            <p>
              Southern Star Tattoo is a piercing and tattoo shop established in {SITE.foundingYear}.
              Our professional and experienced team delivers consistent quality and safe, friendly
              service, and we work closely with our clients so that every one of them receives the
              best service.
            </p>
            <p>
              The studio is filled with tattoo memorabilia and art collected over many years of
              travel. Because space is limited, we ask that you bring only one companion to your
              appointment. Friends and family are very welcome to meet you after you are done.
            </p>
            <Button href="/appointment">Book Appointment</Button>
          </div>
          <div className="split__media">
            <img
              src={asset('/images/tattoo-04.png')}
              alt="Tattoo artwork by Southern Star Tattoo"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="artist-title">
        <div className="container">
          <SectionHeading eyebrow="Meet the artist" title={`${artist.name} (${artist.nickname})`} id="artist-title" />
          <div className="artist-card">
            <p>
              <strong>{artist.name}</strong>, known to everyone as <em>{artist.nickname}</em>, is our
              master artist. He has been working since {SITE.foundingYear}, holds an NVQ Level 4
              qualification in tattoo and piercing, and runs a local studio business in{' '}
              {SITE.address.locality}.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="visit-title">
        <div className="container info-grid">
          <div className="info-card">
            <h2 id="visit-title" className="info-card__title">
              Opening Hours
            </h2>
            <HoursTable />
          </div>
          <div className="info-card">
            <h2 className="info-card__title">Our Location</h2>
            <ContactList />
          </div>
          <div className="info-card">
            <h2 className="info-card__title">Follow</h2>
            <p>
              <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer me">
                {SITE.social.instagram.handle}
              </a>
            </p>
            <Button
              href={SITE.social.instagram.url}
              external
              variant="outline"
              icon={<FaInstagram aria-hidden="true" />}
            >
              Visit Our Instagram
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
