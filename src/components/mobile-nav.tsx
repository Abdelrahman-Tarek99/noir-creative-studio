"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => { setMounted(true) }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = "" };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const overlay = (
    <nav className="mobile-nav" data-open={open} aria-label="Mobile navigation">
      <p className="mobile-nav-label">Menu</p>
      <Link href="/#work" onClick={close}>Work</Link>
      <Link href="/about" onClick={close}>Studio</Link>
      <Link href="/contact" onClick={close}>Contact</Link>
    </nav>
  );

  return (
    <>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
