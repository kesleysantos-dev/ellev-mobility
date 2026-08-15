import { useMemo, useState } from 'react'
import Reveal from '../Reveal'
import { workshops, workshopStates } from '../../data/workshops'

// Por enquanto mostramos só as 3 primeiras oficinas — o restante fica
// oculto até decidirmos exibir a lista completa novamente.
const VISIBLE_LIMIT = 3

export default function OficinasList() {
  const [state, setState] = useState('')

  const filtered = useMemo(
    () => (state ? workshops.filter((w) => w.state === state) : workshops).slice(0, VISIBLE_LIMIT),
    [state],
  )

  return (
    <section className="of-list">
      <div className="container">
        <div className="of-list__filter">
          <span>FILTRO</span>
          <select value={state} onChange={(e) => setState(e.target.value)} aria-label="Estado">
            <option value="">Por Estado</option>
            {workshopStates.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </div>

        <div className="of-list__grid">
          {filtered.map((w, i) => (
            <Reveal as="div" className="of-card" key={`${w.name}-${i}`}>
              <div className="of-card__meta">
                <span className="of-card__city">{w.city}</span>
                <span className="of-card__state">{w.state}</span>
              </div>
              <h2 className="of-card__name">{w.name}</h2>
              <p className="of-card__address">{w.address}</p>
              {w.whatsapp && (
                <a
                  href={`https://wa.me/${w.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="of-card__whatsapp"
                >
                  <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M16.004 3C9.006 3 3.334 8.671 3.334 15.67c0 2.4.665 4.71 1.928 6.727L3 29l6.77-2.22a12.6 12.6 0 0 0 6.234 1.632h.005c6.996 0 12.667-5.672 12.667-12.67C28.676 8.744 23.003 3 16.004 3Zm0 23.2h-.004a10.5 10.5 0 0 1-5.35-1.465l-.384-.228-4.017 1.318 1.34-3.916-.25-.402a10.47 10.47 0 0 1-1.612-5.567c0-5.808 4.727-10.535 10.542-10.535 2.816 0 5.462 1.098 7.451 3.09a10.46 10.46 0 0 1 3.086 7.454c0 5.808-4.727 10.535-10.535 10.535l-.001-.001Zm5.774-7.892c-.316-.158-1.87-.923-2.16-1.028-.29-.106-.5-.158-.712.158-.21.316-.816 1.028-1 1.238-.184.21-.369.237-.685.079-.316-.158-1.334-.492-2.542-1.57-.94-.838-1.575-1.874-1.759-2.19-.184-.316-.02-.487.138-.645.142-.141.316-.369.474-.553.158-.184.21-.316.316-.527.105-.21.052-.395-.026-.553-.079-.158-.712-1.717-.976-2.352-.257-.617-.518-.534-.712-.544l-.606-.011c-.21 0-.553.079-.843.395-.29.316-1.106 1.08-1.106 2.638s1.132 3.062 1.29 3.273c.158.21 2.229 3.405 5.4 4.775.755.326 1.343.52 1.802.665.757.241 1.446.207 1.991.126.607-.091 1.87-.765 2.134-1.503.263-.738.263-1.371.184-1.503-.079-.132-.29-.21-.606-.369Z" />
                  </svg>
                  {w.whatsappDisplay}
                </a>
              )}
              <a
                href={`https://www.google.com/maps?q=${w.lat},%20${w.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="of-card__map"
              >
                ver no mapa
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
