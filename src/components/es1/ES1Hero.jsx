import { useLayoutEffect, useRef } from 'react'
import heroPhoto from '../../assets/es1/gallery/pic-3.webp'
import Reveal from '../Reveal'

const SPECS = [
  { label: 'Vel. Máxima', value: '100km/h' },
  { label: 'Autonomia', value: 'até 100km*' },
  { label: 'Motor Hub', value: '9.000W' },
]

// Alinha o texto do preço pelo baseline real da fonte (não pela caixa do
// elemento) com o baseline dos rótulos de spec — mesma técnica usada na
// pagina da EG1, já que as duas fontes têm métricas diferentes.
function useBaselineAlign(referenceRef, targetRef) {
  useLayoutEffect(() => {
    const align = () => {
      const reference = referenceRef.current
      const target = targetRef.current
      if (!reference || !target) return
      if (window.innerWidth <= 600) {
        target.style.transform = ''
        return
      }

      const measureBaseline = (el) => {
        const cs = getComputedStyle(el)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
        const ascent = ctx.measureText(el.textContent).actualBoundingBoxAscent
        return el.getBoundingClientRect().top + ascent
      }

      target.style.transform = ''
      const delta = measureBaseline(reference) - measureBaseline(target)
      target.style.transform = `translateY(${delta}px)`
    }

    align()
    document.fonts?.ready?.then(align)
    window.addEventListener('resize', align)
    return () => window.removeEventListener('resize', align)
  }, [referenceRef, targetRef])
}

export default function ES1Hero() {
  const specLabelRef = useRef(null)
  const priceRef = useRef(null)
  useBaselineAlign(specLabelRef, priceRef)

  return (
    <section className="es1-hero">
      <img src={heroPhoto} alt="Ellev ES1" className="es1-hero__img" />
      <div className="es1-hero__overlay" />

      <div className="es1-hero__content">
        <Reveal as="h1" className="es1-hero__title">
          ES1
        </Reveal>
        <Reveal as="div" className="es1-hero__row" delay={120}>
          <div className="es1-hero__specs">
            {SPECS.map((s, i) => (
              <div key={s.label}>
                <span
                  className="es1-hero__spec-label"
                  ref={i === 0 ? specLabelRef : null}
                >
                  {s.label}
                </span>
                <strong className="es1-hero__spec-value">{s.value}</strong>
              </div>
            ))}
          </div>

          <p className="es1-hero__price" ref={priceRef}>
            Preço: a partir de <strong>R$ 23.500**</strong>
            <small>** preço público sugerido</small>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
