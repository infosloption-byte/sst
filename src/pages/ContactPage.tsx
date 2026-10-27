import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { HOURS_COMPACT, HOURS_SPLIT, SITE } from '@/config/site'
import { Seo } from '@/seo/Seo'
import { InnerPageTitle } from '@/components/ui/Hero'
import { MapEmbed, ReelsSection } from '@/components/layout/Sections'
import { SiteFooterExtended } from '@/components/layout/SiteFooter'

const EMPTY = { name: '', email: '', subject: '', message: '' }

export function ContactPage() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSent(false)
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  /** No server here: the message opens in the visitor's email app, addressed to the studio. */
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Seo path="/contactus" type="ContactPage" />
      <InnerPageTitle
        id="contacts-page"
        title="Let's Talk!"
        subtitle="Got Questions? Please, don't hesitate to get in touch with us"
      />

      <MapEmbed />

      <section id="contacts-3" className="pt-8 contacts-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cbox-2 cb-1 mb-5">
                <h4>Our Location:</h4>
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
              <div className="cbox-2 cb-2">
                <h4>Opening Hours:</h4>
                {HOURS_SPLIT.map((days) => (
                  <p key={days}>
                    {days}: <span>{HOURS_COMPACT}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <h4>Send a Message</h4>
                <form name="contactform" className="row contact-form" onSubmit={submit}>
                  <div className="col-lg-6">
                    <label className="visually-hidden" htmlFor="contact-name">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Your Name*"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={update}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="visually-hidden" htmlFor="contact-email">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className="form-control email"
                      placeholder="Email Address*"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={update}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="visually-hidden" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      className="form-control subject"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={update}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="visually-hidden" htmlFor="contact-message">
                      Your message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control message"
                      rows={6}
                      placeholder="Your Message ..."
                      required
                      value={form.message}
                      onChange={update}
                    />
                  </div>
                  <div className="col-md-12 text-end">
                    <button type="submit" className="btn btn--tra-black hover--black submit">
                      Send Message
                    </button>
                  </div>
                  <div className="col-md-12 contact-form-msg" role="status">
                    {sent && <p>Your email app should open with the message ready to send.</p>}
                  </div>
                </form>
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
