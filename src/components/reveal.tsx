"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}) {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx=gsap.context(()=>{
      gsap.fromTo(ref.current,{autoAlpha:0,y:36},{autoAlpha:1,y:0,duration:0.9,ease:"power3.out",scrollTrigger:{trigger:ref.current,start:"top 92%",once:true}});
    },ref);
    return ()=>ctx.revert();
  },[]);
  return <div ref={ref} className={className}>{children}</div>;
}
