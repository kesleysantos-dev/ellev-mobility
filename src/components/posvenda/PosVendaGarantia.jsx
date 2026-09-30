import Reveal from '../Reveal'
import banner from '../../assets/posvenda/ellev-garantia.webp'

// O banner já traz título, ícones e CTA na própria arte — por isso aqui não
// tem overlay nem texto por cima, só a imagem inteira sem corte.
export default function PosVendaGarantia() {
  return (
    <section className="pv-garantia">
      <div className="container">
        <Reveal as="div" className="pv-garantia__card pv-garantia__card--banner">
          <img
            src={banner}
            alt="02 anos de garantia ELLEV: 2 anos de garantia, rede de oficinas, suporte especializado e atendimento em todo o Brasil."
            className="pv-garantia__banner"
            width="1983"
            height="793"
          />
        </Reveal>
      </div>
    </section>
  )
}
