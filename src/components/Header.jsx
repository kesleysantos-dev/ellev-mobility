import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { CATEGORY_PRODUCTS } from '../data/categoryProducts';
import logo from '../assets/logo/logo-ellev-white.png';

// "Destaques" mostra os 3 produtos atuais (com suas próprias páginas
// completas, intocadas). As demais categorias vêm de categoryProducts.js —
// cada produto delas abre a página simples em /moto/:id.
const PRODUCT_CATEGORIES = [
  { id: 'destaques', label: 'Destaques', products },
  ...CATEGORY_PRODUCTS,
];

const NAV_LEFT = [
  { label: 'Onde estamos', to: '/concessionarias' },
  { label: 'Seja um concessionário', to: '/seja-um-concessionario' },
];

const NAV_RIGHT = [
  // Oficinas temporariamente desativada — reative removendo este comentário
  // e voltando a linha abaixo pro array.
  // { label: 'Oficinas', to: '/oficinas' },
  { label: 'Pós-venda', to: '/pos-venda' },
  {
    label: 'Consórcio Ellev',
    href: 'https://wa.me/5585992236123',
    external: true,
  },
];

export default function Header() {
  const headerRef = useRef(null);
  const closeTimer = useRef(null);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0].id);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setActiveCategory(PRODUCT_CATEGORIES[0].id);
    }, 150);
  };

  const activeProducts =
    PRODUCT_CATEGORIES.find((c) => c.id === activeCategory)?.products ?? [];

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
                <div className="header__mega-categories">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`header__mega-category ${
                        activeCategory === cat.id ? 'is-active' : ''
                      }`}
                      onMouseEnter={() => setActiveCategory(cat.id)}
                      onFocus={() => setActiveCategory(cat.id)}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="header__mega-products">
                  {activeProducts.length > 0 ? (
                    activeProducts.map((p) => {
                      const content = (
                        <>
                          <img
                            src={p.photo}
                            alt={p.name}
                            className="header__mega-thumb"
                          />
                          <span className="header__mega-name">{p.name}</span>
                          <span className="header__mega-sub">Moto elétrica</span>
                        </>
                      )
                      if (p.link) {
                        return (
                          <Link
                            key={p.id}
                            to={p.link}
                            className="header__mega-item"
                            onClick={() => {
                              clearTimeout(closeTimer.current)
                              setOpen(false)
                            }}
                          >
                            {content}
                          </Link>
                        )
                      }
                      if (p.href) {
                        return (
                          <a
                            key={p.id}
                            href={p.href}
                            className="header__mega-item"
                            onClick={() => {
                              clearTimeout(closeTimer.current)
                              setOpen(false)
                            }}
                          >
                            {content}
                          </a>
                        )
                      }
                      // Modelo ainda sem página própria — mostra só a imagem,
                      // sem link fake pra lugar nenhum.
                      return (
                        <div key={p.id} className="header__mega-item">
                          {content}
                        </div>
                      )
                    })
                  ) : (
                    <p className="header__mega-empty">
                      Em breve novos modelos nesta categoria.
                    </p>
                  )}
                </div>
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
          <button
            type="button"
            className="header__mobile-heading header__mobile-heading--toggle"
            aria-expanded={mobileProductsOpen}
            onClick={() =>
              setMobileProductsOpen((v) => {
                const next = !v
                if (next) setMobileActiveCategory(PRODUCT_CATEGORIES[0].id)
                return next
              })
            }
          >
            Produtos
          </button>
          {mobileProductsOpen && (
            <div className="header__mobile-categories">
              {PRODUCT_CATEGORIES.map((cat) => (
                <div key={cat.id} className="header__mobile-category">
                  <button
                    type="button"
                    className={`header__mobile-category-toggle ${
                      mobileActiveCategory === cat.id ? 'is-active' : ''
                    }`}
                    aria-expanded={mobileActiveCategory === cat.id}
                    onClick={() =>
                      setMobileActiveCategory((c) => (c === cat.id ? null : cat.id))
                    }
                  >
                    {cat.label}
                  </button>
                  {mobileActiveCategory === cat.id && (
                    <div className="header__mobile-products">
                      {cat.products.length > 0 ? (
                        cat.products.map((p) =>
                          p.link ? (
                            <Link
                              key={p.id}
                              to={p.link}
                              className="header__mobile-link"
                              onClick={() => setMenuOpen(false)}
                            >
                              {p.name}
                            </Link>
                          ) : p.href ? (
                            <a
                              key={p.id}
                              href={p.href}
                              className="header__mobile-link"
                              onClick={() => setMenuOpen(false)}
                            >
                              {p.name}
                            </a>
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
                        )
                      ) : (
                        <p className="header__mobile-empty">
                          Em breve novos modelos nesta categoria.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
