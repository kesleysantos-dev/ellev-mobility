import Reveal from '../Reveal'
import Accordion from '../eg1/Accordion'
import sideImg from '../../assets/vibe/misc/accordion-side.webp'

const ITEMS = [
  {
    title: 'Dimensões',
    content: (
      <>
        <p>Largura : 70cm</p>
        <p>Comprimento : 185cm</p>
        <p>Altura : 110cm</p>
        <p>Entre eixos : 130cm</p>
        <p>Carga máxima : 180kg</p>
      </>
    ),
  },
  {
    title: 'Bateria',
    content: (
      <>
        <p>Quantidade : Uma</p>
        <p>Tipo : Bateria de íons de lítio</p>
        <p>Tensão Nominal : 60V</p>
        <p>Capacidade : 24Ah</p>
      </>
    ),
  },
  {
    title: 'Motor',
    content: (
      <>
        <p>Motor elétrico : Cubo de roda</p>
        <p>Potência Nominal : 1000W</p>
      </>
    ),
  },
  {
    title: 'Suspensão',
    content: (
      <>
        <p>Dianteira : Hidráulica</p>
        <p>Traseira : Duplo amortecedor</p>
      </>
    ),
  },
  {
    title: 'Sistemas de Freios',
    content: (
      <>
        <p>Dianteiro : Freio à disco – 180mm</p>
        <p>Traseiro : Freio à tambor – 110mm</p>
      </>
    ),
  },
  {
    title: 'Pneus e Rodas',
    content: (
      <>
        <p>Dianteiro : 3.0" x 10"</p>
        <p>Traseiro : 3.0" x 10"</p>
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
          <Reveal as="img" src={sideImg} alt="Ellev VIBE" className="vibe-techspecs__img" />
        </div>
      </div>
    </section>
  )
}
