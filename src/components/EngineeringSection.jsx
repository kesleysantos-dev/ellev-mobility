import Reveal from './Reveal'
import controllerPhoto from '../assets/c1.png'
import batteriesPhoto from '../assets/c2.png'
import motorPhoto from '../assets/c3.png'

const CARDS = [
  {
    title: 'Controladora FOC 3.0',
    description:
      'Mais inteligência, precisão e resposta. A controladora FOC 3.0 garante aceleração imediata, indo de 0 a 50 km/h em apenas 2,9s, com controle vetorial de torque e análise contínua de dados. Oferece quatro modos de condução (Eco, Standard, Sport e Turbo) e recuperação inteligente de energia, além de comunicação CAN de padrão automotivo para máxima confiabilidade.',
    photo: controllerPhoto,
  },
  {
    title: 'Duas baterias removíveis',
    description:
      'Alta densidade, estrutura selada em alumínio e sistema de gerenciamento eletrônico (BMS) que monitora temperatura, tensão e corrente em tempo real. As duas baterias removíveis oferecem praticidade, segurança e até 1.500 ciclos de vida útil com desempenho consistente.',
    photo: batteriesPhoto,
  },
  {
    title: 'Motor central de alta eficiência',
    description:
      'Desenvolvido para máxima eficiência e estabilidade, o motor central da ELLEV oferece melhor distribuição de peso e resposta imediata na aceleração. Seu design compacto e silencioso garante torque contínuo, maior controle em curvas e desempenho consistente em qualquer terreno.',
    photo: motorPhoto,
  },
]

export default function EngineeringSection() {
  return (
    <section className="engineering">
      <div className="container">
        <div className="engineering__panel">
          <div className="engineering__intro">
            <div>
              <Reveal as="h2">Engenharia</Reveal>
              <span className="engineering__logo">SUA MARCA</span>
            </div>
            <Reveal as="p" delay={80}>
              Desenvolvemos e testamos cada componente com precisão e cuidado. Da controladora ao
              motor, tudo é pensado para entregar performance, segurança e confiabilidade. Nossa
              engenharia é feita com tecnologia de ponta e atenção a cada detalhe — porque
              entendemos que a melhor experiência de pilotagem começa dentro da moto.
            </Reveal>
          </div>

          <div className="engineering__grid">
            {CARDS.map((card, i) => (
              <Reveal as="article" key={card.title} className="engineering__card" delay={i * 100}>
                <img src={card.photo} alt={card.title} className="engineering__image" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
