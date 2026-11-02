"use client";

import { Suspense, lazy, useRef, useState, useEffect } from "react";

const Scene = lazy(() => import("./hero-scene"));

function StaticFallback() {
  return (
    <div className="hero-sculpture-fallback" aria-hidden="true">
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <circle cx="100" cy="100" r="60" fill="none" stroke="#d3d0c9" strokeWidth="1" opacity="0.4" />
        <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="#d3d0c9" strokeWidth="0.5" opacity="0.25" transform="rotate(-30 100 100)" />
        <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="#d3d0c9" strokeWidth="0.5" opacity="0.25" transform="rotate(30 100 100)" />
      </svg>
    </div>
  );
}

export function HeroSculpture() {
  const [enabled, setEnabled] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return;
      setHasWebGL(true);
    } catch {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="hero-sculpture" aria-hidden="true">
      {enabled && hasWebGL ? (
        <Suspense fallback={<StaticFallback />}>
          <Scene />
        </Suspense>
      ) : (
        <StaticFallback />
      )}
    </div>
  );
}
