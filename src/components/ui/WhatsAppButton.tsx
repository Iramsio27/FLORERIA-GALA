import { WA_LINK } from '@/data';

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.5 3.5A11 11 0 0 0 3.5 17l-1.5 5 5.2-1.4A11 11 0 1 0 20.5 3.5zm-8.5 17a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.6 8.6 0 1 1 7.2 4zM17 14.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1l-1 1.2c-.2.2-.4.2-.7.1-1.7-.7-3-2.2-3.5-3a.6.6 0 0 1 .1-.7c.1-.2.3-.4.4-.5l.2-.3a.4.4 0 0 0 0-.4c0-.1-.6-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5 0-.8.4-.3.4-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.7.7 2.4.8 3.3.6.5-.1 1.7-.7 1.9-1.4.3-.7.3-1.2.2-1.3l-.6-.1z" />
  </svg>
);

export function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      {WA_ICON}
    </a>
  );
}
