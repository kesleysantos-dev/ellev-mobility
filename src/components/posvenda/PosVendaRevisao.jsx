import Reveal from '../Reveal'
import photo from '../../assets/posvenda/posvenda-revisao.webp'

export default function PosVendaRevisao() {
  return (
    <section className="pv-split pv-split--reverse">
      <div className="container">
        <Reveal as="div" className="pv-split__card">
          <Reveal as="div" className="pv-split__text" delay={300}>
            <h2>Revisão Preço Fixo</h2>
            <p>Na ELLEV, o pós-venda é simples e sem surpresas.</p>
            <p>
              Com o programa Revisão Preço Fixo, você sabe exatamente quanto vai pagar em cada
              manutenção, garantindo previsibilidade, economia e tranquilidade.
            </p>
            <p>
              Mais do que conveniência, é o nosso compromisso com a transparência e o cuidado em
              cada quilômetro rodado.
            </p>
          </Reveal>
          <img src={photo} alt="" className="pv-split__img" />
        </Reveal>
      </div>
    </section>
  )
}
