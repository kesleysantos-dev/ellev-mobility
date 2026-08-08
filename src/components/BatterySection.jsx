import Reveal from './Reveal'

export default function BatterySection() {
  return (
    <section className="battery">
      <div className="container">
        <Reveal as="div" className="photo-panel">
          <span className="photo-card__placeholder-label">Foto — substituir</span>
          <div className="photo-panel__overlay" />
          <div className="photo-panel__content">
            <span className="photo-panel__label">Bateria</span>
            <h2 className="photo-panel__title">Liberdade para recarregar onde quiser</h2>
            <p className="photo-panel__text">
              As baterias removíveis acompanham o seu ritmo — em casa, no trabalho ou na cidade.
              Nunca mais dependa de um posto de recarga fixo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
