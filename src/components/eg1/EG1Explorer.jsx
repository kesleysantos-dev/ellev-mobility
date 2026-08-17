import Reveal from '../Reveal'
import productPhoto from '../../assets/categorias-produtos/linha urban/URBAN.PNG'

const COLORS = [
  { id: 'azul', label: 'Midnight Matte Blue', dot: '#2a3548' },
  { id: 'black', label: 'Eclipse Black', dot: '#141414' },
  { id: 'prata', label: 'Orbital Grey', dot: '#b9bcc0' },
]

const SPECS = [
  { label: 'Vel. Máx', value: '32km/h' },
  { label: 'Autonomia', value: '65km*' },
  { label: 'Potência Máx', value: '1.000 Watts' },
  { label: 'Capacidade de Escalada', value: 'até 18°' },
  { label: 'Bateria Removível', value: '1 bateria de 60V 24Ah' },
  { label: 'Carregamento', value: 'cerca de 8h em tomada comum' },
]

export default function EG1Explorer() {
  return (
    <section className="eg1-explorer">
      <span className="eg1-explorer__watermark" aria-hidden="true">
        Explore
      </span>

      <div className="container">
        <Reveal as="div" className="eg1-explorer__grid">
          <div className="eg1-explorer__swatches">
            {COLORS.map((c) => (
              <span key={c.id} className="eg1-explorer__swatch">
                <span className="eg1-explorer__dot" style={{ background: c.dot }} />
                <span>{c.label.toUpperCase()}</span>
              </span>
            ))}
          </div>

          <div className="eg1-explorer__viewer">
            <img src={productPhoto} alt="URBAN" className="eg1-explorer__frame" draggable={false} />
          </div>

          <div className="eg1-explorer__specs">
            {SPECS.map((s) => (
              <div key={s.label}>
                <span className="eg1-explorer__spec-label">{s.label}</span>
                <strong className="eg1-explorer__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
