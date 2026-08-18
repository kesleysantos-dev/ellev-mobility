import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Accordion from '../components/eg1/Accordion'
import { CATEGORY_PRODUCT_MAP } from '../data/categoryProducts'
import './categoryProduct.css'

const WHATSAPP_NUMBER = '5500000000000'

const SPEC_SECTIONS = [
  { title: 'Bateria', key: 'bateria' },
  { title: 'Motor', key: 'motor' },
  { title: 'Suspensão', key: 'suspensao' },
  { title: 'Sistemas de freios', key: 'freios' },
  { title: 'Pneus e rodas', key: 'pneus' },
  { title: 'Dimensões', key: 'dimensoes' },
]

export default function CategoryProductPage() {
  const { slug } = useParams()
  const product = CATEGORY_PRODUCT_MAP[slug]

  if (!product) {
    return (
      <div className="moto-page">
        <section className="moto-techspecs moto-techspecs--empty">
          <div className="container">
            <h1>Produto não encontrado</h1>
            <Link to="/" className="btn btn--primary">
              Voltar ao início
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const items = SPEC_SECTIONS.map(({ title, key }) => {
    const rows = product.specs?.[key]
    return {
      title,
      content:
        rows && rows.length > 0 ? (
          <>
            {rows.map((r) => (
              <p key={r.label}>
                {r.label} : {r.value}
              </p>
            ))}
          </>
        ) : (
          <p>Em breve novas informações.</p>
        ),
    }
  })

  return (
    <div className="moto-page">
      <section className="moto-techspecs">
        <div className="container">
          <Reveal as="h1">Especificações técnicas</Reveal>
          <div className="moto-techspecs__grid">
            <div className="moto-techspecs__col">
              <Accordion items={items} defaultOpen={-1} />
              <Reveal
                as="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary moto-techspecs__cta"
              >
                Saiba mais
              </Reveal>
            </div>
            <Reveal as="div" className="moto-techspecs__panel">
              <img
                src={product.photo}
                alt={product.name}
                className="moto-techspecs__photo"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
