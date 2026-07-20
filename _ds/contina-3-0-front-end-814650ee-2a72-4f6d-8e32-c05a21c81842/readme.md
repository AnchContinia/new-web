# Continia Design System

A design system for **Continia** — a B2B SaaS company building practical, reliable,
easy-to-use financial automation solutions for **Microsoft Dynamics 365 Business
Central**. Continia automates and digitalizes finance-department workflows
(document capture, expense management, payment management, e-documents, etc.),
delivered to the international market through a network of local partners.

> **Payoff:** *It's about time.*
> Continia gets time to work for you — "you can count on us," "we dig in," "we work smart."

This system is the foundation for generating well-branded Continia **frontend**
surfaces — web pages, apps, and product UI — for production or throwaway
prototypes. It does not cover slides, decks, or print.

---

## Source material

Everything here was derived from material supplied by the brand team. Stored in
`uploads/` (kept in case the reader has access):

- **`uploads/Continia_BrandGuide_2.0.pdf`** — the official 74-page Continia Brand
  Guidelines 2.0. The authoritative source for logo, colors, type, graphics,
  icons, photography, and tone. Key page renders captured to `scraps/`.
- **`uploads/Continia primary_Tech blue.svg`** / **`_White.svg`** — primary logo
  lockups (logomark + "continia" wordmark).
- **`uploads/AllianceNo2.zip`** — the Alliance No.2 webfont package (Light,
  Regular, SemiBold, Bold + Regular/Bold italics). Extracted to `assets/fonts/`.

No codebase or Figma file was supplied. The live products run **inside Microsoft
Dynamics 365 Business Central**; the marketing surface lives at **continia.com**.
The UI kit here is a faithful brand-driven recreation of a Continia marketing
surface, not a copy of proprietary Business Central UI.

---

## Content fundamentals

How Continia writes. Source: brand story + core values in the guide.

- **Voice:** confident, helpful, clear, practical, professional, and human.
  Not overly playful, not corporate-stiff. The throughline is *reliability*:
  "you can count on us."
- **Person:** speaks as **"we"** (Continia / "Continians") and addresses the
  reader as **"you."** Warm and direct — "We get time to work for you,"
  "that's our promise to you."
- **Core value phrasing** is short, declarative, "we"-led: *We dig in. We work
  smart. We deliver what we promise in due time. Count on Continia.*
- **The time motif is everywhere.** Time and data are framed as "the two most
  valuable commodities." Headlines lean on it: *It's about time. You can't buy
  back time — don't waste it, spend it wisely.*
- **Casing:** Sentence case for headlines and body. **Spaced ALL-CAPS** is a
  deliberate brand device for eyebrows/section labels and the logo's letterforms
  (`C O N T I N I A`) — wide letter-tracking (`--ls-overline`). Buttons in
  marketing UI elements use compact ALL-CAPS ("SEE MORE").
- **Numbers & proof:** concrete, confident stats stated plainly —
  *30+ years of experience · 1,500+ partners worldwide · 26,000 active licenses ·
  eliminate manual tasks by up to 90%.* Use real figures; never invent filler.
- **No emoji.** The brand uses Font-Awesome-style line icons and checkmarks
  instead of emoji. Tone stays professional.
- **Product framing:** solutions are "BUILT INSIDE your Business Central" —
  emphasize that users keep the interface they already know; setup is quick.

---

## Visual foundations

### Color
- **Tech Blue `#052975`** is the dominant brand color — backgrounds, headlines,
  logo, primary buttons. Deep, trustworthy navy.
- **Innovation Blue `#8FF8FF`** is the secondary — a bright cyan used for accents,
  highlights, key numbers on dark, and the lower stop of the brand gradient.
- **Light Blue `#DEF5FF`** is the primary *functional* color — soft section
  backgrounds, surface tints, info states.
- **Accents, used sparingly:** Smart Green `#5F9E8D`, Light Yellow `#FFF7E3`,
  Performance Purple `#983EAE`. Mainly for web/product differentiation, not
  general decoration. (The brand chart literally sizes each swatch by recommended
  use ratio — Tech Blue largest.)
- **Signature gradient:** Tech Blue → Innovation Blue (135°). **Decoration only** —
  large hero/section panels and accents. **Never** behind an icon tile, button or
  box/card; those always use a solid primary color. Subtle, never rainbow.
- Backgrounds are either **white / very light blue** (positive) or **deep Tech
  Blue** (negative). High contrast between the two is a defining trait.

