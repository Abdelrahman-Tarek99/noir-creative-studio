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
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        targets[0],
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      if (targets[1]) {
        tl.fromTo(
          targets[1],
          { autoAlpha: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      if (targets[2]) {
        tl.fromTo(
          targets[2],
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.5"
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
