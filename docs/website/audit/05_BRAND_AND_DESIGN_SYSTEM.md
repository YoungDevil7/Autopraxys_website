# Praxys Website Audit — 05. Brand & Design-System Inventory

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Primary Source Files:**

- [`src/styles.css`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css) (250 lines)
- [`src/components/site/primitives.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx) (98 lines)
- [`src/components/site/Wordmark.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/Wordmark.tsx) (17 lines)
- [`src/components/site/SiteNav.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteNav.tsx) (105 lines)
- [`src/components/site/SiteFooter.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteFooter.tsx) (70 lines)
- [`src/components/illustrations/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx) (304 lines)

---

## 1. Logo & Brand Assets

### Visual Brand Assets in Repository

| Asset Path                                                                                                                     | Format / Size | Usage on Website                                                                                                                                                                                                                                                                                                                                                                                                                                        | Visual Treatment / CSS Classes                                                                                                                                                     |
| :----------------------------------------------------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`public/autopraxys-logo.png`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/autopraxys-logo.png) | PNG / 111 KB  | 1. Header Wordmark ([`Wordmark.tsx:8`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/Wordmark.tsx#L8))<br>2. Footer Wordmark ([`SiteFooter.tsx:35`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteFooter.tsx#L35))<br>3. Homepage Hero Graphic ([`index.tsx:93`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L93)) | `h-10 w-auto object-contain mix-blend-multiply dark:mix-blend-normal`<br>In Hero: `w-[88%] object-contain mix-blend-multiply drop-shadow-[0_18px_40px_oklch(0.55_0.04_85_/_0.12)]` |
| [`public/autopraxys-icon.png`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/autopraxys-icon.png) | PNG / 12.8 KB | Favicon asset                                                                                                                                                                                                                                                                                                                                                                                                                                           | Browser tab favicon                                                                                                                                                                |
| [`public/favicon.ico`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/favicon.ico)                 | ICO / 12.8 KB | Favicon asset                                                                                                                                                                                                                                                                                                                                                                                                                                           | Browser tab shortcut icon                                                                                                                                                          |
| [`public/favicon.png`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/favicon.png)                 | PNG / 12.8 KB | Apple touch icon & PNG favicon                                                                                                                                                                                                                                                                                                                                                                                                                          | Head links in [`__root.tsx:106-108`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L106-L108)                                          |

### Logo Implementation Inconsistencies

- **Mix-Blend-Multiply Workaround:** The logo file `autopraxys-logo.png` was created with a non-transparent or white background. To hide the white bounding box on warm-toned pages, the code forces `mix-blend-multiply`. While this works on pure white and ivory, it breaks if placed over dark backgrounds, colored banners, or complex images. A clean transparent SVG/PNG wordmark is needed.
- **Brand Identity Ambiguity:** The logo explicitly says **"AutoPraxys"**, yet the product is frequently referred to as simply **"Praxys"**. There is no standalone "Praxys" product wordmark asset in the repository.

---

## 2. Color Palette & Token Architecture

The styling system is built on **Tailwind CSS v4** with native `oklch` color definitions in [`src/styles.css`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css).

### The Dual `:root` Collision Bug in CSS

Inspection of [`src/styles.css`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css) reveals an architectural collision:

1. **Lines 64–98:** Defines default shadcn slate tokens:
   - `--background: oklch(1 0 0);` (Pure white)
   - `--foreground: oklch(0.129 0.042 264.695);` (Slate 950)
   - `--primary: oklch(0.208 0.042 265.755);` (Slate 900)
2. **Lines 145–180:** A second `:root` block ("Warm, bright, optimistic palette") executes lower in the cascade, **overriding** the first block:
   - `--background: oklch(0.988 0.006 85);` (Warm cream/ivory)
   - `--foreground: oklch(0.24 0.035 258);` (Deep charcoal ink)
   - `--ink: oklch(0.2 0.035 258);` (High-contrast headline ink)
   - `--card: oklch(0.995 0.004 85);` (Off-white elevated surface)
   - `--primary: oklch(0.58 0.13 253);` (Vibrant periwinkle/cobalt blue)
   - `--blue: oklch(0.58 0.13 253);`
   - `--sky: oklch(0.72 0.1 240);`
   - `--teal: oklch(0.7 0.09 195);` (Cyan-teal accent)
   - `--secondary: oklch(0.955 0.01 220);`
   - `--muted-foreground: oklch(0.52 0.025 255);`
   - `--border: oklch(0.9 0.012 240);`
   - `--radius: 0.9rem;`

### Active Semantic Palette (Effective Runtime Values)

| Token Name             | OKLCH Value             | Approximate Hex / Role                     |
| :--------------------- | :---------------------- | :----------------------------------------- |
| `--background`         | `oklch(0.988 0.006 85)` | `#FAF9F5` (Warm Alabaster / Ivory)         |
| `--foreground`         | `oklch(0.24 0.035 258)` | `#232733` (Deep Midnight Charcoal)         |
| `--ink`                | `oklch(0.2 0.035 258)`  | `#1A1D27` (Heading Ink)                    |
| `--card`               | `oklch(0.995 0.004 85)` | `#FCFBF9` (Clean Card Surface)             |
| `--primary` / `--blue` | `oklch(0.58 0.13 253)`  | `#4B73E6` (Cobalt Sapphire Brand Primary)  |
| `--teal`               | `oklch(0.7 0.09 195)`   | `#38B5A7` (Cyan Teal Accent / Eyebrow dot) |
| `--muted-foreground`   | `oklch(0.52 0.025 255)` | `#646D82` (Slate Gray Body & Subtext)      |
| `--border` / `--input` | `oklch(0.9 0.012 240)`  | `#E1E4EC` (Hairline Border)                |

### Gradient Tokens

- `--gradient-hero`: Radial blends of soft periwinkle and cyan on ivory:
  `radial-gradient(120% 120% at 15% 10%, oklch(0.95 0.04 240) 0%, transparent 55%), radial-gradient(120% 120% at 90% 20%, oklch(0.93 0.05 195) 0%, transparent 50%), oklch(0.988 0.006 85)`
- `--gradient-blue`: `linear-gradient(135deg, oklch(0.62 0.13 253), oklch(0.7 0.1 210))`
- `--gradient-teal`: `linear-gradient(135deg, oklch(0.72 0.1 205), oklch(0.78 0.09 175))`

### Shadow Tokens

- `--shadow-soft`: `0 1px 2px oklch(0.5 0.05 250 / 0.04), 0 12px 32px -12px oklch(0.5 0.08 250 / 0.14)`
- `--shadow-lift`: `0 2px 6px oklch(0.5 0.05 250 / 0.05), 0 24px 60px -20px oklch(0.5 0.1 250 / 0.2)`

---

## 3. Typography & Type Scale

Fonts are imported from Google Fonts in [`src/routes/__root.tsx:117`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L117):

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
/>
```

### Font Roles

- **Display / Headings (`--font-display`):** `Fraunces`, `ui-serif`, `Georgia`, `serif`.
  - Applied to `h1, h2, h3, h4` via `src/styles.css:204`.
  - Optical sizing active (`font-optical-sizing: auto; letter-spacing: -0.02em;`).
  - Warm, editorial, literary serif that sets the site apart from tech minimalism.
- **Body / Sans (`--font-sans`):** `Inter`, `ui-sans-serif`, `system-ui`, `sans-serif`.
  - Applied to `body` via `src/styles.css:200`.
  - OpenType feature settings: `font-feature-settings: "cv02", "cv03", "cv04", "cv11";`.

### Type Scale in Practice

- **Hero H1:** `text-5xl md:text-6xl` (48px / 60px), font weight `font-semibold`, line-height `leading-[1.02]`.
- **Section H2:** `text-4xl md:text-5xl` (36px / 48px), font weight `font-semibold`, line-height `leading-tight`.
- **Card H3:** `text-xl md:text-2xl` (20px / 24px), font weight `font-semibold`.
- **Eyebrow / Kicker:** `text-xs` (12px), uppercase, letter-spacing `tracking-[0.18em]`, font weight `font-semibold`.
- **Body Large:** `text-lg` (18px), line-height `leading-relaxed`.
- **Body Normal:** `text-sm` (14px), line-height `leading-relaxed`.
- **Small Footnote / Legal:** `text-xs` (12px).

---

## 4. Components & Layout Conventions

### 1. `Container` ([`primitives.tsx:5-17`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx#L5-L17))

- Enforces max-width: `mx-auto w-full max-w-6xl px-6 md:px-8`.
- Consistent margin and gutters across desktop and mobile.

### 2. `Eyebrow` ([`primitives.tsx:19-37`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx#L19-L37))

- Consistent section kicker:
  ```tsx
  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
    {children}
  </span>
  ```

### 3. `CTA` Button ([`primitives.tsx:47-79`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx#L47-L79))

- **Base:** `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:...`
- **Variants:**
  - `primary`: Background `var(--gradient-blue)`, text white, `shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5`.
  - `ghost`: Border `border-border bg-card/60 text-foreground hover:border-primary/40 hover:-translate-y-0.5`.
- **Flaw:** Forces an `<a href>` tag for all `/contact` links, bypassing SPA routing.

### 4. `GlassCard` ([`primitives.tsx:81-98`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx#L81-L98))

- Rounded card with subtle blur:
  `rounded-3xl border border-border/70 bg-card/70 p-8 shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]`

### 5. `SiteNav` ([`SiteNav.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteNav.tsx))

