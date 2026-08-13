import Reveal from '../Reveal'
import dealershipPhoto from '../../assets/vibe/misc/dealership.webp'
import ArrowLink from '../eg1/ArrowLink'

export default function VIBEWhereToBuy() {
  return (
    <section className="vibe-wtb">
      <div className="container">
        <Reveal as="div" className="vibe-wtb__card">
          <img src={dealershipPhoto} alt="Loja Ellev" className="vibe-wtb__img" />
          <div className="vibe-wtb__overlay" />
          <div className="vibe-wtb__content">
            <h1>Onde comprar</h1>
            <p>
              A tecnologia também nos permite criar conexões mais fortes com nossos clientes,
              através de aplicativos que facilitam desde o agendamento de manutenções até o
              acompanhamento do desempenho do veículo.
            </p>
            <ArrowLink href="/#onde-estamos" light>
              Conheça nossas revendas
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
