# NOIR — Creative Studio

A fictional creative studio portfolio built with Next.js. Editorial design, scroll-driven motion, and modern frontend craft.

> **All brands, projects and case studies on this site are concept work — fictional projects designed to demonstrate methodology, not real client engagements.**

**[Live site →](https://noir-creative-studio-tawny.vercel.app)**

## Tech stack

- **Framework** — Next.js 15 (App Router, static generation)
- **Language** — TypeScript, React 19
- **Styling** — Tailwind CSS v4 + custom CSS
- **3D** — Three.js, React Three Fiber, Drei
- **Motion** — GSAP + ScrollTrigger, Lenis smooth scroll
- **Deployment** — Vercel (edge OG image generation)

## Features

- Interactive 3D hero sculpture (metallic torus knot with pointer tracking)
- Lazy-loaded WebGL with SVG fallback for non-WebGL browsers
- Cinematic GSAP entrance with clip-path headline wipe
- Magnetic CTA buttons with pointer-following transform
- Scroll-triggered reveals, parallax, and page transitions
- Sticky header with scroll-direction hide/show
- Enhanced project card hover (scale, arrow shift, meta slide)
- Desktop nav links with animated underline
- Mobile navigation with staggered link reveals
- Server-validated contact form with honeypot + rate limiting
- `prefers-reduced-motion` guards on all 8 motion components
- Skip-to-content link for keyboard navigation
- SVG favicon + generated Apple touch icon + OG image
- Per-page OpenGraph and Twitter Card metadata
- Sitemap generation
- Responsive at 4 breakpoints (400px, 800px, 1024px, 1440px)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, selected work, manifesto, services, CTA |
| `/about` | Studio page — approach, values, capabilities |
| `/contact` | Contact form with validation |
| `/work/[slug]` | Case study pages (3 fictional projects) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npm run typecheck   # TypeScript
npm run lint        # ESLint
npm run build       # Production build
```

### Contact form setup (optional)

The contact form works without configuration — it logs submissions to the console and shows a success message. To connect an email provider:

```bash
cp .env.example .env.local
# Fill in CONTACT_PROVIDER_URL, CONTACT_PROVIDER_KEY, CONTACT_EMAIL
```

## Deployment

Push to GitHub and import in [Vercel](https://vercel.com). Build command: `npm run build`. No environment variables required for the base site.

## Disclaimer

This is a portfolio demonstration project. All studio branding, case studies, and project narratives are fictional. No real companies, testimonials, or performance metrics are represented.

## License

MIT
