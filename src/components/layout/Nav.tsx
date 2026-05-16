import { useState } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import type { PageId } from '@/types';

interface NavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  cartCount: number;
}

const NAV_LINKS: [PageId, string][] = [
  ['home', 'Inicio'],
  ['catalogo', 'Catálogo'],
  ['galeria', 'Galería'],
  ['proceso', 'Proceso'],
  ['contacto', 'Contacto'],
];

export function Nav({ currentPage, onNavigate, cartCount }: NavProps) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className={`gala-nav${scrolled ? ' scrolled' : ''}`}>
      <button
        onClick={() => navigate('home')}
        style={{ background: 'none', border: 'none', padding: 0 }}
        className="logo-mark"
        aria-label="Inicio"
      >
        Florería <span className="amp">Gala</span>
      </button>

      <div className={`nav-links${menuOpen ? ' open' : ''}`} role="navigation">
        {NAV_LINKS.map(([key, label]) => (
          <button
            key={key}
            className={`nav-link${currentPage === key ? ' active' : ''}`}
            onClick={() => navigate(key)}
            aria-current={currentPage === key ? 'page' : undefined}
          >
            {label}
          </button>
        ))}

        <button
          className="nav-link"
          onClick={() => navigate('pedido')}
          style={{ display: 'inline-flex', alignItems: 'center' }}
          aria-label={`Mi pedido${cartCount > 0 ? `, ${cartCount} artículos` : ''}`}
        >
          Pedido
          {cartCount > 0 && (
            <span className="cart-badge" aria-hidden="true">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <button
        className="nav-mobile-btn nav-link"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? 'Cerrar' : '☰ Menú'}
      </button>
    </nav>
  );
}
