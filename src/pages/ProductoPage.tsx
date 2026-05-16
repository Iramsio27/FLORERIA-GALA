import { useState, useEffect } from 'react';
import type { PageId, CartItem } from '@/types';
import { PRODUCTS, EXTRAS, COLOR_MAP } from '@/data';
import { FadeUp } from '@/components/ui/FadeUp';
import { DedicationCard } from '@/components/ui/DedicationCard';

interface ProductoPageProps {
  productId: string;
  onAddToCart: (item: CartItem) => void;
  onNavigate: (page: PageId) => void;
}

export function ProductoPage({ productId, onAddToCart, onNavigate }: ProductoPageProps) {
  const product = PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];

  const [variantIdx, setVariantIdx] = useState(0);
  const [color, setColor] = useState(product.colors[0]);
  const [msg, setMsg] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [extras, setExtras] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setVariantIdx(0);
    setColor(product.colors[0]);
    setExtras({});
  }, [productId, product.colors]);

  const variant = product.variants[variantIdx];

  const extrasTotal = Object.entries(extras).reduce((sum, [id, selected]) => {
    if (!selected) return sum;
    const e = EXTRAS.find((x) => x.id === id);
    return sum + (e?.price ?? 0);
  }, 0);

  const total = variant.price + extrasTotal;

  const toggleExtra = (id: string) => {
    setExtras((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = () => {
    const selectedExtras = Object.entries(extras)
      .filter(([, selected]) => selected)
      .map(([id]) => {
        const e = EXTRAS.find((x) => x.id === id)!;
        return { id: e.id, name: e.name, price: e.price, qty: 1 };
      });

    onAddToCart({
      productId: product.id,
      name: product.name,
      variant: variant.label,
      price: variant.price,
      color,
      img: product.img,
      msg,
      from,
      to,
      extras: selectedExtras,
      qty: 1,
    });

    onNavigate('pedido');
  };

  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>
      {/* Breadcrumb */}
      <section style={{ padding: '40px 0 0' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <button
              onClick={() => onNavigate('catalogo')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              className="eyebrow"
            >
              Catálogo
            </button>
            <span style={{ margin: '0 12px', opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--ink)' }}>{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div
            className="product-detail-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: 'clamp(32px, 5vw, 80px)',
              alignItems: 'start',
            }}
          >
            {/* Images */}
            <div>
              <FadeUp>
                <div className="product-img" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </FadeUp>
              {product.img2 && (
                <FadeUp delay={100}>
                  <div
                    className="product-img"
                    style={{ aspectRatio: '16/10', marginTop: 16 }}
                  >
                    <img
                      src={product.img2}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                </FadeUp>
              )}
            </div>

            {/* Info */}
            <div style={{ position: 'sticky', top: 100 }}>
              <span className="eyebrow">{product.tagline}</span>
              <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginTop: 16 }}>
                {product.name.split(' ')[0]}{' '}
                <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                  {product.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p
                style={{
                  color: 'var(--ink-soft)',
                  fontSize: 17,
                  marginTop: 24,
                  marginBottom: 36,
                }}
              >
                {product.description}
              </p>

              {/* Variantes */}
              <div style={{ marginBottom: 32 }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>
                  Tamaño y estilo
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {product.variants.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setVariantIdx(i)}
                      style={{
                        border:
                          variantIdx === i
                            ? '1px solid var(--ink)'
                            : '1px solid var(--cream-deep)',
                        background:
                          variantIdx === i ? 'var(--cream)' : 'var(--paper)',
                        padding: '16px 20px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'var(--body)',
                        fontSize: 15,
                        color: 'var(--ink)',
                        transition: 'all 0.3s',
                      }}
                      aria-pressed={variantIdx === i}
                    >
                      <span>
                        <span
                          style={{
                            display: 'inline-block',
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            border: '1px solid var(--ink)',
                            background:
                              variantIdx === i ? 'var(--ink)' : 'transparent',
                            marginRight: 12,
                          }}
                        />
                        {v.label}
                      </span>
                      <span className="eyebrow">${v.price.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              {product.colors.length > 1 && (
                <div style={{ marginBottom: 32 }}>
                  <div className="eyebrow" style={{ marginBottom: 16 }}>
                    Color ·{' '}
                    <span style={{ color: 'var(--ink)', textTransform: 'none', letterSpacing: 0 }}>
                      {color}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          border:
                            color === c
                              ? '2px solid var(--ink)'
                              : '1px solid var(--cream-deep)',
                          padding: 2,
                          cursor: 'pointer',
                          background: 'transparent',
                          transition: 'all 0.3s',
                        }}
                        aria-label={c}
                        aria-pressed={color === c}
                      >
                        <span
                          style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: COLOR_MAP[c] ?? c,
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dedicatoria */}
              <div style={{ marginBottom: 32 }}>
                <div className="eyebrow" style={{ marginBottom: 16 }}>
                  Tarjeta dedicatoria · Gratis
                </div>
                <DedicationCard
                  value={msg}
                  onChange={setMsg}
                  from={from}
                  onFromChange={setFrom}
                  to={to}
                  onToChange={setTo}
                />
              </div>

              {/* Extras */}
              <div style={{ marginBottom: 32 }}>
                <div className="eyebrow" style={{ marginBottom: 16 }}>
                  Suma un detalle
                </div>
                <div
                  className="extras-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8,
                  }}
                >
                  {EXTRAS.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => toggleExtra(e.id)}
                      style={{
                        padding: '14px 16px',
                        border: extras[e.id]
                          ? '1px solid var(--rose)'
                          : '1px solid var(--cream-deep)',
                        background: extras[e.id] ? 'var(--blush)' : 'var(--paper)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'var(--body)',
                        color: 'var(--ink)',
                        transition: 'all 0.3s',
                      }}
                      aria-pressed={!!extras[e.id]}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: 13,
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: 'var(--rose)', fontSize: 16 }}>
                            {e.icon}
                          </span>
                          {e.name}
                        </span>
                        <span className="eyebrow" style={{ fontSize: 10 }}>
                          +${e.price}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: 'var(--ink-soft)',
                          marginTop: 4,
                        }}
                      >
                        {e.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  borderTop: '1px solid var(--cream-deep)',
                  paddingTop: 24,
                  marginTop: 32,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: 24,
                  }}
                >
                  <span className="eyebrow">Total estimado</span>
                  <span style={{ fontFamily: 'var(--display)', fontSize: 36 }}>
                    ${total.toLocaleString()}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center', minWidth: 200 }}
                    onClick={handleAddToCart}
                  >
                    Agregar al pedido →
                  </button>
                  <button className="btn" onClick={() => onNavigate('catalogo')}>
                    Seguir viendo
                  </button>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--ink-soft)',
                    marginTop: 16,
                    lineHeight: 1.5,
                  }}
                >
                  Costo de envío no incluido. Lo confirmamos por WhatsApp según zona
                  dentro de Puerto Peñasco. Apartado con 30% del total.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
