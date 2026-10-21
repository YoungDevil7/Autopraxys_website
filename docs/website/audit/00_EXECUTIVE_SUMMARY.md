# Praxys Website Audit — 00. Executive Summary

**Audit Date:** October 20, 2026  
**Auditor:** Antigravity AI (Pair Programming Discovery Audit)  
**Target Repository / Workspace:** `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`  
**Target Audience:** Founder (Souryavarma Datla), Engineering & Product Team, Successor AI Analysis Agents  
**Scope:** Read-Only Complete Surface Discovery & Architecture Audit of the Current Public Marketing Website

---

## 1. Overall State of the Current Website

The current public website for **AutoPraxys / Praxys** is a standalone, server-rendered web application built with **TanStack Start (Vite + Nitro SSR + TanStack Router)** and styled with **Tailwind CSS v4**. It was exported/synced via Lovable (`.lovable/project.json`, revision `tanstack_start_ts_current-ccb442fda9e9`) on October 20, 2026, and extracted into the current workspace directory `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`.

The website functions as a clean, editorial, early-stage brochureware marketing site comprising **8 user-facing pages** and **1 programmatic route**:

1. `/` (Homepage)
2. `/about` (Company, Mission, Founder Story, Team, Advisors)
3. `/contact` (Demo Request & Pilot Inquiry Form)
4. `/praxys` (Product Overview, 4 Architectural Pillars, Roadmap)
5. `/technology` (Philosophy, Behavioral Intelligence, Capability Intelligence, Privacy)
6. `/research` (Discovery Cohort Stats, Key Findings, Competitive Comparison)
7. `/privacy` (Privacy Policy)
8. `/terms` (Terms of Service)
9. `/sitemap.xml` (Server Route)

### Current Posture

The website effectively introduces a compelling narrative category: **"AI Capability Intelligence"** — shifting the organizational question from _what AI produces_ to _how humans grow with AI_. It establishes initial credibility with the founder's academic pedigree (SRM Institute of Science and Technology), advisory board credentials (Morgan Stanley AI Engineer, VIT Chennai Professor/IET Director), and initial discovery cohort numbers (150 STEM students, 10 professors).

However, from a commercial, enterprise, and technical standpoint, the website is currently **severely disconnected from the actual working Praxys software platform** located in `C:\Projects\Promptsense`. It contains **zero real application screenshots, zero interactive or recorded software demonstrations, zero customer portal login links, zero API documentation, and zero technical architecture diagrams**. Crucially, key conversion pathways rely on unverified third-party form handling (`formsubmit.co`), relative canonical and sitemap URLs that violate web standards, and hard-coded inline CSS overrides that bypass client-side routing.

---

## 2. Actual Website Location & Identification

| Attribute                   | Finding                                                                                                                                 | Evidence                                                                                                                                |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Active Workspace**        | `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`                                                                           | Workspace root, package.json name `tanstack_start_ts`                                                                                   |
| **Git Status**              | **Unversioned Directory** (No `.git` folder)                                                                                            | `git status` returned `fatal: not a git repository`. Workspace is an extracted archive from `Autopraxys_website-main.zip`               |
| **Branch / HEAD**           | None (Unversioned standalone export)                                                                                                    | No Git repository initialized locally in this workspace                                                                                 |
| **Lovable Integration**     | Connected (`.lovable/project.json`)                                                                                                     | Template: `tanstack_start_ts_current`, revision `tanstack_start_ts_current-ccb442fda9e9`                                                |
| **Historical Predecessors** | `C:\Projects\autopraxys-website` (Next.js 15, Sept 2026)<br>`C:\Projects\praxys-intelligence-platform-main` (TanStack Start, July 2026) | Directory timestamps and source inspection in `C:\Projects`                                                                             |
| **Actual Product Repos**    | `C:\Projects\Promptsense` (Core Backend, Chrome Extension, Frontend Apps)                                                               | Contains `backend/`, `chrome-extension/`, `frontend-praxys/`, `frontend-client001/`, `frontend-control-center/`, `frontend-enterprise/` |

---

## 3. Strongest Existing Elements

1. **Clear Category Thesis & Narrative Hook:**
   The foundational pitch — _"Measure how humans grow with AI, not just what they produce"_ — is clear, differentiated, and resonates strongly against generic AI productivity hype. The framing of "Cognitive Offloading" and "The Capability Illusion" addresses a known pain point among CTOs, CIOs, and university deans.
2. **Warm, Human-Centered Editorial Aesthetics:**
   The typography pairing of **Fraunces** (optical-size serif for headlines) and **Inter** (clean sans-serif for body), combined with warm beige background tokens (`oklch(0.988 0.006 85)`), soft indigo/blue gradients (`--gradient-blue`), and teal accents (`--gradient-teal`), avoids stereotypical generic dark-mode crypto/SaaS tropes and evokes academic rigor and humanism.
3. **Responsive Bespoke SVG Illustrations:**
   The interactive visuals (`HeroWeave`, `CapabilityCore`, `FlowDiagram`, `GrowthCurve`, `SignalWave`, `PrivacyShield`, `CapabilityGapViz` in `src/components/illustrations/index.tsx`) are clean vector implementations that load with zero network requests and render crisply at any resolution.
4. **Lightweight Runtime Footprint on the Frontend:**
   The actual rendering code avoids bloated client-side JavaScript runtimes. The visual pages rely solely on minimal primitives (`Container`, `Eyebrow`, `CTA`, `GlassCard`) and a lightweight `useReveal` IntersectionObserver hook (`src/hooks/use-reveal.ts`).