- Sticky header (`sticky top-0 z-50`).
- Transitions from transparent to blurred backdrop (`backdrop-blur-xl border-b border-border/60 bg-background/80`) on `scrollY > 12`.
- Links: Technology, Praxys, Research, About.
- Mobile menu toggle: Custom animated 3-bar hamburger transitioning to an 'X'.

### 6. `SiteFooter` ([`SiteFooter.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteFooter.tsx))

- 4-column layout (`md:grid-cols-[1.5fr_1fr_1fr_1fr]`):
  - Column 1: Wordmark + Value statement.
  - Column 2 (Platform): Praxys, Technology, Research.
  - Column 3 (Company): About, Contact.
  - Column 4 (Legal): Privacy, Terms.
- Copyright bar: Auto-updating year + `"AutoPraxys Private Limited. All rights reserved. Praxys — The AI Capability Intelligence Platform."`

---

## 5. Illustration & Motion System

### Bespoke SVG Illustrations ([`src/components/illustrations/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx))

1. `HeroWeave`: Intertwining rising paths with pulse dots representing human and AI growth.
2. `FlowDiagram`: 5 sequential rounded nodes connected by animated SVG stroke arrows.
3. `CapabilityCore`: Central hub with 6 orbiting satellites on a dashed circular orbit.
4. `GrowthCurve`: Diverging capability curve vs baseline.
5. `SignalWave`: 28 vertical bars of varying heights simulating keystroke rhythms.
6. `PrivacyShield`: SVG shield contour with animated checkmark.
7. `CapabilityGapViz`: Diverging output vs capability curves with dashed delta line.

