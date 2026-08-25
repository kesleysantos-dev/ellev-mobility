import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import bgPhoto from '../../assets/social/night-ride.png'
import logo from '../../assets/logo/logo-ellev-white.png'

export default function ObrigadoHero() {
  return (
    <section className="obrigado-hero">
      <img src={bgPhoto} alt="" className="obrigado-hero__img" />
      <div className="obrigado-hero__overlay" />

      <Reveal as="div" className="obrigado-hero__content">
        <img src={logo} alt="Ellev Mobility" className="obrigado-hero__logo" />
        <h1 className="obrigado-hero__title">Obrigado</h1>
        <p className="obrigado-hero__subtitle">
          Um de nossos especialistas entrará em contato
          <br />
          com você em breve.
        </p>
        <Link to="/" className="btn btn--primary obrigado-hero__cta">
          Voltar ao início
        </Link>
      </Reveal>
    </section>
  )
}
