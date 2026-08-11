import Reveal from './Reveal'
import showroom from '../assets/store/showroom.png'
import oficina from '../assets/store/oficina.png'

const CARDS = [
  { title: 'Onde\nComprar', href: '#comprar', id: 'onde-estamos', photo: showroom },
  { title: 'Nossas\nOficinas', href: '#oficinas', id: 'oficinas', photo: oficina },
]

export default function WhereToBuy() {
  return (
    <section className="where-to-buy">
      <div className="container where-to-buy__grid">
        {CARDS.map((c) => (
          <a key={c.title} href={c.href} id={c.id} className="photo-card">
            <img src={c.photo} alt="" className="photo-card__photo" />
            <div className="photo-card__overlay" />
            <Reveal as="div" className="photo-card__content">
              <span className="photo-card__divider" />
              <h3 className="photo-card__title">{c.title}</h3>
              <span className="photo-card__link">
                Veja mais detalhes
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Reveal>
          </a>
        ))}
      </div>
    </section>
  )
}
