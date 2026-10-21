# Praxys Website Audit — 02. Complete Route Inventory

**Target Workspace:** `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`  
**Audit Date:** October 20, 2026  
**Auditor:** Antigravity AI  
**Discovery Method:** Static Source Inspection (`src/routes/*.tsx`, `src/routes/sitemap[.]xml.ts`, `src/routeTree.gen.ts`, `src/routes/__root.tsx`). (Note: Distinguish static inspection from runtime verification; runtime browser verification was not performed as dev server dependencies are uninstalled).

---

## 1. Master Route Inventory Table

| URL Path           | Source Component / File                                                                                                          | Purpose & Audience                                                                                      | Accessibility        | Impl. Status                                                                                                 | Data Sources & APIs                                     | Key CTAs (Primary / Secondary)                                                                                                                                                                                          |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`/`**            | [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx)               | Corporate Homepage: Product thesis, capability gap explanation, high-level architecture, founder quote. | Public               | **Implemented** (Copy complete, lacks real product visuals)                                                  | Static constants (`gaps`, `stages`); no remote APIs     | Primary: `Explore Praxys` (`/praxys`)<br>Secondary: `Request a demo` (`/contact`), `See how Praxys works` (`/praxys`), `Read the research` (`/research`), `The technology` (`/technology`), `Get in touch` (`/contact`) |
| **`/about`**       | [`src/routes/about.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/about.tsx)               | Company & Team: Mission, vision, founder narrative, core team list, advisory board.                     | Public               | **Implemented** (Founder photo present; team members lack photos/links)                                      | Static arrays (`team`, `advisors`)                      | Primary: `Get in touch` (`/contact`)                                                                                                                                                                                    |
| **`/contact`**     | [`src/routes/contact.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/contact.tsx)           | Conversion & Lead Gen: Inbound demo requests, pilot applications, email/phone contact info.             | Public               | **Partially Implemented / At-Risk** (Relies on external formsubmit.co relay with optimistic mailto fallback) | `POST https://formsubmit.co/ajax/sourya@autopraxys.com` | Primary: `Send request` (Form submit button)<br>Direct links: `mailto:sourya@autopraxys.com`, `tel:+919441063377`, LinkedIn URL                                                                                         |
| **`/praxys`**      | [`src/routes/praxys.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx)             | Product Deep-Dive: Core platform capabilities, 4 engine modules, ecosystem satellites, roadmap.         | Public               | **Implemented** (High-level narrative; lacks actual screenshots/demos)                                       | Static constants (`modules`, `roadmap`)                 | Primary: `Request a demo` (`/contact`)                                                                                                                                                                                  |
| **`/technology`**  | [`src/routes/technology.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/technology.tsx)     | Tech Philosophy: 3 pillars (Behavioral Intelligence, Capability Intelligence, Privacy).                 | Public               | **Implemented** (Short/abstract, lacks technical diagrams or specs)                                          | Static array (`pillars`)                                | Primary: `Explore the platform` (`/praxys`)<br>Secondary: `See the research` (`/research`)                                                                                                                              |
| **`/research`**    | [`src/routes/research.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/research.tsx)         | Research & Evidence: Discovery numbers (150 students, 10 profs), 3 findings, competitive matrix.        | Public               | **Implemented** (Matrix has legally risky privacy claims; no whitepaper download links)                      | Static arrays (`cohort`, `findings`, `comparison`)      | Primary: `Partner on a study` (`/contact`)<br>Secondary: `About AutoPraxys` (`/about`)                                                                                                                                  |
| **`/privacy`**     | [`src/routes/privacy.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/privacy.tsx)           | Legal Compliance: Privacy commitments, telemetry metadata distinction, explicit consent.                | Public               | **Implemented** (Standard legal layout, updated July 2026)                                                   | Static text content                                     | Link: `mailto:sourya@autopraxys.com`                                                                                                                                                                                    |
| **`/terms`**       | [`src/routes/terms.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/terms.tsx)               | Legal Compliance: Terms of use, intellectual property, disclaimer of liability.                         | Public               | **Implemented** (Standard legal layout, updated July 2026)                                                   | Static text content                                     | Link: `mailto:sourya@autopraxys.com`                                                                                                                                                                                    |
| **`/sitemap.xml`** | [`src/routes/sitemap[.]xml.ts`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/sitemap[.]xml.ts) | Search Engine Crawler Index: XML list of all indexed URLs.                                              | Public               | **BROKEN / DEFECTIVE** (Generates invalid relative URLs like `<loc>/about</loc>`)                            | Server GET handler returning XML Response               | None (XML endpoint)                                                                                                                                                                                                     |
| **Catch-All 404**  | [`src/routes/__root.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L17-L37)     | Not Found Handler: Friendly 404 screen when visiting non-existent paths.                                | Public (Fallback)    | **Implemented**                                                                                              | TanStack Router `notFoundComponent`                     | Primary: `Go home` (`/`)                                                                                                                                                                                                |
| **SSR 500 Error**  | [`src/routes/__root.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L39-L75)     | Error Boundary: Friendly recovery UI for uncaught client-side rendering exceptions.                     | Public (Error state) | **Implemented**                                                                                              | Client error event + Lovable error reporting            | `Try again` (resets boundary), `Go home` (`/`)                                                                                                                                                                          |

---

## 2. Detailed Route-by-Route Breakdown

### Route 1: `/` (Homepage)

- **File:** `src/routes/index.tsx` (348 lines).
- **Publicly Accessible:** Yes.
- **Main Sections:**
  1. Hero: Eyebrow "AI Capability Intelligence", H1 "Measure how humans grow with AI", floating logo visual with ambient glow.
  2. The World Changed: ChatGPT 100M user stat, problem statement.
  3. The Invisible Problem: Productivity vs Capability divergence + `CapabilityGapViz` graphic.
  4. The Capability Gap: 4 failure mode cards (Cognitive Offloading, Capability Illusion, Learning Invisibility, AI Dependency Risk).
  5. Introducing Praxys: Overview + `CapabilityCore` satellite diagram.
  6. How Praxys Works: `FlowDiagram` SVG + 5 numbered stages (Telemetry, Behavior, Capability Intelligence, Coaching, Growth).
  7. Why It Matters: Strategic asset argument + `GrowthCurve` chart.
  8. Research-First Philosophy: Founder quote block + sub-links.
  9. Final CTA Card: Partnership invitation banner.
- **Interactive Elements:**
  - Header scroll detection (blurs after 12px scroll).
  - Reveal animations triggered by `useReveal` intersection observer.
  - Floating CSS keyframe animation (`animate-float`) on the hero graphic.
- **Outgoing Links:** `/praxys`, `/contact`, `/research`, `/technology`.
- **Status Assessment:** Fully implemented copy and layout, but lacks genuine product screenshots.

### Route 2: `/about`

- **File:** `src/routes/about.tsx` (219 lines).
- **Publicly Accessible:** Yes.
- **Main Sections:**
  1. Hero: "Building the intelligence layer for human-AI collaboration."
  2. Mission & Vision: Dual card grid.
  3. Founder Story: Souryavarma Datla's photo (`/souryavarma-datla.png`), education (SRM Institute of Science and Technology), narrative background.
  4. Team: 7 team member cards with initials avatars (Souryavarma Datla, Chaitanya Suryadevara, Harshita Ponduri, Pakalapati V Seetha Rama Raju, Lakshmeesh Varma, Aniket Nandy, Raj Vardhan).
  5. Advisors & Mentors: Karthik Kalidindi (Snowflake DBA / Morgan Stanley AI Engineer), Dr. R. Rajkumar (VIT Chennai Asst Professor / IET TN Director).
  6. Bottom CTA Card: "Let's shape the AI-era capability standard together."
- **Interactive Elements:** Reveal on scroll.
- **Defects / Gaps:** 6 of 7 team members only have initials and titles—no photos, bios, or LinkedIn links.
- **Status Assessment:** Implemented.

### Route 3: `/contact`

- **File:** `src/routes/contact.tsx` (260 lines).
- **Publicly Accessible:** Yes.
- **Main Sections:**
  1. Direct Contact Details: Email (`sourya@autopraxys.com`), Phone (`9441063377`), LinkedIn (`https://www.linkedin.com/company/autopraxys-private-limited/?viewAsMember=true`), Legal Entity Name (`AutoPraxys Private Limited`).
  2. Interactive Lead Form: Name, Email, Organization, Interest select dropdown (5 options), Message textarea.
- **Interactive Elements:**
  - Form submission handler (`handleSubmit`) with loading state (`sending`) and success screen (`sent`).
  - Dropdown select and inputs with focus rings.
- **Critical Architectural Defect:**
  - Submits to `https://formsubmit.co/ajax/sourya@autopraxys.com`.
  - In case of failure or adblocker interception, falls back to `window.location.href = mailto:...` and immediately flips `sent: true`, displaying "Thank you. Your request has been noted" even if the visitor failed to send anything.
  - LinkedIn URL has `?viewAsMember=true` (an internal administrator parameter).
- **Status Assessment:** Partially Implemented / At-Risk.

### Route 4: `/praxys`

- **File:** `src/routes/praxys.tsx` (203 lines).
- **Publicly Accessible:** Yes.
- **Main Sections:**
  1. Hero: "The intelligence layer for human capability."
  2. Architecture Flow & 4 Modules:
     - 01 Telemetry: Keystroke timing, retry rates, copy-paste events.
     - 02 Capability Scoring: 14 dimensions, composite score.
     - 03 State Detection: Autonomous, Assisted, Dependent, Overwhelmed, Recovering.
     - 04 Coaching Layer: Socratic interventions, reflection prompts.
  3. Capability Intelligence Core: Satellite SVG illustration (`CapabilityCore`).
  4. Strategic Roadmap:
     - Now: Foundation (claims _"Telemetry and scoring built. Showcase platform live. Pilot portal ready."_).
     - 0–6 mo: Validation (University cohort).
     - 6–18 mo: Expansion (Enterprise contracts).
     - 18 mo+: Standard (Category standard).
  5. Bottom CTA: "Bring capability intelligence to your cohort."
- **Gaps / Dead Ends:** Claims "Showcase platform live. Pilot portal ready" but provides **no hyperlink, button, or URL** to access either the showcase platform or the pilot portal.
- **Status Assessment:** Implemented copy; unfulfilled product link promises.

### Route 5: `/technology`

- **File:** `src/routes/technology.tsx` (112 lines).
- **Publicly Accessible:** Yes.
- **Main Sections:**
  1. Hero: "Human-centered AI, measured honestly."
  2. 3 Pillars:
     - Behavioral Intelligence (paired with `SignalWave` SVG).
     - Capability Intelligence (paired with `GrowthCurve` SVG).
     - Privacy-first telemetry (paired with `PrivacyShield` SVG).
  3. Bottom Navigation CTA: "Intelligence that respects the human in the loop" -> links to `/praxys` and `/research`.
- **Gaps / Deficiencies:** Extremely sparse (112 lines total). Contains no technical depth, no API schemas, no SDK integration guides, and no architectural details explaining _how_ telemetry is collected.
- **Status Assessment:** Implemented brochureware.

### Route 6: `/research`

- **File:** `src/routes/research.tsx` (243 lines).
- **Publicly Accessible:** Yes.
- **Main Sections:**
  1. Hero: "We went and asked. Here is what we found."
  2. Discovery Cohort Statistics: 150 STEM students, 10 professors, 3 industry professionals.
  3. 3 Segment Findings: Students ("Faster output, weaker retention"), Professionals ("Deeper dependency"), Institutions ("Zero visibility").
  4. Core Insight Callout: "Across every group, one finding held: no existing tool measures learning — only output."
  5. Competitive Comparison Table: Comparing ChatGPT, Claude, Traditional LMS, Productivity Tools, and Praxys across Analytics, Capability, Coaching, and Privacy-first.
  6. Footnote: "Feature analysis based on publicly available product documentation, Q1 2025."
  7. Bottom CTA: "Partner on a study" -> `/contact`.
- **Critical Credibility Issues:**
  - Table asserts Claude and ChatGPT have `Privacy-first: No`. This ignores enterprise tier compliance (SOC2 Type II, HIPAA, zero data retention) and invites dispute.
  - No research methodology, sample demographics, or downloadable whitepapers/preprints.
- **Status Assessment:** Implemented copy; high enterprise objection risk.

### Route 7: `/privacy`

- **File:** `src/routes/privacy.tsx` (68 lines).
- **Publicly Accessible:** Yes.
- **Layout:** Uses `LegalLayout` with hero eyebrow "Privacy", title "Privacy at AutoPraxys", updated date "July 2026".
- **Sections:** Privacy-first by default; Behavioral metadata; Explicit consent for Prompt Intelligence; How data is used; Your choices; Contact.
- **Status Assessment:** Implemented.

### Route 8: `/terms`

- **File:** `src/routes/terms.tsx` (67 lines).
- **Publicly Accessible:** Yes.
- **Layout:** Uses `LegalLayout` with hero eyebrow "Terms", title "Terms of Use", updated date "July 2026".
- **Sections:** Overview; Use of the website; Intellectual property; Product information; Limitation of liability; Contact.
- **Status Assessment:** Implemented.

### Route 9: `/sitemap.xml`

- **File:** `src/routes/sitemap[.]xml.ts` (55 lines).
- **Publicly Accessible:** Yes (Server route).
- **Output:** Returns `application/xml` with `Cache-Control: public, max-age=3600`.
- **Critical Flaw:**
  ```ts
  const BASE_URL = "";
  // ...
  <loc>${BASE_URL}${e.path}</loc>
  ```
  Generates invalid relative URLs (`<loc>/</loc>`, `<loc>/about</loc>`). Sitemaps require fully qualified absolute URLs (`https://autopraxys.com/about`).
- **Status Assessment:** **BROKEN / DEFECTIVE**.

---

## 3. Fallbacks, Redirects & Broken Destination Matrix

| Source Element                   | Target Route / URL                  | Resolution in Repo                                          | Finding / User Journey Impact                                                                      |
| :------------------------------- | :---------------------------------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| Any CTA pointing to `/contact`   | `/contact`                          | Resolves, but forces **full page reload** via raw `<a>` tag | Violates SPA expectations; re-downloads bundle on click.                                           |
| In-copy claim on `/praxys`       | "Showcase platform live"            | **No link exists** in repo                                  | Dead end. Visitor cannot find or visit the showcase platform.                                      |
| In-copy claim on `/praxys`       | "Pilot portal ready"                | **No link exists** in repo                                  | Dead end. Prospective pilot partners cannot log in or view portal specs.                           |
| LinkedIn link on `/contact`      | `.../?viewAsMember=true`            | External link                                               | Displays admin management bar if logged in as admin, or redirects awkwardly for external visitors. |
| Research footnote on `/research` | "Read the research" / "White paper" | **No file or PDF exists**                                   | Visitor interested in academic findings cannot download or review a formal paper.                  |
| XML Sitemap                      | `/sitemap.xml`                      | Emits relative URLs                                         | Disregarded or flagged as an error by Google Search Console / Bing Webmaster Tools.                |
| Robots.txt                       | `/robots.txt`                       | Missing `Sitemap:` directive                                | Search engine spiders are not pointed to the XML sitemap.                                          |
