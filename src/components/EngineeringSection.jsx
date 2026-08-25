import Reveal from './Reveal';
import controllerPhoto from '../assets/engenharia/c1.png';
import batteriesPhoto from '../assets/engenharia/c2.png';
import motorPhoto from '../assets/engenharia/c3.png';

const CARDS = [
  {
    title: 'CONTROLADORA INTELIGENTE',
    description: (
      <>
        Sistema eletrônico responsável por gerenciar com precisão a energia
        enviada da bateria ao motor, proporcionando aceleração progressiva,
        respostas rápidas e melhor eficiência energética.
        <br />
        Na ELLEV URBAN, a controladora trabalha integrada ao conjunto elétrico
        para otimizar o desempenho, oferecendo uma condução suave, eficiente e
        confiável no uso urbano.
      </>
    ),
    photo: controllerPhoto,
  },
  {
    title: 'BATERIA DE LÍTIO REMOVÍVEL',
    description:
      'Tecnologia 60V 24Ah desenvolvida para oferecer autonomia, eficiência e praticidade no dia a dia. A bateria removível permite recarregar com facilidade em diferentes ambientes, sem precisar levar a moto até o ponto de energia.           Com autonomia de até 65 km por carga, a ELLEV URBAN, entrega liberdade para os deslocamentos urbanos e mais praticidade na rotina.',
    photo: batteriesPhoto,
  },
  {
    title: 'MOTOR ELÉTRICO 1000W',
    description:
      'Desenvolvido para entregar eficiência, força e respostas suaves no uso urbano. O motor de 1000W trabalha em conjunto com a controladora e a bateria de lítio, proporcionando aceleração progressiva, baixo nível de ruído e excelente aproveitamento de energia.Potência na medida certa para transformar cada trajeto em uma experiência prática, econômica e silenciosa.',
    photo: motorPhoto,
  },
];

export default function EngineeringSection() {
  return (
    <section className="engineering">
      <div className="container">
        <div className="engineering__panel">
          <div className="engineering__intro">
            <div>
              <Reveal as="h2">Engenharia</Reveal>
              <span className="engineering__logo">Ellev Mobility</span>
            </div>
            <Reveal as="p" delay={80}>
              Desenvolvemos e testamos cada componente com precisão e cuidado.
              Da controladora ao motor, tudo é pensado para entregar
              performance, segurança e confiabilidade. Nossa engenharia é feita
              com tecnologia de ponta e atenção a cada detalhe — porque
              entendemos que a melhor experiência de pilotagem começa dentro da
              moto.
            </Reveal>
          </div>

          <div className="engineering__grid">
            {CARDS.map((card, i) => (
              <Reveal
                as="article"
                key={card.title}
                className="engineering__card"
                delay={i * 100}
              >
                <img
                  src={card.photo}
                  alt={card.title}
                  className="engineering__image"
                />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
