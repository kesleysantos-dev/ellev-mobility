import Reveal from './Reveal'
import batteryLifestyle from '../assets/store/battery-lifestyle.jpg'

export default function BatterySection() {
  return (
    <section className="battery">
      <div className="container">
        <div className="photo-panel">
          <img src={batteryLifestyle} alt="" className="photo-panel__photo" />
          <div className="photo-panel__overlay" />
          <Reveal as="div" className="photo-panel__content">
            <span className="photo-panel__label">Bateria</span>
            <h2 className="photo-panel__title">Liberdade para recarregar onde quiser</h2>
            <p className="photo-panel__text">
              As baterias removíveis acompanham o seu ritmo — em casa, no trabalho ou na cidade.
              Nunca mais dependa de um posto de recarga fixo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
