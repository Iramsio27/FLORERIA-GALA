import { FadeUp } from '@/components/ui/FadeUp';

export function ContactoPage() {
  return (
    <div className="page-enter" style={{ paddingTop: 120 }}>
      {/* Header */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow">Contacto · Puerto Peñasco</span>
            <h1 style={{ fontSize: 'clamp(48px, 8vw, 120px)', marginTop: 24 }}>
              Estamos
              <br />
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                cerca
              </span>
              .
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Info + Mapa */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="contacto-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 5vw, 80px)',
              alignItems: 'start',
            }}
          >
            {/* Info */}
            <FadeUp>
              <div>
                <div className="eyebrow">Sucursal</div>
                <h3 style={{ fontSize: 40, marginTop: 12, marginBottom: 16 }}>
                  Florería Gala
                </h3>
                <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                  Blvd. Benito Juárez
                  <br />
                  Col. Centro
                  <br />
                  Puerto Peñasco, Sonora
                  <br />
                  México, 83550
                </p>

                <div style={{ marginTop: 40 }}>
                  <div className="eyebrow">Horario</div>
                  <p style={{ fontSize: 17, marginTop: 12, color: 'var(--ink-soft)' }}>
                    Lunes a sábado · 9:00 — 19:00
                    <br />
                    Domingo · 10:00 — 14:00
                  </p>
                </div>

                <div style={{ marginTop: 40 }}>
                  <div className="eyebrow">Contacto directo</div>
                  <p style={{ fontSize: 17, marginTop: 12, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                    <a
                      href="https://wa.me/5216381234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit' }}
                    >
                      WhatsApp · +52 638 123 4567
                    </a>
                    <br />
                    <a href="tel:+526381234567" style={{ color: 'inherit' }}>
                      Teléfono · +52 638 123 4567
                    </a>
                    <br />
                    <a href="mailto:hola@floreriagala.mx" style={{ color: 'inherit' }}>
                      hola@floreriagala.mx
                    </a>
                  </p>
                </div>

                <div style={{ marginTop: 40 }}>
                  <div className="eyebrow">Síguenos</div>
                  <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
                    {[
                      ['Instagram', 'https://instagram.com/floreria.gala'],
                      ['Facebook', 'https://facebook.com/floreriagala'],
                      ['TikTok', 'https://tiktok.com/@floreria.gala'],
                    ].map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eyebrow"
                        style={{
                          color: 'var(--ink)',
                          cursor: 'pointer',
                          borderBottom: '1px solid var(--ink)',
                          paddingBottom: 2,
                          textDecoration: 'none',
                        }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Map placeholder */}
            <FadeUp delay={150}>
              <div
                style={{
                  aspectRatio: '4/5',
                  background: `
                    radial-gradient(circle at 60% 40%, var(--rose-soft) 0%, transparent 30%),
                    linear-gradient(135deg, var(--cream) 0%, var(--cream-deep) 100%)
                  `,
                  position: 'relative',
                  border: '1px solid var(--cream-deep)',
                  overflow: 'hidden',
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 500"
                  style={{ position: 'absolute', inset: 0, opacity: 0.4 }}
                  aria-hidden="true"
                >
                  <g stroke="var(--ink-soft)" strokeWidth="0.6" fill="none">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <line key={`h${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} opacity={0.3} />
                    ))}
                    {Array.from({ length: 14 }).map((_, i) => (
                      <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="500" opacity={0.3} />
                    ))}
                    <path d="M 0 200 Q 150 150 250 220 T 400 280" strokeWidth="2.5" stroke="var(--ink)" opacity={0.5} />
                    <path d="M 60 0 L 80 100 L 120 180 L 180 300 L 200 500" strokeWidth="2" stroke="var(--ink-soft)" />
                    <path d="M 0 380 Q 200 360 400 400" strokeWidth="1.5" stroke="var(--ink-soft)" />
                  </g>
                  <g>
                    <circle cx="220" cy="250" r="14" fill="var(--rose-deep)" />
                    <circle cx="220" cy="250" r="28" fill="none" stroke="var(--rose-deep)" strokeWidth="1.5" opacity="0.4" />
                    <circle cx="220" cy="250" r="42" fill="none" stroke="var(--rose-deep)" strokeWidth="1" opacity="0.2" />
                  </g>
                </svg>

                <div
                  style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 24,
                    right: 24,
                    background: 'var(--paper)',
                    padding: 18,
                    border: '1px solid var(--cream-deep)',
                  }}
                >
                  <div className="eyebrow" style={{ fontSize: 9 }}>
                    Cómo llegar
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontStyle: 'italic',
                      fontSize: 20,
                      marginTop: 6,
                    }}
                  >
                    Sobre Blvd. Benito Juárez, a 2 cuadras del centro.
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
