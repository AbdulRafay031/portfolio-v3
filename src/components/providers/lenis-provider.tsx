"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.0,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = window.requestAnimationFrame(raf);
    };

    rafId.current = window.requestAnimationFrame(raf);

    return () => {
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, []);

  return children;
}

