import Reveal from '../Reveal'
import heroPhoto from '../../assets/concessionarias/hero-banner.webp'

export default function ConcessionariasHero() {
  return (
    <section className="conc-hero">
      <img src={heroPhoto} alt="" className="conc-hero__img" />
      <div className="conc-hero__overlay" />
      <Reveal as="h1" className="conc-hero__title" delay={250}>
        Concessionárias
      </Reveal>
    </section>
  )
}
