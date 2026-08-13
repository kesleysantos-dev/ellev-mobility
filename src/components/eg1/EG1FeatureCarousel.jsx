import { useRef, useState } from 'react'
import Reveal from '../Reveal'
import img1 from '../../assets/eg1/carousel/01-iluminacao-led.webp'
import img2 from '../../assets/eg1/carousel/02-aros-17.webp'
import img3 from '../../assets/eg1/carousel/03-suspensao-traseira.webp'
import img4 from '../../assets/eg1/carousel/04-painel-tft.webp'
import img5 from '../../assets/eg1/carousel/05-suspensao-invertida.webp'
import img6 from '../../assets/eg1/carousel/06-correia-dentada.webp'
import img7 from '../../assets/eg1/carousel/07-baterias.webp'
import img8 from '../../assets/eg1/carousel/08-cartao-nfc.webp'
import img9 from '../../assets/eg1/carousel/09-freio-traseiro.webp'

const SLIDES = [
  { img: img1, title: 'Iluminação Full LED' },
  { img: img2, title: 'Rodas Aro 17’’' },
  { img: img3, title: 'Suspensão Traseira Central' },
  { img: img4, title: 'Painel TFT Colorido 5’’' },
  { img: img5, title: 'Supensão Dianteira Invertida' },
  { img: img6, title: 'Transmissão via Correia Dentada' },
  { img: img7, title: '02 Baterias Removíveis' },
  { img: img8, title: 'Acionamento via Cartão NFC' },
  { img: img9, title: 'Freio Traseiro no Pé' },
]

export default function EG1FeatureCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (i) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[i]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    setActive(i)
  }

  const next = () => scrollToIndex(Math.min(active + 1, SLIDES.length - 1))

  return (
    <section className="eg1-features">
      <div className="container">
        <Reveal as="h2">Design, tecnologia e performance em cada detalhe</Reveal>

        <div className="eg1-features__track-wrap">
          <div className="eg1-features__track" ref={trackRef}>
            {SLIDES.map((s) => (
              <div
                key={s.title}
                className="eg1-features__card"
                style={{ backgroundImage: `url(${s.img})` }}
              >
                <span>{s.title}</span>
              </div>
            ))}
          </div>

          <button className="eg1-features__arrow" onClick={next} aria-label="Próximo slide">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="eg1-features__dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              className={`eg1-features__dot ${i === active ? 'is-active' : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir para o slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
