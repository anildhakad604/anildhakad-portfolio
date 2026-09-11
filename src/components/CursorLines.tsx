"use client";

import { useEffect, useRef } from "react";

export default function CursorLines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hRef = useRef<HTMLDivElement>(null);
  const vRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reducedMotion || !containerRef.current) return;

    containerRef.current.style.display = "block";

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (frame) return;
      const { clientX, clientY } = event;
      frame = requestAnimationFrame(() => {
        if (hRef.current) hRef.current.style.transform = `translateY(${clientY}px)`;
        if (vRef.current) vRef.current.style.transform = `translateX(${clientX}px)`;
        frame = 0;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 hidden">
      <div ref={hRef} className="absolute left-0 top-0 h-px w-full bg-accent/15" />
      <div ref={vRef} className="absolute left-0 top-0 h-full w-px bg-accent/15" />
    </div>
  );
}
