import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'
import icon360 from '../../assets/shared/icons/360icon.png'

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
  { label: 'Vel. Máx', value: '32km/h' },
  { label: 'Autonomia', value: '60km*' },
  { label: 'Potência Máx', value: '1.000 Watts' },
  { label: 'Bateria Removível', value: '1 bateria de 60V 24Ah' },
]

export default function VIBEExplorer() {
  const [variant, setVariant] = useState('bau')
  const [color, setColor] = useState('branca')
  const [frameIndex, setFrameIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef(null)
  const viewerRef = useRef(null)
  const autoSpinRef = useRef(null)
  const hasAutoSpunRef = useRef(false)

  const frames = framesFrom(modules[`${color}_${variant}`])
  const frameCount = frames.length

  useEffect(() => {
    setFrameIndex(0)
    frames.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [variant, color])

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
    <section className="vibe-explorer">
      <div className="container">
        <div className="vibe-explorer__card">
          <span className="vibe-explorer__watermark" aria-hidden="true">
            Feel the Vibe
          </span>

          <Reveal as="div" className="vibe-explorer__grid">
            <div className="vibe-explorer__picker">
              {GROUPS.map((g) => (
                <div key={g.id} className="vibe-explorer__group">
                  <span className="vibe-explorer__group-label">{g.label}</span>
                  <div className="vibe-explorer__swatches">
                    {COLORS.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={`vibe-explorer__swatch ${
                          variant === g.id && color === c.id ? 'is-active' : ''
                        }`}
                        onClick={() => {
                          setVariant(g.id)
                          setColor(c.id)
                        }}
                      >
                        <span className="vibe-explorer__dot" style={{ background: c.dot }} />
                        <span>{c.label.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={viewerRef}
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
              <div className={`vibe-explorer__hint ${isDragging ? 'is-hidden' : ''}`}>
                <img src={icon360} alt="" className="vibe-explorer__hint-badge" aria-hidden="true" />
                <span className="vibe-explorer__hint-label">arraste para girar</span>
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
      </div>
    </section>
  )
}
