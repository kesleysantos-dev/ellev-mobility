import Reveal from '../Reveal'
import photo from '../../assets/posvenda/posvenda-garantia.webp'

export default function PosVendaGarantia() {
  return (
    <section className="pv-garantia">
      <div className="container">
        <Reveal as="div" className="pv-garantia__card">
          <img src={photo} alt="" className="pv-garantia__img" />
          <div className="pv-garantia__overlay" />
          <div className="pv-garantia__content">
            <h2>02 Anos de Garantia Ellev</h2>
            <p>
              Na ELLEV, você conta com 2 anos de garantia nos principais componentes, como motor,
              controlador e baterias. Cada item é projetado e testado para oferecer máxima
              performance e durabilidade, com a confiança de uma marca que produz no Brasil e
              garante suporte completo em todo o país.
            </p>
            <p>
              Para manter sua garantia ativa, basta seguir o plano de revisões programadas e
              realizar os serviços em nossa rede de oficinas autorizadas, sempre prontas para
              cuidar da sua ELLEV.
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="eg1-link eg1-link--light"
            >
              Termo de garantia
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
