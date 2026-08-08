import { useState } from 'react'
import Reveal from './Reveal'

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

export default function BMSSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="bms">
      <div className="container">
        <Reveal as="h2">Tecnologia de BMS</Reveal>

        <div className="bms__grid">
          <div className="bms__list">
            {FEATURES.map((f, i) => (
              <button
                key={f.title}
                className={`bms__item ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <h3 className="bms__item-title">
                  {String(i + 1).padStart(2, '0')}. {f.title}
                </h3>
                <p className="bms__item-text">{f.text}</p>
              </button>
            ))}
          </div>

          <Reveal as="div" className="bms__media" delay={150}>
            {/* Substitua por <video autoPlay muted loop playsInline> quando o arquivo chegar */}
            <div className="bms__video-placeholder">
              <span>VÍDEO — animação técnica (substituir)</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
