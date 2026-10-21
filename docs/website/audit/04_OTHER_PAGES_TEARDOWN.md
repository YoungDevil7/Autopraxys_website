# Praxys Website Audit — 04. Non-Homepage Pages Teardown

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Scope:** Exhaustive teardown of all 7 non-homepage routes in the Praxys marketing website.

---

## 1. Page Teardown: `/about`

### Purpose & Target Visitor

- **Target Visitor:** University administrators, enterprise buyers, prospective hires, and research collaborators seeking to evaluate the credibility, team pedigree, and corporate origins of AutoPraxys.
- **Source File:** [`src/routes/about.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/about.tsx) (219 lines).

### Content Hierarchy & Section Order

1. **Hero Section (Lines 51–72):**
   - Eyebrow: `About`
   - H1: `Building the intelligence layer for human-AI collaboration.`
   - Body: _"AutoPraxys Private Limited exists to answer one question the AI era forgot to ask: not what AI produces, but how humans grow because of it."_
2. **Mission & Vision (Lines 74–100):**
   - 2-column `<GlassCard>` grid:
     - Mission: _"Understand how AI changes human capability — not just productivity."_
     - Vision: _"Create the intelligence layer for human-AI collaboration — a world that measures how humans grow with AI."_
3. **Founder Story (Lines 102–142):**
   - Portrait: `/souryavarma-datla.png` (96x96 rounded image, founder portrait).
   - Name & Role: `Souryavarma Datla`, `Founder & CEO`.
   - Pedigree: _"B.Tech Computer Science (Gaming Technology), SRM Institute of Science and Technology."_
   - Narrative Quote:
     > _“As a CS student, I watched something nobody was talking about. My peers were submitting better work — faster. But when asked to explain, modify, or defend it, they couldn't. AI had made them more productive. And less capable. That question became Praxys.”_
4. **The Team (Lines 144–173):**
   - H2: `Built by people who lived the problem.`
   - 7 Team Members in a 4-column grid:
     1. `SD` — Souryavarma Datla (Founder & CEO)
     2. `CS` — Chaitanya Suryadevara (CFO)
     3. `HP` — Harshita Ponduri (Frontend · Marketing)
     4. `PR` — Pakalapati V Seetha Rama Raju (Backend)
     5. `LV` — Lakshmeesh Varma (Backend)
     6. `AN` — Aniket Nandy (Frontend · UI/UX)
     7. `RV` — Raj Vardhan (Social Media)
5. **Advisors & Mentors (Lines 174–191):**
   - 2-column grid:
     1. **Karthik Kalidindi** — _"Snowflake Database Administrator · AI Engineer, Morgan Stanley"_
     2. **Dr. R. Rajkumar** — _"Assistant Professor, VIT Chennai · TN Director, IET"_
6. **Bottom CTA (Lines 193–216):**
   - Banner: _"Let's shape the AI-era capability standard together."_
   - CTA: `Get in touch` -> `/contact`

### Issues & Inconsistencies

- **Placeholder / Incomplete Team Presentation:** 6 out of 7 team members are rendered merely with colored gradient boxes containing initials (`CS`, `HP`, `PR`, `LV`, `AN`, `RV`). There are no headshots, professional bios, or links to GitHub or LinkedIn profiles. To enterprise enterprise procurement, this appears unfinished.
- **Relative Canonical URL:** Line 22 sets `links: [{ rel: "canonical", href: "/about" }]` and `meta: [{ property: "og:url", content: "/about" }]`. Both must be absolute (`https://autopraxys.com/about`).

---

## 2. Page Teardown: `/contact`

### Purpose & Target Visitor

- **Target Visitor:** Enterprise leaders, university department chairs, faculty researchers, and prospective pilot clients ready to schedule a product demonstration or initiate a capability pilot.
- **Source File:** [`src/routes/contact.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/contact.tsx) (260 lines).

### Content Hierarchy & Section Order

1. **Left Column — Contact Overview & Details (Lines 104–166):**
   - Eyebrow: `Contact`
   - H1: `Let's build the capability standard.`
   - Body: _"Request a Praxys demo, or explore a capability intelligence pilot for your institution or organization. We read every message."_
   - Contact Info Blocks:
     - Email: `sourya@autopraxys.com` (mailto link)
     - Phone: `9441063377` (with `tel:+919441063377`)
     - LinkedIn: `https://www.linkedin.com/company/autopraxys-private-limited/?viewAsMember=true`
     - Company: `AutoPraxys Private Limited`
2. **Right Column — Interactive Lead Generation Form (Lines 168–255):**
   - Form Fields:
     - Name (`<input name="name" required />`)
     - Email (`<input name="email" type="email" required />`)
     - Organization (`<input name="org" />`)
     - Interest Dropdown (`<select name="interest">` with 5 choices):
       1. Requesting a demo
       2. A university pilot
       3. An enterprise pilot
       4. Research collaboration
       5. Something else
     - Message (`<textarea name="message" rows={4} />`)
   - Submit Button: `Send request` (with loading state `Sending…`)
   - Success State: Checkmark icon + "Thank you. Your request has been noted. The AutoPraxys team will be in touch shortly."

### Critical Vulnerabilities & Deficiencies

1. **Third-Party Relay Dependency:** The form POSTs client-side data to `https://formsubmit.co/ajax/sourya@autopraxys.com`. If ad-blockers, tracking protection, or corporate network firewalls block `formsubmit.co`, submissions fail silently.
2. **Premature Success Feedback on Error Fallback:**
   ```ts
   } catch {
     // Fallback: open the user's mail app
     window.location.href = `mailto:${CONTACT_INBOX}?subject=...`;
     setSent(true); // <--- Triggers "Thank you" screen regardless of whether the email was sent
   }
   ```
   If the network fails or the user does not have a native mail client registered, the user is shown "Thank you. Your request has been noted", falsely believing their inquiry succeeded.
3. **Admin Parameter in Public LinkedIn Link:** The link includes `?viewAsMember=true`, which is meant for page administrators, causing strange redirect behavior for regular visitors.
4. **Phone Formatting:** The displayed phone number `9441063377` lacks country code formatting (e.g., `+91 94410 63377`).

---

## 3. Page Teardown: `/praxys`

### Purpose & Target Visitor

- **Target Visitor:** Chief Learning Officers, VP Engineering, higher education leadership, and technical buyers seeking deep product architecture and capability details.
- **Source File:** [`src/routes/praxys.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx) (203 lines).

### Content Hierarchy & Section Order

1. **Hero Section (Lines 61–82):**
   - Eyebrow: `Praxys`
   - H1: `The intelligence layer for human capability.`
   - Body: _"Praxys observes real human-AI work and translates it into capability intelligence — a clear, longitudinal view of how people grow. It doesn't compete with AI assistants; it makes them measurable."_
2. **Architecture Flow & 4 Modules (Lines 84–116):**
   - SVG Flow Diagram (`<FlowDiagram />` from illustrations).
   - 4 Module Cards:
     - `01 — Telemetry`: Behavioral signal capture (Keystroke timing & rhythm; Retry rates & revision patterns; Copy-paste and edit events).
     - `02 — Capability Scoring`: A 14-dimension scoring engine (Autonomy · Retention · Adaptability; 14 capability dimensions; A composite capability score).
     - `03 — State Detection`: Understanding the moment (Autonomous · Assisted · Dependent; Overwhelmed · Recovering; Real-time state transitions).
     - `04 — Coaching Layer`: Guiding growth, not blocking it (Socratic interventions; Reflection prompts & nudges; Not blocking — guiding growth).
   - Privacy Note: _"Privacy-first: core analytics operate on behavioral metadata. Prompt Intelligence features require explicit user consent."_
3. **The Capability Intelligence Engine (Lines 118–144):**
   - H2: `A category-defining platform.`
   - Body: Describes the Capability Intelligence Core and its surrounding surfaces.
   - Satellite Illustration (`<CapabilityCore />`).
4. **Strategic Roadmap (Lines 145–176):**
   - H2: `From foundation to category standard.`
   - 4 Milestones:
     - **Now — Foundation:** _"Telemetry and scoring built. Showcase platform live. Pilot portal ready."_
     - **0–6 mo — Validation:** _"University pilot cohort, behavioral data collection, first white paper."_
     - **6–18 mo — Expansion:** _"University contracts, enterprise pilots, research publications, hardening."_
     - **18 mo+ — Standard:** _"Capability Intelligence as a standard. Research network. Platform at scale."_
5. **Bottom CTA (Lines 178–201):**
   - Banner: _"Bring capability intelligence to your cohort."_
   - CTA: `Request a demo` -> `/contact`

### Critical Deficiencies & Contradictions

- **The "Dead Link" Promise:** The roadmap claims _"Showcase platform live. Pilot portal ready"_, but provides **no links, buttons, or URLs** anywhere on the page to visit either the showcase platform or the pilot portal.
- **Zero Interface Screenshots:** This is the dedicated product page, yet there is not a single product screenshot or dashboard preview.
- **Omission of the 14 Dimensions:** The page repeatedly boasts of a "14-dimension scoring engine" but fails to list or describe what those 14 dimensions are.

---

## 4. Page Teardown: `/technology`

### Purpose & Target Visitor

- **Target Visitor:** Technical evaluators, enterprise architects, security teams, and engineering leaders seeking technical validation of how Praxys operates.
- **Source File:** [`src/routes/technology.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/technology.tsx) (112 lines).

### Content Hierarchy & Section Order

1. **Hero Section (Lines 49–71):**
   - Eyebrow: `Technology`
   - H1: `Human-centered AI, measured honestly.`
   - Body: Philosophy of measuring human capability rather than LLM output.
2. **3 Technology Pillars (Lines 73–91):**
   - **Pillar 1: Behavioral Intelligence** — _"We read how people work with AI — the rhythm of keystrokes, retries, edits and revisions — rather than only what they submit."_ Paired with `<SignalWave />` SVG.
   - **Pillar 2: Capability Intelligence** — _"Behavioral signals are interpreted into a picture of real capability: autonomy, retention and adaptability over time."_ Paired with `<GrowthCurve />` SVG.
   - **Pillar 3: Privacy-first telemetry** — _"Core analytics operate on behavioral metadata. Prompt Intelligence features require explicit user consent — privacy by default."_ Paired with `<PrivacyShield />` SVG.
3. **Closing CTA Block (Lines 93–110):**
   - H2: `Intelligence that respects the human in the loop.`
   - CTAs: `Explore the platform` (`/praxys`), `See the research` (`/research`).

### Issues & Inconsistencies

- **Superficial Technical Depth:** At only 112 lines of code, this page contains zero architectural diagrams, no data flow diagrams, no information on Chrome extension telemetry ingestion, no API specifications, and no explanation of algorithmic models. It reads like marketing philosophy rather than a technology brief.

---

## 5. Page Teardown: `/research`

### Purpose & Target Visitor

- **Target Visitor:** Academic partners, university deans, enterprise researchers, and prospective grant committees looking for empirical validation.
- **Source File:** [`src/routes/research.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/research.tsx) (243 lines).

### Content Hierarchy & Section Order

1. **Hero Section (Lines 76–98):**
   - Eyebrow: `Research`
   - H1: `We went and asked. Here is what we found.`
   - Body: Emphasizes that Praxys began with qualitative discovery among students, faculty, and industry professionals.
2. **Discovery Cohort Numbers (Lines 100–115):**
   - `150` — _STEM students interviewed_
   - `10` — _University professors consulted_
   - `3` — _Industry professionals_
3. **Core Findings by Stakeholder (Lines 117–135):**
   - **Students:** _"Faster output, weaker retention. Work is submitted faster — but explaining the core concept becomes much harder, and retention drops significantly."_
   - **Professionals:** _"Deeper dependency. Code writes itself. Engineers grow dependent on AI and lose confidence modifying what it generates — without tracking capability."_
   - **Institutions:** _"Zero visibility. Organizations see output rise but cannot see skill growth or AI dependency. Faculty cannot evaluate AI-assisted learning quality or depth."_
4. **Core Insight Card (Lines 137–148):**
   - GlassCard: _"Across every group, one finding held: no existing tool measures learning — only output."_
5. **Competitive Comparison Table (Lines 150–222):**
   - H2: `Nothing else measures capability.`
   - 5-row, 5-column feature matrix:
     | Platform               | Analytics   | Capability | Coaching | Privacy-first |
     | :--------------------- | :---------- | :--------: | :------: | :-----------: |
     | **ChatGPT**            | Output only |     —      |    —     |       —       |
     | **Claude**             | Output only |     —      |    —     |       —       |
     | **Traditional LMS**    | Basic       |     —      |    —     |    Varies     |
     | **Productivity tools** | Partial     |     —      |    —     |       —       |
     | **Praxys**             | Advanced    |     ●      |    ●     |       ●       |
   - Footnote: _"Feature analysis based on publicly available product documentation, Q1 2025. Praxys does not compete with AI assistants — it makes them measurable."_
6. **Bottom CTA (Lines 224–240):**
   - H2: `A category is emerging. We're building its evidence base.`
   - CTAs: `Partner on a study` (`/contact`), `About AutoPraxys` (`/about`).

### Critical Factual & Enterprise Credibility Issues

1. **Material Misrepresentation of Competitor Privacy:**
   - Labeling ChatGPT and Claude as having `Privacy-first: —` (No) is factually indefensible when evaluating their enterprise editions. OpenAI ChatGPT Enterprise and Anthropic Claude for Work adhere to strict enterprise privacy standards, including SOC 2 Type II compliance, zero model training on customer data, and HIPAA Business Associate Agreements (BAAs).
   - An enterprise CISO or corporate legal buyer will view this row as inaccurate marketing, damaging the company's credibility.
2. **Outdated Research Footnote Date:**
   - The footnote cites `Q1 2025`. In late 2026, this makes the analysis appear 18+ months stale.
3. **No Whitepaper or Methodology Available:**
   - Despite an eyebrow of "Research" and H1 of "We went and asked", there is no link to download an interview whitepaper, survey methodology, or preliminary research brief.

---

## 6. Page Teardown: `/privacy`

### Purpose & Target Visitor

- **Target Visitor:** General site visitors, compliance officers, and institutional partners reviewing data processing terms.
- **Source File:** [`src/routes/privacy.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/privacy.tsx) (68 lines).

### Content Hierarchy & Details

- Uses `LegalLayout` with updated timestamp: `July 2026`.
- Headings:
  1. _Privacy-first by default_ (analyzes timing, revisions, and edit patterns rather than text content).
  2. _Behavioral metadata_ (metadata used for capability intelligence, not surveillance).
  3. _Explicit consent for Prompt Intelligence_ (richer prompt analytics require affirmative consent).
  4. _How data is used_ (analytics for users/institutions, research support).
  5. _Your choices_ (users can request data info).
  6. _Contact_ (`sourya@autopraxys.com`).

### Observations

- Well-written, plain-English summary of privacy posture.
- Lacks formal GDPR/CCPA statutory disclosures (e.g., Data Protection Officer contact, data retention periods, legal basis for processing, sub-processors list).

---

## 7. Page Teardown: `/terms`

### Purpose & Target Visitor

- **Target Visitor:** General visitors reviewing legal terms of website access.
- **Source File:** [`src/routes/terms.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/terms.tsx) (67 lines).

### Content Hierarchy & Details

- Uses `LegalLayout` with updated timestamp: `July 2026`.
- Headings:
  1. _Overview_ (governs use of AutoPraxys website, operated by AutoPraxys Private Limited).
  2. _Use of the website_ (lawful use, non-disruption).
  3. _Intellectual property_ (Praxys name and brand owned by AutoPraxys Private Limited).
  4. _Product information_ (descriptions and roadmap are for informational purposes and non-binding).
  5. _Limitation of liability_ (provided "as is").
  6. _Contact_ (`sourya@autopraxys.com`).

### Observations

- Concise, protective disclaimer confirming that roadmap claims on the site do not constitute a binding commercial offer.
