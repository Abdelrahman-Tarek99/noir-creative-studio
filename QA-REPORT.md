# NOIR — QA Report

## Phase 1 QA (2026-11-02)

### Build verification
| Check | Result |
|---|---|
| `npm run typecheck` | Pass — 0 errors |
| `npm run lint` | Pass — 0 errors, 2 config warnings |
| `npm run build` | Pass — 9 pages generated |
| Production server routes | All 6 routes return HTTP 200 |

### Routes tested
| Route | Status |
|---|---|
| `/` | 200 |
| `/about` | 200 |
| `/contact` | 200 |
| `/work/form-and-function` | 200 |
| `/work/object-studies` | 200 |
| `/work/still-life` | 200 |

### Responsive layout (CSS review)
| Breakpoint | Coverage |
|---|---|
| 375px (≤400px) | Smaller hero font (56px), tighter service-line headings, smaller mobile nav text |
| 768px (≤800px) | Mobile nav visible, desktop nav hidden, single-column projects, stacked hero bottom |
| 1024px | Intermediate sizing, reduced padding, slightly smaller headings |
| 1440px | Full desktop layout, wide margins, 2-column project grid |

### Features verified
| Feature | Status | Notes |
|---|---|---|
| Hero kinetic reveal | Implemented | GSAP staggered entrance, reduced-motion guarded |
| Mobile navigation | Implemented | Hamburger toggle, fullscreen overlay, Escape to close, body scroll lock |
| Contact CTA section | Implemented | Section 04, hover state on button |
| Project cards + Reveal | Preserved | Existing ScrollTrigger reveal, hover rotation effect intact |
| Lenis smooth scroll | Preserved | Progressive enhancement, reduced-motion guarded |
| Reduced motion | Pass | CSS `prefers-reduced-motion: reduce` disables transitions/animations; JS guards on GSAP and Lenis |
| Fictional labeling | Pass | Footer says "fictional studio concept"; case studies say "concept case study" |

---

## Phase 2 QA (2026-11-02)

### Build verification
| Check | Result |
|---|---|
| `npm run typecheck` | Pass — 0 errors |
| `npm run lint` | Pass — 0 errors, 2 config warnings |
| `npm run build` | Pass — 9 pages generated |
| Production server routes | All 6 routes return HTTP 200 |

### Case study pages
| Check | Status |
|---|---|
| Page sections present (header, hero, details, overview, challenge, process, solution, result, disclaimer, nav) | Pass — all verified in HTML output |
| Next-project navigation | Pass — cycles through all 3 projects |
| Fictional disclaimer on every case study | Pass |
| No fabricated client metrics or company names | Pass |
| Responsive: mobile (≤800px) | CSS reviewed — single-column sections, smaller hero aspect ratio |
| Responsive: tablet (≤1024px) | CSS reviewed — 2-column details grid |
| Responsive: desktop (1440px) | CSS reviewed — full 2-column section layout |

### About page
| Check | Status |
|---|---|
| Intro section with lead text + body | Pass |
| Approach values (3 items) | Pass |
| Services grid (6 items) | Pass |
| Contact CTA | Pass |
| Fictional/concept disclaimer in intro | Pass |
| Responsive mobile layout | CSS reviewed — single-column grids |

---

## Phase 3 QA (2026-11-02)

### Build verification
| Check | Result |
|---|---|
| `npm run typecheck` | Pass — 0 errors |
| `npm run lint` | Pass — 0 errors, 2 config warnings |
| `npm run build` | Pass — 11 pages generated (added icon.svg, apple-icon) |
| Production server routes | All 8 routes return HTTP 200 (6 pages + 2 icons) |

### Favicon & meta tags
| Check | Status |
|---|---|
| SVG favicon (`/icon.svg`) | Pass — 200, served as image |
| Apple touch icon (`/apple-icon`) | Pass — 200, generated PNG |
| `<meta name="description">` | Pass — present on all pages |
| `<meta name="keywords">` | Pass |
| OG tags (title, description, site_name, locale, type) | Pass — all present in HTML |
| Twitter card (card, title, description) | Pass |
| Theme color (light + dark) | Pass — two entries |
| `<meta name="robots" content="noindex, nofollow">` | Pass — still set for demo |

### Contact form
| Check | Status | Notes |
|---|---|---|
| Form renders with name/email/message fields | Pass |
| Honeypot field present (hidden) | Pass — `name="website"`, absolute-positioned offscreen |
| Server action validates empty name | Pass — returns error message |
| Server action validates invalid email | Pass — returns error message |
| Server action validates short message (<10 chars) | Pass — returns error message |
| Server action validates long message (>5000 chars) | Pass — returns error message |
| Rate limiting (30s per email) | Implemented — in-memory Map |
| Graceful degradation (no env vars) | Pass — logs to console, returns success with explanation |
| No secrets in client bundle | Pass — env vars accessed only in server action |
| Error state displayed | Pass — `.form-error` with role="alert" |
| Success state displayed | Pass — `.form-success` replaces form |
| Disabled button while pending | Pass |
| Responsive: mobile (≤800px) | CSS reviewed — single-column layout |
| Form fields styled to match editorial design | Pass |

