import { useLayoutEffect, useRef } from 'react'
import heroPhoto from '../../assets/vibe/misc/hero-bg.webp'
import heroLogo from '../../assets/vibe/hero-logo/hero-logo-vibe.png'
import Reveal from '../Reveal'

const SPECS = [
  { label: 'Autonomia', value: 'até 60km*' },
  { label: 'Bateria Removível', value: 'Íon-lítio' },
  {
    label: 'Documentação',
    value: (
      <>
        Sem CNH/
        <br />
        Emplacamento
      </>
    ),
  },
  { label: 'Garantia', value: '02 anos' },
]

// Mesma técnica usada nas paginas EG1 e ES1: alinha o preço pelo baseline
// real da fonte (não pela caixa do elemento) com o baseline do primeiro
// rótulo de spec.
function useBaselineAlign(referenceRef, targetRef) {
  useLayoutEffect(() => {
    const align = () => {
      const reference = referenceRef.current
      const target = targetRef.current
      if (!reference || !target) return

      target.style.transform = ''

      // O preço só deve ser alinhado ao baseline dos specs quando os dois
      // estão na mesma linha do flex row — abaixo de ~900px o row quebra
      // (flex-wrap) e o preço cai numa linha própria, então aplicar o
      // transform aqui empurraria ele de volta por cima da linha de specs.
      const specsBox = target.previousElementSibling
      const wrapped =
        specsBox &&
        target.getBoundingClientRect().top >=
          specsBox.getBoundingClientRect().bottom - 2
      if (wrapped) return

      const measureBaseline = (el) => {
        const cs = getComputedStyle(el)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
        const ascent = ctx.measureText(el.textContent).actualBoundingBoxAscent
        return el.getBoundingClientRect().top + ascent
      }

      const delta = measureBaseline(reference) - measureBaseline(target)
      target.style.transform = `translateY(${delta}px)`
    }

    align()
    document.fonts?.ready?.then(align)
    window.addEventListener('resize', align)
    return () => window.removeEventListener('resize', align)
  }, [referenceRef, targetRef])
}

export default function VIBEHero() {
  const specLabelRef = useRef(null)
  const priceRef = useRef(null)
  useBaselineAlign(specLabelRef, priceRef)

  return (
    <section className="vibe-hero">
      <img src={heroPhoto} alt="Ellev VIBE" className="vibe-hero__img" />
      <div className="vibe-hero__overlay" />

      <div className="vibe-hero__content">
        <Reveal
          as="img"
          src={heroLogo}
          alt="VIBE"
          className="vibe-hero__title--logo"
        />
        <Reveal as="div" className="vibe-hero__row" delay={120}>
          <div className="vibe-hero__specs">
            {SPECS.map((s, i) => (
              <div key={s.label}>
                <span
                  className="vibe-hero__spec-label"
                  ref={i === 0 ? specLabelRef : null}
                >
                  {s.label}
                </span>
                <strong className="vibe-hero__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>

          <p className="vibe-hero__price" ref={priceRef}>
            Preço: a partir de <strong>R$ 11.900</strong>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
