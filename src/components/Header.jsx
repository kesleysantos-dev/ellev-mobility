import { useEffect, useState } from 'react';
import { products } from '../data/products';
import ImagePlaceholder from './ImagePlaceholder';

const NAV_LEFT = [
  { label: 'Onde estamos', href: '#onde-estamos' },
  { label: 'Seja um concessionário', href: '#concessionario' },
];

const NAV_RIGHT = [
  { label: 'Oficinas', href: '#oficinas' },
  { label: 'Pós-venda', href: '#pos-venda' },
  { label: 'Consórcio Ellev', href: '#consorcio' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      setHeroVisible(window.scrollY < heroHeight);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`header ${scrolled ? 'is-scrolled' : ''} ${
        heroVisible ? '' : 'is-hidden'
      }`}
    >
      <div className="header__inner container">
        <nav className="header__side header__side--left">
          <div
            className="header__dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="header__link header__link--dropdown">
              Produtos
            </button>
            {open && (
              <div className="header__mega">
                {products.map((p) => (
                  <a key={p.id} href={`#${p.id}`} className="header__mega-item">
                    <ImagePlaceholder
                      label={p.name}
                      className="header__mega-thumb"
                    />
                    <span className="header__mega-name">{p.name}</span>
                    <span className="header__mega-sub">Veículo elétrico</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          {NAV_LEFT.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="header__logo">
          SUA MARCA
        </a>

        <nav className="header__side header__side--right">
          {NAV_RIGHT.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
          <a href="#comprar" className="header__link">
            Comprar
          </a>
        </nav>

        <button
          className="header__burger"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__mobile-nav ${menuOpen ? 'is-open' : ''}`}>
          <span className="header__mobile-heading">Produtos</span>
          {products.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="header__mobile-link">
              {p.name}
            </a>
          ))}
          {[...NAV_LEFT, ...NAV_RIGHT].map((link) => (
            <a key={link.href} href={link.href} className="header__mobile-link">
              {link.label}
            </a>
          ))}
          <a href="#comprar" className="btn btn--primary">
            Comprar
          </a>
        </nav>
      </div>
    </header>
  );
}
