import heroVideo from '../assets/hero/video-hero.mp4'

const HERO_VIDEO_SRC = heroVideo

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        {HERO_VIDEO_SRC ? (
          <>
            <video
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
    </section>
  )
}
