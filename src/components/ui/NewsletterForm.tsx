import { useState } from 'react'
import type { FormEvent } from 'react'
import { SITE } from '@/config/site'

type Status = 'idle' | 'sending' | 'done' | 'error'

/**
 * Mailing-list signup. If VITE_NEWSLETTER_ENDPOINT is set the email is POSTed
 * there as JSON; otherwise the visitor's mail app opens with a pre-filled
 * request addressed to the studio.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!endpoint) {
      const subject = encodeURIComponent('Mailing list signup')
      const body = encodeURIComponent(`Please add ${email} to the mailing list.`)
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
      setStatus('done')
      return
    }
    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      setEmail('')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="Your email address"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Subscribe'}
      </button>
      <p className="newsletter-form__status" role="status">
        {status === 'done' && 'Thank you! You are on the list.'}
        {status === 'error' && 'Sorry, something went wrong. Please try again or message us on WhatsApp.'}
      </p>
    </form>
  )
}
