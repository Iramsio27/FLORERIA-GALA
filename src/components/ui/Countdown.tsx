import { useState, useEffect } from 'react';

interface CountdownProps {
  target?: string;
}

export function Countdown({ target = '2027-02-14T08:00:00' }: CountdownProps) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, new Date(target).getTime() - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor(diff / 3_600_000) % 24;
  const mins = Math.floor(diff / 60_000) % 60;
  const secs = Math.floor(diff / 1_000) % 60;

  const cells: [string, string][] = [
    [String(days).padStart(2, '0'), 'Días'],
    [String(hours).padStart(2, '0'), 'Horas'],
    [String(mins).padStart(2, '0'), 'Minutos'],
    [String(secs).padStart(2, '0'), 'Segundos'],
  ];

  return (
    <div style={{ display: 'flex', gap: 'clamp(16px, 4vw, 64px)', justifyContent: 'center' }}>
      {cells.map(([n, l], i) => (
        <div key={i} className="countdown-cell">
          <div className="countdown-num">{n}</div>
          <div className="countdown-label">{l}</div>
        </div>
      ))}
    </div>
  );
}
