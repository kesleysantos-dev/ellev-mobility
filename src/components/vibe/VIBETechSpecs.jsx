import Reveal from '../Reveal'
import Accordion from '../eg1/Accordion'
import sideImg from '../../assets/vibe/misc/accordion-side.webp'

const ITEMS = [
  {
    title: 'Bateria',
    content: (
      <>
        <p>Capacidade da Bateria : 60V 20AH</p>
        <p>Bateria : Chumbo-Ácido Selada</p>
        <p>Autonomia : 80 km</p>
        <p>Tempo de Recarga : 6 à 8 horas</p>
      </>
    ),
  },
  {
    title: 'Motor',
    content: (
      <>
        <p>Potência : 1000W</p>
        <p>Velocidade Máxima : 45 km/h</p>
      </>
    ),
  },
  {
    title: 'Suspensão',
    content: <p>Suspensão : Dianteira hidráulica / Traseira dupla mola</p>,
  },
  {
    title: 'Sistemas de Freios',
    content: <p>Freios : Disco / Tambor</p>,
  },
  {
    title: 'Pneus e Rodas',
    content: <p>Rodas : Pneu aro 14</p>,
  },
  {
    title: 'Dimensões',
    content: (
      <>
        <p>Peso : 84 kg</p>
        <p>Carga máxima : 180 kg</p>
      </>
    ),
  },
  {
    title: 'Painel e funções',
    content: (
      <>
        <p>Display : Painel digital LCD</p>
        <p>Funções : 3 velocidades, ré, alarme, buzina, seta e farol em LED</p>
      </>
    ),
  },
]

export default function VIBETechSpecs() {
  return (
    <section className="vibe-techspecs">
      <div className="container">
        <Reveal as="h1">Especificações técnicas</Reveal>
        <div className="vibe-techspecs__grid">
          <Accordion items={ITEMS} />
          <Reveal as="img" src={sideImg} alt="Ellev X13" className="vibe-techspecs__img" />
        </div>
      </div>
    </section>
  )
}
