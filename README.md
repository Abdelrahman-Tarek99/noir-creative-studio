# NOIR — Creative Studio (portfolio concept)

An editorial/minimal Next.js agency website starter. **All brands, projects and testimonials (if later added) must be labeled as conceptual; never imply real client work.**

## Start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before sharing, run:

```bash
npm run typecheck
npm run lint
npm run build
```

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, Lenis, Vercel.

## Included

Homepage, selected-work case pages, studio page, contact placeholder, responsive editorial styling, starter GSAP reveal effects, Lenis integration, metadata, and five specialist briefs in `agents/`.

## Important remaining work

- Replace abstract artwork with original/licensed photography and rich project case studies.
- Create a usable working contact form (validated, spam-protected and sent via a chosen backend provider) or add a real professional contact email.
- Add active navigation/mobile nav, page transitions if they add value, OG image and social media metadata.
- Add automated tests and run real-device QA and Lighthouse audits; **no performance scores are claimed yet**.
- Replace `metadata.robots` after the demo is ready for indexing (currently `index:false`).
- Replace placeholder studio copy with accurate owner/portfolio credit.

## Deployment

Push to a GitHub repository and import it in Vercel. Build command: `npm run build`. No environment variables needed for starter. Deploy preview first; verify all routes and mobile layouts.

See `DESIGN.md`, `PROGRESS.md`, `QA-REPORT.md`, `docs/IMPLEMENTATION-PLAN.md`, and `agents/`.
