import Reveal from '../Reveal'
import lifestylePhoto from '../../assets/vibe/misc/lifestyle.webp'

export default function VIBELifestyle() {
  return (
    <section className="vibe-lifestyle">
      <div className="container">
        <Reveal as="div" className="vibe-lifestyle__inner">
          <h2>
            Uma nova forma de se mover.
            <br />A mesma confiança Ellev.
          </h2>
          <p>
            Com 02 anos de garantia, design moderno, tecnologia e toda a estrutura de pós-venda
            da ELLEV, a VIBE é a escolha ideal para quem quer transformar o dia a dia urbano em
            uma experiência mais prática, acessível e confiável.
          </p>
        </Reveal>
        <Reveal as="img" src={lifestylePhoto} alt="Ellev VIBE no dia a dia" className="vibe-lifestyle__img" delay={150} />
      </div>
    </section>
  )
}
