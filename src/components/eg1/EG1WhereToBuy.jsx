import Reveal from '../Reveal'
import dealershipPhoto from '../../assets/eg1/misc/dealership.webp'
import ArrowLink from './ArrowLink'

export default function EG1WhereToBuy() {
  return (
    <section className="eg1-wtb">
      <div className="container">
        <Reveal as="div" className="eg1-wtb__card">
          <img src={dealershipPhoto} alt="Loja Ellev" className="eg1-wtb__img" />
          <div className="eg1-wtb__overlay" />
          <div className="eg1-wtb__content">
            <h1>Onde comprar</h1>
            <p>
              A tecnologia também nos permite criar conexões mais fortes com nossos clientes,
              através de aplicativos que facilitam desde o agendamento de manutenções até o
              acompanhamento do desempenho do veículo.
            </p>
            <ArrowLink href="/#onde-estamos" light>
              Conheça nossa revendas
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