### Typography
- **Alliance No.2** throughout — a modern, techy geometric sans with small quirky
  curves. Bold (700) headlines, SemiBold (600) subheadlines (stands in for the
  spec's "Medium" — no Medium master was supplied), Regular (400) body, Light
  (300) for large display lockups.
- Headlines and body are **sentence case**; eyebrows are **wide-tracked caps**.
- Generous line-height on body (1.6); tight on big display.

### Layout, shape & depth
- **Generous whitespace.** Clean, uncluttered, lots of breathing room.
- **Rounded UI-style elements** — pill buttons, rounded cards (12–24px radii),
  large rounded "pop-up window" panels.
- **Corner radii:** cards `--radius-lg`(16) / `--radius-xl`(24); buttons & chips
  are pills (`--radius-pill`); inputs `--radius-md`(12).
- **Cards:** white surface, soft blue-tinted shadow (`--shadow-md`), hairline
  border `#dde3ee`, no harsh lines. On dark, cards become translucent navy.
- **Shadows** are soft and blue-tinted (`rgba(5,41,117,…)`), never neutral grey
  or harsh. Pop-up windows use a deeper `--shadow-popup`.
- **Borders** are thin (1–1.5px), light blue-grey.

### Brand graphics (motifs)
- **Quarter circle** — derived from the logomark and the dots over the "i"s.
  A single large rounded corner. Four quarters combine into a **full circle**.
  Used as playful overlays on imagery and panels.
- **5th element** — a large line-art composition of quarter-circle arcs + a grid,
  rooted in the payoff "It's about time" and the secondary logo. Sits as a subtle
  tonal watermark (slightly lighter navy) on Tech Blue backgrounds. Variants:
  single / in-line / stacked.
- **UI elements** — branded "pop-up window" panels with a Tech Blue title bar
  showing the logomark + "continia", used to frame Business Central screenshots,
  videos, and images. Paired with caps **buttons** ("SEE MORE") and a **mouse
  cursor + click** motif to signal interactivity.

### Motion & states
- Calm, confident motion — short durations (120–360ms), standard/`ease-out`
  easing. **Fades and gentle rises**, never bouncy or springy.
- **Hover:** primary buttons darken (`--color-primary-hover`); cards lift with a
  slightly larger shadow + small translateY; links gain underline/innovation-blue.
- **Press:** subtle scale-down (~0.98) and/or deeper color.
- **Focus:** Innovation-blue focus ring (`--shadow-focus`).

### Photography
- Warm, human, welcoming — centered on **real Continia employees**, office
  environments, partners, and customer scenarios; or feature/action shots inside
  the solutions.
- Polished **Continia LUT** color treatment (indoor & outdoor variants) — slightly
  warm, natural, cohesive.
- **Remove third-party logos** from imagery. Often paired with a quarter-circle
  overlay carrying a headline + big stat.

---

## Iconography

- **System:** Font Awesome **classic, light** is Continia's icon system — thin
  single-weight line icons. This is the brand spec, now wired to the team's own
  **Font Awesome Pro kit**. Only the classic light style is used. Specific icons
  map to recurring concepts (download, security, expense, invoice, email, import,
  release, certification, technical support).
- **Loading:** the Pro kit is loaded via script in every component card and the
  UI kit:
  `<script src="https://kit.fontawesome.com/c11880975e.js" crossorigin="anonymous"></script>`
  → `<i class="fa-light fa-download"></i>`.
- Only the **classic light** family/weight is used for UI icons. The one exception
  is real social-media logos in the website footer, which use brand icons
  (`fa-brands fa-linkedin-in`, `fa-youtube`, `fa-x-twitter`) — these have no light
  equivalent.
- Icons are colored only with the approved palette (Tech Blue / Innovation Blue /
  Light Blue / White) via `color:` on the `<i>`.
- **Checkmarks** (`fa-light fa-check` / `fa-circle-check`) are the brand's bullet
  glyph for feature lists.
- **No emoji**, no multicolor icon sets, no solid/regular/duotone styles.

### Continia custom icons (solutions & modules)

The Pro kit (`c11880975e`) carries Continia's **own uploaded icons** for the
solutions and feature/finance modules. They render in the same light-line style
and are referenced with the **`fa-kit`** prefix (not `fa-light`):
`<i class="fa-kit fa-document-capture-solution-dc-icon"></i>`. Always prefer these
over generic FA icons when representing a Continia solution or module.

- **Solutions:** `fa-document-capture-solution-dc-icon`,
  `fa-banking-solution-cb-icon`, `fa-finance-solution-cf-add-modules--stack-icon`,
  `fa-expense-management-solution-em-icon`,
  `fa-document-output-solution-do-icon-file-export`.
- **Expense-Management modules:**
  `fa-credit-card-transactions-feature-module-expense-management-em-icon`,
  `fa-mileage-feature-module-expense-management-em-car-icon`,
  `fa-per-diem-feature-module-expense-management-em-briefcase-icon`.
- **Banking modules:** `fa-direct-communication-feature-module-banking-cb-icon`,
  `fa-security-feature-module-banking-cb-icon`.
- **Document-Capture / Output modules:**
  `fa-purchase-contracts-feature-module-document-capture-dc-overview-contract-icon`,
  `fa-security-feature-module-document-output-do-icon`.
- **Finance modules & misc:** `fa-general-ledger`, `fa-treasury`, `fa-factoring`,
  `fa-installments`, `fa-extended-fixed-assets`, `fa-multi-level-payment-discount`,
  `fa-l-open-entries`, `fa-file-storage`, `fa-printing`, `fa-iban-magnifying-glass`,
  `fa-associations`, `fa-associations-feature-module-finance-cf-link-icon`.
- **Motif / utility:** `fa-mouse-cursor` (the brand cursor motif),
  `fa-handshake-light`, `fa-release-continia-rocket-launch`, `fa-thief`, `fa-cancel`.

See the **Icons** group in the Design System tab (`guidelines/icons-solutions.html`,
`guidelines/icons-modules.html`) for the full rendered set.

---

## Index / manifest

Root:
- **`styles.css`** — single entry point; `@import`s all token files. Consumers link this.
- **`readme.md`** — this guide.
- **`SKILL.md`** — Agent-Skills-compatible front matter for use in Claude Code.

`tokens/` — CSS custom properties (all reachable from `styles.css`):
- `fonts.css` — Alliance No.2 `@font-face` rules.
- `colors.css` — palette, tints, gradients, semantic aliases.
- `typography.css` — font stack, weights, fluid type scale, tracking.
- `spacing.css` — spacing scale, radii, shadows, motion, layout widths.

`assets/`
- `fonts/` — Alliance No.2 TTFs.
- `logos/` — primary lockups (Tech Blue + White) and standalone logomark
  (Tech Blue / White).
- `brand/` — the official **5th element** vectors (`fifth-element-single.svg`,
  `-inline.svg`, `-stacked.svg`), recolorable via `fill="currentColor"`.

`guidelines/` — foundation specimen cards (the Design System tab): colors, type,
spacing, radii, shadows, gradients, logo, and brand-motif cards — plus the
**Inspiration** group (`inspiration-web.html`, `inspiration-app.html`,
`inspiration-ux.html`): web layout patterns, app/product UI anatomy, and UX
principles to lean on when doing frontend, web & app assignments.

`components/` — reusable React UI primitives. In consuming projects they're
reachable as `const { Button } = window.ContiniaDesignSystem_354b58`. Each
directory has a `.jsx`, a `.d.ts`, a `.prompt.md`, and a `@dsCard` HTML demo:
- `components/buttons/` — **Button** (primary / innovation / purple / secondary /
  ghost / white; sizes; `caps`; icons). *Starting point.*
- `components/forms/` — **Input** (label, icon, hint, invalid), **Checkbox**
  (checkbox + radio).
- `components/data-display/` — **Card** (feature/brand/tint; *starting point*),
  **Tag** (pill badge), **StatPanel** (quarter-circle big number).
- `components/brand/` — **Logo** (lockup / mark-only, brand colors),
  **PopupWindow** (the signature UI-element frame).

`ui_kits/website/` — high-fidelity recreation of the Continia marketing surface
(`index.html` = home), composed from the components: `Header`, `Hero`,
`Sections` (TrustBar / SolutionsGrid / BuiltInside / Quote / CTA), `Footer`
(+ demo dialog), with `site.css`. Interactive: nav, hover, and a working demo
modal. This is the public product surface — the solutions themselves run inside
Microsoft Dynamics 365 Business Central.

`assets/images/` + `imagery.html` — the **image library**. Drop reusable image
files (employee / office / partner / Business Central shots, warm Continia-LUT
treatment) into `assets/images/` and reference them from any page or app mock; or
open "Imagery" in the Design System tab and drag images straight onto the slots
(they persist) when mocking up. `imagery.html` lives at the project root so the
drag-drop slots can save.
