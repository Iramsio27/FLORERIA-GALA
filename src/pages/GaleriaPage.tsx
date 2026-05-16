import { FadeUp } from '@/components/ui/FadeUp';

interface GalleryItem {
  src: string;
  tall?: boolean;
  label: string;
}

const GALLERY: GalleryItem[] = [
  { src: '/images/662872452_17981415266995202_2669003504604791796_n.jpg', tall: true, label: 'Florería Gala · colección' },
  { src: '/images/669781870_17981522066995202_4472840197285360312_n.jpg', label: 'Rosas bicolor en negro' },
  { src: '/images/669923079_17981882234995202_7799553255999231878_n.jpg', tall: true, label: '100 rosas rojas' },
  { src: '/images/670351153_17981881394995202_7455018446917836925_n.jpg', label: 'Caja LOVE con rosas' },
  { src: '/images/670613228_17981415257995202_7429640500218553386_n.jpg', tall: true, label: '50 rosas beige premium' },
  { src: '/images/671048036_17982792863995202_7493209784365886072_n.jpg', label: 'Canasta colorida' },
  { src: '/images/672417450_17982405233995202_7555244441105032905_n.jpg', tall: true, label: 'Lirios y rosas' },
  { src: '/images/681248499_17983885097995202_5662421569464399245_n.jpg', label: 'Bouquet mixto rosa' },
  { src: '/images/684103577_17984316971995202_135631457840954226_n.jpg', label: 'Luxe rosa premium' },
  { src: '/images/684256631_17984836115995202_8583419744314774621_n.jpg', tall: true, label: 'Florero blanco clásico' },
  { src: '/images/686972626_17985130556995202_4395829511905954264_n.jpg', label: 'Canasta rosa pastel' },
  { src: '/images/688058476_17985130580995202_3531716007266072300_n.jpg', label: 'Docena acostada' },
  { src: '/images/694695958_17985130565995202_364756103210853036_n.jpg', tall: true, label: 'Docena vertical' },
];

export function GaleriaPage() {
  return (
    <div className="page-enter" style={{ paddingTop: 120 }}>
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow">Galería · 2024 — 2026</span>
            <h1
              style={{
                fontSize: 'clamp(48px, 8vw, 120px)',
                marginTop: 24,
                marginBottom: 24,
              }}
            >
              Trabajos
              <br />
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                recientes
              </span>
              .
            </h1>
            <p style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 580 }}>
              Una probadita de los arreglos que hemos enviado en Puerto Peñasco. Cada uno
              único, hecho a mano el mismo día.
            </p>
          </FadeUp>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="masonry"
            style={{ columnCount: 3, columnGap: 16 }}
          >
            {GALLERY.map((it, i) => (
              <FadeUp key={i} delay={(i % 4) * 80}>
                <div
                  style={{ breakInside: 'avoid', marginBottom: 16, position: 'relative' }}
                >
                  <div
                    className="product-img"
                    style={{ aspectRatio: it.tall ? '3/4' : '4/3' }}
                  >
                    <img src={it.src} alt={it.label} loading="lazy" />
                  </div>
                  <div
                    className="eyebrow"
                    style={{ fontSize: 10, marginTop: 10, color: 'var(--ink-soft)' }}
                  >
                    {it.label}
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
