import Reveal from '../Reveal'
import productPhoto from '../../assets/categorias-produtos/linha-adventure/X13.PNG'

const GROUPS = [
  { id: 'bau', label: 'Baú' },
  { id: 'encosto', label: 'Encosto' },
]

const COLORS = [
  { id: 'branca', label: 'Lunar White', dot: '#e9e9e7' },
  { id: 'preta', label: 'Eclipse Black', dot: '#141414' },
  { id: 'cinza', label: 'Orbital Grey', dot: '#b9bcc0' },
]

const SPECS = [
  { label: 'Vel. Máx', value: '45km/h' },
  { label: 'Autonomia', value: '80km*' },
  { label: 'Potência Máx', value: '1.000 Watts' },
  { label: 'Bateria', value: '60V 20Ah chumbo-ácido selada' },
]

export default function VIBEExplorer() {
  return (
    <section className="vibe-explorer">
      <div className="container">
        <div className="vibe-explorer__card">
          <span className="vibe-explorer__watermark" aria-hidden="true">
            Explore
          </span>

          <Reveal as="div" className="vibe-explorer__grid">
            <div className="vibe-explorer__picker">
              {GROUPS.map((g) => (
                <div key={g.id} className="vibe-explorer__group">
                  <span className="vibe-explorer__group-label">{g.label}</span>
                  <div className="vibe-explorer__swatches">
                    {COLORS.map((c) => (
                      <span key={c.id} className="vibe-explorer__swatch">
                        <span className="vibe-explorer__dot" style={{ background: c.dot }} />
                        <span>{c.label.toUpperCase()}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="vibe-explorer__viewer">
              <img src={productPhoto} alt="X13" className="vibe-explorer__frame" draggable={false} />
            </div>

            <div className="vibe-explorer__specs">
              {SPECS.map((s) => (
                <div key={s.label}>
                  <span className="vibe-explorer__spec-label">{s.label}</span>
                  <strong className="vibe-explorer__spec-value">{s.value}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
