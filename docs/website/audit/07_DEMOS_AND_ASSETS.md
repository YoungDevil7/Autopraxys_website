# Praxys Website Audit — 07. Visualizations, Demonstrations & Media Provenance

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Repositories Inspected:**

- Active Marketing Website: `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`
- Core Platform Repo: `C:\Projects\Promptsense` (Contains `PromptSense_Pilot_Demo.mp4`, `screenshots/`, `frontend-praxys/`, `frontend-client001/`)

---

## 1. Visual Asset Inventory of the Current Website

The current marketing website contains **zero actual product screenshots, zero video recordings, and zero interactive application embeds**. Below is an itemized inventory of every visual element currently rendered across all pages:

| Visual Element / Component     | Location on Site                                                                                                                                                                                                                                               | Asset Type                             | Source File / Provenance                                                                                                                                                 | Delivery Method         |          Current & Consistent with Actual Product?           | What Is Missing for Enterprise Credibility?                                                                           |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :----------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------- |
| **Floating Logo Hero Graphic** | [`index.tsx:92-97`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L92-L97)                                                                                                                                          | Static Logo Graphic with CSS Animation | [`public/autopraxys-logo.png`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/autopraxys-logo.png)                                           | Local file (111 KB PNG) | **No** (Displays company logo rather than product interface) | Complete absence of interface proof. Should be replaced by a live telemetry dashboard or interactive session replay.  |
| **`CapabilityGapViz`**         | [`index.tsx:144`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L144)                                                                                                                                               | Synthetic Conceptual Diagram           | [`src/components/illustrations/index.tsx:273-303`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L273-L303) | Inline SVG              |                     **Conceptual Only**                      | Lacks real metric axes, empirical data points, and tooltips demonstrating how the gap is measured.                    |
| **`CapabilityCore`**           | [`index.tsx:194`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L194), [`praxys.tsx:140`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx#L140)                           | Synthetic Architecture Diagram         | [`src/components/illustrations/index.tsx:127-184`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L127-L184) | Inline SVG              | **Partial** (Matches architectural concept in documentation) | Diagram nodes are non-interactive SVG text; clicking a satellite does not reveal underlying capabilities or screens.  |
| **`FlowDiagram`**              | [`index.tsx:236`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L236), [`praxys.tsx:87`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx#L87)                             | Process Flow Diagram                   | [`src/components/illustrations/index.tsx:75-124`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L75-L124)   | Inline SVG              |                     **Conceptual Only**                      | Shows 5 abstract labels ("Telemetry", "Behavior", etc.) without concrete UI previews of each stage.                   |
| **`GrowthCurve`**              | [`index.tsx:280`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L280), [`technology.tsx:37`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/technology.tsx#L37)                     | Synthetic Line Chart                   | [`src/components/illustrations/index.tsx:188-218`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L188-L218) | Inline SVG              |                 **Synthetic Visualization**                  | Lacks axis labels, sample time horizons (e.g. Day 1 to Day 90), and sample cohort metrics.                            |
| **`SignalWave`**               | [`technology.tsx:32`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/technology.tsx#L32)                                                                                                                                       | Synthetic Waveform Visualization       | [`src/components/illustrations/index.tsx:221-244`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L221-L244) | Inline SVG              |                 **Synthetic Visualization**                  | Displays 28 animated vertical bars; does not reflect real keystroke inter-arrival distribution data.                  |
| **`PrivacyShield`**            | [`technology.tsx:42`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/technology.tsx#L42)                                                                                                                                       | Symbolic Icon Graphic                  | [`src/components/illustrations/index.tsx:247-270`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx#L247-L270) | Inline SVG              |                         **Symbolic**                         | Standard security icon; does not communicate technical architecture (e.g., zero-knowledge hashing, local processing). |
| **Founder Portrait**           | [`about.tsx:107-111`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/about.tsx#L107-L111)                                                                                                                                      | Real Photographic Portrait             | [`public/souryavarma-datla.png`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/souryavarma-datla.png)                                       | Local file (360 KB PNG) |             **Yes** (Authentic founder portrait)             | Effective for founder narrative; image is relatively heavy (360 KB) for a 96x96 display container.                    |
| **Wordmark Logo**              | [`SiteNav.tsx:36`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteNav.tsx#L36), [`SiteFooter.tsx:35`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteFooter.tsx#L35) | Brand Logo Wordmark                    | [`public/autopraxys-logo.png`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/autopraxys-logo.png)                                           | Local file (111 KB PNG) |              **Yes** (Authentic brand wordmark)              | Uses `mix-blend-multiply` workaround to mask white background; should be native transparent SVG.                      |

---

## 2. Product Assets Available in the Wider Platform Repository

While the public marketing website completely lacks real media, an extensive library of production screenshots, UI components, and demo video assets was discovered in `C:\Projects\Promptsense`:

### 1. Existing Demo Video Asset

- **File:** `C:\Projects\Promptsense\PromptSense_Pilot_Demo.mp4`
- **Size:** 1.65 MB (1,657,391 bytes)
- **Timestamp:** June 16, 2026
- **Content:** Recorded walkthrough of the pilot telemetry collector and scoring interface in action.
- **Website Status:** **Completely absent from the marketing site.** Integrating a 30-second silent video loop or click-to-play modal would immediately resolve the website's visual credibility deficit.

### 2. Available Application Frontends Ready for Capture

The following production web apps exist in `C:\Projects\Promptsense` and can be run or inspected to capture authentic high-resolution screenshots:

1. **`frontend-praxys` (`C:\Projects\Promptsense\frontend-praxys`):**
   - Main user capability intelligence portal.
   - Live Pages:
     - `Home.tsx`: Overview capability score, radar charts, and recent sessions.
     - `Behavior.tsx`: Keystroke pacing, edit distribution, and prompt iteration metrics.
     - `Efficiency.tsx`: Output vs cognitive effort analytics.
     - `Decisions.tsx` & `DecisionDetail.tsx`: Forensic trace of decisions made during AI generation.
     - `Coverage.tsx`: Learning objective coverage mapping.
2. **`frontend-client001` (`C:\Projects\Promptsense\frontend-client001`):**
   - Tenant pilot management portal with admin and employee dashboards (`src/pages/admin/`, `src/pages/employee/`).
3. **`frontend-control-center` (`C:\Projects\Promptsense\frontend-control-center`):**
   - System-wide telemetry stream monitoring and cohort management.
4. **`screenshots/` Directory:**
   - Pre-existing screen captures in `C:\Projects\Promptsense\screenshots` and indexed in `C:\Projects\Promptsense\SCREENSHOT_INDEX.md`.

---

## 3. What Is Missing for a Convincing Enterprise Demo

To pass enterprise procurement and convince technical decision-makers, the website must replace its generic floating logo and abstract SVGs with a **Three-Tier Demonstration Narrative**:

1. **Tier 1: Ingest (The Workflow in Context):**
   - A real UI screenshot or video clip showing Praxys observing work inside an AI environment (ChatGPT, Claude, or VS Code) via the Chrome extension, highlighting that the user experience is friction-free.
2. **Tier 2: Analysis (The Capability Dashboard):**
   - A high-fidelity screen capture of `frontend-praxys/src/pages/Home.tsx` and `Behavior.tsx` showing the 14-dimension breakdown, session replay timeline, and longitudinal capability curve.
3. **Tier 3: Action (The Socratic Coaching Intervention):**
   - A visual mockup of the Socratic coaching layer triggering a reflection prompt (e.g. _"Before copying this generated SQL query, explain the JOIN condition"_), proving how Praxys actively guides learning.
