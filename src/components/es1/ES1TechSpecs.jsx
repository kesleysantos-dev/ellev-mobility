import Reveal from '../Reveal'
import Accordion from '../eg1/Accordion'
import sideImg from '../../assets/es1/misc/accordion-side-front.webp'

const ITEMS = [
  {
    title: 'Bateria',
    content: (
      <>
        <p>Capacidade da Bateria : 60V 20AH</p>
        <p>Bateria : Lítio Removível</p>
        <p>Autonomia : 45 a 60 km</p>
        <p>Tempo de Recarga : 5–6 h</p>
      </>
    ),
  },
  {
    title: 'Motor',
    content: (
      <>
        <p>Potência : 1000W</p>
        <p>Velocidade Máxima : 32 km/h</p>
        <p>Capacidade de Escalada : 25°</p>
      </>
    ),
  },
  {
    title: 'Suspensão',
    content: <p>Amortecimento : Hidráulicos</p>,
  },
  {
    title: 'Sistemas de Freios',
    content: <p>Freios : À Disco</p>,
  },
  {
    title: 'Pneus e Rodas',
    content: (
      <>
        <p>Rodas : 60/100-10" pneu a vácuo Aro 10</p>
        <p>Calibragem : 33 psi</p>
      </>
    ),
  },
  {
    title: 'Dimensões',
    content: (
      <>
        <p>Peso : 75,0 kg</p>
        <p>Carga máxima : 150 kg</p>
        <p>Tamanho (C x L x A) : 174 cm x 63 cm x 109 cm</p>
      </>
    ),
  },
]

export default function ES1TechSpecs() {
  return (
    <section className="es1-techspecs">
      <div className="container">
        <Reveal as="h1">Especificações técnicas</Reveal>
        <div className="es1-techspecs__grid">
          <Accordion items={ITEMS} />
          <Reveal as="img" src={sideImg} alt="Ellev I5 JOY" className="es1-techspecs__img" />
        </div>
      </div>
    </section>
  )
}
