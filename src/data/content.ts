import { SITE } from '@/config/site'

/** The four style boxes on the home page (icon = class from the original icon font). */
export const TATTOO_STYLES = [
  {
    name: 'Fine Line',
    icon: 'flaticon-facial-treatment',
    description:
      'very thin, precise, and delicate lines, often created mostly using a single needle or a small grouping of needles',
  },
  {
    name: 'Dot Work',
    icon: 'flaticon-wax',
    description:
      'using countless tiny dots, meticulously placed and varied in density, form patterns, images, shading effects, and textures.',
  },
  {
    name: 'Colored',
    icon: 'flaticon-cosmetics',
    description:
      'incorporates pigments other than black and grey, allowing for a wide spectrum of hues, saturation, and vibrancy in the design.',
  },
  {
    name: 'Shading',
    icon: 'flaticon-nail-polish',
    description:
      'technique of adding varying tones of ink to create depth, dimension, texture, and a sense of realism within a tattoo design.',
  },
] as const

export interface FaqItem {
  question: string
  answer: string
}

/**
 * Written only from facts published on the original website. Shown on the
 * Appointment page and exposed to search engines as FAQPage structured data.
 */
export const FAQ: readonly FaqItem[] = [
  {
    question: 'Where is Southern Star Tattoo located?',
    answer: `We are at ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.country}, in front of Hotel Hikka Tranz.`,
  },
  {
    question: 'What are your opening hours?',
    answer: `We are open every day of the week, ${SITE.hours.label}.`,
  },
  {
    question: 'How do I book a tattoo or piercing appointment?',
    answer: `Message us on WhatsApp at ${SITE.phone.display}. You can also call us or send an email to ${SITE.email}.`,
  },
  {
    question: 'Do you do piercings as well as tattoos?',
    answer:
      'Yes. Southern Star Tattoo is a professional piercing and tattoo shop, established in 2010.',
  },
  {
    question: 'Which tattoo styles do you offer?',
    answer:
      'We are a custom design tattoo studio working in fine line, dot work, colored tattoos and shading, among other styles, including black and grey and Maori-style work.',
  },
  {
    question: 'Can I bring friends or family to my appointment?',
    answer:
      'Our studio is very busy with limited space, so we kindly ask that you limit the people accompanying you to just one. Friends and family are welcome to meet you after your appointment.',
  },
  {
    question: 'How do you look after hygiene and safety?',
    answer:
      'Hygiene matters to us as much as it does to you. Our staff are trained and licensed in using environmentally friendly inks and procedures.',
  },
  {
    question: 'Who is the artist at Southern Star Tattoo?',
    answer: `${SITE.artist.name} (${SITE.artist.nickname}) is our master artist. He has been working since ${SITE.foundingYear} and holds an NVQ Level 4 qualification in tattoo and piercing.`,
  },
]
