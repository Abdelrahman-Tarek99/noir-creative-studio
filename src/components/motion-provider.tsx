"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function MotionProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: import("lenis").default | undefined;
    let mounted = true;
    let callback: ((time: number) => void) | undefined;
    (async () => {
      const { default: Lenis } = await import("lenis");
      if (!mounted) return;
      gsap.registerPlugin(ScrollTrigger);
      lenis = new Lenis({ autoRaf: false, duration: 1.15 });
      callback = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(callback);
      lenis.on("scroll", ScrollTrigger.update);
      ScrollTrigger.refresh();
    })();
    return () => {
      mounted = false;
      if (callback) gsap.ticker.remove(callback);
      lenis?.destroy();
    };
  }, []);
  return null;
}
