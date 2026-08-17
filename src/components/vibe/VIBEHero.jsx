import heroPhoto from '../../assets/vibe/misc/x13-hero.png'
import Reveal from '../Reveal'

const SPECS = [
  { label: 'Vel. Máxima', value: '45km/h' },
  { label: 'Autonomia', value: 'até 80km*' },
  { label: 'Bateria', value: 'Chumbo-ácida selada' },
  { label: 'Garantia', value: '02 anos' },
]

export default function VIBEHero() {
  return (
    <section className="vibe-hero">
      <img src={heroPhoto} alt="Ellev X13" className="vibe-hero__img" />
      <div className="vibe-hero__overlay" />

      <div className="vibe-hero__content">
        <Reveal as="h1" className="vibe-hero__title">
          X13
        </Reveal>
        <Reveal as="div" className="vibe-hero__row" delay={120}>
          <div className="vibe-hero__specs">
            {SPECS.map((s) => (
              <div key={s.label}>
                <span className="vibe-hero__spec-label">{s.label}</span>
                <strong className="vibe-hero__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
