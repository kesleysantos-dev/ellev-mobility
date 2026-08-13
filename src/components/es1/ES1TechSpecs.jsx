import Reveal from '../Reveal'
import Accordion from '../eg1/Accordion'
import sideImg from '../../assets/es1/misc/accordion-side.webp'

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
        <p>Quantidade : Duas</p>
        <p>Tipo : Baterias de íons de lítio (Li-Ion)</p>
        <p>Células : 21700 níquel-manganês-cobalto (NMC)</p>
        <p>Tensão nominal : 72V</p>
        <p>Configuração : 20S6P</p>
        <p>Capacidades : 23,4Ah, 1685Wh</p>
        <p>Massa : 12 (x2)</p>
      </>
    ),
  },
  {
    title: 'Motor',
    content: (
      <>
        <p>Motor elétrico : Cubo de roda, de ímã permanente, arrefecido a ar</p>
        <p>Potência Máxima : 9 KW</p>
        <p>Potência Nominal : 5 KW</p>
        <p>Torque máximo : 205 Nm</p>
      </>
    ),
  },
  {
    title: 'Suspensão',
    content: (
      <>
        <p>Dianteira : Garfo telescópio hidráulico / Curso: 70 mm</p>
        <p>
          Traseira : Braço oscilante simétrico com monoamortecedor hidráulico (lado esquerdo) /
          Curso: 45 mm
        </p>
      </>
    ),
  },
  {
    title: 'Sistemas de Freios',
    content: (
      <>
        <p>Freios a disco : dianteiro/traseiro combinados (CBS)</p>
        <p>Acionamento : Hidráulico, manete direita (freio dianteiro) e esquerda (freio traseiro)</p>
        <p>Discos de freio : Ø 240 mm (dianteiro) e Ø 265 (traseiro)</p>
      </>
    ),
  },
  {
    title: 'Pneus e Rodas',
    content: (
      <>
        <p>Dianteiro : 100/80-14</p>
        <p>Traseiro : 130/70-13</p>
      </>
    ),
  },
  {
    title: 'Dimensões',
    content: (
      <>
        <p>Largura : 75cm</p>
        <p>Comprimento : 192cm</p>
        <p>Altura : 114cm</p>
        <p>Peso : 112kg (com 2 baterias)</p>
        <p>Carga máxima : 156kg</p>
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
          <Reveal as="img" src={sideImg} alt="Ellev ES1" className="es1-techspecs__img" />
        </div>
      </div>
    </section>
  )
}
