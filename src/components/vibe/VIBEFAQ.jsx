import Reveal from '../Reveal'
import Accordion from '../eg1/Accordion'

const ITEMS = [
  {
    title: 'Precisa de CNH para dirigir?',
    content: <p>Não. Por se tratar de um veículo autopropelido, a CNH é dispensada.</p>,
  },
  {
    title: 'Precisa de emplacamento?',
    content: <p>Não. Por se tratar de um veículo autopropelido, o emplacamento é dispensado.</p>,
  },
  {
    title: 'É possível colocar baú ou outros acessórios?',
    content: (
      <p>As motos VIBE já acompanham encosto para o carona e baú. Basta escolher na hora da compra.</p>
    ),
  },
  {
    title: 'Qual a garantia da VIBE?',
    content: (
      <p>
        A ELLEV oferece garantia de 24 meses para defeitos de fabricação em todos os componentes
        não consumíveis (motor, quadro, bateria, entre outros).
      </p>
    ),
  },
  {
    title: 'Existe serviço de assistência técnica?',
    content: (
      <p>
        Sim! Em todas as lojas ELLEV temos oficinas de alto padrão com mecânicos preparados para
        te atender. Em cidades que não possuem lojas ELLEV, você pode ser atendido remotamente ou
        indicamos uma oficina autorizada na sua região.
      </p>
    ),
  },
  {
    title: 'Como funciona o carregamento?',
    content: (
      <p>
        A VIBE conta com bateria de lítio que pode ser removida para recarga. Além disso, ela
        também conta com uma porta de carregamento direto na própria moto. Ou seja, você pode
        carregá-la sem precisar remover a bateria.
      </p>
    ),
  },
]

export default function VIBEFAQ() {
  return (
    <section className="vibe-faq">
      <div className="container">
        <Reveal as="h2">Dúvidas frequentes</Reveal>
        <Accordion items={ITEMS} defaultOpen={0} />
        <p className="vibe-faq__disclaimer">
          *A autonomia informada foi obtida em condições controladas de teste e deve ser
          utilizada como referência. O desempenho real pode variar conforme o modo de condução,
          velocidade, carga transportada, relevo, temperatura ambiente, pressão dos pneus e demais
          condições de uso.
        </p>
      </div>
    </section>
  )
}
