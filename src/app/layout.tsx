import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#171716" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "NOIR — Independent Creative Studio",
    template: "%s | NOIR",
  },
  description:
    "A fictional creative studio concept exploring identity, digital experiences, and editorial design. Built with Next.js, TypeScript, and GSAP.",
  keywords: [
    "creative studio",
    "brand identity",
    "art direction",
    "editorial design",
    "digital experience",
    "portfolio",
    "concept work",
  ],
  authors: [{ name: "NOIR Creative Studio" }],
  creator: "NOIR Creative Studio",
  metadataBase: new URL("https://noir-creative-studio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NOIR — Creative Studio",
    title: "NOIR — Independent Creative Studio",
    description:
      "Identity, digital experiences, and editorial design. A fictional studio concept demonstrating modern frontend craft.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOIR — Independent Creative Studio",
    description:
      "Identity, digital experiences, and editorial design. A fictional studio concept.",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <MotionProvider />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
