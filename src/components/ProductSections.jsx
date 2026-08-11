import { useEffect, useRef, useState } from 'react'
import { products } from '../data/products'
import Reveal from './Reveal'

const MAX_OFFSET = 140

function ProductPhoto({ name, src, reverse = false }) {
  const ref = useRef(null)
  const startOffset = reverse ? -MAX_OFFSET : MAX_OFFSET
  const [offset, setOffset] = useState(startOffset)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(Math.max(1 - rect.top / vh, 0), 1)
      setOffset((1 - progress) * startOffset)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="product-section__image"
      style={{ transform: `translateX(${offset}px)` }}
    >
      <img src={src} alt={name} className="product-section__photo" />
    </div>
  )
}

export default function ProductSections() {
  return (
    <>
      {products.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`product-section ${i === 0 ? 'product-section--overlay' : ''}`}
        >
          <span className="product-section__watermark" aria-hidden="true">
            {p.name.replace('MODELO ', '')}
          </span>

          <ProductPhoto name={p.name} src={p.photo} reverse={p.id === 'modelo-03'} />

          <Reveal as="div" className="product-section__copy">
            <span className="product-section__label">{p.name}</span>
            <h1 className="product-section__title">{p.tagline}</h1>

            <div className="product-section__specs">
              {p.specs.map((s) => (
                <div key={s.label} className="product-section__spec">
                  <span className="product-section__spec-label">{s.label}</span>
                  <strong className="product-section__spec-value">{s.value}</strong>
                </div>
              ))}
            </div>

            <a href={`#${p.id}-detalhes`} className="btn btn--primary">
              {p.cta}
            </a>
          </Reveal>
        </section>
      ))}
    </>
  )
}
