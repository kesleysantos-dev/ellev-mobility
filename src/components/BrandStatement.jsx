import Reveal from './Reveal';
import brandPhoto from '../assets/BrandStatement/card principal.png';

export default function BrandStatement() {
  return (
    <section className="brand-statement">
      <div className="container">
        <div className="photo-panel">
          <img src={brandPhoto} alt="" className="photo-panel__photo" />
          <div className="photo-panel__overlay" />
          <Reveal as="div" className="photo-panel__content">
            <h2 className="photo-panel__title">
              Performance, tecnologia e design: o futuro é brasileiro
            </h2>
            <p className="photo-panel__text">
              Na ELLEV, produzimos no Brasil motos elétricas que unem potência
              real, tecnologia de ponta e design sofisticado. Nosso compromisso
              vai além da inovação: garantimos peças de reposição, suporte
              especializado e pronta entrega em todo o país. Porque mobilidade
              elétrica só faz sentido quando vem acompanhada de confiança.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
