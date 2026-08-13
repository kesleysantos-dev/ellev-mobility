import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'

const blackModules = import.meta.glob('../../assets/es1/360/black/*.webp', { eager: true, import: 'default' })
const blueModules = import.meta.glob('../../assets/es1/360/blue/*.webp', { eager: true, import: 'default' })
const whiteModules = import.meta.glob('../../assets/es1/360/white/*.webp', { eager: true, import: 'default' })
const greyModules = import.meta.glob('../../assets/es1/360/grey/*.webp', { eager: true, import: 'default' })

function framesFrom(modules) {
  return Object.keys(modules)
    .sort()
    .map((key) => modules[key])
}

const COLORS = [
  { id: 'black', label: 'Eclipse Black', dot: '#141414', frames: framesFrom(blackModules) },
  { id: 'blue', label: 'Space Matte Blue', dot: '#2b3a52', frames: framesFrom(blueModules) },
  { id: 'white', label: 'Lunar White', dot: '#e9e9e7', frames: framesFrom(whiteModules) },
  { id: 'grey', label: 'Nebula Grey', dot: '#aeb2b8', frames: framesFrom(greyModules) },
]

const SPECS = [
  { label: 'Vel. Máx', value: '100km/h' },
  { label: 'Autonomia', value: '100km*' },
  { label: 'Potência Máx', value: '9.000 Watts' },
  { label: 'Torque Máximo', value: '205 Nm' },
  { label: 'Baterias', value: '2 baterias de 72v 24Ah' },
  { label: 'Carregamento', value: '2h30 - 220V · 5h - 110V' },
]

export default function ES1Explorer() {
  const [colorIndex, setColorIndex] = useState(0)
  const [frameIndex, setFrameIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef(null)

  const color = COLORS[colorIndex]
  const frames = color.frames
  const frameCount = frames.length

  useEffect(() => {
    setFrameIndex(0)
    frames.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [colorIndex])

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
    <section className="es1-explorer">
      <span className="es1-explorer__watermark" aria-hidden="true">
        Explore
      </span>

      <div className="container">
        <Reveal as="div" className="es1-explorer__grid">
          <div className="es1-explorer__swatches">
            {COLORS.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`es1-explorer__swatch ${i === colorIndex ? 'is-active' : ''}`}
                onClick={() => setColorIndex(i)}
              >
                <span className="es1-explorer__dot" style={{ background: c.dot }} />
                <span>{c.label.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <div
            className="es1-explorer__viewer"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <img
              src={frames[frameIndex]}
              alt="ES1 em 360 graus"
              className="es1-explorer__frame"
              draggable={false}
            />
            <div className="es1-explorer__hint">
              <span className="es1-explorer__hint-badge">360°</span>
              <span className={`es1-explorer__hint-label ${isDragging ? 'is-hidden' : ''}`}>
                arraste para girar
              </span>
            </div>
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
