# Praxys Website Audit — 03. Homepage Teardown

**Target File:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx)  
**Layout Container:** [`src/routes/__root.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx)  
**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026

---

## Complete Top-to-Bottom Section Breakdown

### Section 1: Hero Section

- **Order:** 1 (Lines 49–100)
- **Exact Eyebrow:** `AI Capability Intelligence`
- **Exact Headline (H1):** `Measure how humans grow with AI.` (with `"grow with AI."` styled in `text-primary`).
- **Exact Body Copy:**
  > _"We built Praxys, the world's first AI Capability Intelligence Platform. Instead of measuring what AI produces, we help organizations understand whether AI is making their people more capable or simply more dependent."_
- **CTAs:**
  - Primary: `Explore Praxys` -> links to `/praxys`
  - Secondary (Ghost): `Request a demo` -> links to `/contact`
- **Visual Assets & Media:**
  - Responsive 2-column layout. Left column has copy and CTAs; right column has an animated container:
    - `<div className="animate-float relative w-full max-w-[26rem]">`
    - Background ambient blur: radial-gradient circle (`oklch(0.94 0.03 85 / 0.85)`).
    - Image: `<img src="/autopraxys-logo.png?v=5" alt="AutoPraxys" className="relative mx-auto w-[88%] object-contain mix-blend-multiply drop-shadow-[0_18px_40px_oklch(0.55_0.04_85_/_0.12)]" />`
- **Layout & Visual Treatment:**
  - Background: `var(--gradient-hero)` (`radial-gradient(...)` warm ivory/sky).
  - Padding: `py-24 md:py-32`.
  - Grid: `grid items-center gap-12 md:grid-cols-2`.
  - Typography: H1 in `font-display` (Fraunces, serif), size `text-5xl md:text-6xl`, line-height `leading-[1.02]`.
- **Responsive Behavior:** Stacks vertically on mobile (`< 768px`) with copy on top and logo underneath; side-by-side 50/50 split on desktop (`>= 768px`).
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L49-L100), [`src/components/site/primitives.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx), [`src/styles.css`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css#L174-L175).
- **Communicates Clear Product Value:** **Partial.** The headline is an excellent philosophical hook, but the visual fails to communicate product value because it is just a floating corporate logo.
- **Specific Issues & Evidence:**
  1. _The "Ghost Software" Hero Defect:_ Enterprise SaaS buyers expect a product hero to showcase an interface screenshot, live telemetry graph, telemetry recording, or dashboard preview. Using an animated floating logo (`autopraxys-logo.png`) makes the company look like a brand consultancy or student presentation rather than a software platform.
  2. _Full Page Reload on Secondary CTA:_ Clicking `Request a demo` triggers a full window reload due to the `href || to === "/contact"` override in `primitives.tsx:58`.

---

### Section 2: The World Changed

- **Order:** 2 (Lines 102–120)
- **Exact Eyebrow:** `The world changed` (centered with teal dot).
- **Exact Headline (H2):** `AI changed how people learn, think and work — almost overnight.`
- **Exact Body Copy:**
  > _"ChatGPT reached 100 million users in 60 days. Students and workers are already inside AI workflows. But measurement never followed."_
- **CTAs:** None.
- **Visual Assets & Media:** None (Centered text-only container).
- **Layout & Visual Treatment:** Max-width `max-w-4xl`, centered alignment, padding `py-24 md:py-32`, clean warm background.
- **Responsive Behavior:** Text wraps with `text-balance`, scales down font size on small screens (`text-4xl` to `text-5xl`).
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L102-L120).
- **Communicates Clear Product Value:** **Yes.** Establishes the macroeconomic urgency and context for why new measurement technology is necessary.
- **Specific Issues & Evidence:**
  1. _Stale Statistic:_ Citing "ChatGPT reached 100 million users in 60 days" is now a 3-year-old statistic from January 2023. In late 2026, referencing 60-day ChatGPT adoption sounds dated for a cutting-edge AI capability startup.

---

### Section 3: The Invisible Problem

- **Order:** 3 (Lines 122–152)
- **Exact Eyebrow:** `The invisible problem`
- **Exact Headline (H2):** `Organizations measure productivity. Nobody measures capability.`
- **Exact Body Copy:**
  > _"Output has increased faster than visibility. We can see that work is completed faster — but not how it's done, which skills are growing, and which are quietly deteriorating."_
- **Caption under Visual:**
  > _"Output climbs. Capability can quietly flatten. Praxys makes the gap between the two visible."_
- **CTAs:** None.
- **Visual Assets & Media:**
  - `<CapabilityGapViz className="w-full" />` inside a `<GlassCard className="p-10">`.
  - Vector SVG displaying two diverging curves: a rising teal line labeled "Output" vs a flat/sluggish indigo line labeled "Capability", with a dashed vertical gap line connecting them.
