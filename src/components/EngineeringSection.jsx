import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

const CARDS = [
  {
    title: 'Controladora FOC 3.0',
    description:
      'Mais inteligência, precisão e resposta. Aceleração de 0 a 50 km/h em apenas 2,9s, com quatro modos de condução e recuperação de energia na frenagem.',
  },
  {
    title: 'Duas baterias removíveis',
    description:
      'Alta densidade, estrutura selada em alumínio e sistema de gerenciamento eletrônico (BMS) que monitora temperatura, tensão e corrente em tempo real. Até 1.500 ciclos de vida útil.',
  },
  {
    title: 'Motor central de alta eficiência',
    description:
      'Desenvolvido para máxima eficiência e estabilidade, o motor central oferece melhor distribuição de peso e resposta imediata na aceleração.',
  },
]

export default function EngineeringSection() {
  return (
    <section className="engineering">
      <div className="container">
        <div className="engineering__intro">
          <div>
            <Reveal as="h2">Engenharia</Reveal>
            <span className="engineering__logo">SUA MARCA</span>
          </div>
          <Reveal as="p" delay={80}>
            Cada componente é desenvolvido e testado internamente com cuidado. Da controladora ao
            motor, tudo é pensado para entregar performance, segurança e confiabilidade.
          </Reveal>
        </div>

        <div className="engineering__grid">
          {CARDS.map((card, i) => (
            <Reveal as="article" key={card.title} className="engineering__card" delay={i * 100}>
              <ImagePlaceholder label={card.title} className="engineering__image" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
