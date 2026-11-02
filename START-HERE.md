# Start using Claude Code or Codex

## 1. Put the files in your empty folder

Download/extract the NOIR ZIP. Copy **the contents** of `noir-creative-studio/` into your empty working folder (not an extra nested folder). Open a terminal in that folder.

## 2. Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Stop dev server before CLI build checks if desired.

## 3. Prompt for Claude Code

> You're the Tech Lead for NOIR — Creative Studio, my fictional editorial/minimal agency site and Upwork portfolio project. This repository already contains a Next.js App Router starter and five agent role briefs. First read CLAUDE.md, README.md, DESIGN.md, PROGRESS.md, docs/IMPLEMENTATION-PLAN.md and all agents/*.md. Inspect the existing files before modifying anything. Act as team leader and delegate to specialist subagents if available; otherwise execute their responsibilities sequentially. Start Phase 0: install dependencies, run typecheck, lint and production build, fix issues, verify all routes. Then begin Phase 1: refine the premium editorial homepage, typography, GSAP ScrollTrigger reveals, Lenis motion, navigation and mobile design. Prioritize accessible reduced-motion, 375/768/1024/1440 responsive layouts, truthful fictional case studies and production performance. Do not add Supabase/Three.js unless justified. Update PROGRESS.md and QA-REPORT.md with verified results. Tell me what you changed and what's next. Don't deploy until QA gates pass.

## 4. Prompt for Codex

> Implement the NOIR — Creative Studio portfolio site in this repository. Read AGENTS.md, README.md, DESIGN.md, PROGRESS.md, docs/IMPLEMENTATION-PLAN.md and every file in agents/ first. Respect the existing starter and editorial/minimal design. Act as team leader, then execute frontend/backend/QA/deployer responsibilities in phases. First make the project install, typecheck, lint and build successfully; inspect and fix problems before adding features. Then complete Phase 1 with polished typography, GSAP + ScrollTrigger, Lenis, navigation and responsive layouts at 375/768/1024/1440. Test reduced motion, no scroll traps, keyboard accessibility and mobile performance. Keep fictional work labeled as concepts, never invent results, and do not claim unrun tests. Update PROGRESS.md and QA-REPORT.md and provide a concise changelog and next actions. Don't deploy until checks pass.

## 5. Publish later

When Phase 6 is ready, push GitHub and import repo into Vercel. Confirm deployed URL and test contact flow before adding to Upwork.