- **Layout & Visual Treatment:**
  - Background: `border-y border-border/60 bg-card/40 py-24 md:py-32`.
  - Grid: `grid items-center gap-14 md:grid-cols-2`.
- **Responsive Behavior:** Left copy, right graphic; stacks vertically on mobile.
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L122-L152), [`src/components/illustrations/index.tsx:273-303`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L273-L303).
- **Communicates Clear Product Value:** **Yes.** Strong intellectual framing of the core problem Praxys solves.
- **Specific Issues & Evidence:**
  1. _Screen Reader Blindness:_ `<CapabilityGapViz>` is rendered with `aria-hidden="true"`. Screen readers skip the diagram entirely, missing the visual punchline of the diverging curves.

---

### Section 4: The Capability Gap

- **Order:** 4 (Lines 154–185)
- **Exact Eyebrow:** `The Capability Gap`
- **Exact Headline (H2):** `AI gave us a new blind spot.`
- **Exact Body Copy & Cards:**
  4 numbered cards in a 2x2 grid:
  1. `01` — **Cognitive Offloading**: _"Constant AI reliance causes invisible skill decay — the GPS effect for the intellect."_
  2. `02` — **Capability Illusion**: _"Users appear competent through prompting but cannot independently modify or defend outputs."_
  3. `03` — **Learning Invisibility**: _"Educators and managers have zero visibility into the quality of the thinking process."_
  4. `04` — **AI Dependency Risk**: _"Organizations cannot distinguish productive collaboration from dangerous over-reliance."_
- **CTAs:** None.
- **Visual Assets & Media:** 4 `<GlassCard>` components with prominent serif numerals (`01`, `02`, `03`, `04`) in `text-primary/40`.
- **Layout & Visual Treatment:** Container max-width, 2-column grid (`md:grid-cols-2 gap-6`). Card hover lift effect (`hover:-translate-y-1`).
- **Responsive Behavior:** 1 column on mobile, 2 columns on desktop (`>= 768px`).
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L154-L185).
- **Communicates Clear Product Value:** **Yes.** This is the strongest conceptual section on the homepage; "the GPS effect for the intellect" is a sticky, memorable metaphor.
- **Specific Issues & Evidence:**
  1. No actionable link or hook connecting these 4 problems to the specific Praxys metrics that detect them (e.g., how Praxys detects Cognitive Offloading via keystroke pacing or paste events).

---

### Section 5: Introducing Praxys

- **Order:** 5 (Lines 187–220)
- **Exact Eyebrow:** `Introducing Praxys`
- **Exact Headline (H2):** `The intelligence layer for human capability.`
- **Exact Body Copy:**
  > _"Praxys sits quietly around real human-AI work — capturing behavioral signals, turning them into capability intelligence, and returning coaching that helps people grow. Privacy-first by default."_
- **CTA:** `See how Praxys works` -> links to `/praxys` (primary button with `--gradient-blue`).
- **Visual Assets & Media:**
  - `<CapabilityCore className="mx-auto w-full max-w-md" />`.
  - SVG diagram depicting a central circle labeled "Capability Intelligence Core" with 6 orbiting satellites connected by radial lines:
    1. _Prompt Intelligence_
    2. _Knowledge Intelligence_
    3. _Enterprise Intelligence_
    4. _Capability Trajectories_
    5. _Institution Intelligence_
    6. _Research Intelligence_
- **Layout & Visual Treatment:** Warm hero gradient background (`var(--gradient-hero)`), 2-column grid with order inversion on desktop (`order-2 md:order-1` for visual, `order-1 md:order-2` for text).
- **Responsive Behavior:** Text appears first on mobile with diagram below; on desktop, diagram sits on the left with text on the right.
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L187-L220), [`src/components/illustrations/index.tsx:127-184`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L127-L184).
- **Communicates Clear Product Value:** **Moderate.** Gives a high-level picture of the ecosystem, but does not explain what any of the 6 satellites actually do.
- **Specific Issues & Evidence:**
  1. _Vague "Sits Quietly" Phrasing:_ Saying Praxys "sits quietly around real human-AI work" leaves enterprise security teams alarmed. Is it a keylogger? A browser extension? An enterprise proxy? An LLM wrapper? The homepage does not clarify the ingestion mechanism.

---

### Section 6: How Praxys Works

- **Order:** 6 (Lines 222–256)
- **Exact Eyebrow:** `How Praxys works`
- **Exact Headline (H2):** `From interaction to intelligence.`
- **Exact Stages & Copy:**
  5 stages in sequential order:
  - **Step 1: Telemetry** — _"Keystroke rhythm, retry rates, revision and edit events."_
  - **Step 2: Behavior** — _"Patterns of how a person actually works with AI."_
  - **Step 3: Capability Intelligence** — _"A 14-dimension scoring engine reads the signal."_
  - **Step 4: Coaching** — _"Socratic nudges and reflection prompts — guiding, not blocking."_
  - **Step 5: Growth** — _"Visible, measurable capability development over time."_
