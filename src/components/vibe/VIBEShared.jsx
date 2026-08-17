import Reveal from '../Reveal'
import sharedPhoto from '../../assets/vibe/misc/x13-casal.png'

export default function VIBEShared() {
  return (
    <section className="vibe-shared">
      <div className="container">
        <Reveal as="div" className="vibe-shared__grid">
          <img src={sharedPhoto} alt="X13 com encosto para o carona" className="vibe-shared__img" />
          <div className="vibe-shared__text">
            <h1>A vida fica melhor quando é compartilhada</h1>
            <p>A X13 possui encosto para o carona e suporta até 180kg.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
