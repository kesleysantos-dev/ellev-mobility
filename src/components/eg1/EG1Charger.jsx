import Reveal from '../Reveal'
import chargingPhoto from '../../assets/eg1/misc/charging.png'

export default function EG1Charger() {
  return (
    <section className="eg1-charger">
      <div className="container">
        <Reveal as="div" className="eg1-charger__card">
          <div className="eg1-charger__text">
            <h2>Mais tempo rodando. Menos tempo carregando.</h2>
            <p>
              A bateria de lítio removível da URBAN carrega em qualquer tomada comum — sem
              complicação, ideal para o dia a dia urbano.
            </p>
            <p className="eg1-charger__spec">
              <strong>Bateria:</strong> 60V 24Ah, lítio removível
            </p>
            <p className="eg1-charger__spec">
              <strong>Tempo de recarga completa:</strong> cerca de 8 horas
            </p>
            <p>Mais energia no seu dia a dia — para você continuar rodando, sem interrupções. ⚡</p>
          </div>
          <img src={chargingPhoto} alt="URBAN carregando" className="eg1-charger__img" />
        </Reveal>
      </div>
    </section>
  )
}
