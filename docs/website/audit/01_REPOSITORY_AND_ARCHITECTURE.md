# Praxys Website Audit — 01. Repository & Architecture Map

**Target Workspace:** `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`  
**Audit Date:** October 20, 2026  
**Auditor:** Antigravity AI

---

## 1. Safety, Version Control & Environment Verification

### Git Status & Repository Root Confirmation

An initial repository probe was executed from the workspace root `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`:

```pwsh
git status --short; git branch --show-current; git rev-parse HEAD
# Output:
# fatal: not a git repository (or any of the parent directories): .git
```

**Conclusion:**

- The active workspace directory `C:\Projects\Autopraxys_website-main\Autopraxys_website-main` is **NOT currently a Git repository**.
- It was created on **October 20, 2026, at 2:57 AM** by extracting `Autopraxys_website-main.zip` (size: 725,805 bytes), which was exported from Lovable.
- There are no Git branches, no tracked HEAD commit, and no pre-existing uncommitted Git diffs.
- Per safety instructions, no `git init`, `git checkout`, `git reset`, or any modifying commands were executed.

### Local Toolchain & Dependencies State

```pwsh
node -v; npm -v; bun -v
# Output:
# Node: v22.14.0
# npm: 10.9.2
# bun: The term 'bun' is not recognized as a cmdlet, function, script file, or executable program.
```

```pwsh
Test-Path node_modules
# Output: False
```

`node_modules` is **absent** from this directory. Per audit instructions ("Do not install packages or change dependencies merely to perform this audit"), packages were not installed, and static source code inspection was prioritized.

---

## 2. Clarifying the Multiple Repositories & Website Candidates

During filesystem discovery across `C:\Projects`, multiple directories containing website and platform code were identified. Below is the evidence-backed clarification of what each directory represents:

```
C:\Projects\
├── Autopraxys_website-main\
│   └── Autopraxys_website-main\       <-- [ACTIVE MARKETING WEBSITE AUDIT TARGET]
│       ├── .lovable\
│       ├── public\
│       ├── src\
│       └── package.json (tanstack_start_ts)
│
├── autopraxys-website\                 <-- [LEGACY / ABANDONED NEXT.JS PROTOTYPE]
│   ├── .next\
│   ├── src\app\
│   ├── DEPLOYMENT.md, vercel.json, Dockerfile
│   └── WEBSITE_CONTEXT.md
│
├── praxys-intelligence-platform-main\  <-- [EARLIER JULY 2026 LOVABLE SNAPSHOT]
│   └── praxys-intelligence-platform-main\
│       ├── .lovable\
│       └── src\ (Identical earlier route tree, July 11-12 2026)
│
└── Promptsense\                        <-- [CORE PRAXYS PRODUCT & PLATFORM REPO]
    ├── backend\ (FastAPI/Python scoring engines, telemetry ingestion)
    ├── chrome-extension\ (Manifest V3 telemetry collector)
    ├── frontend-praxys\ (Main user capability dashboard, Vite+React)
    ├── frontend-client001\ (Client pilot & admin portal, Vite+React)
    ├── frontend-control-center\ (System administrator dashboard)
    └── frontend-enterprise\ (Enterprise workforce analytics)
```

### Forensic Evidence for Selecting `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`

1. **Timestamp:** This folder was created on `10/20/2026 2:57 AM`, representing the latest export directly matching the user's workspace instruction.
2. **Lovable Connection:** `.lovable/project.json` contains:
   ```json
   {
     "schemaVersion": 1,
     "template": "tanstack_start_ts_current",
     "revision": "tanstack_start_ts_current-ccb442fda9e9"
   }
   ```
3. **Public Assets:** Contains the production assets:
   - `public/google4893f3bf83c2be9c.html` (Google Search Console verification for the live domain).
   - `public/autopraxys-logo.png`
   - `public/souryavarma-datla.png`
4. **Why NOT `Promptsense/frontend-praxys`?**
   `Promptsense/frontend-praxys` is the authenticated **software application** (with routes `/login`, `/signup`, `/behavior`, `/efficiency`, `/decisions`, `/coverage`). It is not the public-facing corporate marketing website.
