# NOIR Implementation Plan

## Phase 0 — Foundation (Team Leader + Frontend)
- Read DESIGN.md and project files; inspect before changing; agree on deliverables and no-fake-client-work rules.
- Confirm app runs and routes render; resolve dependency/API incompatibilities without redesigning.
- Establish accessible global typography, palette, spacing, responsive grid, shared header/footer and components.
- Acceptance: local dev and production build succeed, no runtime errors.

## Phase 1 — Art direction + homepage (Frontend, reviewed by Team Leader)
- Design 375/768/1024/1440 screen layouts.
- Refine headline kinetic reveal, typography, contrast, hero pacing and project cards.
- Build selected-work, services, manifesto, strong contact CTA.
- Acceptance: exceptional visual hierarchy; no horizontal overflow, navigation works, motion is nonessential.

## Phase 2 — Case studies and studio pages (Frontend)
- Add 3 credible **fictional/concept** case studies with project overview, challenge, visual process and output.
- Replace abstract placeholders with original/licensed photography and real alt text.
- Add About with compelling but truthful positioning.
- Acceptance: each case page feels complete and authentic, images load quickly.

## Phase 3 — Contact (Backend + Frontend)
- Use a secure server route/Server Action + email provider OR a real mailto link, at owner's choice.
- Validate input server-side; add spam protection and appropriate rate limiting; store secrets in environment variables only.
- Acceptance: demo contact flow tested; no false success states; no secrets in browser.

## Phase 4 — Motion and polish (Frontend)
- GSAP + ScrollTrigger: entrance animations, subtle project reveal, restrained section transitions; Lenis integration.
- Respect prefers-reduced-motion and keyboard focus; prevent duplicate triggers/raf loops.
- Test on mid-range phone; if Lenis causes issues, fall back to native scrolling.
- Acceptance: motion complements content; low jank; no keyboard/scroll traps.

## Phase 5 — QA (QA Tester)
- Functional routes, contact, anchor navigation, keyboard, reduced motion, mobile, Safari/Chrome/Firefox.
- Run TypeScript, ESLint, production build, Lighthouse on mobile, test image loading and basic SEO.
- Document actual metric values and bugs in QA-REPORT.md, fix critical blockers, retest.
- Acceptance: no critical defects; target Lighthouse 90+ across categories when feasible, record evidence.

## Phase 6 — Deploy and package (Deployer)
- Create GitHub repo, Vercel preview, production deployment; verify production environment and all routes.
- Configure metadata, OG image, sitemap/robots as appropriate, README, screenshot gallery, 20-30s walkthrough video.
- Acceptance: live site fully working, all portfolio claims factual, README includes screenshot and live link.

## Work protocol
Team Leader tracks `PROGRESS.md` after each phase. Specialists own their work and report modified files, tests, blockers. QA checks after each major phase and again before release. Deployer does not publish secrets. Don't add Three.js, Supabase or heavy dependencies unless functional requirements justify them.