- **CTAs:** None.
- **Visual Assets & Media:**
  - `<FlowDiagram className="w-full" />` (hidden on mobile, visible on desktop `hidden md:block`).
  - SVG horizontal flowchart rendering 5 rounded nodes with animated connecting arrow lines.
- **Layout & Visual Treatment:** Full container width; 5-column grid on desktop (`md:grid-cols-5 gap-5`).
- **Responsive Behavior:** On desktop, renders both the horizontal SVG flowchart and 5 cards; on mobile, hides the SVG flowchart (`hidden md:block`) and stacks the 5 cards in a single vertical column.
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L222-L256), [`src/components/illustrations/index.tsx:74-124`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L74-L124).
- **Communicates Clear Product Value:** **Yes.** Provides a logical pipeline explaining the transition from raw telemetry to coaching interventions.
- **Specific Issues & Evidence:**
  1. _Unsubstantiated "14-dimension scoring engine":_ Step 3 claims a "14-dimension scoring engine" reads the signal, but none of the 14 dimensions are named or explained on the homepage.
  2. _Lack of Visual Proof for Coaching:_ Step 4 promises "Socratic nudges and reflection prompts", but displays no mockup showing what a nudge looks like in context.

---

### Section 7: Why Capability Intelligence Matters

- **Order:** 7 (Lines 258–287)
- **Exact Eyebrow:** `Why capability intelligence matters`
- **Exact Headline (H2):** `Capability is the next strategic asset.`
- **Exact Body Copy:**
  > _"Organizations can no longer afford to ignore the gap between what people produce and what they actually know. Praxys does not compete with AI assistants — it makes them measurable."_
- **Caption under Visual:**
  > _"A measurable trajectory of human capability, growing with AI."_
- **CTAs:** None.
- **Visual Assets & Media:**
  - `<GrowthCurve className="w-full" />` inside `<GlassCard className="p-10">`.
  - SVG line chart showing a dashed teal baseline vs an accelerating solid indigo curve with a pulse dot at its peak.
- **Layout & Visual Treatment:** Bordered card background (`border-y border-border/60 bg-card/40 py-24 md:py-32`), 2-column grid.
- **Responsive Behavior:** 2 columns on desktop, 1 column on mobile.
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L258-L287), [`src/components/illustrations/index.tsx:188-218`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L188-L218).
- **Communicates Clear Product Value:** **Yes.** Solid enterprise positioning sentence: _"Praxys does not compete with AI assistants — it makes them measurable."_

---

### Section 8: Research-First Philosophy

- **Order:** 8 (Lines 289–315)
- **Exact Eyebrow:** `Research-first philosophy` (centered).
- **Exact Quote (Blockquote):**
  > _“The future should not only measure what AI can do. It should measure how humans grow because of it.”_
- **Attribution:** `Souryavarma Datla · Founder`
- **CTAs:**
  - Primary: `Read the research` -> links to `/research`
  - Secondary (Ghost): `The technology` -> links to `/technology`
- **Visual Assets & Media:** None (Editorial typography quote).
- **Layout & Visual Treatment:** Centered container `max-w-4xl`, padding `py-24 md:py-32`. Typography in Fraunces serif (`font-display text-3xl md:text-4xl`).
- **Responsive Behavior:** Centered text wrapping.
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L289-L315).
- **Communicates Clear Product Value:** **Yes.** Personalizes the company philosophy with founder ownership.

---

### Section 9: Bottom CTA Banner

- **Order:** 9 (Lines 317–344)
- **Exact Headline (H2):** `Help define the intelligence layer for the AI era.`
- **Exact Body Copy:**
  > _"Partner with AutoPraxys on a capability intelligence pilot for your institution or organization."_
- **CTA:** `Get in touch` (Ghost style with white border/fill) -> links to `/contact`.
- **Visual Assets & Media:** Rounded banner container (`rounded-[2rem]`) styled with `--gradient-blue` background.
- **Layout & Visual Treatment:** Padding `px-8 py-16 md:px-16 md:py-24`, centered text, white typography on gradient.
- **Responsive Behavior:** Responsive padding and text scaling (`text-4xl` to `text-5xl`).
- **Files Responsible:** [`src/routes/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L317-L344).
- **Communicates Clear Product Value:** **Yes.** Direct conversion ask for university and enterprise pilot cohorts.
- **Specific Issues & Evidence:**
  1. _Full Page Reload Bug:_ Clicking `Get in touch` causes a full page reload due to the `<a>` tag conversion in `primitives.tsx:58`.
