# Praxys Website Audit — 10. Technical Quality, Accessibility & Maintenance

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Primary Source Files:**

- [`package.json`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/package.json)
- [`tsconfig.json`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/tsconfig.json)
- [`eslint.config.js`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/eslint.config.js)
- [`src/styles.css`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css)
- [`src/components/ui/`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/ui/)

---

## 1. Build Pipeline, Scripts & Executed Checks

### Package Scripts Configuration ([`package.json`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/package.json))

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

### Actual Execution Output of Quality Commands

To verify the state of tooling per audit rules without altering dependencies:

```pwsh
npm run lint
# Output:
# > lint
# > eslint .
# 'eslint' is not recognized as an internal or external command,
# operable program or batch file.
```

**Finding:**

- Local dependencies (`node_modules`) are **not installed** in this workspace.
- Per safety rules, no package managers (`npm install`, `bun install`) were executed.
- Static analysis was conducted directly on source code files.

### Test Suite Inventory

- **Automated Tests:** **None.** There are no `*.test.ts`, `*.spec.ts`, or Vitest/Playwright configurations in this repository. Quality assurance relies on static TypeScript compilation and browser inspection.

---

## 2. TypeScript & Lint Configuration

### TypeScript Configuration ([`tsconfig.json`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/tsconfig.json))

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

**Evaluation:**

- Clean, modern strict setup: `"strict": true`, `"noUnusedLocals": true`, `"noUnusedParameters": true`, and module resolution using `"bundler"`.
- Path alias `@/*` cleanly maps to `./src/*`.

### ESLint Configuration ([`eslint.config.js`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/eslint.config.js))

- Modern ESLint v9 Flat Config format using `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `eslint-plugin-prettier`.
- Specifically ignores auto-generated files: `routeTree.gen.ts` and build output `dist`.

---

## 3. Dead Code & Phantom Dependencies Inventory

A comprehensive static grep across the workspace revealed a **massive disparity between installed packages and actual runtime imports**:

### 1. 45 Unused Boilerplate shadcn/ui Components in `src/components/ui/`

Every single component in `src/components/ui/` is **dead code** that is never imported by any active page or site component:

- `accordion.tsx`, `alert-dialog.tsx`, `alert.tsx`, `aspect-ratio.tsx`, `avatar.tsx`, `badge.tsx`, `breadcrumb.tsx`, `button.tsx`, `calendar.tsx`, `card.tsx`, `carousel.tsx`, `chart.tsx`, `checkbox.tsx`, `collapsible.tsx`, `command.tsx`, `context-menu.tsx`, `dialog.tsx`, `drawer.tsx`, `dropdown-menu.tsx`, `form.tsx`, `hover-card.tsx`, `input-otp.tsx`, `input.tsx`, `label.tsx`, `menubar.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `popover.tsx`, `progress.tsx`, `radio-group.tsx`, `resizable.tsx`, `scroll-area.tsx`, `select.tsx`, `separator.tsx`, `sheet.tsx`, `sidebar.tsx` (24 KB!), `skeleton.tsx`, `slider.tsx`, `sonner.tsx`, `switch.tsx`, `table.tsx`, `tabs.tsx`, `textarea.tsx`, `toggle-group.tsx`, `toggle.tsx`, `tooltip.tsx`.

### 2. Phantom Dependencies in `package.json`

Because the website uses bespoke hand-crafted primitives (`Container`, `Eyebrow`, `CTA`, `GlassCard`) and raw HTML form elements, the following heavy dependencies in `package.json` are completely unused:

- `@radix-ui/*` (19 separate packages: `accordion`, `alert-dialog`, `avatar`, `checkbox`, `dialog`, `dropdown-menu`, etc.)
- `cmdk` (v1.1.1)
- `date-fns` (v4.1.0)
- `embla-carousel-react` (v8.6.0)
- `input-otp` (v1.4.2)
- `lucide-react` (v0.575.0 — only referenced inside the unused `src/components/ui/` components)
- `react-day-picker` (v9.14.0)
- `react-hook-form` & `@hookform/resolvers` & `zod` (The contact form in `contact.tsx` uses raw native React `useState` and `FormData`)
- `react-resizable-panels` (v4.6.5)
- `recharts` (v2.15.4)
- `sonner` (v2.0.7)
- `vaul` (v1.1.2)

**Impact:** Eliminating this boilerplate will strip ~120 KB of unneeded source code and drastically reduce npm dependency resolution overhead.

---

## 4. Accessibility (a11y) Implementation Audit

| Area                     | Implementation in Source                                             | Accessibility Grade | Findings & Recommended Remediation                                                                                                                    |
| :----------------------- | :------------------------------------------------------------------- | :-----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Color Contrast**       | Warm ivory background (`#FAF9F5`) with deep midnight ink (`#232733`) |        **A**        | Contrast ratio is ~11:1 for headlines and body text, easily satisfying WCAG AAA standards.                                                            |
| **Subtext / Muted Text** | `oklch(0.52 0.025 255)` (`#646D82`)                                  |       **B-**        | Contrast ratio is ~4.6:1 against ivory; borderline for small 12px captions and tags under WCAG AA.                                                    |
| **Form Labels**          | `<label htmlFor="name">`, `<label htmlFor="email">`                  |        **A**        | All form inputs have explicit matching `<label htmlFor="...">` attributes.                                                                            |
| **SVG Visuals**          | All 7 illustration SVGs use `aria-hidden="true"`                     |        **D**        | Screen readers completely ignore all charts and diagrams. Must add descriptive `<title>` and `<desc>` elements or accessible textual figure captions. |
| **Mobile Navigation**    | Hamburger `<button aria-expanded={open} aria-label="Toggle menu">`   |        **C**        | Proper aria attributes, but lacks keyboard focus trap, `Escape` key close listener, and backdrop click dismissal.                                     |
| **Heading Hierarchy**    | Single `<h1>` per page, followed by sequential `<h2>` and `<h3>`     |        **A**        | Flawless heading hierarchy across all 8 user-facing pages.                                                                                            |
| **Focus Rings**          | `focus-visible:ring-2 focus-visible:ring-ring` on CTAs               |        **A**        | Custom focus outlines are maintained for keyboard navigators.                                                                                         |

---

## 5. Performance, Fonts & Asset Loading Patterns

### Font Loading Pipeline

- **Method:** Google Fonts `<link rel="stylesheet">` embedded in `<head>` via `__root.tsx:109-118`.
- **Preconnect:** Contains proper `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">`.
- **Optimization Opportunity:** In a production Next.js or Vite build, self-hosting fonts (`@fontsource/fraunces` and `@fontsource/inter`) eliminates third-party DNS lookups and prevents Google Fonts privacy tracking concerns under GDPR.

### Image Optimization

- All 4 image assets in `public/` are delivered as uncompressed PNGs:
  - `souryavarma-datla.png` (360 KB for a 96x96 container)
  - `autopraxys-logo.png` (111 KB)
- Converting these assets to modern **WebP / AVIF** formats will reduce total image payload from 480 KB to under 60 KB.
