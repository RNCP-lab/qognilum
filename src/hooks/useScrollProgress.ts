"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks scroll progress (0-1) as an element's top edge travels between
 * `startFraction` and `endFraction` of the viewport height. Reverses
 * smoothly when scrolling back up, and clamps once fully revealed/hidden.
 */
export function useScrollProgress<T extends HTMLElement>(
  startFraction: number,
  endFraction: number
) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const start = vh * startFraction;
        const end = vh * endFraction;
        const p = (start - rect.top) / (start - end);
        setProgress(Math.min(Math.max(p, 0), 1));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startFraction, endFraction]);

  return { ref, progress };
}
