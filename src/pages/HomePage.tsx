import { FaInstagram } from 'react-icons/fa6'
import { HOURS_ROWS, SITE } from '@/config/site'
import { TATTOO_STYLES } from '@/data/content'
import { featuredWork, styleGallery } from '@/data/gallery'
import { asset } from '@/lib/assets'
import { Seo } from '@/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Gallery } from '@/components/ui/Gallery'
import { HoursTable } from '@/components/ui/HoursTable'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HomePage() {
  return (
    <>
      <Seo path="/" />

      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">Tattoo &amp; Piercing Studio &middot; Hikkaduwa, Sri Lanka</p>
            <h1 className="hero__title">The Tattoo That Gives You Style</h1>
            <p className="hero__lead">
              We provide the best experience for you whilst simultaneously supporting your hygiene
              and reducing your current costs.
            </p>
            <Button href="/tattoos">View Tattoos</Button>
          </div>

          <aside className="hero__card" aria-labelledby="hero-hours-title">
            <h2 className="hero__card-title" id="hero-hours-title">
              Opening Hours
            </h2>
            <ul className="hero__hours">
              <li>
                <span>Mon - Fri</span>
                <strong>{HOURS_ROWS[0].hours}</strong>
              </li>
              <li>
                <span>Sat - Sun</span>
                <strong>{HOURS_ROWS[1].hours}</strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <p className="tagline-band">Your Tattoo, Your Style</p>

      <section className="section" aria-labelledby="hygiene-title">
        <div className="container split">
          <div className="split__media split__media--collage">
            <img
              className="collage__main"
              src={asset('/images/tattoo-04.png')}
              alt="Tattoo artwork by Southern Star Tattoo"
              width={600}
              height={750}
              loading="lazy"
              decoding="async"
            />
            <img
              className="collage__a"
              src={asset('/images/tattoo-06.png')}
              alt="Tattoo design from our Hikkaduwa studio"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <img
              className="collage__b"
              src={asset('/images/tattoo-05.png')}
              alt="Custom tattoo piece by Southern Star Tattoo"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="split__copy">
            <h2 className="section-title" id="hygiene-title">
              We always care about our own and your personal hygiene
            </h2>
            <h3 className="split__subtitle">Don&rsquo;t be ordinary, be extraordinary</h3>
            <p>
              You can depend on our 24/7 customer support for work progress and task completion.
            </p>
            <Button href="/aboutus" variant="outline">
              About Us
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="art-title">
        <div className="container">
          <SectionHeading eyebrow="Indulge Yourself" title="Your Secret Place of Art" id="art-title">
            Our professional and experienced team delivers consistent quality, safe and friendly
            fine art. We work closely with our clients to make sure every one of them receives the
            best service.
          </SectionHeading>
          <ul className="style-grid">
            {TATTOO_STYLES.map((style, i) => (
              <li className="style-card" key={style.name}>
                <span className="style-card__number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{style.name}</h3>
                <p>{style.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            eyebrow="The perfect combination of art and passion"
            title="A Few Pieces of Our Work"
            id="work-title"
          />
          <Gallery items={featuredWork} label="Tattoo work and video clips" />
          <div className="section-action">
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

      <section className="section section--alt" aria-labelledby="passion-title">
        <div className="container split">
          <div className="split__copy">
            <p className="eyebrow">Declare Your Patterns</p>
            <h2 className="section-title" id="passion-title">
              Empower your passion. Elevate your confidence.
            </h2>
            <p>
              We&rsquo;re proud to be <strong>Southern Star Tattoo</strong>, where quality and
              standards matter. Trusted by <strong>hundreds</strong> of satisfied clients around the
              world, Southern Star Tattoo is one of the best tattoo artists in{' '}
              <strong>Sri Lanka</strong>. We are a Sri Lankan owned and operated tattoo studio with
              a combined experience of over 10 years.
            </p>
          </div>
          <div className="split__media">
            <img
              src={asset('/images/tattoo-01_1.png')}
              alt="Tattoo artwork created at Southern Star Tattoo in Hikkaduwa"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="hours-title">
        <div className="container split split--narrow">
          <div className="split__copy">
            <p className="eyebrow">Time Schedule</p>
            <h2 className="section-title" id="hours-title">
              Working Hours
            </h2>
            <p>
              Southern Star Tattoo is a custom design tattoo studio. Our shop is situated in front
              of Hotel Hikka Tranz in Hikkaduwa and is open 7 days a week. We pride ourselves on our
              friendliness, cleanliness and down-to-earth attitude &mdash; everyone is welcome!
            </p>
          </div>
          <div className="split__media">
            <HoursTable />
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="change-title">
        <div className="container split split--reverse">
          <div className="split__copy">
            <p className="eyebrow">Try Different Things</p>
            <h2 className="section-title" id="change-title">
              Are you ready to make a big change?
            </h2>
            <p>
              Southern Star Tattoo is a professional piercing and tattoo shop established in{' '}
              {SITE.foundingYear}, excelling in a variety of services. Our professional and
              experienced team delivers consistent quality, safe and friendly fine art. We work
              closely with our clients to make sure every one of them receives the best service.
            </p>
            <p>
              We provide the best experience for you whilst simultaneously supporting your hygiene
              and reducing your current costs. Our staff are trained and licensed in using
              environmentally friendly inks and procedures to meet your expectations.
            </p>
          </div>
          <div className="split__media">
            <img
              src={asset('/images/tattoo-02.png')}
              alt="Custom tattoo design from Southern Star Tattoo"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="style-title">
        <div className="container">
          <SectionHeading eyebrow="You'll Like It Here!" title="Any Style. Any Length" id="style-title" />
          <Gallery items={styleGallery} label="Tattoo designs" />
          <div className="section-action">
            <Button href="/tattoos">Check Our Works</Button>
          </div>
        </div>
      </section>
    </>
  )
}
