import { useEffect, useRef, useState } from 'react';

// One "step" of a pinned section = this much scrolling (in vh).
export const STEP_VH = 55;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Runs `callback` after every scroll/resize, at most once per animation frame.
export function useOnScroll(callback) {
  const latest = useRef(callback);
  latest.current = callback;

  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      latest.current();
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(run);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    latest.current();
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

// Becomes true the first time the element is mostly on screen.
export function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen];
}

// Counts from 0 to target once `active` turns true.
export function useCountUp(target, active, ms = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / ms);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, ms]);

  return value;
}

// For a tall section with a sticky child: returns the current step (0..steps-1)
// and writes --p (0..1) on the section so CSS can animate with scroll.
export function usePinned(ref, steps) {
  const [step, setStep] = useState(0);

  useOnScroll(() => {
    const el = ref.current;
    if (!el) return;
    const stepPx = (window.innerHeight * STEP_VH) / 100;
    const scrolled = -el.getBoundingClientRect().top;
    const p = Math.min(1, Math.max(0, scrolled / (steps * stepPx)));
    el.style.setProperty('--p', p.toFixed(4));
    setStep(Math.min(steps - 1, Math.max(0, Math.floor((scrolled + 4) / stepPx))));
  });

  return step;
}
