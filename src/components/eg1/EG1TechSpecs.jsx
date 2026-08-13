import Reveal from '../Reveal'
import Accordion from './Accordion'
import sideImg from '../../assets/eg1/misc/accordion-side.webp'

const ITEMS = [
  {
    title: 'Chassi',
    content: (
      <>
        <p>Chassi : Tipo berço duplo</p>
        <p>Estrutura : Tubular</p>
        <p>Material : Aço carbono</p>
      </>
    ),
  },
  {
    title: 'Bateria',
    content: (
      <>
        <p>Quantidade : Uma</p>
        <p>Tipo : Baterias de íons de lítio (Li-Ion)</p>
        <p>Células : 21700 níquel-manganês-cobalto (NMC)</p>
        <p>Tensão nominal : 72V</p>
        <p>Configuração : 20S6P</p>
        <p>Capacidades : 28,5Ah, 2052Wh</p>
        <p>Massa : 12 (x2)</p>
      </>
    ),
  },
  {
    title: 'Motor',
    content: (
      <>
        <p>Motor elétrico : Central, de ímã permanente, arrefecido a ar</p>
        <p>Potência Máxima : 10 KW</p>
        <p>Potência Nominal : 5 KW</p>
        <p>Torque máximo : 305 Nm</p>
      </>
    ),
  },
  {
    title: 'Transmissão',
    content: <p>Transmissão : Polias e Carreira dentada</p>,
  },
  {
    title: 'Suspensão',
    content: (
      <>
        <p>Dianteira : Garfo telescópio hidráulico / Curso: 120 mm</p>
        <p>Traseira : Braço oscilante simétrico com monoamortecedor hidráulico (central) / Curso: 50 mm</p>
      </>
    ),
  },
  {
    title: 'Sistemas de Freios',
    content: (
      <>
        <p>Freios a disco : dianteiro/traseiro combinados (CBS)</p>
        <p>Acionamento : Hidráulico, manete direita (freio dianteiro) e pedal direito (freio traseiro)</p>
        <p>Discos de freio : Ø 290 mm (dianteiro) e Ø 220 (traseiro)</p>
      </>
    ),
  },
  {
    title: 'Pneus e Rodas',
    content: (
      <>
        <p>Dianteiro : 100/80-17</p>
        <p>Traseiro: 130/70-17</p>
      </>
    ),
  },
  {
    title: 'Dimensões',
    content: (
      <>
        <p>Largura : 79cm</p>
        <p>Comprimento : 197cm</p>
        <p>Altura : 105cm</p>
        <p>Peso : 111kg (com 2 baterias)</p>
        <p>Carga máxima : 180kg</p>
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
          <Reveal as="img" src={sideImg} alt="Ellev EG1" className="eg1-techspecs__img" />
        </div>
      </div>
    </section>
  )
}
