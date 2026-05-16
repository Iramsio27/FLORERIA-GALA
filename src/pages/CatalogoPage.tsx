import { useState } from 'react';
import type { OccasionId } from '@/types';
import { PRODUCTS, EXTRAS, OCCASIONS } from '@/data';
import { FadeUp } from '@/components/ui/FadeUp';
import { ProductCard } from '@/components/ui/ProductCard';

interface CatalogoPageProps {
  onOpenProduct: (id: string) => void;
}

export function CatalogoPage({ onOpenProduct }: CatalogoPageProps) {
  const [filter, setFilter] = useState<OccasionId>('all');

  const filtered =
    filter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.occasions.includes(filter));

  return (
    <div className="page-enter" style={{ paddingTop: 120 }}>
      {/* Header */}
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow">Catálogo · San Valentín 2026</span>
            <h1
              style={{
                fontSize: 'clamp(48px, 8vw, 120px)',
                marginTop: 24,
                marginBottom: 24,
              }}
            >
              Todos nuestros
              <br />
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                bouquets
              </span>
              .
            </h1>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 580 }}>
              Filtra por ocasión. Personaliza tamaño, color y dedicatoria. Confirma tu
              pedido por WhatsApp.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Products */}
      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <FadeUp>
            <div className="pill-row" role="group" aria-label="Filtrar por ocasión">
              {OCCASIONS.map((o) => (
                <button
                  key={o.id}
                  className={`pill${filter === o.id ? ' active' : ''}`}
                  onClick={() => setFilter(o.id)}
                  aria-pressed={filter === o.id}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </FadeUp>

          {filtered.length === 0 ? (
            <p style={{ color: 'var(--ink-soft)', fontSize: 18 }}>
              No hay productos para esta ocasión.
            </p>
          ) : (
            <div className="product-grid">
              {filtered.map((p, i) => (
                <FadeUp key={p.id} delay={i * 50}>
                  <ProductCard product={p} onClick={() => onOpenProduct(p.id)} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Extras */}
      <section style={{ background: 'var(--cream)', marginTop: 80 }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow">Para completar el detalle</span>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                marginTop: 16,
                marginBottom: 48,
              }}
            >
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                Extras
              </span>{' '}
              que enamoran.
            </h2>
          </FadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 24,
            }}
          >
            {EXTRAS.map((e, i) => (
              <FadeUp key={e.id} delay={i * 60}>
                <div
                  style={{
                    padding: '32px 28px',
                    background: 'var(--paper)',
                    border: '1px solid var(--cream-deep)',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontStyle: 'italic',
                      color: 'var(--rose)',
                      fontSize: 36,
                      lineHeight: 1,
                      marginBottom: 16,
                    }}
                  >
                    {e.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 24,
                      fontStyle: 'italic',
                    }}
                  >
                    {e.name}
                  </div>
                  <p
                    style={{
                      color: 'var(--ink-soft)',
                      fontSize: 14,
                      marginTop: 8,
                      marginBottom: 20,
                      minHeight: 40,
                    }}
                  >
                    {e.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: 16,
                      borderTop: '1px solid var(--cream-deep)',
                    }}
                  >
                    <span className="eyebrow">${e.price}</span>
                    <span className="eyebrow" style={{ color: 'var(--rose)' }}>
                      Agregar →
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
