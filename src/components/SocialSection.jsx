import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

const POSTS = Array.from({ length: 5 }, (_, i) => i + 1)

export default function SocialSection() {
  return (
    <section className="social">
      <div className="container">
        <Reveal as="h2">Siga-nos e acompanhe nossa jornada</Reveal>
        <p className="social__handle">@suamarca</p>

        <div className="social__grid">
          {POSTS.map((n, i) => (
            <Reveal as="div" key={n} delay={i * 60}>
              <ImagePlaceholder label={`Post ${n}`} className="social__image" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
