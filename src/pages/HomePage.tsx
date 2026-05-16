import type { PageId } from '@/types';
import { PRODUCTS, TESTIMONIOS, HERO_IMG } from '@/data';
import { FadeUp } from '@/components/ui/FadeUp';
import { Marquee } from '@/components/ui/Marquee';
import { Countdown } from '@/components/ui/Countdown';
import { ProductCard } from '@/components/ui/ProductCard';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (id: string) => void;
}

const MARQUEE_ITEMS = [
  'Entrega local · Puerto Peñasco',
  'Rosas importadas',
  'Arreglos hechos a mano',
  'Pedido por WhatsApp',
  'Tarjeta dedicatoria gratis',
  'Anticipo 30%',
];

const OCCASIONS_SHOWCASE = [
  { id: 'san-valentin', label: 'San Valentín', img: '/images/662872452_17981415266995202_2669003504604791796_n.jpg', italic: 'amor' },
  { id: 'madres', label: 'Día de las Madres', img: '/images/686972626_17985130556995202_4395829511905954264_n.jpg', italic: 'mamá' },
  { id: 'cumpleanos', label: 'Cumpleaños', img: '/images/681248499_17983885097995202_5662421569464399245_n.jpg', italic: 'celebrar' },
  { id: 'aniversario', label: 'Aniversario', img: '/images/670613228_17981415257995202_7429640500218553386_n.jpg', italic: 'siempre' },
];

const INSTAGRAM_IMGS = [
  '/images/669923079_17981882234995202_7799553255999231878_n.jpg',
  '/images/670351153_17981881394995202_7455018446917836925_n.jpg',
  '/images/671048036_17982792863995202_7493209784365886072_n.jpg',
  '/images/672417450_17982405233995202_7555244441105032905_n.jpg',
  '/images/684103577_17984316971995202_135631457840954226_n.jpg',
  '/images/694695958_17985130565995202_364756103210853036_n.jpg',
];

