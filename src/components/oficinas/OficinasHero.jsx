import heroPhoto from '../../assets/oficinas/hero-oficina.webp'

export default function OficinasHero() {
  return (
    <section className="of-hero">
      <img src={heroPhoto} alt="" className="of-hero__img" />
      <div className="of-hero__overlay" />
      <h1 className="of-hero__title">Oficinas</h1>
    </section>
  )
}
