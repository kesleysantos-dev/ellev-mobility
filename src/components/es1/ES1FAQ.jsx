import Reveal from '../Reveal'
import Accordion from '../eg1/Accordion'

const ITEMS = [
  {
    title: 'Precisa de CNH para dirigir?',
    content: <p>Sim. A habilitação tipo A é obrigatória para pilotar uma Ellev.</p>,
  },
  {
    title: 'Precisa de emplacamento?',
    content: <p>Sim, o emplacamento é obrigatório.</p>,
  },
  {
    title: 'Qual a vida útil das baterias?',
    content: (
      <>
        <p>
          As baterias das motos ELLEV possuem longa durabilidade. Elas foram projetadas para
          suportar cerca de 1.500 ciclos de carga completa, o que equivale a aproximadamente 8
          anos de uso, considerando um perfil médio de recarga a cada dois dias.
        </p>
        <p>
          Em outras palavras, é um componente feito para acompanhar você por muitos quilômetros,
          com autonomia e confiabilidade ao longo do tempo.
        </p>
      </>
    ),
  },
  {
    title: 'As motos podem molhar?',
    content: <p>Todas as motos Ellev, assim como seus componentes, são resistentes à água.</p>,
  },
  {
    title: 'É possível colocar baú e outros acessório?',
    content: <p>Sim, as motos Ellev suportam a instalação de baú e giroflex, entre outros.</p>,
  },
  {
    title: 'As motos são produzidas no Brasil?',
    content: (
      <p>Sim, as motos Ellev são produzidas no polo industrial de Manaus e possuem selo de certificação.</p>
    ),
  },
  {
    title: 'Quais são as especificações?',
    content: (
      <p>
        Todas as especificações, incluindo motor, bateria e outros componentes estão disponíveis
        na seção 'Especificações Técnicas' na página do produto.
      </p>
    ),
  },
]

export default function ES1FAQ() {
  return (
    <section className="es1-faq">
      <div className="container">
        <Reveal as="h2">Dúvidas frequentes</Reveal>
        <Accordion items={ITEMS} defaultOpen={0} />
        <p className="es1-faq__disclaimer">
          *A autonomia informada foi obtida em condições controladas de teste e deve ser
          utilizada como referência. O desempenho real pode variar conforme o modo de condução,
          velocidade, carga transportada, relevo, temperatura ambiente, pressão dos pneus e demais
          condições de uso.
        </p>
      </div>
    </section>
  )
}
