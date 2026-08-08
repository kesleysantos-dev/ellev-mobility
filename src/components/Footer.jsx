import { products } from '../data/products'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <span className="footer__heading">Marca</span>
          <a href="#top" className="footer__logo">
            SUA MARCA
          </a>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Produtos</span>
          {products.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              {p.name}
            </a>
          ))}
        </div>

        <div className="footer__col">
          <span className="footer__heading">Institucional</span>
          <a href="#onde-estamos">Concessionárias</a>
          <a href="#consorcio">Consórcio</a>
          <a href="#oficinas">Assistência</a>
          <a href="#pos-venda">Pós-vendas</a>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Contato</span>
          <a href="https://wa.me/5500000000000">WhatsApp: (00) 00000-0000</a>
          <a href="mailto:contato@suamarca.com">contato@suamarca.com</a>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Sua Marca. Todos os direitos reservados.</span>
        <span>Desenvolvido por Você</span>
      </div>
    </footer>
  )
}
