import Reveal from '../Reveal'
import bannerPhoto from '../../assets/eg1/misc/banner-eletrica.png'
import ArrowLink from './ArrowLink'

export default function EG1ElectricBanner() {
  return (
    <section className="eg1-electric">
      <img src={bannerPhoto} alt="Ellev URBAN rodando à noite" className="eg1-electric__img" />
      <div className="eg1-electric__overlay" />

      <Reveal as="div" className="eg1-electric__content" delay={300}>
        <h2>100% elétrica</h2>
        <p>Carrega em tomadas<br />comuns de 127V ou 220V.</p>
        <p>Bateria de lítio removível</p>
        <ArrowLink to="/concessionarias" light>
          Onde comprar
        </ArrowLink>
      </Reveal>
    </section>
  )
}
