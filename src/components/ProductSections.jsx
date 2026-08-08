import { products } from '../data/products'
import Reveal from './Reveal'

function ProductSilhouette({ name }) {
  return (
    <div className="product-section__image">
      <svg viewBox="0 0 240 120" className="product-section__silhouette" aria-hidden="true">
        <circle cx="52" cy="92" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="180" cy="92" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M52 92 L92 44 H144 L180 92 M92 44 L106 68 H160"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="product-section__image-label">Foto — {name} (substituir)</span>
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

          <ProductSilhouette name={p.name} />

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

            <a href={`#${p.id}-detalhes`} className="btn btn--pill">
              {p.cta}
            </a>
          </Reveal>
        </section>
      ))}
    </>
  )
}
