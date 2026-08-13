import Reveal from '../Reveal'
import bannerPhoto from '../../assets/eg1/misc/banner-eletrica.webp'
import ArrowLink from './ArrowLink'

export default function EG1ElectricBanner() {
  return (
    <section className="eg1-electric">
      <img src={bannerPhoto} alt="Ellev EG1 rodando à noite" className="eg1-electric__img" />
      <div className="eg1-electric__overlay" />

      <Reveal as="div" className="eg1-electric__content" delay={300}>
        <h2>100% elétrica</h2>
        <p>Carrega em tomadas<br />comuns de 127V ou 220V.</p>
        <p>Carregamento Rápido T2</p>
        <ArrowLink href="/#onde-estamos" light>
          Onde comprar
        </ArrowLink>
      </Reveal>
    </section>
  )
}
