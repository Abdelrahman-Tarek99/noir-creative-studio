import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { ScrollHeader } from "./scroll-header";

export function Header() {
  return (
    <ScrollHeader>
      <header className="site-header wrap">
        <Link className="wordmark" href="/" aria-label="NOIR Creative Studio, home">
          NOIR<span className="wordmark-dot">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about">Studio</Link>
          <Link href="/contact">Contact <span aria-hidden>↗</span></Link>
        </nav>
        <MobileNav />
      </header>
    </ScrollHeader>
  );
}
