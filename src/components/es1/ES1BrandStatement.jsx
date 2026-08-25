import { Link } from 'react-router-dom'
import Reveal from '../Reveal'

export default function ES1BrandStatement() {
  return (
    <section className="es1-brand">
      <div className="container">
        <Reveal as="div" className="es1-brand__inner">
          <h2>Montada no Brasil, pensada para você</h2>
          <p>
            Na ELLEV, acreditamos que <strong>performance, design e tecnologia de ponta</strong> só
            fazem sentido quando estão ao seu alcance
            <br />
            com <strong>confiança e suporte de verdade.</strong>
          </p>
          <p>
            Por isso, nossas motos são <strong>montadas no Brasil,</strong> com garantia nacional e{' '}
            <strong>peças de reposição sempre à pronta entrega.</strong>
          </p>
          <p>
            Esse é o nosso compromisso: entregar mobilidade elétrica que une{' '}
            <strong>inovação e tranquilidade para o seu dia a dia.</strong>
          </p>
          <Link to="/concessionarias" className="btn btn--primary">
            Onde comprar
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
