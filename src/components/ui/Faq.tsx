import type { FaqItem } from '@/data/content'

/** Native <details> accordion: accessible, works without JavaScript, fully readable by crawlers. */
export function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