export function HomePage({ onNavigate, onOpenProduct }: HomePageProps) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-text">
          <FadeUp>
            <span className="eyebrow">Florería boutique · Puerto Peñasco</span>
          </FadeUp>
          <FadeUp delay={150}>
            <h1 className="hero-headline" style={{ marginTop: 28 }}>
              Para esa
              <br />
              <span className="italic">persona</span>
              <br />
              especial.
            </h1>
          </FadeUp>
          <FadeUp delay={300}>
            <p style={{ marginTop: 36, fontSize: 17, maxWidth: 440, color: 'var(--ink-soft)' }}>
              Bouquets de autor, rosas importadas y arreglos hechos a mano.
              Entrega el mismo día dentro de Puerto Peñasco.
            </p>
          </FadeUp>
          <FadeUp delay={450}>
            <div style={{ marginTop: 44, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => onNavigate('catalogo')}>
                Ver catálogo <span style={{ fontSize: 14 }}>→</span>
              </button>
              <button className="btn" onClick={() => onNavigate('proceso')}>
                Cómo se pide
              </button>
            </div>
          </FadeUp>
        </div>

        <div className="hero-img">
          <img
            src={HERO_IMG}
            alt="Bouquet de Florería Gala"
          />
          <div
            style={{
              position: 'absolute',
              bottom: 28,
              left: 28,
              background: 'rgba(255, 250, 243, 0.92)',
              padding: '12px 18px',
              fontFamily: 'var(--display)',
              fontStyle: 'italic',
              fontSize: 18,
              color: 'var(--ink)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="eyebrow" style={{ fontSize: 9, marginRight: 12 }}>
              14 · 02 · 26
            </span>
            Colección San Valentín
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* OCASIONES */}
      <section>
        <div className="container">
          <FadeUp>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 24,
                marginBottom: 64,
              }}
            >
              <div>
                <span className="eyebrow">Para cada momento</span>
                <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginTop: 16 }}>
                  Ocasiones que{' '}
                  <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                    merecen flores
                  </span>
                  .
                </h2>
              </div>
              <button className="btn-ghost btn" onClick={() => onNavigate('catalogo')}>
                Ver todo el catálogo →
              </button>
            </div>
          </FadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            {OCCASIONS_SHOWCASE.map((o, i) => (
              <FadeUp key={o.id} delay={i * 100}>
                <div className="product-card" onClick={() => onNavigate('catalogo')}>
                  <div className="product-img" style={{ aspectRatio: '3/4' }}>
                    <img src={o.img} alt={o.label} loading="lazy" />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        right: 20,
                        color: 'white',
                        textShadow: '0 2px 16px rgba(0,0,0,0.4)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--display)',
                          fontStyle: 'italic',
                          fontSize: 32,
                          lineHeight: 1,
                        }}
                      >
                        {o.italic}
                      </div>
                      <div
                        className="eyebrow"
                        style={{ color: 'rgba(255,255,255,0.9)', marginTop: 8 }}
                      >
                        {o.label}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section
        style={{
          background: 'var(--cream)',
          borderTop: '1px solid var(--cream-deep)',
          borderBottom: '1px solid var(--cream-deep)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeUp>
            <span className="eyebrow">14 de febrero · Colección 2027</span>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                marginTop: 20,
                marginBottom: 12,
              }}
            >
              Faltan para{' '}
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                San Valentín
              </span>
            </h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 540, margin: '0 auto 48px' }}>
              Reserva con anticipación. Los bouquets premium se apartan desde 30 días antes.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <Countdown target="2027-02-14T08:00:00" />
          </FadeUp>
          <FadeUp delay={400}>
            <div style={{ marginTop: 56 }}>
              <button className="btn btn-rose" onClick={() => onNavigate('catalogo')}>
                Apartar mi bouquet
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section>
        <div className="container">
          <FadeUp>
            <span className="eyebrow">Los más pedidos</span>
            <h2
              style={{
                fontSize: 'clamp(40px, 6vw, 80px)',
                marginTop: 16,
                marginBottom: 56,
              }}
            >
              Best{' '}
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                sellers
              </span>
              .
            </h2>
          </FadeUp>
          <div className="product-grid">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <FadeUp key={p.id} delay={i * 80}>
                <ProductCard product={p} onClick={() => onOpenProduct(p.id)} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT — NUESTRO OFICIO */}
      <section
        style={{ padding: 0, background: 'var(--paper)' }}
      >
        <div
          className="split-quote"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '70vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(48px, 8vw, 120px)',
              background: 'var(--blush)',
            }}
          >
            <FadeUp>
              <div style={{ maxWidth: 460 }}>
                <span className="eyebrow">Nuestro oficio</span>
                <h2
                  style={{
                    fontSize: 'clamp(36px, 4.5vw, 64px)',
                    margin: '20px 0 28px',
                  }}
                >
                  Cada bouquet se monta{' '}
                  <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                    el mismo día
                  </span>{' '}
                  de la entrega.
                </h2>
                <p style={{ color: 'var(--ink-soft)', fontSize: 17 }}>
                  Trabajamos con flor fresca importada y de productores locales. Cada
                  arreglo se diseña y monta a mano la mañana del envío, nunca de la noche
                  anterior. Es por eso que duran semanas.
                </p>
                <div style={{ marginTop: 36 }}>
                  <button className="btn-ghost btn" onClick={() => onNavigate('proceso')}>
                    Conoce el proceso →
                  </button>
                </div>
              </div>
            </FadeUp>
          </div>
          <div style={{ background: 'var(--cream)' }}>
            <img
              src="/images/684103577_17984316971995202_135631457840954226_n.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              alt="Arreglo de flores en pedestal"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="eyebrow">Lo que dicen nuestros clientes</span>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 16 }}>
                Historias{' '}
                <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                  floridas
                </span>
                .
              </h2>
            </div>
          </FadeUp>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {TESTIMONIOS.map((t, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div
                  style={{
                    background: 'var(--cream)',
                    padding: 'clamp(28px, 3vw, 40px)',
                    border: '1px solid var(--cream-deep)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 48,
                      color: 'var(--rose)',
                      lineHeight: 0.5,
                      marginBottom: 16,
                    }}
                  >
                    "
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 20,
                      lineHeight: 1.45,
                      fontStyle: 'italic',
                      color: 'var(--ink)',
                      flex: 1,
                    }}
                  >
                    {t.text}
                  </p>
                  <div
                    style={{
                      marginTop: 24,
                      paddingTop: 20,
                      borderTop: '1px solid var(--cream-deep)',
                    }}
                  >
                    <div style={{ fontWeight: 400, fontSize: 14 }}>{t.name}</div>
                    <div className="eyebrow" style={{ fontSize: 9, marginTop: 4 }}>
                      {t.place}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
        <div className="container">
          <FadeUp>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 24,
                marginBottom: 56,
              }}
            >
              <div>
                <span className="eyebrow" style={{ color: 'var(--rose-soft)' }}>
                  @floreria.gala
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(40px, 6vw, 80px)',
                    marginTop: 16,
                    color: 'var(--cream)',
                  }}
                >
                  Síguenos en{' '}
                  <span className="italic" style={{ color: 'var(--rose-soft)' }}>
                    Instagram
                  </span>
                  .
                </h2>
              </div>
              <button
                className="btn"
                style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}
                onClick={() => onNavigate('galeria')}
              >
                Ver galería completa →
              </button>
            </div>
          </FadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 12,
            }}
          >
            {INSTAGRAM_IMGS.map((src, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div className="product-img" style={{ aspectRatio: '1/1' }}>
                  <img src={src} alt="" aria-hidden="true" loading="lazy" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
