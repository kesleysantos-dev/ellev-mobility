import Reveal from '../Reveal'
import heroPhoto from '../../assets/posvenda/posvenda-hero-header.webp'

export default function PosVendaHero() {
  return (
    <section className="pv-hero">
      <img src={heroPhoto} alt="" className="pv-hero__img" />
      <div className="pv-hero__overlay" />
      <Reveal as="h1" className="pv-hero__title" delay={250}>
        Pós-vendas
      </Reveal>
    </section>
  )
}
