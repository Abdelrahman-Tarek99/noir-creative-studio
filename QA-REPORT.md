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