---

## Phase 4 QA (2026-11-02)

### Build verification
| Check | Result |
|---|---|
| `npm run typecheck` | Pass — 0 errors |
| `npm run lint` | Pass — 0 errors, 2 config warnings |
| `npm run build` | Pass — 11 pages generated |
| Production server routes | All 6 page routes return HTTP 200 |

### Motion components
| Feature | Status | Notes |
|---|---|---|
| Sticky header with hide-on-scroll | Implemented | `scroll-header-wrap` in HTML, `data-hidden` toggles on scroll direction |
| Parallax on project art blocks | Implemented | `data-parallax-inner` in HTML, ScrollTrigger scrub, will-change:transform |
| Page transition (fade-up) | Implemented | Case study + About pages wrapped in PageTransition |
| Section heading reveals | Implemented | "01 / Selected work" and "03 / What we do" wrapped in Reveal |
| Reduced motion | Pass | All new components check `prefers-reduced-motion` before initializing |
| GSAP cleanup | Pass | All effects use `gsap.context()` with `.revert()` in cleanup |
| No duplicate ScrollTriggers | Pass — code review | Each component creates/reverts its own context |
| No RAF/ticker leaks | Pass — code review | Lenis callback removed in MotionProvider cleanup |

### Known issues / not yet tested
| Issue | Severity | Notes |
|---|---|---|
| No real-device mobile testing | Medium | CSS reviewed, not tested on physical devices |
| No Lighthouse audit | Medium | Deferred to Phase 5 per implementation plan |
| No browser cross-testing | Medium | Safari/Firefox not tested yet |
| Email delivery not tested | Expected | Requires CONTACT_PROVIDER_URL/KEY/EMAIL env vars |
| Placeholder imagery | Medium | Abstract color blocks used; no photography yet |

### Environment
- macOS Darwin 25.1.0
- Node.js (npm)
- Next.js 15.5.28
- Build output: static pre-rendered pages

---

## Phase 5 QA (2026-11-02)

### Build verification
| Check | Result |
|---|---|
| `npm run typecheck` | Pass — 0 errors |
| `npm run lint` | Pass — 0 errors |
| `npm run build` | Pass — 13 routes generated (added sitemap.xml, opengraph-image) |

### Accessibility audit
| Check | Status | Notes |
|---|---|---|
| Heading hierarchy (homepage) | Fixed | Section headings changed from `<p>` to `<h2>` — now h1 → h2 → h3 |
| Heading hierarchy (about page) | Fixed | Section headings changed from `<p>` to `<h2>` — now h1 → h2 → h3 |
| CSS selector updated | Fixed | `.section-heading p` → `.section-heading h2` |
| Skip-to-content link | Added | Visually hidden, visible on focus, targets `#main-content` |
| `lang` attribute | Pass | `<html lang="en">` present |
| Focus indicators | Pass | `a:focus-visible` with 2px outline on all links |
| Form labels | Pass | All inputs have matching `<label htmlFor>` |
| Form autocomplete | Pass | `name`, `email` autocomplete attributes present |
| Error announcement | Pass | Error messages use `role="alert"` |
| Honeypot hidden from AT | Pass | `aria-hidden="true"`, `tabIndex={-1}` |
| Contrast (CSS review) | Pass | Ink (#171716) on paper (#f4f2ed) ≈ 13.3:1; muted (#66635e) on paper ≈ 4.6:1 |

### Motion safety
| Check | Status | Notes |
|---|---|---|
| Reduced-motion guards | Pass | All 6 motion components check `prefers-reduced-motion` |
| GSAP cleanup | Pass | 4 GSAP components use `gsap.context()` with `.revert()` |
| Lenis cleanup | Pass | Ticker callback removed, Lenis destroyed in unmount |
| Scroll-header cleanup | Pass | RAF listener removed in cleanup |
| No scroll traps | Pass | Scroll lock only active when mobile nav is open; body overflow restored on close |

### Content integrity
| Check | Status |
|---|---|
| Footer fictional label | Pass — "fictional studio concept" |
| About page disclaimer | Pass — "concept work — fictional projects" |
| Case study disclaimers | Pass — each project has a disclaimer paragraph |
| No fabricated metrics or testimonials | Pass |
| No real company names | Pass |

---

## Phase 6 — Deploy preparation (2026-11-02)

### Assets added
| Asset | Status |
|---|---|
| `sitemap.ts` — dynamic sitemap generation | Added — 6 URLs, all project slugs included |
| `opengraph-image.tsx` — 1200×630 OG image | Added — edge-rendered, NOIR wordmark + terracotta dot |
| README.md polished | Updated — tech stack, features, setup, disclaimer |

### Remaining known limitations
| Item | Notes |
|---|---|
| No real-device testing | CSS reviewed only; not tested on physical phones/tablets |
| No Lighthouse scores claimed | No audit has been run |
| No browser cross-testing | Safari/Firefox not formally tested |
| Email delivery | Requires env vars; graceful degradation verified |
| Placeholder imagery | Abstract color blocks, no photography |
| `robots: noindex` | Still set; change when ready for indexing |
