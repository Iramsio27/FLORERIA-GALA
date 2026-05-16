import type { ReactNode, ElementType, HTMLAttributes } from 'react';
import { useFadeUp } from '@/hooks/useFadeUp';

interface FadeUpProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
}

export function FadeUp({ children, delay = 0, as: As = 'div', ...rest }: FadeUpProps) {
  const ref = useFadeUp(delay);
  return (
    <As ref={ref} className="fade-up" {...rest}>
      {children}
    </As>
  );
}
