import { HOURS_COMPACT, HOURS_SPLIT, SITE } from '@/config/site'
import { reels } from '@/data/gallery'
import { Gallery } from '../ui/Gallery'

/** Full-width Google map (original #contacts-1). */
export function MapEmbed({ width = 1300 }: { width?: number }) {
  return (
    <div id="contacts-1" className="contacts-section division">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="google-map">
              <iframe
                title="Map: Southern Star Tattoo, 327 Galle Road, Pannamgoda, Hikkaduwa"
                src={SITE.mapsEmbedUrl}
                width={width}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Opening hours + location beside the map (original #contacts-2). */
export function LocationSection() {
  return (
    <section id="contacts-2" className="bg--poudre py-8 contacts-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-4">
            <div className="cbox-2 cb-1 mb-5">
              <h5 className="h5-lg">Opening Hours:</h5>
              {HOURS_SPLIT.map((days) => (
                <p key={days}>
                  {days}: <span>{HOURS_COMPACT}</span>
                </p>
              ))}
            </div>
            <div className="cbox-2 cb-2">
              <h5 className="h5-lg">Our Location:</h5>
              <address>
                <p>327, Galle Road</p>
                <p>Pannamgoda, Hikkaduwa</p>
              </address>
              <div className="cbox-2-contacts">
                <p>
                  <a href={`tel:${SITE.phone.e164}`}>{SITE.phone.display}</a>
                </p>
                <p>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="google-map">
              <iframe
                title="Map: Southern Star Tattoo, 327 Galle Road, Pannamgoda, Hikkaduwa"
                src={SITE.mapsEmbedUrl}
                width={900}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** "Follow @southernstartattoo_" strip of video clips (original #gallery-3). */
export function ReelsSection() {
  return (
    <section id="gallery-3" className="pt-8 gallery-section division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title">
              <h3 className="h3-lg color--black">
                Follow:{' '}
                <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer me">
                  {SITE.social.instagram.handle}
                </a>
              </h3>
            </div>
          </div>
        </div>
        <Gallery
          items={reels}
          rowClass="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6"
          label="Recent video clips"
          idPrefix="img-3"
        />
      </div>
    </section>
  )
}
