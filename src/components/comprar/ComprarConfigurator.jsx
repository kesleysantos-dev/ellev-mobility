import { useMemo, useRef, useState } from 'react'
import Reveal from '../Reveal'
import { MODELS, ESTADOS } from '../../data/comprarModels'

const eg1Black = import.meta.glob('../../assets/eg1/360/black/*.webp', { eager: true, import: 'default' })
const eg1Prata = import.meta.glob('../../assets/eg1/360/prata/*.webp', { eager: true, import: 'default' })
const eg1Azul = import.meta.glob('../../assets/eg1/360/azul/*.webp', { eager: true, import: 'default' })

const es1Black = import.meta.glob('../../assets/es1/360/black/*.webp', { eager: true, import: 'default' })
const es1Blue = import.meta.glob('../../assets/es1/360/blue/*.webp', { eager: true, import: 'default' })
const es1White = import.meta.glob('../../assets/es1/360/white/*.webp', { eager: true, import: 'default' })
const es1Grey = import.meta.glob('../../assets/es1/360/grey/*.webp', { eager: true, import: 'default' })

const vibeBrancaEncosto = import.meta.glob('../../assets/vibe/360/branca_encosto/*.webp', { eager: true, import: 'default' })
const vibePretaEncosto = import.meta.glob('../../assets/vibe/360/preta_encosto/*.webp', { eager: true, import: 'default' })
const vibeCinzaEncosto = import.meta.glob('../../assets/vibe/360/cinza_encosto/*.webp', { eager: true, import: 'default' })

const FRAME_SETS = {
  'EG1/black': eg1Black,
  'EG1/prata': eg1Prata,
  'EG1/azul': eg1Azul,
  'ES1/black': es1Black,
  'ES1/blue': es1Blue,
  'ES1/white': es1White,
  'ES1/grey': es1Grey,
  'VIBE/branca_encosto': vibeBrancaEncosto,
  'VIBE/preta_encosto': vibePretaEncosto,
  'VIBE/cinza_encosto': vibeCinzaEncosto,
}

function framesFrom(modules) {
  return Object.keys(modules)
    .sort()
    .map((key) => modules[key])
}

const formatPrice = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ComprarConfigurator() {
  const [modeloId, setModeloId] = useState('EG1')
  const [cor, setCor] = useState('preto')
  const [frameIndex, setFrameIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [sent, setSent] = useState(false)
  const dragRef = useRef(null)

  const modelo = MODELS.find((m) => m.id === modeloId)
  const corAtual = modelo.cores.find((c) => c.value === cor) ?? modelo.cores[0]
  const frames = useMemo(
    () => framesFrom(FRAME_SETS[`${modeloId}/${corAtual.folder}`] ?? {}),
    [modeloId, corAtual.folder],
  )
  const frameCount = frames.length

  const onModeloChange = (id) => {
    const next = MODELS.find((m) => m.id === id)
    setModeloId(id)
    setCor(next.corPadrao)
    setFrameIndex(0)
  }

  const onCorChange = (value) => {
    setCor(value)
    setFrameIndex(0)
  }

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

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="comprar">
      <div className="container comprar__row">
        <Reveal as="div" className="comprar__card">
          <h1 className="comprar__nome">{modelo.nome}</h1>
          <p className="comprar__preco">{formatPrice(modelo.preco)}</p>
          <p className="comprar__disclaimer">
            Preço com duas baterias, pode variar de acordo com a região.
          </p>
          <hr className="comprar__divider" />

          {sent ? (
            <p className="comprar__success">
              Recebemos seus dados! Nosso time vai entrar em contato para fechar sua {modelo.nome}.
            </p>
          ) : (
            <form className="comprar__form" onSubmit={onSubmit}>
              <input type="text" placeholder="Nome Completo" required />
              <input type="text" placeholder="Whatsapp" required />

              <div className="comprar__row2">
                <select
                  value={modeloId}
                  onChange={(e) => onModeloChange(e.target.value)}
                  aria-label="Modelo desejado"
                >
                  {MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.nome}
                    </option>
                  ))}
                  <option value="indeciso">Não decidi</option>
                </select>

                <select value={cor} onChange={(e) => onCorChange(e.target.value)} aria-label="Cor">
                  {modelo.cores.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="comprar__row2">
                <select defaultValue="" required aria-label="Estado">
                  <option value="" disabled>
                    Estado
                  </option>
                  {ESTADOS.map((uf) => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
                <input type="text" placeholder="Cidade" required />
              </div>

              <button type="submit" className="comprar__submit">
                QUERO ECONOMIZAR
              </button>
            </form>
          )}

          <p className="comprar__fineprint">** preço público sugerido</p>
        </Reveal>

        <div className="comprar__viewer-col">
          <span className="comprar__watermark" aria-hidden="true">
            {modelo.nome}
          </span>
          <div
            className="comprar__viewer"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {frames[frameIndex] && (
              <img
                src={frames[frameIndex]}
                alt={`${modelo.nome} em 360 graus`}
                className="comprar__frame"
                draggable={false}
              />
            )}
            <div className={`comprar__hint ${isDragging ? 'is-hidden' : ''}`}>
              <span className="comprar__hint-label">arraste para girar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
