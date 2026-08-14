import heroPhoto from '../../assets/posvenda/posvenda-hero-header.webp'

export default function PosVendaHero() {
  return (
    <section className="pv-hero">
      <img src={heroPhoto} alt="" className="pv-hero__img" />
      <div className="pv-hero__overlay" />
      <h1 className="pv-hero__title">Pós-vendas</h1>
    </section>
  )
}