5. **Authentic Founder Story & Real Advisory Names:**
   The founder profile (`src/routes/about.tsx`) features a real portrait, transparent background details, and specific advisors with verifiable institutional affiliations (Morgan Stanley, VIT Chennai).

---

## 4. Biggest Problems & Critical Vulnerabilities

### Critical / P0 & P1 Deficiencies

1. **Complete Absence of Product Proof (The "Ghost Software" Problem):**
   Despite claims on `/praxys` that _"Telemetry and scoring built. Showcase platform live. Pilot portal ready"_, the website does not showcase a single screen, video, animation, or interactive widget from the real product. The hero graphic on the homepage is literally just the company logo image (`autopraxys-logo.png`) floating on an ambient blur. An enterprise buyer cannot verify whether Praxys is functional software or an idea.
2. **Broken Sitemap and Inverted Canonical SEO:**
   In `src/routes/sitemap[.]xml.ts`, `BASE_URL` is hard-coded as `""` (empty string). As a result, the generated sitemap emits relative URLs (e.g. `<loc>/about</loc>`), which violates the XML Sitemap 0.9 standard and causes search engines to reject the file. Furthermore, all page canonical tags and OpenGraph URL tags use relative URLs (`/about`, `/contact`, `/praxys`), violating RFC 6596.
3. **Fragile Form Submission Architecture:**
   The `/contact` form submits directly to a third-party relay (`POST https://formsubmit.co/ajax/sourya@autopraxys.com`). If an enterprise visitor's ad-blocker or corporate firewall blocks `formsubmit.co`, the code catches the error, triggers a `window.location.href = mailto:...` redirect, and immediately renders the success state (`sent: true`, "Thank you. Your request has been noted"), even if the user never sent the email or has no mail client configured.
4. **Hard Page Reload Hack on Primary CTAs:**
   In `src/components/site/primitives.tsx` (lines 58-64), the `CTA` component contains a hardcoded override:
   ```tsx
   if (href || to === "/contact") {
     return <a href={href ?? to} ...>{children}</a>;
   }
   ```
   Every click on "Request a demo" or "Get in touch" forces a full browser window reload, throwing away the SPA router state and degrading user experience.
5. **Legally Risky Competitive Privacy Claims:**
   In `src/routes/research.tsx` (comparison table), ChatGPT and Claude are marked as `Privacy-first: No` (`priv: false`). Enterprise buyers evaluating OpenAI Enterprise or Anthropic Claude with HIPAA / SOC2 BAA agreements will view this as an unverified and legally inaccurate claim that compromises AutoPraxys' credibility.
6. **Massive Boilerplate Dead Code (45 Unused UI Components):**
   The repository contains 45 Radix-based shadcn/ui components in `src/components/ui/` totaling over 120 KB of unreferenced code, alongside 19 `@radix-ui/*` npm dependencies, Lucide icons, cmdk, recharts, and vaul, none of which are imported anywhere in the application.
7. **Accessibility Blindness on SVGs:**
   All 7 bespoke SVG illustrations have `aria-hidden="true"` with no alternative text or readable captions, making the core technical arguments completely inaccessible to screen reader users.

---

## 5. Recommended Next Actions (Executive Phasing)

|    Phase    |       Priority        | Action Item                                                                                                                                                                                                                            | Target Document Reference                                                                                                                       |
| :---------: | :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Phase 1** |  **Immediate (P0)**   | Fix `sitemap[.]xml.ts` base URL, fix relative canonical URLs, fix `/contact` client routing hack, and harden contact form submission with server-side API or verified webhook.                                                         | [12_PRIORITIZED_ISSUES.md](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/docs/website/audit/12_PRIORITIZED_ISSUES.md)     |
| **Phase 2** |   **Product (P1)**    | Extract high-fidelity screenshots and interactive workflow captures from `frontend-praxys` and `frontend-client001` in `C:\Projects\Promptsense`. Replace the floating logo hero with an authentic product telemetry visualization.    | [07_DEMOS_AND_ASSETS.md](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/docs/website/audit/07_DEMOS_AND_ASSETS.md)         |
| **Phase 3** |  **Narrative (P1)**   | Disclose the actual 14 capability dimensions from the `PRAXYS_METRIC_CATALOGUE` (Skill Integrity, Attention, Dependency, Cognitive Offloading, etc.) on `/praxys` and `/technology` to turn abstract claims into proprietary IP proof. | [06_PRODUCT_CLAIMS_AUDIT.md](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/docs/website/audit/06_PRODUCT_CLAIMS_AUDIT.md) |
| **Phase 4** |   **Hygiene (P2)**    | Remove 45 unused shadcn/ui boilerplate files; resolve CSS `:root` double-definition conflicts; implement open graph preview images (`og:image`).                                                                                       | [10_TECHNICAL_QUALITY.md](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/docs/website/audit/10_TECHNICAL_QUALITY.md)       |
| **Phase 5** | **Execution (P2/P3)** | Execute the comprehensive redesign blueprint outlined in [14_REDESIGN_BRIEF.md](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/docs/website/audit/14_REDESIGN_BRIEF.md).                                          | [14_REDESIGN_BRIEF.md](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/docs/website/audit/14_REDESIGN_BRIEF.md)             |
