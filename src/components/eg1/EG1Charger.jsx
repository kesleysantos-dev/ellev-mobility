import Reveal from '../Reveal'
import chargingPhoto from '../../assets/eg1/misc/charging.webp'

export default function EG1Charger() {
  return (
    <section className="eg1-charger">
      <div className="container">
        <Reveal as="div" className="eg1-charger__card">
          <div className="eg1-charger__text">
            <h2>Mais tempo rodando. Menos tempo carregando.</h2>
            <p>
              O carregador rápido T2 foi desenvolvido para quem não quer perder tempo. Com
              tecnologia de ponta, ele garante recargas muito mais ágeis e seguras — ideal para o
              dia a dia urbano ou longas jornadas de uso intenso.
            </p>
            <p>
              <strong>Potência de carregamento:</strong> 2 KWh
            </p>
            <p>
              <strong>Tempo de recarga completa:</strong> cerca de 1h40min
            </p>
            <p>
              <strong>Acessório opcional</strong>, disponível para o modelo EG1
            </p>
            <p>Mais energia em menos tempo — para você continuar rodando, sem interrupções. ⚡</p>
          </div>
          <img src={chargingPhoto} alt="EG1 carregando" className="eg1-charger__img" />
        </Reveal>
      </div>
    </section>
  )
}
