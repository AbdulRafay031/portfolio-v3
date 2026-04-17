"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Point = { x: number; y: number };

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  const target = useRef<Point>({ x: 0, y: 0 });
  const dot = useRef<Point>({ x: 0, y: 0 });
  const ring = useRef<Point>({ x: 0, y: 0 });

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const canUseCustomCursor = useMemo(() => {
    if (typeof window === "undefined") return false;
    const coarse = window.matchMedia?.("(pointer: coarse)")?.matches;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    return !coarse && !reduced;
  }, []);

  useEffect(() => {
    if (!canUseCustomCursor) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => setEnabled(true);
    const onLeave = () => setEnabled(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerenter", onEnter);
    window.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const tick = () => {
      dot.current.x = target.current.x;
      dot.current.y = target.current.y;

      ring.current.x = lerp(ring.current.x, target.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, target.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("pointerleave", onLeave);
      window.cancelAnimationFrame(raf);
    };
  }, [canUseCustomCursor]);

  useEffect(() => {
    if (!enabled) return;

    const interactiveSelector =
      'a,button,[role="button"],input,textarea,select,label,summary,[data-cursor="interactive"]';

    const onOver = (e: Event) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      setHoveringInteractive(Boolean(el.closest(interactiveSelector)));
    };

    window.addEventListener("pointerover", onOver, { passive: true });
    return () => window.removeEventListener("pointerover", onOver);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary"
      />
      <div
        ref={ringRef}
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[59] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-primary/50 backdrop-blur-sm transition-[height,width,background-color,border-color] duration-200",
          hoveringInteractive && "h-14 w-14 border-accent-cyan/70 bg-accent-cyan/5"
        )}
      />
    </>
  );
}

