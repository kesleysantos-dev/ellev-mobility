import { useState } from 'react'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="eg1-accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.title} className="eg1-accordion__item">
            <button
              className="eg1-accordion__trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="eg1-accordion__icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="eg1-accordion__content">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
