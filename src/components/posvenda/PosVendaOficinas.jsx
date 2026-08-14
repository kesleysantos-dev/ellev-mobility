import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import photo from '../../assets/posvenda/posvenda-hero-header.webp'

export default function PosVendaOficinas() {
  return (
    <section className="pv-oficinas">
      <div className="container">
        <Reveal as="div" className="pv-garantia__card">
          <img src={photo} alt="" className="pv-garantia__img" />
          <div className="pv-garantia__overlay pv-garantia__overlay--strong" />
          <div className="pv-garantia__content">
            <Reveal as="h2" delay={150}>
              Oficinas
            </Reveal>
            <Reveal as="p" delay={400}>
              Aqui na Ellev, homologamos oficinas credenciadas no Brasil inteiro com nosso padrão
              de qualidade para te atender onde você estiver. Quer comprar uma Ellev e não possui
              concessionária em sua região? Fique tranquilo que sempre conseguimos uma oficina de
              alto padrão para te atender.
            </Reveal>
            <Reveal as={Link} to="/oficinas" className="eg1-link eg1-link--light" delay={650}>
              Conheça nossas oficinas
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
