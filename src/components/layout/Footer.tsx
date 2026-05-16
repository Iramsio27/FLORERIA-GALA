import type { PageId } from '@/types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="gala-footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <span className="logo-mark" style={{ fontSize: 32, color: 'var(--cream)' }}>
            Florería <span className="amp">Gala</span>
          </span>
          <p style={{ marginTop: 24, fontSize: 14, opacity: 0.75, maxWidth: 320 }}>
            Floristería boutique en Puerto Peñasco, Sonora. Flor fresca importada,
            arreglos de autor y entregas locales.
          </p>
          <p
            style={{
              marginTop: 16,
              fontFamily: 'var(--display)',
              fontSize: 22,
              fontStyle: 'italic',
              color: 'var(--rose-soft)',
            }}
          >
            Para esa persona especial.
          </p>
        </div>

        {/* Navega */}
        <div>
          <h4>Navega</h4>
          <ul>
            {(
              [
                ['home', 'Inicio'],
                ['catalogo', 'Catálogo'],
                ['galeria', 'Galería'],
                ['proceso', 'Cómo pedir'],
                ['contacto', 'Contacto'],
              ] as [PageId, string][]
            ).map(([page, label]) => (
              <li key={page}>
                <a onClick={() => onNavigate(page)} role="button" tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onNavigate(page)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>+52 638 123 4567</li>
            <li>hola@floreriagala.mx</li>
            <li>
              Blvd. Benito Juárez
              <br />
              Puerto Peñasco, Sonora
            </li>
            <li>Lun – Sáb · 9:00 a 19:00</li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h4>Síguenos</h4>
          <ul>
            <li>
              <a
                href="https://instagram.com/floreria.gala"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @floreria.gala
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/floreriagala"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook · Florería Gala
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@floreria.gala"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok @floreria.gala
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5216381234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp directo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Florería Gala · Puerto Peñasco</div>
        <div>Diseño con ✿ para celebrar el amor</div>
      </div>
    </footer>
  );
}