5. **Why NOT `autopraxys-website`?**
   `autopraxys-website` was an older Next.js 15 attempt created on September 8, 2026. It has not been updated since September 8, whereas the current workspace represents the actively synced Lovable project as of October 20, 2026.

---

## 3. Directory Map of the Marketing Website

```
C:\Projects\Autopraxys_website-main\Autopraxys_website-main
├── .lovable/
│   └── project.json                     # Lovable project metadata and template revision
├── public/
│   ├── autopraxys-icon.png              # 12.8 KB square icon (128x128 / 256x256)
│   ├── autopraxys-logo.png              # 111 KB main wordmark and branding graphic
│   ├── favicon.ico                      # 12.8 KB favicon
│   ├── favicon.png                      # 12.8 KB favicon PNG
│   ├── google4893f3bf83c2be9c.html       # Google Search Console domain verification token
│   ├── robots.txt                       # Search engine crawler permissions
│   └── souryavarma-datla.png            # 360 KB Founder & CEO portrait photo
├── src/
│   ├── components/
│   │   ├── illustrations/
│   │   │   └── index.tsx                # 7 bespoke SVG illustration components
│   │   ├── site/
│   │   │   ├── LegalLayout.tsx          # Wrapper layout for /privacy and /terms
│   │   │   ├── primitives.tsx           # Container, Eyebrow, CTA, GlassCard
│   │   │   ├── Reveal.tsx               # Scroll-reveal intersection observer wrapper
│   │   │   ├── SiteFooter.tsx           # Site-wide global footer
│   │   │   ├── SiteNav.tsx              # Sticky desktop and mobile navigation header
│   │   │   └── Wordmark.tsx             # Responsive logo component
│   │   └── ui/                          # [DEAD CODE] 45 unused shadcn/ui boilerplate components
│   ├── hooks/
│   │   ├── use-mobile.tsx               # Mobile viewport hook (unused by live pages)
│   │   └── use-reveal.ts                # IntersectionObserver hook for fade-up animations
│   ├── lib/
│   │   ├── error-capture.ts             # SSR error stack recovery utility for h3/Nitro
│   │   ├── error-page.ts               # Standalone HTML fallback page on fatal 500 error
│   │   ├── lovable-error-reporting.ts   # Client-side error telemetry to Lovable container
│   │   └── utils.ts                     # cn() classnames merger (clsx + tailwind-merge)
│   ├── routes/
│   │   ├── __root.tsx                   # TanStack Router root shell, metadata & layout
│   │   ├── about.tsx                    # /about (Mission, story, team, advisors)
│   │   ├── contact.tsx                  # /contact (Inquiry form & direct contacts)
│   │   ├── index.tsx                    # / (Homepage)
│   │   ├── praxys.tsx                   # /praxys (Platform, modules, roadmap)
│   │   ├── privacy.tsx                  # /privacy (Privacy policy)
│   │   ├── README.md                    # File-based routing documentation
│   │   ├── research.tsx                 # /research (Cohort stats, comparison matrix)
│   │   ├── sitemap[.]xml.ts             # /sitemap.xml (Server-side generated XML sitemap)
│   │   ├── technology.tsx               # /technology (Pillars & philosophy)
│   │   └── terms.tsx                    # /terms (Terms of use)
│   ├── router.tsx                       # TanStack Router instance factory + QueryClient
│   ├── routeTree.gen.ts                 # Automatically generated route tree definitions
│   ├── server.ts                        # Nitro / SSR fetch entry point with error shielding
│   ├── start.ts                         # TanStack Start middleware & runtime instance
│   └── styles.css                       # Tailwind v4 theme, design tokens & keyframe animations
├── .gitignore                           # Git ignore definitions
├── .prettierignore                      # Prettier ignore definitions
├── .prettierrc                          # Prettier configuration
├── AGENTS.md                            # Lovable synchronization guardrails
├── bun.lock                             # Bun package lockfile
├── bunfig.toml                          # Bun runtime configuration
├── components.json                      # shadcn/ui CLI configuration
├── eslint.config.js                     # ESLint v9 flat config
├── package-lock.json                    # npm package lockfile (263 KB)
├── package.json                         # npm package definition and scripts
├── tsconfig.json                        # TypeScript project configuration
└── vite.config.ts                       # Vite + @lovable.dev/vite-tanstack-config setup
```

