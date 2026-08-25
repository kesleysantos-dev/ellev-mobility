import { useState } from 'react'
import Reveal from '../Reveal'
import { MODELS, ESTADOS } from '../../data/comprarModels'

import urbanPhoto from '../../assets/comprar/urban.PNG'
import i5JoyPhoto from '../../assets/comprar/i5 joy.png'
import x13Photo from '../../assets/comprar/x13.PNG'
import bizzPhoto from '../../assets/comprar/bizz.PNG'
import neoPhoto from '../../assets/comprar/neo.png'
import x12Photo from '../../assets/comprar/x12.PNG'
import aionRPhoto from '../../assets/comprar/aion r.PNG'
import aionSPhoto from '../../assets/comprar/aion s.PNG'
import crossRPhoto from '../../assets/comprar/cross r.png'
import crossSPhoto from '../../assets/comprar/cross s.png'
import ev3Photo from '../../assets/comprar/ev3.PNG'

const WHATSAPP_NUMBER = '5585992236123'

const PHOTOS = {
  urban: urbanPhoto,
  'i5-joy': i5JoyPhoto,
  x13: x13Photo,
  bizz: bizzPhoto,
  neo: neoPhoto,
  x12: x12Photo,
  'aion-r': aionRPhoto,
  'aion-s': aionSPhoto,
  'cross-r': crossRPhoto,
  'cross-s': crossSPhoto,
  ev3: ev3Photo,
}

export default function ComprarConfigurator() {
  const [modeloId, setModeloId] = useState('urban')
  const [sent, setSent] = useState(false)

  const modelo = MODELS.find((m) => m.id === modeloId) ?? { nome: 'Ellev' }
  const foto = PHOTOS[modeloId]

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    const linhas = [
      'Quero economizar com a Ellev',
      `Nome: ${data.get('nome')}`,
      `Whatsapp: ${data.get('whatsapp')}`,
      `Modelo: ${modelo.nome}`,
      `Estado: ${data.get('estado')}`,
      `Cidade: ${data.get('cidade')}`,
    ]

    const texto = encodeURIComponent(linhas.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section className="comprar">
      <div className="container comprar__row">
        <Reveal as="div" className="comprar__card">
          <h1 className="comprar__nome">{modelo.nome}</h1>
          <hr className="comprar__divider" />

          {sent ? (
            <p className="comprar__success">
              Recebemos seus dados! Nosso time vai entrar em contato para fechar sua {modelo.nome}.
            </p>
          ) : (
            <form className="comprar__form" onSubmit={onSubmit}>
              <input type="text" name="nome" placeholder="Nome Completo" required />
              <input type="text" name="whatsapp" placeholder="Whatsapp" required />

              <select
                name="modelo"
                value={modeloId}
                onChange={(e) => setModeloId(e.target.value)}
                aria-label="Modelo desejado"
              >
                {MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nome}
                  </option>
                ))}
              </select>

              <div className="comprar__row2">
                <select name="estado" defaultValue="" required aria-label="Estado">
                  <option value="" disabled>
                    Estado
                  </option>
                  {ESTADOS.map((uf) => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
                <input type="text" name="cidade" placeholder="Cidade" required />
              </div>

              <button type="submit" className="comprar__submit">
                QUERO ECONOMIZAR
              </button>
            </form>
          )}
        </Reveal>

        <div className="comprar__viewer-col">
          <span className="comprar__watermark" aria-hidden="true">
            {modelo.nome}
          </span>
          <div className="comprar__viewer">
            {foto && (
              <img
                src={foto}
                alt={modelo.nome}
                className="comprar__frame"
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
