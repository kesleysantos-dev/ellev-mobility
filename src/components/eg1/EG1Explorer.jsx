import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'
import icon360 from '../../assets/shared/icons/360icon.png'

const azulModules = import.meta.glob('../../assets/eg1/360/azul/*.webp', { eager: true, import: 'default' })
const blackModules = import.meta.glob('../../assets/eg1/360/black/*.webp', { eager: true, import: 'default' })
const prataModules = import.meta.glob('../../assets/eg1/360/prata/*.webp', { eager: true, import: 'default' })

function framesFrom(modules) {
  return Object.keys(modules)
    .sort()
    .map((key) => modules[key])
}

const COLORS = [
  { id: 'azul', label: 'Midnight Matte Blue', dot: '#2a3548', frames: framesFrom(azulModules) },
  { id: 'black', label: 'Eclipse Black', dot: '#141414', frames: framesFrom(blackModules) },
  { id: 'prata', label: 'Orbital Grey', dot: '#b9bcc0', frames: framesFrom(prataModules) },
]

const SPECS = [
  { label: 'Vel. Máx', value: '100km/h' },
  { label: 'Autonomia', value: '130km*' },
  { label: 'Potência Máx', value: '10.000 Watts' },
  { label: 'Torque Máximo', value: '305 Nm' },
  { label: 'Baterias', value: '2 baterias de 72v 30Ah' },
  { label: 'Carregamento', value: '1h50 - T2 (opcional) 3h - 220v 6h - 110v' },
  { label: 'Acessórios', value: 'USB Tipo A · USB Tipo C' },
]

export default function EG1Explorer() {
  const [colorIndex, setColorIndex] = useState(0)
  const [frameIndex, setFrameIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef(null)
  const viewerRef = useRef(null)
  const autoSpinRef = useRef(null)
  const hasAutoSpunRef = useRef(false)

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

  // Ao entrar na viewport pela primeira vez, gira a moto 360° sozinha e
  // para de volta no frame inicial — só uma vez, e cancela se o usuário
  // já começar a arrastar manualmente.
  useEffect(() => {
    const el = viewerRef.current
    if (!el || hasAutoSpunRef.current || !frameCount) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAutoSpunRef.current) return
        hasAutoSpunRef.current = true
        observer.disconnect()

        let i = 0
        autoSpinRef.current = setInterval(() => {
          i += 1
          if (i >= frameCount) {
            setFrameIndex(0)
            clearInterval(autoSpinRef.current)
            autoSpinRef.current = null
            return
          }
          setFrameIndex(i)
        }, 45)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [frameCount])

  const onPointerDown = (e) => {
    if (autoSpinRef.current) {
      clearInterval(autoSpinRef.current)
      autoSpinRef.current = null
    }
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
    <section className="eg1-explorer">
      <span className="eg1-explorer__watermark" aria-hidden="true">
        Explore
      </span>

      <div className="container">
        <Reveal as="div" className="eg1-explorer__grid">
          <div className="eg1-explorer__swatches">
            {COLORS.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`eg1-explorer__swatch ${i === colorIndex ? 'is-active' : ''}`}
                onClick={() => setColorIndex(i)}
              >
                <span className="eg1-explorer__dot" style={{ background: c.dot }} />
                <span>{c.label.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <div
            ref={viewerRef}
            className="eg1-explorer__viewer"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <img
              src={frames[frameIndex]}
              alt="EG1 em 360 graus"
              className="eg1-explorer__frame"
              draggable={false}
            />
            <div className={`eg1-explorer__hint ${isDragging ? 'is-hidden' : ''}`}>
              <img src={icon360} alt="" className="eg1-explorer__hint-badge" aria-hidden="true" />
              <span className="eg1-explorer__hint-label">arraste para girar</span>
            </div>
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