---

## 4. Technical Framework & Build Pipeline

### Core Architecture

- **Framework:** [TanStack Start](https://tanstack.com/start) (`@tanstack/react-start` v1.168.26).
- **Server Engine:** [Nitro](https://nitro.unjs.io/) (`3.0.260603-beta`) running via `@lovable.dev/vite-tanstack-config`.
- **Bundler:** Vite v8.0.16.
- **Routing Engine:** [TanStack Router](https://tanstack.com/router) (`@tanstack/react-router` v1.170.16) with fully typed file-based route generation (`routeTree.gen.ts`).
- **Data Fetching / State:** TanStack React Query (`@tanstack/react-query` v5.101.1).
- **React Version:** React 19.2.0 + React DOM 19.2.0.
- **Styling Pipeline:** Tailwind CSS v4 (`@tailwindcss/vite` v4.2.1, `tailwindcss` v4.2.1, `tw-animate-css` v1.3.4).

### Key Package Scripts (`package.json`)

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

### Server Entry & Error Resilience Architecture

In `src/server.ts`, an SSR error normalization layer wraps the server entry:

- In-handler exceptions caught by Nitro/h3 can return a generic `{ "unhandled": true, "message": "HTTPError" }`.
- `src/server.ts` imports `src/lib/error-capture.ts` to capture out-of-band error stacks via `globalThis.addEventListener("error")` and `globalThis.addEventListener("unhandledrejection")`.
- When an SSR crash occurs, instead of returning an unstyled white screen or raw JSON payload, `server.ts` calls `renderErrorPage()` from `src/lib/error-page.ts`, returning a clean 500 HTML response with "This page didn't load" and a reload button.

---

## 5. Deployment Target & Public Domain Evidence

1. **Configured Target:** The Vite configuration in `vite.config.ts` delegates to `@lovable.dev/vite-tanstack-config`, which defaults Nitro's build target to **Cloudflare Pages / Cloudflare Workers** or static node edge containers.
2. **Domain References:**
   - Production Domain: `autopraxys.com`
   - Founder Email in `src/routes/contact.tsx`: `sourya@autopraxys.com`
   - Privacy Officer Email in `src/routes/privacy.tsx`: `sourya@autopraxys.com`
   - LinkedIn Profile in `src/routes/contact.tsx`: `https://www.linkedin.com/company/autopraxys-private-limited/`
   - Google Verification: `public/google4893f3bf83c2be9c.html`
3. **Missing Deployment Config in Workspace:** Unlike the predecessor `C:\Projects\autopraxys-website` (which contained explicit `Dockerfile`, `docker-compose.yml`, and `vercel.json`), this TanStack Start workspace relies completely on Lovable's automated Cloudflare deployment pipeline.

---

## 6. Route Discovery Summary

| Route Path      | Type                | Source File                        | Status                       |
| :-------------- | :------------------ | :--------------------------------- | :--------------------------- |
| `/`             | SSR Page            | `src/routes/index.tsx`             | Implemented                  |
| `/about`        | SSR Page            | `src/routes/about.tsx`             | Implemented                  |
| `/contact`      | SSR Page            | `src/routes/contact.tsx`           | Implemented (3rd-party form) |
| `/praxys`       | SSR Page            | `src/routes/praxys.tsx`            | Implemented                  |
| `/technology`   | SSR Page            | `src/routes/technology.tsx`        | Implemented                  |
| `/research`     | SSR Page            | `src/routes/research.tsx`          | Implemented                  |
| `/privacy`      | SSR Page            | `src/routes/privacy.tsx`           | Implemented                  |
| `/terms`        | SSR Page            | `src/routes/terms.tsx`             | Implemented                  |
| `/sitemap.xml`  | Server Endpoint     | `src/routes/sitemap[.]xml.ts`      | Defective (Empty BASE_URL)   |
| `*` (Catch-all) | Not Found Component | Defined in `src/routes/__root.tsx` | Implemented (404 page)       |
