import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import Reveal from './Reveal'

const MAX_OFFSET = 140
// Fração da largura da própria imagem usada como deslocamento máximo — em
// telas estreitas 140px fixos empurravam a foto quase inteira pra fora da
// viewport durante o efeito de entrada, então escalamos com o tamanho real
// do elemento em vez de usar um valor fixo.
const OFFSET_RATIO = 0.22

function ProductPhoto({ name, src, reverse = false }) {
  const ref = useRef(null)
  const sign = reverse ? -1 : 1
  const [offset, setOffset] = useState(sign * MAX_OFFSET)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const startOffset = sign * Math.min(MAX_OFFSET, el.offsetWidth * OFFSET_RATIO)
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

          {p.link ? (
            <Link to={p.link} className="product-section__image-link" aria-label={`Ver página da ${p.name}`}>
              <ProductPhoto name={p.name} src={p.photo} reverse={p.id === 'modelo-03'} />
            </Link>
          ) : (
            <ProductPhoto name={p.name} src={p.photo} reverse={p.id === 'modelo-03'} />
          )}

          <Reveal as="div" className="product-section__copy">
            {p.link ? (
              <Link to={p.link} className="product-section__label">
                {p.name}
              </Link>
            ) : (
              <span className="product-section__label">{p.name}</span>
            )}
            <h1 className="product-section__title">{p.tagline}</h1>

            <div className="product-section__specs">
              {p.specs.map((s) => (
                <div key={s.label} className="product-section__spec">
                  <span className="product-section__spec-label">{s.label}</span>
                  <strong className="product-section__spec-value">{s.value}</strong>
                </div>
              ))}
            </div>

            {p.link ? (
              <Link to={p.link} className="btn btn--primary">
                {p.cta}
              </Link>
            ) : (
              <a href={`#${p.id}-detalhes`} className="btn btn--primary">
                {p.cta}
              </a>
            )}
          </Reveal>
        </section>
      ))}
    </>
  )
}
