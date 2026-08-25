import Reveal from '../Reveal'
import productPhoto from '../../assets/categorias-produtos/linha urban/I5 JOY.PNG'

const COLORS = [
  { id: 'black', label: 'Eclipse Black', dot: '#141414' },
  { id: 'blue', label: 'Space Matte Blue', dot: '#2b3a52' },
  { id: 'white', label: 'Lunar White', dot: '#e9e9e7' },
  { id: 'grey', label: 'Nebula Grey', dot: '#aeb2b8' },
]

const SPECS = [
  { label: 'Vel. Máx', value: '32km/h' },
  { label: 'Autonomia', value: '45 a 60km*' },
  { label: 'Potência Máx', value: '1.000 Watts' },
  { label: 'Capacidade de Escalada', value: 'até 25°' },
  { label: 'Bateria Removível', value: '1 bateria de 60V 20Ah' },
  { label: 'Carregamento', value: '5 a 6 horas' },
]

export default function ES1Explorer() {
  return (
    <section className="es1-explorer">
      <span className="es1-explorer__watermark" aria-hidden="true">
        Explore
      </span>

      <div className="container">
        <Reveal as="div" className="es1-explorer__grid">
          <div className="es1-explorer__swatches">
            {COLORS.map((c) => (
              <span key={c.id} className="es1-explorer__swatch">
                <span className="es1-explorer__dot" style={{ background: c.dot }} />
                <span>{c.label.toUpperCase()}</span>
              </span>
            ))}
          </div>

          <div className="es1-explorer__viewer">
            <img src={productPhoto} alt="I5 JOY" className="es1-explorer__frame" draggable={false} />
          </div>

          <div className="es1-explorer__specs">
            {SPECS.map((s) => (
              <div key={s.label}>
                <span className="es1-explorer__spec-label">{s.label}</span>
                <strong className="es1-explorer__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
