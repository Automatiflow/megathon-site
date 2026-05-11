# MEGATHON site — improvement plan

Date: 2026-05-11
Author: prior session
Audience: next session that will execute the work

## Context

**Project:** `projects/megathon-site/` (Next.js 16, App Router, Tailwind v4, TypeScript)
**Live URL:** https://megathon-site.vercel.app (auto-deploys from main)
**Source page:** `src/app/page.tsx` (single-page composition, all sections inline)
**Styles:** `src/app/globals.css` (gold theme `#d4a843`, dark bg `#0a0a0a`)
**Public assets:**
- `public/images/` — slide-1/4/5/6/8/10.jpg (slide renders), trophy-hero.png, venue-building.jpg
- `public/logos/` — anthropic, openai-wordmark, openai, apify, clay, veed, visa, visa-wordmark, mollie (all SVG)

**Source of truth for content:** original deck at `projects/megathon-outreach/deck/megathon-general-deck-S.pptx.pdf` (122MB, can't text-extract; use the rendered slide PNGs in `deck/pages/slide_01..10.png` and the high-res `projects/megathon-site/public/images/slide-8.jpg`).

**Mapping (10 deck slides → 10 site sections):** Hero, Thesis, WhatToExpect, Venue, Vision, Reach, Partners, Team, GetInvolved, Closer. Site renders Vision *before* Venue (reverse of deck), which is fine.

## What was already done in the prior session

1. Fixed ghost-text bug — slide-5/6/8.jpg had baked-in slide text bleeding through behind React text overlays. Solved with `blur-2xl/3xl` + darker overlay + masked cropping for the map.
2. Corrected all team data from the high-res `slide-8.jpg`:
   - Names: `Tijs Nieuwboer` (with W), `Rogier Muller` (with i)
   - Roles: `Venues & Infra` (not Design & Media), `DevRel & Sponsors` (not Global), `VC & Judges` (not MC), `AI & Hype` (not AI & Tech)
   - Added a `detail` field per member with the deck's secondary line (e.g., "20+ hackathons · The network")
3. Restored missing "Comfortable, not cramped." in Venue capacity copy.
4. Fixed two slide typos when wiring text (`is build` → `is built`, `it's` → `its`, `Paris Chaper` → `Paris Chapter`).
5. Footer "Tijs Nieueboer" → "Tijs Nieuwboer".
6. **Real logos fetched & wired** — Mollie (mollie.com docs CDN), Anthropic/VEED/Visa (simple-icons CDN), OpenAI/openai-wordmark (gilbarbara/logos repo), Apify (apify.com), Clay was fetched but returned a Sculpt logo by mistake so it's a styled wordmark on the site (the real fetched file is wrong — see Gap C1 below).
7. SVGs that had black/dark fills were sed-replaced with `fill="currentColor"`; the `LogoTile` component applies CSS `brightness-0 invert` for monochrome tiles, leaves colored ones (Apify, VEED) untouched.
8. Cinematic polish: gold radial ambient, twinkling sparkle dots, grid texture, drop-shadow on trophy, diamond divider, comet/shooting-star SVG on WhatToExpect, hover lifts on cards, gold halo on Book-a-call button, gradient section dividers, ◆ kickers per section.
9. Closer's slide-10 bg cropped+blurred to hide the baked "See you in Amsterdam." text; React text on top is the only headline.

Production build passes (`npx next build` clean). Local Playwright sweep at 1440×900 verified all 10 sections render without regressions. Only console issue is missing `/favicon.ico` (404).

## Gaps vs original PDF (what's still different from the deck)

### A. Visual fidelity

- **A1. Typography** — Deck uses what looks like a custom display font (heavy, condensed, almost editorial). Site uses Inter as both heading + body. Heading character should feel more cinematic. Candidates: `Migra`, `Gambarino`, `Rebond Grotesque`, or `PP Editorial New` (from Pangram Pangram, paid) — or free alternatives like `Inter Display`, `Space Grotesk`, `Bricolage Grotesque`. Heading-only swap is enough.
- **A2. Hero stat #4 mismatch** — Deck says `INTERNATIONAL / SCALE`. Site says `5+ / Countries`. Site is internally consistent with the Reach section (5 countries listed). Either keep `5+ / Countries` and update the deck, or revert site to match the deck. Decide with Tijs.
- **A3. Slide images used only as blurred backgrounds** — Vision, Reach, Team, Closer all use slide PNGs as bg because no clean source photo exists. Visual quality is OK because of blur+mask but ideally we'd source:
  - Real crowd/hackathon photo for Vision (any large EU tech event will do)
  - Clean Amsterdam exterior / WFC The Hubb for Venue (we have `venue-building.jpg` — verify it's the right building)
  - Trophy-only photo (without "See you in Amsterdam" text) for Closer
  - The Hubb interior shot during a build/event for Vision alternative
- **A4. Reach Europe map is a CSS-masked crop of slide-6.jpg** — Works visually but the underlying image is JPEG with compression artifacts when scaled. A standalone gold Europe SVG would be sharper and would let us add interactive hover-highlights per country. Public-domain Europe outlines exist (Wikipedia commons, mapsicon repo — both failed with direct fetch in last session; try mirrors or the natural-earth-vector repo).
- **A5. Slide 3 had a star-trail/shooting-star graphic on the right** — Site re-creates with inline SVG. Good but could be enriched: add a second smaller comet, or animate it with `stroke-dasharray` so it draws on scroll.
- **A6. Slide 8 had silhouette photo of team behind the names** — Site has it blurred. With real team headshots (or even cropped photos from the original silhouette image), we could show small portraits next to each name.

### B. Brand assets (logos)

- **B1. Clay logo is wrong** — `public/logos/clay.svg` is actually a Sculpt logo (the clay.com homepage returned a different brand's asset). Currently fronted by a styled-text wordmark. Need correct Clay (clay.com sales platform) SVG. Options: ask their brand team, screenshot from their site, or fetch from their CDN directly (the Webflow site path was `cdn.prod.website-files.com/...`).
- **B2. Still using styled text for 5 partners** — techleap, ai.am, TAG, PEAK, Flow. Real wordmarks would lift the section. techleap has a public brand kit; PEAK Capital's logo is also public; the others may need direct outreach.
- **B3. Visa wordmark variant** — Both `visa.svg` (simple-icons mark) and `visa-wordmark.svg` (gilbarbara) are downloaded. Currently using the simple icon. The wordmark version (italic VISA) would feel more authentic on a sponsor wall.
- **B4. Apify shows both icon and wordmark in one SVG** — looks busy. Consider using just the apify-mark or trimming the SVG.

### C. Performance & SEO

- **C1. Slide JPEGs are large** — slide-5.jpg, slide-6.jpg, slide-8.jpg, slide-10.jpg are full-deck-render PNGs/JPEGs at 1920×1080 or similar. Optimize with `next/image` (already in use for some) + responsive sizing. Add `sizes` prop where missing — there's a console warning on `trophy-hero.png`.
- **C2. No `<meta>` tags beyond title** — Add OG image, OG title, OG description, Twitter card. Set robots/canonical. Add favicon (currently 404). OG image should be a hero composite with trophy + title text.
- **C3. No structured data** — Adding `Event` schema.org JSON-LD (event name, dates, location: The Hubb Amsterdam, organizer: MEGATHON, offers, performer/attendee) would help Google AI Overviews / event listings.
- **C4. No analytics** — no Plausible, Vercel Analytics, or PostHog. If Tijs wants to measure CTA clicks, add it.

### D. UX & interactivity

- **D1. Mobile nav is invisible** — `<nav>` hides all links below `md:` breakpoint. Need a hamburger / drawer on mobile, or at minimum keep the "Get Involved" CTA visible.
- **D2. Sticky CTA missing** — As the user scrolls past Hero, the gold "Get Involved" in the nav remains the only call to action. Adding a floating "Book a call" button (bottom-right) after the user scrolls 60% of the page would reduce friction.
- **D3. Countdown to event** — Deck never had one but the site is a marketing tool. A countdown to June 19, 2026 in the hero or above the CTA would create urgency.
- **D4. Scroll-triggered animations** — Only Hero has `animate-fade-in-up`. Sections below pop in immediately. Use `IntersectionObserver` (or `framer-motion` if you want richer easing) to fade-up each section's heading + body on enter.
- **D5. "Book a call" link points to https://megathon.xyz** — that's a placeholder. Replace with the real Cal.com / Calendly / Tally URL when ready.
- **D6. No form** — Sponsors might want to submit interest inline. A simple Tally embed in the Get-Involved CTA box (or a Resend-backed `<form>`) would convert better than "Book a call".

### E. Accessibility & responsiveness

- **E1. Aria/alt audit needed** — Some `<Image alt="">` strings are empty (correct for decorative bg images, but should have `aria-hidden`). Most are good.
- **E2. Contrast** — White-on-bg text passes WCAG AA but `text-white/40` and `text-text-muted` on dark are borderline. Run an axe/lighthouse a11y audit.
- **E3. Keyboard nav** — Logo tiles have hover ring but no `:focus-visible` style. Add `focus-visible:ring-gold focus-visible:ring-2`.
- **E4. Reduced motion** — Sparkle animations + sweep animations should respect `prefers-reduced-motion`. Wrap their CSS in `@media (prefers-reduced-motion: no-preference)`.
- **E5. Never viewport-tested below 1440** — Run Playwright at 375, 768, 1024 to confirm cards stack cleanly. The 4-col Hero stats grid will get tight at 768.

### F. Content additions

- **F1. Past stats / social proof** — "20+ hackathons across 4 countries" is buried in Team subtitle. Pull that out as a "By the numbers" strip between Thesis and What-to-expect: e.g., `20+ hackathons run · 5,000+ founders activated · 12 sponsors returning`.
- **F2. Press / testimonials** — A pull-quote from a past attendee/sponsor adds credibility. One quote with name + role + photo, between Reach and Partners.
- **F3. FAQ** — Short FAQ between GetInvolved and Closer covering: eligibility, what BYOS means, IP ownership, travel/accommodation, prize tax handling. Reduces email volume for sponsors.
- **F4. Real schedule with times** — Deck and site both list FRI/SAT/SUN but no hour-by-hour. Sponsors will ask. Could be a hidden detailed view ("See full schedule →").
- **F5. Footer is thin** — Currently only one line. Add: nav repeated, social links (LinkedIn/X), Tijs's email, copyright/year, sponsor inquiry email separately from Book-a-call.

## Improvement plan — prioritized

### P0 — ship-blocking polish (do first, < 2 hours total)

1. **Favicon** (S) — add `app/icon.png` (gold ◆ on dark) and `app/apple-icon.png`. Fixes the 404 console error.
2. **OG meta tags + OG image** (M) — add to `app/layout.tsx`. Create a 1200×630 OG image (use Vercel OG image generator or just a static JPG with the hero composition).
3. **Real Clay logo** (S) — fetch correct asset from clay.com, replace `public/logos/clay.svg`, set `mono: true` on LogoEntry.
4. **Decide Hero stat #4** (S) — keep `5+ / Countries` or revert to deck. Whatever Tijs says.
5. **Mobile nav** (M) — add a hamburger drawer with the same anchor links, keep "Get Involved" visible at all breakpoints.

### P1 — visual fidelity to the deck (half day)

6. **Display heading font** (M) — pick one (Inter Display / Space Grotesk / Bricolage Grotesque). Wire via `next/font/google` in `layout.tsx`. Apply to `h1`/`h2` only.
7. **Standalone gold Europe SVG** (M) — find/build a clean Europe outline, color it with `var(--color-gold)`, replace the masked slide-6.jpg crop in Reach. Optional hover-highlight per country (would also let us animate country rows on hover).
8. **Real photos for Vision + Closer** (M) — source on Unsplash (search "hackathon crowd dark", "trophy gold ceremony"). Drop in as `public/images/vision-crowd.jpg` and `public/images/closer-trophy.jpg`, reduce blur (`blur-sm` or none).
9. **Scroll-triggered animations** (M) — `IntersectionObserver` hook + reuse `animate-fade-in-up`. Apply to every section heading + first paragraph.
10. **Logo upgrades** (M) — techleap, PEAK, Flow real wordmarks. Visa swap to wordmark variant.

### P2 — conversion & engagement (half day)

11. **Sticky "Book a call" CTA** (M) — appears after 60% scroll, bottom-right, gold pill.
12. **Countdown timer** (M) — JS-rendered, days to June 19 2026, in Hero between subtitle and stats.
13. **Tally/Cal.com integration** (M) — replace placeholder href with real booking link; embed Tally form in Get-Involved CTA box for inline lead capture.
14. **"By the numbers" strip** (M) — new section between Thesis and WhatToExpect with 3-4 social-proof stats.
15. **Footer expansion** (S) — repeat nav, add socials, add sponsor inquiry email separately.

### P3 — depth & credibility (later)

16. **Press/testimonial section** (M) — one pull-quote with attribution.
17. **FAQ accordion** (M) — 5-7 questions, between GetInvolved and Closer.
18. **Real team headshots** (L) — collect 8 photos + 12 placeholder, render small circular portraits.
19. **Full schedule expand** (M) — hour-by-hour collapsible per day.
20. **Event JSON-LD** (S) — schema.org Event in `layout.tsx` for AI/Google rich results.
21. **Analytics** (S) — Vercel Analytics or Plausible.
22. **Reduced-motion + focus-visible audit** (M).
23. **Responsive sweep 375/768/1024** (M).
24. **Lighthouse pass** (S) — performance + a11y; fix anything below 90.

## Execution notes for next session

- Dev server: `cd projects/megathon-site && npx next dev -p 3434`. Don't run if 3434 already in use; Next refuses concurrent dev servers on the same project. Kill via `Get-NetTCPConnection -LocalPort 3434 | %{ Stop-Process -Id $_.OwningProcess -Force }`.
- Build: `npx next build`. Will fail with EPERM on Windows if dev server is still running and holding `.next/`. Kill dev server first.
- Playwright MCP saves screenshots to the project root when given a relative filename; pass an absolute path (or just `.tmp/site-shots/...`) to control location.
- All slide content has been validated against the high-res `public/images/slide-8.jpg` for the team. For other sections, the truth source is `projects/megathon-outreach/deck/pages/slide_NN.png`.
- Don't re-introduce slide images as direct backgrounds without `blur` + heavy overlay — they have baked-in text.
- LogoEntry type lives in page.tsx near `Partners()`. Add new entries there. `mono: true` triggers the CSS filter for white tint.
- Communication style for any new copy: follow `.claude/rules/communication-style.md` in the parent AIOS — concrete, active voice, no em-dashes, English (this site's audience is international).

## Quick-win execution order if time-boxed to one session

1. P0.1 favicon (5 min)
2. P0.2 OG tags + image (45 min)
3. P0.3 fix Clay logo (10 min)
4. P0.5 mobile nav drawer (45 min)
5. P1.6 display heading font (20 min)
6. P1.9 scroll animations (30 min)
7. P2.11 sticky CTA (20 min)
8. P3.20 Event JSON-LD (15 min)
9. P3.21 Vercel Analytics (5 min)

Total ~3 hours, takes site from "matches deck text" to "premium event landing page" without needing external assets.
