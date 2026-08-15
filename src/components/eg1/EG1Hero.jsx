import { useLayoutEffect, useRef } from 'react'
import heroPhoto from '../../assets/eg1/gallery/pic-3.webp'
import Reveal from '../Reveal'

const SPECS = [
  { label: 'Vel. Máxima', value: '100km/h' },
  { label: 'Autonomia', value: 'até 130km*' },
  { label: '0-50km/h', value: '2.9 seg' },
]

// Alinha o texto do preço pelo baseline real da fonte (não pela caixa do
// elemento) com o baseline dos valores de spec — as duas fontes têm
// métricas diferentes, então alinhar só pela borda inferior deixa um
// desnível visual mesmo com alturas de linha "iguais".
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

export default function EG1Hero() {
  const specLabelRef = useRef(null)
  const priceRef = useRef(null)
  useBaselineAlign(specLabelRef, priceRef)

  return (
    <section className="eg1-hero">
      <img src={heroPhoto} alt="Ellev EG1" className="eg1-hero__img" />
      <div className="eg1-hero__overlay" />

      <div className="eg1-hero__content">
        <Reveal as="h1" className="eg1-hero__title">
          EG1
        </Reveal>
        <Reveal as="div" className="eg1-hero__row" delay={120}>
          <div className="eg1-hero__specs">
            {SPECS.map((s, i) => (
              <div key={s.label}>
                <span
                  className="eg1-hero__spec-label"
                  ref={i === 0 ? specLabelRef : null}
                >
                  {s.label}
                </span>
                <strong className="eg1-hero__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>

          <p className="eg1-hero__price" ref={priceRef}>
            Preço: a partir de <strong>R$ 28.500**</strong>
            <small>** preço público sugerido</small>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
