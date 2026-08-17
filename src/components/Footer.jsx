import { Link } from 'react-router-dom';
import { products } from '../data/products';
import logo from '../assets/logo/logo-ellev-white.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <span className="footer__heading"></span>
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Ellev Mobility" className="footer__logo-img" />
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
            ),
          )}
        </div>

        <div className="footer__col">
          <span className="footer__heading">Institucional</span>
          <Link to="/concessionarias">Concessionárias</Link>
          <a
            href="https://parceria.klubi.com.br/consorcio/moto/leva"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consórcio
          </a>
          {/* Oficinas temporariamente desativada */}
          <Link to="/pos-venda">Pós-vendas</Link>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Contato</span>
          <a
            href="https://wa.me/5500000000000"
            className="footer__whatsapp"
            aria-label="WhatsApp: (00) 00000-0000"
          >
            <svg
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.004 3C9.006 3 3.334 8.671 3.334 15.67c0 2.4.665 4.71 1.928 6.727L3 29l6.77-2.22a12.6 12.6 0 0 0 6.234 1.632h.005c6.996 0 12.667-5.672 12.667-12.67C28.676 8.744 23.003 3 16.004 3Zm0 23.2h-.004a10.5 10.5 0 0 1-5.35-1.465l-.384-.228-4.017 1.318 1.34-3.916-.25-.402a10.47 10.47 0 0 1-1.612-5.567c0-5.808 4.727-10.535 10.542-10.535 2.816 0 5.462 1.098 7.451 3.09a10.46 10.46 0 0 1 3.086 7.454c0 5.808-4.727 10.535-10.535 10.535l-.001-.001Zm5.774-7.892c-.316-.158-1.87-.923-2.16-1.028-.29-.106-.5-.158-.712.158-.21.316-.816 1.028-1 1.238-.184.21-.369.237-.685.079-.316-.158-1.334-.492-2.542-1.57-.94-.838-1.575-1.874-1.759-2.19-.184-.316-.02-.487.138-.645.142-.141.316-.369.474-.553.158-.184.21-.316.316-.527.105-.21.052-.395-.026-.553-.079-.158-.712-1.717-.976-2.352-.257-.617-.518-.534-.712-.544l-.606-.011c-.21 0-.553.079-.843.395-.29.316-1.106 1.08-1.106 2.638s1.132 3.062 1.29 3.273c.158.21 2.229 3.405 5.4 4.775.755.326 1.343.52 1.802.665.757.241 1.446.207 1.991.126.607-.091 1.87-.765 2.134-1.503.263-.738.263-1.371.184-1.503-.079-.132-.29-.21-.606-.369Z" />
            </svg>
            (00) 00000-0000
          </a>
          <a href="mailto:contato@ellevmobility.com">
            contato@ellevmobility.com
          </a>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Social</span>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="YouTube">
            YouTube
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>Desenvolvido por: Yelsek Creative</span>
      </div>
    </footer>
  );
}
