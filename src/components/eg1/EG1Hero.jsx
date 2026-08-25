import heroPhoto from '../../assets/eg1/misc/urban-hero.png'
import Reveal from '../Reveal'

const SPECS = [
  { label: 'Vel. Máxima', value: '32km/h' },
  { label: 'Autonomia', value: 'até 65km*' },
  { label: 'Carga Máxima', value: '150kg' },
]

export default function EG1Hero() {
  return (
    <section className="eg1-hero">
      <img src={heroPhoto} alt="Ellev URBAN" className="eg1-hero__img" />
      <div className="eg1-hero__overlay" />

      <div className="eg1-hero__content">
        <Reveal as="h1" className="eg1-hero__title">
          URBAN
        </Reveal>
        <Reveal as="div" className="eg1-hero__row" delay={120}>
          <div className="eg1-hero__specs">
            {SPECS.map((s) => (
              <div key={s.label}>
                <span className="eg1-hero__spec-label">{s.label}</span>
                <strong className="eg1-hero__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
