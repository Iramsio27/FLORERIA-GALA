import type { PageId } from '@/types';
import { PROCESO } from '@/data';
import { FadeUp } from '@/components/ui/FadeUp';

interface ProcesoPageProps {
  onNavigate: (page: PageId) => void;
}

const POLITICAS = [
  {
    t: 'Envío',
    d: 'Solo dentro de Puerto Peñasco. El costo de envío se confirma según colonia y se cobra aparte del bouquet.',
  },
  {
    t: 'Horarios de entrega',
    d: 'Por temporada alta (San Valentín, Día de las Madres) no manejamos hora exacta. Te avisamos cuando vamos en camino.',
  },
  {
    t: 'Dirección y teléfono',
    d: 'El cliente proporciona dirección completa y teléfono correcto del destinatario. Si no hay quien reciba, aplica costo extra por reenvío.',
  },
  {
    t: 'Anticipo y pago',
    d: 'El pedido se confirma con 30% de anticipo. Aceptamos transferencia, depósito y efectivo. Mándanos el comprobante.',
  },
  {
    t: 'Recoger en sucursal',
    d: 'Si prefieres recoger, te damos un número de pedido al confirmar. Pasa por tu arreglo en el horario acordado.',
  },
  {
    t: 'Cancelaciones',
    d: 'Antes del 10 de febrero te regresamos el anticipo completo. Después de esa fecha, el anticipo no es reembolsable.',
  },
];

export function ProcesoPage({ onNavigate }: ProcesoPageProps) {
  return (
    <div className="page-enter" style={{ paddingTop: 120 }}>
      {/* Header */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow">Cómo pedir</span>
            <h1
              style={{
                fontSize: 'clamp(48px, 8vw, 120px)',
                marginTop: 24,
                marginBottom: 24,
              }}
            >
              Pedir es{' '}
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                sencillo
              </span>
              .
            </h1>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 580 }}>
              Cuatro pasos. Sin formularios eternos. Te confirmamos cada pedido por
              WhatsApp.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {PROCESO.map((p, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div
                  className="proceso-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: 'clamp(24px, 4vw, 64px)',
                    alignItems: 'center',
                    padding: '40px 0',
                    borderTop: '1px solid var(--cream-deep)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 'clamp(60px, 8vw, 120px)',
                      color: 'var(--rose-deep)',
                      fontStyle: 'italic',
                      lineHeight: 1,
                    }}
                  >
                    {p.n}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>{p.title}</h3>
                    <p
                      style={{
                        color: 'var(--ink-soft)',
                        fontSize: 17,
                        marginTop: 12,
                        maxWidth: 500,
                      }}
                    >
                      {p.text}
                    </p>
                  </div>
                  <div
                    className="proceso-side"
                    style={{
                      fontFamily: 'var(--eyebrow)',
                      fontSize: 11,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-soft)',
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                    }}
                  >
                    Paso {p.n}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas */}
      <section
        style={{
          background: 'var(--cream)',
          borderTop: '1px solid var(--cream-deep)',
        }}
      >
        <div className="container">
          <FadeUp>
            <span className="eyebrow">Políticas</span>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                marginTop: 16,
                marginBottom: 48,
              }}
            >
              Para que{' '}
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                todo salga
              </span>{' '}
              bien.
            </h2>
          </FadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {POLITICAS.map((it, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div
                  style={{
                    background: 'var(--paper)',
                    padding: 'clamp(24px, 3vw, 36px)',
                    border: '1px solid var(--cream-deep)',
                    height: '100%',
                  }}
                >
                  <span className="eyebrow" style={{ color: 'var(--rose-deep)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: 26, marginTop: 12, marginBottom: 12 }}>
                    {it.t}
                  </h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.6 }}>
                    {it.d}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeUp>
            <h2
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                maxWidth: 700,
                margin: '0 auto 32px',
              }}
            >
              ¿Lista para sorprender{' '}
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                a alguien
              </span>
              ?
            </h2>
            <button
              className="btn btn-primary"
              onClick={() => onNavigate('catalogo')}
            >
              Empezar mi pedido →
            </button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
