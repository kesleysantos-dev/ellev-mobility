import Reveal from '../Reveal'
import bannerPhoto from '../../assets/es1/misc/banner-eletrica.jpg'
import ArrowLink from '../eg1/ArrowLink'

export default function ES1ElectricBanner() {
  return (
    <section className="es1-electric">
      <img src={bannerPhoto} alt="Ellev ES1 carregando" className="es1-electric__img" />
      <div className="es1-electric__overlay" />

      <Reveal as="div" className="es1-electric__content" delay={300}>
        <h2>100% elétrica</h2>
        <p>Carrega em tomadas<br />comuns de 127V ou 220V.</p>
        <ArrowLink to="/concessionarias">Onde comprar</ArrowLink>
      </Reveal>
    </section>
  )
}
