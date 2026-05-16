import { useMemo } from 'react';

interface PetalData {
  id: number;
  left: number;
  delay: number;
  duration: number;
  drift: string;
  scale: number;
  hueShift: number;
  rotate: number;
}

interface PetalsProps {
  count?: number;
}

export function Petals({ count = 12 }: PetalsProps) {
  const petals = useMemo<PetalData[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 16 + Math.random() * 18,
      drift: `${(Math.random() - 0.5) * 220}px`,
      scale: 0.5 + Math.random() * 1.1,
      hueShift: -30 + Math.random() * 60,
      rotate: Math.random() * 360,
    }));
  }, [count]);

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}vw`,
            animationDelay: `${-p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `scale(${p.scale}) rotate(${p.rotate}deg)`,
            filter: `hue-rotate(${p.hueShift}deg) blur(0.3px)`,
            ['--drift' as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}
