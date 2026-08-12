import { useRef, useState } from 'react'

// Troque por: import heroVideo from '../assets/hero/video-hero.mp4'
// (aguardando versão em melhor qualidade — o arquivo atual está em 368x368)
const HERO_VIDEO_SRC = null

export default function Hero() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)

  const toggle = () => {
    const v = videoRef.current
    if (!v) {
      setPlaying((p) => !p)
      return
    }
    if (playing) v.pause()
    else v.play()
    setPlaying((p) => !p)
  }

  return (
    <section className="hero" id="top">
      <div className="hero__media">
        {HERO_VIDEO_SRC ? (
          <>
            <video
              ref={videoRef}
              className="hero__video"
              src={HERO_VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="hero__video-overlay" />
          </>
        ) : (
          <div className="hero__video-placeholder">
            <span className="hero__video-label">VÍDEO — pessoa andando de veículo à noite</span>
          </div>
        )}
      </div>

      <button className="hero__toggle" onClick={toggle} aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}>
        {playing ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="7,5 19,12 7,19" />
          </svg>
        )}
      </button>
    </section>
  )
}
