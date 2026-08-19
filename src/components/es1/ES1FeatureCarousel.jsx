import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'
import img1 from '../../assets/es1/carousel/IMG_9392.PNG'
import img2 from '../../assets/es1/carousel/IMG_9393.PNG'
import img3 from '../../assets/es1/carousel/IMG_9394.PNG'
import img4 from '../../assets/es1/carousel/IMG_9395.PNG'
import img5 from '../../assets/es1/carousel/IMG_9396.PNG'

const SLIDES = [
  { img: img1, title: 'Design Retrô Premium' },
  { img: img2, title: 'Baú Traseiro Espaçoso' },
  { img: img3, title: 'Farol Full LED' },
  { img: img4, title: 'Painel Digital com NFC' },
  { img: img5, title: 'Freio a Disco Dianteiro' },
]

const COUNT = SLIDES.length

// Três cópias em sequência: a do meio é a "real" (onde o carrossel fica em
// repouso). Isso garante espaço de sobra pra rolar um passo além de
// qualquer ponta sem esbarrar no limite de scroll do navegador. Assim que
// o scroll suave termina, se saímos da cópia do meio, saltamos sem
// animação de volta pra cópia central na mesma posição relativa — como as
// cópias são idênticas, o salto é imperceptível e o loop parece infinito.
const TRIPLE = [
  ...SLIDES.map((s, i) => ({ ...s, key: `a-${i}` })),
  ...SLIDES.map((s, i) => ({ ...s, key: `b-${i}` })),
  ...SLIDES.map((s, i) => ({ ...s, key: `c-${i}` })),
]

export default function ES1FeatureCarousel() {
  const trackRef = useRef(null)
  const [pos, setPos] = useState(COUNT)

  const active = ((pos % COUNT) + COUNT) % COUNT

  const scrollToPos = (index, behavior = 'smooth') => {
    const track = trackRef.current
    const card = track?.children[index]
    if (!track || !card) return
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior })
  }

  useEffect(() => {
    scrollToPos(COUNT, 'auto')
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScrollEnd = () => {
      if (pos < COUNT) {
        const recentered = pos + COUNT
        setPos(recentered)
        scrollToPos(recentered, 'auto')
      } else if (pos >= COUNT * 2) {
        const recentered = pos - COUNT
        setPos(recentered)
        scrollToPos(recentered, 'auto')
      }
    }
    track.addEventListener('scrollend', onScrollEnd)
    return () => track.removeEventListener('scrollend', onScrollEnd)
  }, [pos])

  const goTo = (nextPos) => {
    setPos(nextPos)
    scrollToPos(nextPos)
  }

  const next = () => goTo(pos + 1)
  const prev = () => goTo(pos - 1)
  const goToSlide = (i) => goTo(COUNT + i)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
  }

  return (
    <section className="es1-features">
      <div className="container">
        <Reveal as="h2">Leveza e praticidade em cada detalhe</Reveal>
      </div>

      <div className="es1-features__track-wrap" onKeyDown={onKeyDown}>
        <div
          className="es1-features__track"
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label="Diferenciais da I5 JOY — use as setas do teclado para navegar"
        >
          {TRIPLE.map((s) => (
            <div
              key={s.key}
              className="es1-features__card"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <span>{s.title}</span>
            </div>
          ))}
        </div>

        <button className="es1-features__arrow es1-features__arrow--prev" onClick={prev} aria-label="Slide anterior">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="es1-features__arrow es1-features__arrow--next" onClick={next} aria-label="Próximo slide">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="container">
        <div className="es1-features__dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              className={`es1-features__dot ${i === active ? 'is-active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Ir para o slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
