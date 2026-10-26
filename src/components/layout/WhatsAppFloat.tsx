import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappUrl } from '@/config/site'

/** Floating "book on WhatsApp" button (bottom-right on every page). */
export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a tattoo on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}
