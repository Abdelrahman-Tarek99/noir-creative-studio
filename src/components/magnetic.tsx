"use client";

import { useRef, useCallback, useEffect, useState } from "react";

export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    },
    [enabled, strength]
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "";
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)", display: "inline-block" }}
    >
      {children}
    </div>
  );
}
