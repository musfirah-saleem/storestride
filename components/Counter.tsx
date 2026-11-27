'use client';
import { useEffect, useRef, useState } from 'react';

// Counts up when it scrolls into view — keeps the stats feeling alive.
export default function Counter({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / 1400);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}
