import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Footer() {
  const logoTopRef = useRef(null)
  const logoBottomRef = useRef(null)

  useLayoutEffect(() => {
    const scaleLogo = () => {
      const top = logoTopRef.current
      const bottom = logoBottomRef.current
      if (!top || !bottom) return
      top.style.transform = 'scaleX(1)'
      const topWidth = top.getBoundingClientRect().width
      const bottomWidth = bottom.getBoundingClientRect().width
      if (topWidth > 0) {
        top.style.transform = `scaleX(${bottomWidth / topWidth})`
      }
    }
    scaleLogo()
    window.addEventListener('resize', scaleLogo)
    return () => window.removeEventListener('resize', scaleLogo)
  }, [])

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <span className="footer__heading">Marca</span>
          <Link to="/" className="footer__logo">
            <span ref={logoTopRef} className="footer__logo-top">
              ELLEV
            </span>
            <span ref={logoBottomRef} className="footer__logo-bottom">
              MOBILITY
            </span>
          </Link>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Produtos</span>
          {products.map((p) =>
            p.link ? (
              <Link key={p.id} to={p.link}>
                {p.name}
              </Link>
            ) : (
              <a key={p.id} href={`/#${p.id}`}>
                {p.name}
              </a>
            )
          )}
        </div>

        <div className="footer__col">
          <span className="footer__heading">Institucional</span>
          <a href="/#onde-estamos">Concessionárias</a>
          <a href="/#consorcio">Consórcio</a>
          <a href="/#oficinas">Assistência</a>
          <a href="/#pos-venda">Pós-vendas</a>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Contato</span>
          <a href="https://wa.me/5500000000000">WhatsApp: (00) 00000-0000</a>
          <a href="mailto:contato@ellevmobility.com">contato@ellevmobility.com</a>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Social</span>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>Desenvolvido por: Kesley Santos</span>
      </div>
    </footer>
  )
}
