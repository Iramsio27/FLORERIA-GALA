import type { CartItem, ContactForm } from '@/types';
import { WA_NUMBER } from '@/data';

function sanitize(text: string): string {
  return text.replace(/[<>]/g, '').trim();
}

export function buildWhatsAppMessage(
  items: CartItem[],
  subtotal: number,
  contact: ContactForm
): string {
  const lines: string[] = [];

  lines.push('🌹 *Pedido — Florería Gala*');
  lines.push('');

  items.forEach((item, i) => {
    lines.push(`${i + 1}. *${sanitize(item.name)}* — ${sanitize(item.variant)}`);
    lines.push(`   Color: ${sanitize(item.color)}  |  $${item.price}`);
    if (item.to) lines.push(`   Para: ${sanitize(item.to)}`);
    if (item.from) lines.push(`   De: ${sanitize(item.from)}`);
    if (item.msg) lines.push(`   Nota: "${sanitize(item.msg)}"`);
    if (item.extras.length) {
      lines.push('   Extras:');
      item.extras.forEach((e) =>
        lines.push(`     · ${sanitize(e.name)} ×${e.qty} ($${e.price * e.qty})`)
      );
    }
    lines.push('');
  });

  lines.push('━━━━━━━━━━━━━━━━━');
  lines.push(`*Subtotal:* $${subtotal.toLocaleString()}`);
  lines.push('');
  lines.push('*Datos de entrega:*');
  lines.push(`Nombre: ${sanitize(contact.nombre)}`);
  lines.push(`Teléfono: ${sanitize(contact.telefono)}`);
  lines.push(
    `Dirección: ${sanitize(contact.direccion)}, ${sanitize(contact.colonia)}`
  );
  lines.push(`Referencias: ${sanitize(contact.referencias)}`);
  lines.push(`Fecha y hora: ${contact.fecha} ${contact.hora}`);
  lines.push(`Método de pago: ${contact.pago}`);

  return lines.join('\n');
}

export function buildWhatsAppLink(
  items: CartItem[],
  subtotal: number,
  contact: ContactForm
): string {
  const message = buildWhatsAppMessage(items, subtotal, contact);
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
