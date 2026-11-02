"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-hero-reveal]");
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.15,
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
