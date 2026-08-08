import Reveal from './Reveal'

const CARDS = [
  { title: 'Onde\nComprar', href: '#comprar', id: 'onde-estamos' },
  { title: 'Nossas\nOficinas', href: '#oficinas', id: 'oficinas' },
]

export default function WhereToBuy() {
  return (
    <section className="where-to-buy">
      <div className="container where-to-buy__grid">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} as="a" href={c.href} id={c.id} className="photo-card" delay={i * 100}>
            <span className="photo-card__placeholder-label">Foto — substituir</span>
            <div className="photo-card__overlay" />
            <div className="photo-card__content">
              <span className="photo-card__divider" />
              <h3 className="photo-card__title">{c.title}</h3>
              <span className="photo-card__link">
                Veja mais detalhes
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
