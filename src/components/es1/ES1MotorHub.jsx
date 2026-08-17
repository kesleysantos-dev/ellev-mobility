import Reveal from '../Reveal'
import motorVideo from '../../assets/es1/video/motor-hub.mp4'

export default function ES1MotorHub() {
  return (
    <section className="es1-motorhub">
      <div className="container">
        <Reveal as="div" className="es1-motorhub__card">
          <div className="es1-motorhub__text">
            <h2>Motor de Última Geração</h2>
            <p>
              O motor da I5 JOY foi desenvolvido para entregar alto desempenho com baixa
              manutenção, combinando potência, eficiência e durabilidade:
            </p>
            <p className="es1-motorhub__spec">
              <strong>Potência real:</strong> 1.000 W, com velocidade máxima de 32 km/h.
            </p>
            <p className="es1-motorhub__spec">
              <strong>Capacidade de escalada:</strong> até 25°, mesmo em subidas do dia a dia.
            </p>
            <p className="es1-motorhub__spec">
              <strong>Maior eficiência:</strong> controle eletrônico garante aceleração suave e
              precisa, com menor perda de energia.
            </p>
            <p className="es1-motorhub__spec">
              <strong>Manutenção simplificada:</strong> design pensado para reduzir o tempo e o
              custo de manutenção no dia a dia.
            </p>
          </div>
          <video
            className="es1-motorhub__video"
            src={motorVideo}
            autoPlay
            muted
            playsInline
            loop
            aria-label="Animação do motor da I5 JOY"
          />
        </Reveal>
      </div>
    </section>
  )
}
