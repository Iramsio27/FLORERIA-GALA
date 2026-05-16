import { useState } from 'react';
import type { PageId, CartItem, ContactForm } from '@/types';
import { buildWhatsAppLink } from '@/utils/whatsapp';
import { FadeUp } from '@/components/ui/FadeUp';

interface PedidoPageProps {
  items: CartItem[];
  subtotal: number;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onNavigate: (page: PageId) => void;
  onOpenProduct: (id: string) => void;
}

const INITIAL_CONTACT: ContactForm = {
  nombre: '',
  telefono: '',
  direccion: '',
  colonia: '',
  fecha: '',
  hora: '',
  referencias: '',
  pago: 'transferencia',
};

export function PedidoPage({
  items,
  subtotal,
  onRemoveItem,
  onClearCart,
  onNavigate,
}: PedidoPageProps) {
  const [contact, setContact] = useState<ContactForm>(INITIAL_CONTACT);

  const set = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContact((prev) => ({ ...prev, [field]: e.target.value }));

  const formValid =
    contact.nombre.trim() &&
    contact.telefono.trim() &&
    contact.direccion.trim() &&
    contact.fecha;

  const waLink = buildWhatsAppLink(items, subtotal, contact);

  if (items.length === 0) {
    return (
      <div className="page-enter" style={{ paddingTop: 180, paddingBottom: 120 }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <FadeUp>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontStyle: 'italic',
                color: 'var(--rose)',
                fontSize: 96,
              }}
            >
              ✿
            </div>
            <h1
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                marginBottom: 20,
              }}
            >
              Tu canasta está{' '}
              <span className="italic" style={{ color: 'var(--rose-deep)' }}>
                vacía
              </span>
              .
            </h1>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 36 }}>
              Empieza eligiendo un bouquet del catálogo. Personaliza color, tamaño y
              dedicatoria, y armamos tu pedido aquí.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onNavigate('catalogo')}
            >
              Ver catálogo →
            </button>
          </FadeUp>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>
      <section style={{ padding: '40px 0 40px' }}>
        <div className="container">
          <span className="eyebrow">Tu pedido</span>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 96px)', marginTop: 16 }}>
            Estás a un paso{' '}
            <span className="italic" style={{ color: 'var(--rose-deep)' }}>
              de enviarlas
            </span>
            .
          </h1>
        </div>
      </section>

      <section style={{ padding: '20px 0 100px' }}>
        <div className="container">
          <div
            className="pedido-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 'clamp(32px, 5vw, 80px)',
            }}
          >
            {/* LEFT */}
            <div>
              {/* Items */}
              <div style={{ marginBottom: 56 }}>
                <h3 style={{ fontSize: 28, marginBottom: 24 }}>
                  <span className="italic">1. </span>Bouquets en tu canasta
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {items.map((item, idx) => {
                    const exTotal = item.extras.reduce(
                      (a, e) => a + e.price * e.qty,
                      0
                    );
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          gap: 24,
                          padding: '24px 0',
                          borderBottom: '1px solid var(--cream-deep)',
                        }}
                      >
                        <div
                          style={{
                            width: 110,
                            height: 140,
                            flexShrink: 0,
                            background: 'var(--cream)',
                          }}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'baseline',
                              gap: 16,
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontFamily: 'var(--display)',
                                  fontSize: 24,
                                  fontStyle: 'italic',
                                }}
                              >
                                {item.name}
                              </div>
                              <div
                                className="eyebrow"
                                style={{ fontSize: 10, marginTop: 4 }}
                              >
                                {item.variant} · {item.color}
                              </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div
                                style={{ fontFamily: 'var(--display)', fontSize: 22 }}
                              >
                                ${(item.price + exTotal).toLocaleString()}
                              </div>
                              <button
                                onClick={() => onRemoveItem(idx)}
                                style={{
                                  fontFamily: 'var(--eyebrow)',
                                  fontSize: 10,
                                  letterSpacing: '0.2em',
                                  textTransform: 'uppercase',
                                  background: 'none',
                                  border: 'none',
                                  color: 'var(--rose-deep)',
                                  cursor: 'pointer',
                                  padding: '4px 0',
                                  marginTop: 4,
                                }}
                              >
                                Quitar
                              </button>
                            </div>
                          </div>

                          {item.to && (
                            <div
                              style={{
                                marginTop: 12,
                                padding: '10px 14px',
                                background: 'var(--cream)',
                                fontSize: 13,
                                fontFamily: 'var(--display)',
                                fontStyle: 'italic',
                                color: 'var(--ink-soft)',
                              }}
                            >
                              Para{' '}
                              <span style={{ color: 'var(--ink)' }}>{item.to}</span>
                              {item.from && (
                                <>
                                  {' '}· de{' '}
                                  <span style={{ color: 'var(--ink)' }}>{item.from}</span>
                                </>
                              )}
                              {item.msg && (
                                <>
                                  : "
                                  {item.msg.slice(0, 80)}
                                  {item.msg.length > 80 ? '…' : ''}"
                                </>
                              )}
                            </div>
                          )}

                          {item.extras.length > 0 && (
                            <div
                              style={{
                                marginTop: 8,
                                fontSize: 12,
                                color: 'var(--ink-soft)',
                              }}
                            >
                              + {item.extras.map((e) => e.name).join(', ')}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="btn-ghost btn"
                  style={{ marginTop: 16 }}
                >
                  ← Agregar otro bouquet
                </button>
              </div>

              {/* Form */}
              <div>
                <h3 style={{ fontSize: 28, marginBottom: 24 }}>
                  <span className="italic">2. </span>Datos de entrega
                </h3>
                <div
                  className="form-grid"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}
                >
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label className="eyebrow" style={{ fontSize: 10 }}>
                      Tu nombre
                    </label>
                    <input
                      value={contact.nombre}
                      onChange={set('nombre')}
                      placeholder="Nombre completo"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ fontSize: 10 }}>
                      Tu WhatsApp
                    </label>
                    <input
                      value={contact.telefono}
                      onChange={set('telefono')}
                      placeholder="+52 638 …"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ fontSize: 10 }}>
                      Fecha de entrega
                    </label>
                    <input
                      type="date"
                      value={contact.fecha}
                      onChange={set('fecha')}
                    />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label className="eyebrow" style={{ fontSize: 10 }}>
                      Dirección completa
                    </label>
                    <input
                      value={contact.direccion}
                      onChange={set('direccion')}
                      placeholder="Calle y número"
                      autoComplete="street-address"
                    />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ fontSize: 10 }}>
                      Colonia
                    </label>
                    <input
                      value={contact.colonia}
                      onChange={set('colonia')}
                      placeholder="Las Conchas, Cholla Bay…"
                    />
                  </div>
                  <div>
                    <label className="eyebrow" style={{ fontSize: 10 }}>
                      Hora aprox.
                    </label>
                    <input
                      type="time"
                      value={contact.hora}
                      onChange={set('hora')}
                    />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label className="eyebrow" style={{ fontSize: 10 }}>
                      Referencias / indicaciones
                    </label>
                    <textarea
                      value={contact.referencias}
                      onChange={set('referencias')}
                      placeholder="Color de casa, portón, persona que recibe…"
                      rows={2}
                    />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label
                      className="eyebrow"
                      style={{ fontSize: 10, marginBottom: 12, display: 'block' }}
                    >
                      Método de pago (anticipo 30%)
                    </label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {(['transferencia', 'depósito', 'efectivo'] as const).map((p) => (
                        <button
                          key={p}
                          className={`pill${contact.pago === p ? ' active' : ''}`}
                          onClick={() =>
                            setContact((prev) => ({ ...prev, pago: p }))
                          }
                          aria-pressed={contact.pago === p}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--ink-soft)',
                    marginTop: 24,
                    lineHeight: 1.6,
                  }}
                >
                  Al enviar, abrimos WhatsApp con tu pedido listo para confirmar. Te
                  respondemos con el costo de envío y los datos para depositar el 30% de
                  anticipo.
                </p>
              </div>
            </div>

            {/* RIGHT — Resumen */}
            <div>
              <div
                style={{
                  background: 'var(--cream)',
                  padding: 'clamp(28px, 3vw, 40px)',
                  border: '1px solid var(--cream-deep)',
                  position: 'sticky',
                  top: 100,
                }}
              >
                <div className="eyebrow">Resumen</div>
                <h3 style={{ fontSize: 28, marginTop: 12, marginBottom: 24 }}>
                  Tu <span className="italic">canasta</span>
                </h3>

                <div style={{ borderTop: '1px solid var(--cream-deep)', padding: '16px 0' }}>
                  {items.map((item, i) => {
                    const exTotal = item.extras.reduce(
                      (a, e) => a + e.price * e.qty,
                      0
                    );
                    return (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: 8,
                          fontSize: 14,
                        }}
                      >
                        <span>
                          {item.name}{' '}
                          <span style={{ color: 'var(--ink-soft)' }}>
                            ({item.variant})
                          </span>
                        </span>
                        <span>${(item.price + exTotal).toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--cream-deep)',
                    paddingTop: 16,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                      fontSize: 14,
                    }}
                  >
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                      fontSize: 13,
                      color: 'var(--ink-soft)',
                    }}
                  >
                    <span>Envío</span>
                    <span style={{ fontStyle: 'italic' }}>a confirmar</span>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--ink)',
                    paddingTop: 16,
                    marginTop: 16,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <span className="eyebrow">Total estimado</span>
                  <span style={{ fontFamily: 'var(--display)', fontSize: 36 }}>
                    ${subtotal.toLocaleString()}
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 12,
                    padding: 12,
                    background: 'var(--blush)',
                    fontSize: 12,
                  }}
                >
                  <strong>Apartado:</strong> 30% ={' '}
                  <strong>${Math.ceil(subtotal * 0.3).toLocaleString()}</strong>
                </div>

                <a
                  href={formValid ? waLink : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  aria-disabled={!formValid}
                  style={{
                    background: formValid ? '#25D366' : 'var(--cream-deep)',
                    borderColor: formValid ? '#25D366' : 'var(--cream-deep)',
                    color: formValid ? 'white' : 'var(--ink-soft)',
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: 24,
                    pointerEvents: formValid ? 'auto' : 'none',
                    cursor: formValid ? 'pointer' : 'not-allowed',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.5 3.5A11 11 0 0 0 3.5 17l-1.5 5 5.2-1.4A11 11 0 1 0 20.5 3.5zm-8.5 17a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.6 8.6 0 1 1 7.2 4zM17 14.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1l-1 1.2c-.2.2-.4.2-.7.1-1.7-.7-3-2.2-3.5-3a.6.6 0 0 1 .1-.7c.1-.2.3-.4.4-.5l.2-.3a.4.4 0 0 0 0-.4c0-.1-.6-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5 0-.8.4-.3.4-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.7.7 2.4.8 3.3.6.5-.1 1.7-.7 1.9-1.4.3-.7.3-1.2.2-1.3l-.6-.1z" />
                  </svg>
                  Enviar pedido por WhatsApp
                </a>

                {!formValid && (
                  <p style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 8, textAlign: 'center' }}>
                    Completa nombre, teléfono, dirección y fecha para continuar.
                  </p>
                )}

                <button
                  onClick={onClearCart}
                  style={{
                    fontFamily: 'var(--eyebrow)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    color: 'var(--ink-soft)',
                    cursor: 'pointer',
                    marginTop: 16,
                    width: '100%',
                    padding: 8,
                  }}
                >
                  Vaciar canasta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
