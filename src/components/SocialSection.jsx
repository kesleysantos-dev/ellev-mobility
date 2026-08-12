import Reveal from './Reveal';
import studioDark from '../assets/social/studio-dark.png';
import lifestyle from '../assets/social/lifestyle.png';
import nightRide from '../assets/social/night-ride.png';
import blueScooter from '../assets/social/blue-scooter.png';

const PINS = [
  { top: '10%', left: '58%', label: 'Crateús\nFortaleza\nMaracanaú' },
  { top: '24%', left: '78%', label: 'João Pessoa' },
  { top: '32%', left: '68%', label: 'Itabaiana\nNossa Sra.\ndo Socorro' },
  { top: '43%', left: '58%', label: 'Salvador' },
  { top: '66%', left: '66%', label: 'Rio de Janeiro' },
  { top: '78%', left: '48%', label: 'São Paulo\nSanto André\nGuarulhos' },
  { top: '95%', left: '30%', label: 'Porto Alegre\nSanta Rosa' },
];

function BrazilMap() {
  return (
    <div className="social__map">
      <svg viewBox="0 0 300 420" className="social__map-svg" aria-hidden="true">
        <path
          className="social__map-shape"
          d="M120 8
             C 150 4 178 10 196 26
             C 212 40 210 58 226 66
             C 246 76 258 70 268 88
             C 278 106 262 116 268 132
             C 274 148 292 152 288 172
             C 284 192 262 196 258 214
             C 254 232 268 244 258 262
             C 248 280 224 278 216 296
             C 208 314 220 330 204 346
             C 190 360 176 350 162 364
             C 150 376 152 394 134 402
             C 116 410 104 392 92 396
             C 78 400 72 414 56 408
             C 42 402 46 384 34 374
             C 22 364 8 366 6 350
             C 4 334 20 328 18 312
             C 16 296 2 288 8 272
             C 14 256 32 258 36 242
             C 40 226 26 214 34 198
             C 42 182 60 184 66 168
             C 72 152 60 138 70 122
             C 80 106 98 112 106 96
             C 114 80 100 66 108 50
             C 116 34 108 20 120 8 Z"
        />
        <path
          className="social__map-highlight"
          d="M196 26 C 212 40 210 58 226 66 C 246 76 258 70 268 88 C 278 106 262 116 268 132
             C 274 148 292 152 288 172 C 284 192 262 196 258 214 L 216 214 C 200 180 190 140 186 100
             C 182 70 186 46 196 26 Z"
        />
        <path
          className="social__map-highlight"
          d="M216 296 C 208 314 220 330 204 346 C 190 360 176 350 162 364 L 150 330 C 168 316 186 302 216 296 Z"
        />
        <path
          className="social__map-highlight"
          d="M134 402 C 116 410 104 392 92 396 C 78 400 72 414 56 408 C 42 402 46 384 34 374 L 60 358 C 86 372 110 388 134 402 Z"
        />
      </svg>

      {PINS.map((pin) => (
        <span
          key={pin.label}
          className="social__map-pin"
          style={{ top: pin.top, left: pin.left }}
        >
          <i />
          <span className="social__map-pin-label">
            {pin.label.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function SocialSection() {
  return (
    <section className="social">
      <div className="container">
        <Reveal as="h2">Siga-nos e acompanhe nossa jornada</Reveal>
        <p className="social__handle">@ellevmobilityy</p>

        <div className="social__grid">
          <Reveal
            as="div"
            className="social__post social__post--dark"
            delay={0}
          >
            <img src={studioDark} alt="Ellev VIBE" className="social__image" />
            <span className="social__wordmark">VIBE</span>
          </Reveal>

          <Reveal as="div" className="social__post" delay={60}>
            <img
              src={lifestyle}
              alt="Cliente andando de Ellev VIBE"
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
              alt="Sua nova Ellev VIBE"
              className="social__image"
            />
            <span className="social__wordmark social__wordmark--stacked">
              <small>Sua nova</small>
              VIBE
            </span>
          </Reveal>

          <Reveal
            as="div"
            className="social__post social__post--map"
            delay={240}
          >
            <BrazilMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
