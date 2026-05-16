const MAX_MSG = 220;

interface DedicationCardProps {
  value: string;
  onChange: (v: string) => void;
  from: string;
  onFromChange: (v: string) => void;
  to: string;
  onToChange: (v: string) => void;
}

export function DedicationCard({
  value,
  onChange,
  from,
  onFromChange,
  to,
  onToChange,
}: DedicationCardProps) {
  return (
    <div
      style={{
        background: 'var(--cream)',
        border: '1px solid var(--cream-deep)',
        padding: 'clamp(28px, 4vw, 48px)',
        position: 'relative',
        boxShadow: '0 30px 80px rgba(42, 28, 32, 0.08)',
        maxWidth: 480,
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 20,
          fontFamily: 'var(--display)',
          fontStyle: 'italic',
          color: 'var(--rose)',
          fontSize: 28,
        }}
      >
        ✿
      </div>

      <div className="eyebrow" style={{ marginBottom: 24 }}>
        Tarjeta de dedicatoria
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="eyebrow" style={{ fontSize: 9, opacity: 0.7 }}>
          Para
        </label>
        <input
          value={to}
          onChange={(e) => onToChange(e.target.value)}
          placeholder="Su nombre…"
          style={{
            fontFamily: 'var(--display)',
            fontStyle: 'italic',
            fontSize: 24,
          }}
          maxLength={80}
        />
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, MAX_MSG))}
        placeholder="Escribe tu mensaje…"
        rows={4}
        style={{
          fontFamily: 'var(--display)',
          fontSize: 19,
          fontStyle: 'italic',
          lineHeight: 1.5,
          color: 'var(--ink)',
          border: 'none',
          resize: 'none',
          padding: '12px 0',
          background: 'transparent',
        }}
      />

      <div
        style={{
          borderTop: '1px solid var(--ink-soft)',
          opacity: 0.2,
          margin: '8px 0 16px',
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 16,
        }}
      >
        <div style={{ flex: 1 }}>
          <label className="eyebrow" style={{ fontSize: 9, opacity: 0.7 }}>
            De
          </label>
          <input
            value={from}
            onChange={(e) => onFromChange(e.target.value)}
            placeholder="Tu nombre…"
            style={{
              fontFamily: 'var(--display)',
              fontStyle: 'italic',
              fontSize: 18,
            }}
            maxLength={80}
          />
        </div>
        <div className="eyebrow" style={{ fontSize: 9, opacity: 0.4, whiteSpace: 'nowrap' }}>
          {value.length}/{MAX_MSG}
        </div>
      </div>
    </div>
  );
}
