import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import bmsChipPhoto from '../assets/BMS/chipe BMS.png'

// Troque por: import bmsVideo from '../assets/bms-demo.mp4' quando o vídeo chegar
const BMS_VIDEO_SRC = null

const FEATURES = [
  {
    title: 'Microcontrolador Processador',
    text: 'O cérebro do sistema, responsável por processar os dados e tomar decisões com base nas leituras dos sensores.',
  },
  {
    title: 'Circuitos de Balanceamento de Células',
    text: 'Garantem que todas as células da bateria estejam carregadas uniformemente.',
  },
  {
    title: 'Proteção Contra Sobrecarga / Descarga Profunda',
    text: 'Evita danos à bateria em situações de sobrecarga ou descarga excessiva.',
  },
  {
    title: 'Proteção',
    text: 'Desligamento automático em caso de falhas como sobrecarga, descarga profunda, curto-circuito e superaquecimento.',
  },
  {
    title: 'Previsão de Falhas',
    text: 'Algoritmos para prever possíveis falhas antes que elas ocorram.',
  },
  {
    title: 'Sensores de Temperatura',
    text: 'Monitoram a temperatura da bateria para evitar superaquecimento.',
  },
]

// Distância fixa do topo onde os cards (esquerda) e a mídia (direita)
// grudam — as duas colunas usam o mesmo valor para fixar na mesma altura.
const STICKY_TOP = 60

export default function BMSSection() {
  const listRef = useRef(null)
  const mediaWrapRef = useRef(null)
  const mediaRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    const wrap = mediaWrapRef.current
    const media = mediaRef.current
    if (!list || !wrap || !media) return

    const computeLayout = () => {
      // O efeito sticky (cards e mídia grudando juntos) só existe no
      // layout de 2 colunas do desktop. Em telas ≤1024px tudo empilha em
      // coluna única — sem isso, a altura calculada pra lista "vazava"
      // pra caixa da imagem e deixava um vão enorme abaixo dela.
      if (window.innerWidth <= 1024) {
        list.style.height = ''
        wrap.style.height = ''
        return
      }

      // Altura explícita: dentro de um grid, a caixa de contenção do
      // sticky é resolvida a partir do tamanho intrínseco (auto), o que
      // trava a posição dos cards do meio. Fixar a altura remove essa
      // ambiguidade (mesmo problema encontrado antes nesta section).
      const children = Array.from(list.children)
      let listTotal = 0
      children.forEach((item, i) => {
        listTotal += item.offsetHeight
        // A margem do último card não conta — o fim da lista deve ser
        // exatamente o fundo dele, sem sobra.
        if (i < children.length - 1) {
          listTotal += parseFloat(getComputedStyle(item).marginBottom) || 0
        }
      })

      // A mídia precisa do trilho suficiente para nunca precisar encolher
      // (STICKY_TOP + a própria altura dela). As duas colunas usam a
      // maior das duas alturas, para terminar juntas no mesmo ponto —
      // depois disso a section inteira sobe normalmente.
      const mediaTotal = STICKY_TOP + media.offsetHeight
      const total = Math.max(listTotal, mediaTotal)

      list.style.height = `${total}px`
      wrap.style.height = `${total}px`
    }

    computeLayout()
    document.fonts?.ready?.then(computeLayout)
    window.addEventListener('resize', computeLayout)
    return () => window.removeEventListener('resize', computeLayout)
  }, [])

  return (
    <section className="bms">
      <div className="container">
        <Reveal as="h2">Tecnologia Ellev de BMS</Reveal>
        <Reveal as="span" className="bms__eyebrow" delay={80}>
          Bateria inteligente
        </Reveal>

        <div className="bms__grid">
          <div className="bms__list" ref={listRef}>
            {FEATURES.map((f, i) => (
              <div key={f.title} className="bms__item" style={{ zIndex: i + 1 }}>
                <h3 className="bms__item-title">
                  {String(i + 1).padStart(2, '0')}. {f.title}
                </h3>
                <p className="bms__item-text">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="bms__media-wrap" ref={mediaWrapRef}>
            <div className="bms__media" ref={mediaRef}>
              {BMS_VIDEO_SRC ? (
                <video
                  className="bms__video"
                  src={BMS_VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img src={bmsChipPhoto} alt="Chip do BMS" className="bms__video" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
