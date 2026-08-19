import Reveal from './Reveal';
import studioDark from '../assets/social/studio-dark.png';
import lifestyle from '../assets/social/lifestyle.png';
import nightRide from '../assets/social/night-ride.png';
import blueScooter from '../assets/social/blue-scooter.png';
import cearaMap from '../assets/social/ceara-map.png';

export default function SocialSection() {
  return (
    <section className="social">
      <div className="container">
        <Reveal as="h2">Siga-nos e acompanhe nossa jornada</Reveal>
        <p className="social__handle">@Ellevmobilitybrasil</p>

        <div className="social__grid">
          <Reveal
            as="div"
            className="social__post social__post--dark"
            delay={0}
          >
            <img src={studioDark} alt="Ellev X13" className="social__image" />
            <span className="social__wordmark"></span>
          </Reveal>

          <Reveal as="div" className="social__post" delay={60}>
            <img
              src={lifestyle}
              alt="Cliente andando de Ellev X13"
              className="social__image"
            />
            <div className="social__post-overlay" />
            <p className="social__post-caption">
              Os sonhos mudam de forma,
              <br />
              mas muitas vezes nascem
              <br />
              da mesma inspiração.
            </p>
          </Reveal>

          <Reveal
            as="div"
            className="social__post social__post--tiled"
            delay={120}
          >
            <img
              src={nightRide}
              alt="Ellev à noite"
              className="social__image"
            />
          </Reveal>

          <Reveal
            as="div"
            className="social__post social__post--dark"
            delay={180}
          >
            <img
              src={blueScooter}
              alt="Sua nova Ellev X13"
              className="social__image"
            />
            <span className="social__wordmark social__wordmark--stacked">
              <small></small>
            </span>
          </Reveal>

          <Reveal
            as="div"
            className="social__post social__post--map"
            delay={240}
          >
            <img
              src={cearaMap}
              alt="Mapa do Ceará com lojas Ellev em Fortaleza e Sobral"
              className="social__image"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
