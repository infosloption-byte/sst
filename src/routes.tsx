import type { ComponentType } from 'react'
import { AboutPage } from '@/pages/AboutPage'
import { AppointmentPage } from '@/pages/AppointmentPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { PiercingPage } from '@/pages/PiercingPage'
import { RateUsPage } from '@/pages/RateUsPage'
import { TattoosPage } from '@/pages/TattoosPage'

/** Maps each path in config/routes.ts to its page component. */
export const PAGE_COMPONENTS: Record<string, ComponentType> = {
  '/': HomePage,
  '/aboutus': AboutPage,
  '/tattoos': TattoosPage,
  '/piercing': PiercingPage,
  '/appointment': AppointmentPage,
  '/rateus': RateUsPage,
  '/contactus': ContactPage,
}
