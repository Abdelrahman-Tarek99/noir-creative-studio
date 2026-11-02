"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({
  children,
  className = "",
  speed = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const inner = el.querySelector("[data-parallax-inner]") as HTMLElement;
    if (!inner) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: -speed * 100 },
        {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <div data-parallax-inner style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
