import { Link } from 'react-router-dom';
import Reveal from '../Reveal';
import dealershipPhoto from '../../assets/es1/misc/dealership.png';

export default function ES1WhereToBuy() {
  return (
    <section className="es1-wtb">
      <div className="container">
        <Reveal as="div" className="es1-wtb__card">
          <img
            src={dealershipPhoto}
            alt="Loja Ellev I5 JOY"
            className="es1-wtb__img"
          />
          <div className="es1-wtb__overlay" />
          <div className="es1-wtb__content">
            <Reveal as="h1" delay={150}>
              Onde comprar
            </Reveal>
            <Reveal as="p" delay={400}>
              A tecnologia também nos permite criar conexões mais fortes com
              nossos clientes, através de aplicativos que facilitam desde o
              agendamento de manutenções até o acompanhamento do desempenho do
              veículo.
            </Reveal>
            <Reveal as={Link} to="/concessionarias" className="eg1-link eg1-link--light" delay={650}>
              Conheça nossas revendas
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
