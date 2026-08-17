import Reveal from '../Reveal'
import photo from '../../assets/posvenda/posvenda-manual.webp'

export default function PosVendaManual() {
  return (
    <section className="pv-split">
      <div className="container">
        <Reveal as="div" className="pv-split__card">
          <img src={photo} alt="" className="pv-split__img" />
          <Reveal as="div" className="pv-split__text" delay={300}>
            <h2>Manual do usuário</h2>
            <p>
              Tenha sempre à mão todas as informações sobre sua moto elétrica ELLEV.
            </p>
            <p>
              No Manual do Proprietário, você encontra orientações de uso, manutenção preventiva,
              segurança, garantias e dicas para aproveitar o máximo da sua moto. Transparência e
              praticidade para que você pilote com confiança todos os dias.
            </p>
          </Reveal>
        </Reveal>
      </div>
    </section>
  )
}
