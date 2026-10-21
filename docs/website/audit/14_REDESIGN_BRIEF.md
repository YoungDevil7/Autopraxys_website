# Praxys Website Redesign Brief & Implementation Roadmap

**Document Reference:** `docs/website/audit/14_REDESIGN_BRIEF.md`  
**Auditor / Strategy Author:** Antigravity AI  
**Target Application:** Public Marketing Website for AutoPraxys / Praxys  
**Audience:** Founder (Souryavarma Datla), Engineering Team, Successor AI Implementation Agents  
**Status:** Discovery & Strategic Planning (Awaiting Founder Authorization to Execute)

---

## 1. Executive Direction & Redesign Philosophy

The audit demonstrates that AutoPraxys has a **world-class narrative hook** ("Measure how humans grow with AI, not just what they produce") and **deep mathematical foundations** in `C:\Projects\Promptsense` (a 14-dimension scoring engine, state detection, and pilot portals).

However, the current marketing website suffers from a **"Ghost Software" credibility deficit**:

- No product screenshots, recordings, or interactive demos.
- High-level, abstract SVG drawings instead of tangible platform views.
- Unsubstantiated competitive privacy claims that alienate enterprise CISOs.
- Fragile third-party lead generation (`formsubmit.co`) with defective failure handling.
- Broken technical SEO (relative sitemap and canonical URLs).

### Strategic Redesign Objective

Transform the website from an early-stage academic brochure into a **credible, enterprise-grade, authoritative product platform**. The redesigned site must prove that Praxys is **functional, non-invasive, scientifically grounded software** ready for institutional pilot cohorts.

---

## 2. Proposed Information Architecture (IA)

```
[Header Navigation]
├── Wordmark Logo (AutoPraxys) ──────────────────────> /
├── Platform (Dropdown / Mega-Nav)
│     ├── The 14 Capability Dimensions ──────────────> /praxys#dimensions
│     ├── Telemetry & Behavioral Ingestion ──────────> /technology#telemetry
│     ├── Interactive Showcase Demo ─────────────────> /showcase (or external embed)
│     └── Pilot Portal Overview ─────────────────────> /pilot-portal
├── Research & Evidence ─────────────────────────────> /research
├── Company
│     ├── About & Founder Story ─────────────────────> /about
│     └── Careers / Cohort Programs ─────────────────> /about#careers
├── [Client Portal Sign In] (New secondary link) ────> https://portal.autopraxys.com
└── [Request a Demo] (Primary CTA) ──────────────────> /contact
```

---

## 3. Page-Specific Redesign Specifications

### 1. Homepage (`/`)

- **Hero Transformation:**
  - _Current:_ Floating logo (`autopraxys-logo.png`) with ambient blur.
  - _Proposed:_ **Interactive Dual-Pane Product Preview**. Left pane retains the high-impact headline (_"Measure how humans grow with AI"_). Right pane showcases a high-definition, interactive preview of the **Praxys Capability Dashboard** (extracted from `frontend-praxys/src/pages/Home.tsx`), featuring a live animated radar chart of the capability dimensions and a session replay timeline.
- **Micro-Demo Strip (New):**
  - Add a 3-step interactive tabbed widget:
    1. _Observe:_ Chrome extension capturing keystroke cadence without reading private prompts.
    2. _Score:_ The 14-dimension scoring engine calculating autonomy and retention indices.
    3. _Intervene:_ Real-time Socratic reflection prompt appearing in workflow.
- **Proof & Validation Banner:**
  - Display pilot cohort counters: _150+ STEM Students Evaluated · 10 University Professors Consulted · SRM & VIT Advisory Backing_.

### 2. Product Platform (`/praxys`)

- **Expose the 14 Dimensions:**
  - Replace the single sentence with an **Interactive Metric Explorer** detailing the 14 core dimensions from `PRAXYS_METRIC_CATALOGUE.md`:
    - _Autonomy & Integrity:_ Skill Integrity, Dependency Index, Cognitive Offloading.
    - _Cognitive Cadence:_ Attention Score, Behavioral Stability, Interaction Strain.
    - _Growth & Transfer:_ Retention Support, Knowledge Development, Transfer Readiness.
- **Workflow Architecture Diagram:**
  - Replace abstract SVGs with a clear technical diagram showing how telemetry moves from the Manifest V3 browser extension -> FastAPI scoring engine -> tenant dashboards.
- **Working Showcase Link:**
  - Fulfill the roadmap claim by providing a direct link or embed to `frontend-showcase`.

### 3. Technology & Security (`/technology`)

