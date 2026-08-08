import Reveal from './Reveal'

export default function BrandStatement() {
  return (
    <section className="brand-statement">
      <div className="container">
        <Reveal as="div" className="photo-panel">
          <span className="photo-card__placeholder-label">Foto — substituir</span>
          <div className="photo-panel__overlay" />
          <div className="photo-panel__content">
            <h2 className="photo-panel__title">Performance, tecnologia e design: o futuro é brasileiro</h2>
            <p className="photo-panel__text">
              Produzimos veículos elétricos que unem potência real, tecnologia de ponta e design
              sofisticado — com suporte especializado e peças de reposição em todo o país.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