### CSS Keyframe Animations ([`src/styles.css:231-250`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css#L231-L250))

- `@keyframes float-slow`: 7s subtle vertical oscillation (`translateY(-12px)`).
- `@keyframes draw`: Stroke dashoffset animation for drawing SVG paths.
- `@keyframes pulse-dot`: 3s pulsing scale and opacity for graph points.
- `@keyframes shimmer`: Gradient sweep animation.
- `@utility reveal`: Scroll-reveal animation (`opacity: 0; translateY(24px)` -> `opacity: 1; transform: none`).

---

## 6. Theme & Responsive Analysis

### Breakpoints

- Tailwind v4 standard responsive prefixes:
  - `sm:` 640px
  - `md:` 768px (Primary desktop breakpoint used for 2-column grids, desktop nav, and illustration visibility)
  - `lg:` 1024px (Used on `/about` for 4-column team grid)

### Dark Mode State

- **Status:** **Broken / Disabled in Practice.**
- `.dark` CSS tokens are defined in `styles.css:100-133` using the original shadcn slate palette. However, the custom warm tokens (`--ink`, `--teal`, `--blue`, `--gradient-hero`, etc.) lack `.dark` definitions.
- There is no dark mode toggle button or theme provider in the application.
- The wordmark includes `mix-blend-multiply dark:mix-blend-normal`, indicating theoretical consideration for dark mode that was never completed.
