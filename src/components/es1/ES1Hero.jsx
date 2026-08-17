import heroPhoto from '../../assets/es1/misc/i5joy-hero.png'
import Reveal from '../Reveal'

const SPECS = [
  { label: 'Vel. Máxima', value: '32km/h' },
  { label: 'Autonomia', value: 'até 60km*' },
  { label: 'Motor', value: '1.000W' },
]

export default function ES1Hero() {
  return (
    <section className="es1-hero">
      <img src={heroPhoto} alt="Ellev I5 JOY" className="es1-hero__img" />
      <div className="es1-hero__overlay" />

      <div className="es1-hero__content">
        <Reveal as="h1" className="es1-hero__title">
          I5 JOY
        </Reveal>
        <Reveal as="div" className="es1-hero__row" delay={120}>
          <div className="es1-hero__specs">
            {SPECS.map((s) => (
              <div key={s.label}>
                <span className="es1-hero__spec-label">{s.label}</span>
                <strong className="es1-hero__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
