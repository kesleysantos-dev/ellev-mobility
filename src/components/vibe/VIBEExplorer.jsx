import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'

const modules = {
  branca_bau: import.meta.glob('../../assets/vibe/360/branca_bau/*.webp', { eager: true, import: 'default' }),
  preta_bau: import.meta.glob('../../assets/vibe/360/preta_bau/*.webp', { eager: true, import: 'default' }),
  cinza_bau: import.meta.glob('../../assets/vibe/360/cinza_bau/*.webp', { eager: true, import: 'default' }),
  branca_encosto: import.meta.glob('../../assets/vibe/360/branca_encosto/*.webp', { eager: true, import: 'default' }),
  preta_encosto: import.meta.glob('../../assets/vibe/360/preta_encosto/*.webp', { eager: true, import: 'default' }),
  cinza_encosto: import.meta.glob('../../assets/vibe/360/cinza_encosto/*.webp', { eager: true, import: 'default' }),
}

function framesFrom(mods) {
  return Object.keys(mods)
    .sort()
    .map((key) => mods[key])
}

const VARIANTS = [
  { id: 'bau', label: 'Baú' },
  { id: 'encosto', label: 'Encosto' },
]

const COLORS = [
  { id: 'branca', label: 'Lunar White', dot: '#e9e9e7' },
  { id: 'preta', label: 'Eclipse Black', dot: '#141414' },
  { id: 'cinza', label: 'Orbital Grey', dot: '#b9bcc0' },
]

const SPECS = [
  { label: 'Vel. Máx', value: '32km/h' },
  { label: 'Autonomia', value: '60km*' },
  { label: 'Potência Máx', value: '1.000 Watts' },
  { label: 'Bateria Removível', value: '1 bateria de 60V 24Ah' },
]

export default function VIBEExplorer() {
  const [variantIndex, setVariantIndex] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)
  const [frameIndex, setFrameIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef(null)

  const variant = VARIANTS[variantIndex]
  const color = COLORS[colorIndex]
  const frames = framesFrom(modules[`${color.id}_${variant.id}`])
  const frameCount = frames.length

  useEffect(() => {
    setFrameIndex(0)
    frames.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [variantIndex, colorIndex])

  const onPointerDown = (e) => {
    dragRef.current = { startX: e.clientX, startIndex: frameIndex }
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!dragRef.current || !frameCount) return
    const dx = e.clientX - dragRef.current.startX
    const step = 6
    const delta = Math.round(dx / step)
    let next = (dragRef.current.startIndex + delta) % frameCount
    if (next < 0) next += frameCount
    setFrameIndex(next)
  }

  const onPointerUp = () => {
    dragRef.current = null
    setIsDragging(false)
  }

  return (
    <section className="vibe-explorer">
      <span className="vibe-explorer__watermark" aria-hidden="true">
        Feel the Vibe
      </span>

      <div className="container">
        <Reveal as="div" className="vibe-explorer__grid">
          <div className="vibe-explorer__picker">
            <div className="vibe-explorer__variants">
              {VARIANTS.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  className={`vibe-explorer__variant ${i === variantIndex ? 'is-active' : ''}`}
                  onClick={() => setVariantIndex(i)}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className="vibe-explorer__swatches">
              {COLORS.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  className={`vibe-explorer__swatch ${i === colorIndex ? 'is-active' : ''}`}
                  onClick={() => setColorIndex(i)}
                >
                  <span className="vibe-explorer__dot" style={{ background: c.dot }} />
                  <span>{c.label.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            className="vibe-explorer__viewer"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <img
              src={frames[frameIndex]}
              alt="VIBE em 360 graus"
              className="vibe-explorer__frame"
              draggable={false}
            />
            <div className="vibe-explorer__hint">
              <span className="vibe-explorer__hint-badge">360°</span>
              <span className={`vibe-explorer__hint-label ${isDragging ? 'is-hidden' : ''}`}>
                arraste para girar
              </span>
            </div>
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
    </section>
  )
}
