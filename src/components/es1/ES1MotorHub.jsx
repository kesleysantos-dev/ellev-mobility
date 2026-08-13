import Reveal from '../Reveal'
import motorVideo from '../../assets/es1/video/motor-hub.mp4'

export default function ES1MotorHub() {
  return (
    <section className="es1-motorhub">
      <div className="container">
        <Reveal as="div" className="es1-motorhub__card">
          <div className="es1-motorhub__text">
            <h2>Motor Hub de Última Geração</h2>
            <p>
              O motor da ES1 foi desenvolvido para entregar alto desempenho com baixa
              manutenção, combinando potência, eficiência e durabilidade:
            </p>
            <p className="es1-motorhub__spec">
              <strong>3 em 1</strong>: motor, controladora e balança integrados — menos peças,
              mais confiabilidade.
            </p>
            <p className="es1-motorhub__spec">
              <strong>Potência real:</strong> até 9.000 W, com velocidade máxima de 100 km/h.
            </p>
            <p className="es1-motorhub__spec">
              <strong>Maior eficiência:</strong> controle vetorial FOC3.0 garante aceleração
              suave e precisa, com menor perda de energia.
            </p>
            <p className="es1-motorhub__spec">
              <strong>Manutenção simplificada:</strong> o design modular permite desmontagem
              rápida do cubo, reduzindo o tempo e o custo de manutenção — além de possibilitar
              trocar pneu ou realizar serviços na roda sem remover o motor.
            </p>
          </div>
          <video
            className="es1-motorhub__video"
            src={motorVideo}
            autoPlay
            muted
            playsInline
            loop
            aria-label="Animação do Motor Hub da ES1"
          />
        </Reveal>
      </div>
    </section>
  )
}