- **Enterprise Security & Privacy Architecture:**
  - Add a dedicated section on **Dual-Mode Telemetry Governance**:
    - _Metadata Mode (Default):_ Anonymized timing deltas, zero prompt logging.
    - _Prompt Intelligence Mode (Opt-In):_ Explicit consent requirement.
  - Publish the enterprise security roadmap (SOC 2 Type II readiness, tenant isolation, encryption standards).

### 4. Research & Scientific Validation (`/research`)

- **Remediate Competitive Table (P0):**
  - Replace the inaccurate `Privacy-first: No` claims for ChatGPT and Claude with precise technical distinctions (e.g. _"Independent Capability Auditing"_, _"Client-Side Behavioral Telemetry"_, _"Pedagogical Intervention Layer"_).
- **Downloadable Whitepaper / Research Brief:**
  - Provide an executive PDF summary of the 150-student discovery study with methodology, qualitative quotes, and observed capability decay curves.
- **Update Footnote:**
  - Update the outdated "Q1 2025" footnote to current Q4 2026 platform standards.

### 5. Company & Team (`/about`)

- **Professionalize Team Grid:**
  - Upgrade the 6 initial-only placeholders (`CS`, `HP`, `PR`, `LV`, `AN`, `RV`) to include professional headshots or unified editorial portrait illustrations, short bios, and verified LinkedIn profile links.
- **Highlight Advisory Board:**
  - Give prominent placement to industry and academic advisors (Morgan Stanley AI Engineer, VIT Chennai Professor/IET Director).

### 6. Conversion & Lead Generation (`/contact`)

- **Harden Backend Lead Processing (P0):**
  - Replace `formsubmit.co` with a robust server-side API handler using transactional email (Resend / Postmark / SendGrid) and database logging.
  - Eliminate premature success messages on error fallback.
- **Enterprise Lead Qualification:**
  - Add optional fields for _Organization Type_ (University / Enterprise / Research Lab) and _Cohort Size_ (10–50 / 50–200 / 200+).
- **Sanitize LinkedIn URL:**
  - Remove `?viewAsMember=true` parameter.

---

## 4. Visual & Brand Direction

1. **Preserve the Warm Editorial Aesthetic:**
   - Retain the successful pairing of **Fraunces** (serif headlines) and **Inter** (sans body) with the warm ivory/alabaster background (`oklch(0.988 0.006 85)`). It creates an intellectual, trustworthy, academic aura that differentiates Praxys from generic dark-mode SaaS competitors.
2. **Eliminate CSS Token Collisions:**
   - Prune the redundant shadcn slate `:root` block and standardize all color variables in a single clean Tailwind v4 `@theme inline` declaration.
3. **Transparent Vector Wordmark:**
   - Replace the raster `autopraxys-logo.png` with a clean, transparent SVG wordmark, eliminating the `mix-blend-multiply` CSS hack.
4. **SVG Accessibility:**
   - Add `<title>`, `<desc>`, and descriptive figure captions to all custom illustrations.

---

## 5. Technical SEO & Performance Priorities

1. **Fix XML Sitemap (P0):**
   - Populate `BASE_URL = "https://autopraxys.com"` in `src/routes/sitemap[.]xml.ts`.
2. **Absolute Canonical & OpenGraph URLs (P0):**
   - Convert all relative `href="/..."` canonical links to fully qualified `https://autopraxys.com/...` URLs.
3. **Social Sharing Assets (P1):**
   - Deploy a high-resolution 1200x630 OpenGraph share card (`public/og-image.png`) declared in root metadata.
4. **Prune Dead Boilerplate (P2):**
   - Remove 45 unused shadcn/ui components in `src/components/ui/` and prune unused npm dependencies (`@radix-ui/*`, `cmdk`, `recharts`, `vaul`).
5. **Image Optimization (P3):**
   - Convert `souryavarma-datla.png` (360 KB) and logos to optimized WebP format.

---

## 6. Explicit Guardrails: What Must NOT Be Changed Without Approval

To protect company intellectual property, existing partnerships, and regulatory positioning, the following elements **must not be altered without explicit founder authorization**:

1. **Core Value Thesis:**
   - Do NOT alter the foundational category positioning: _"Measure how humans grow with AI, not just what they produce."_
2. **Founder Story & Educational Background:**
   - Do NOT alter Souryavarma Datla's personal story, student origins at SRM Institute of Science and Technology, or direct quote.
3. **Advisory Board Names & Titles:**
   - Do NOT alter or remove Karthik Kalidindi (Morgan Stanley) or Dr. R. Rajkumar (VIT Chennai / IET) without founder confirmation.
4. **Discovery Study Cohort Figures:**
   - Do NOT alter the baseline discovery numbers (150 STEM students, 10 professors, 3 industry professionals) unless updated empirical study data is formally provided.
5. **Corporate Entity Information:**
   - Do NOT alter the legal corporate entity name: `AutoPraxys Private Limited`.
