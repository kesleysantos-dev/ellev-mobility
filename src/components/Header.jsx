import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import logo from '../assets/logo/logo-ellev-white.png';

const NAV_LEFT = [
  { label: 'Onde estamos', to: '/concessionarias' },
  { label: 'Seja um concessionário', to: '/seja-um-concessionario' },
];

const NAV_RIGHT = [
  { label: 'Oficinas', to: '/oficinas' },
  { label: 'Pós-venda', to: '/pos-venda' },
  {
    label: 'Consórcio Ellev',
    href: 'https://parceria.klubi.com.br/consorcio/moto/leva',
    external: true,
  },
];

export default function Header() {
  const headerRef = useRef(null);
  const closeTimer = useRef(null);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 20;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY <= 40) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY + threshold) {
        setHeaderVisible(false);
        lastScrollY = currentScrollY;
      } else if (currentScrollY < lastScrollY - threshold) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? 'is-scrolled' : ''} ${
        headerVisible ? '' : 'is-hidden'
      }`}
    >
      <div className="header__inner container">
        <nav className="header__side header__side--left">
          <div
            className="header__dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="header__link header__link--dropdown">
              Produtos
            </button>
            {open && (
              <div
                className="header__mega"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                {products.map((p) =>
                  p.link ? (
                    <Link
                      key={p.id}
                      to={p.link}
                      className="header__mega-item"
                      onClick={() => {
                        clearTimeout(closeTimer.current)
                        setOpen(false)
                      }}
                    >
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="header__mega-thumb"
                      />
                      <span className="header__mega-name">{p.name}</span>
                      <span className="header__mega-sub">Moto elétrica</span>
                    </Link>
                  ) : (
                    <a
                      key={p.id}
                      href={`/#${p.id}`}
                      className="header__mega-item"
                      onClick={() => {
                        clearTimeout(closeTimer.current)
                        setOpen(false)
                      }}
                    >
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="header__mega-thumb"
                      />
                      <span className="header__mega-name">{p.name}</span>
                      <span className="header__mega-sub">Moto elétrica</span>
                    </a>
                  )
                )}
              </div>
            )}
          </div>
          {NAV_LEFT.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} className="header__link">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="header__link">
                {link.label}
              </a>
            )
          )}
        </nav>

        <Link to="/" className="header__logo">
          <img src={logo} alt="Ellev Mobility" className="header__logo-img" />
        </Link>

        <nav className="header__side header__side--right">
          {NAV_RIGHT.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} className="header__link">
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="header__link"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            )
          )}
          <Link to="/comprar" className="header__link">
            Comprar
          </Link>
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
          {products.map((p) =>
            p.link ? (
              <Link
                key={p.id}
                to={p.link}
                className="header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {p.name}
              </Link>
            ) : (
              <a
                key={p.id}
                href={`/#${p.id}`}
                className="header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {p.name}
              </a>
            )
          )}
          {[...NAV_LEFT, ...NAV_RIGHT].map((link) =>
            link.to ? (
              <Link
                key={link.to}
                to={link.to}
                className="header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="header__mobile-link"
                onClick={() => setMenuOpen(false)}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            )
          )}
          <Link to="/comprar" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            Comprar
          </Link>
        </nav>
      </div>
    </header>
  );
}
