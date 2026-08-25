import Reveal from '../Reveal'
import Accordion from './Accordion'
import sideImg from '../../assets/eg1/misc/accordion-side.webp'

const ITEMS = [
  {
    title: 'Bateria',
    content: (
      <>
        <p>Capacidade da Bateria : 60V 24AH</p>
        <p>Bateria : Lítio Removível</p>
        <p>Autonomia : 65 km</p>
        <p>Tempo de Recarga : 8 horas</p>
      </>
    ),
  },
  {
    title: 'Motor',
    content: (
      <>
        <p>Potência : 1000W</p>
        <p>Velocidade Máxima : 32 km/h</p>
        <p>Capacidade de Escalada : 18°</p>
      </>
    ),
  },
  {
    title: 'Suspensão',
    content: <p>Amortecimento : Hidráulico</p>,
  },
  {
    title: 'Sistemas de Freios',
    content: <p>Freios : À disco hidráulicos</p>,
  },
  {
    title: 'Pneus e Rodas',
    content: (
      <>
        <p>Rodas : Pneus dianteira Aro 12 / traseira Aro 10</p>
        <p>Calibragem : 36 psi</p>
      </>
    ),
  },
  {
    title: 'Dimensões',
    content: (
      <>
        <p>Peso : 78 kg</p>
        <p>Carga máxima : 150 kg</p>
        <p>Tamanho (C x L x A) : 178,5 cm x 107 cm x 75 cm</p>
      </>
    ),
  },
]

export default function EG1TechSpecs() {
  return (
    <section className="eg1-techspecs">
      <div className="container">
        <Reveal as="h1">Especificações técnicas</Reveal>
        <div className="eg1-techspecs__grid">
          <Accordion items={ITEMS} />
          <Reveal as="img" src={sideImg} alt="Ellev URBAN" className="eg1-techspecs__img" />
        </div>
      </div>
    </section>
  )
}
