# Praxys Website Audit — 12. Prioritized Issue Register

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Total Identified Issues:** 20 itemized issues across 4 priority tiers.

---

## Priority Classification Framework

- **P0 (Critical):** Security vulnerabilities, material legal/factual misrepresentations, broken primary conversion paths, or search-index invalidation.
- **P1 (High):** Major credibility deficits, unfulfilled product links, broken routing behaviors, or missing core product proof.
- **P2 (Medium):** Important UX friction, design system token collisions, accessibility violations, or technical SEO deficiencies.
- **P3 (Low):** Dead code cleanup, image format modernizations, or minor visual polish.

---

## 1. P0: Critical Integrity & Conversion Issues

### Issue ID: `ISSUE-P0-01`

- **Location:** [`src/routes/sitemap[.]xml.ts:4`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/sitemap[.]xml.ts#L4)
- **Current Behavior:** `const BASE_URL = "";` generates relative URLs in the XML sitemap (e.g. `<loc>/about</loc>`).
- **Evidence:** `sitemap[.]xml.ts` line 4 and 30.
- **Why It Matters:** Violates the Sitemaps.org 0.9 XML schema standard. Googlebot and Bingbot reject the entire sitemap, severely damaging organic search indexing.
- **Recommended Change:** Set `const BASE_URL = "https://autopraxys.com";` (or inject via environment variable `VITE_SITE_URL`).
- **Dependencies:** Confirmed public domain name.
- **Acceptance Criteria:** Navigating to `/sitemap.xml` returns valid XML where every `<loc>` contains `https://autopraxys.com/...`.

### Issue ID: `ISSUE-P0-02`

- **Location:** [`src/routes/research.tsx:52-57`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/research.tsx#L52-L57)
- **Current Behavior:** Competitive table marks ChatGPT and Claude as `Privacy-first: —` (No).
- **Evidence:** `src/routes/research.tsx` lines 52–53.
- **Why It Matters:** Legally inaccurate and factually false regarding enterprise editions (OpenAI Enterprise, Anthropic Claude for Work) which offer SOC 2 Type II, HIPAA BAAs, zero data retention, and no training on customer data. Enterprise buyers will immediately reject this claim.
- **Recommended Change:** Rename the comparison column from "Privacy-first" to "Consumer Telemetry Governance" or "Independent Capability Auditing", or add explicit clarifying footnotes distinguishing consumer tiers from enterprise agreements.
- **Dependencies:** Legal & founder review.
- **Acceptance Criteria:** Table accurately reflects market reality without making sweeping negative claims about competitor enterprise compliance.

### Issue ID: `ISSUE-P0-03`

- **Location:** [`src/routes/contact.tsx:38-96`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/contact.tsx#L38-L96)
- **Current Behavior:** Lead generation form posts client-side data to `formsubmit.co/ajax/sourya@autopraxys.com`. If blocked by an ad-blocker or corporate firewall, it executes `mailto:` and immediately renders the success state (`sent: true`).
- **Evidence:** `src/routes/contact.tsx` lines 64, 78–93.
- **Why It Matters:** The company silently loses high-value enterprise and university pilot leads without knowing they failed. Visitors believe their message was received when it was not.
- **Recommended Change:** Implement a secure, server-side API route (e.g. using Resend, Postmark, AWS SES, or Cloudflare Workers) with database lead persistence and genuine server-side error feedback.
- **Dependencies:** Dedicated transactional email service API key.
- **Acceptance Criteria:** Form submissions are handled server-side, stored in a backup database, and return true HTTP delivery status before displaying confirmation.

---

## 2. P1: Major Credibility, Product Proof & Navigation Deficits

### Issue ID: `ISSUE-P1-01`

- **Location:** [`src/routes/index.tsx:83-97`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L83-L97), [`src/routes/praxys.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx)
- **Current Behavior:** The homepage hero visual is an animated floating corporate logo (`autopraxys-logo.png`). There is not a single product screenshot or software preview anywhere on the website.
- **Evidence:** `index.tsx:93`, `public/` directory contains no UI screenshots.
- **Why It Matters:** The "Ghost Software" deficit. Enterprise buyers cannot tell if Praxys is a working software platform or merely a slide deck.
- **Recommended Change:** Capture high-fidelity screenshots and workflow recordings from `frontend-praxys` in `C:\Projects\Promptsense`. Replace the hero floating logo with an authentic interactive capability dashboard graphic.
- **Dependencies:** Capturing and curating production UI screens from `frontend-praxys`.
- **Acceptance Criteria:** Visitors see genuine UI previews of the Praxys dashboard, session replay, and metric radar within 5 seconds of landing.

### Issue ID: `ISSUE-P1-02`

- **Location:** [`src/components/site/primitives.tsx:58-64`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx#L58-L64)
- **Current Behavior:** The `CTA` component deliberately overrides TanStack Router and renders a native `<a href="/contact">` tag for all contact links.
- **Evidence:** `primitives.tsx` lines 58–64.
- **Why It Matters:** Every time a visitor clicks "Request a demo" or "Get in touch", the browser performs a jarring, full-window reload, destroying the SPA experience.
- **Recommended Change:** Remove the `to === "/contact"` exception; render a normal TanStack `<Link to="/contact">` component.
- **Dependencies:** None.
- **Acceptance Criteria:** Clicking any CTA smoothly transitions to `/contact` via client-side routing without triggering a browser reload.

### Issue ID: `ISSUE-P1-03`

- **Location:** [`src/routes/praxys.tsx:52`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx#L52)
- **Current Behavior:** Roadmap claims _"Showcase platform live. Pilot portal ready"_, but provides no links or buttons to access either.
- **Evidence:** `praxys.tsx:52` in copy; absence of hyperlinks.
- **Why It Matters:** Frustrates interested buyers and raises suspicion that the promised portals do not exist.
- **Recommended Change:** Add working links to the hosted showcase environment or deploy `frontend-showcase` to a public demo sandbox. Add a "Client Portal Sign In" link in the header.
- **Dependencies:** Deployed showcase and portal subdomains.
- **Acceptance Criteria:** Prospective pilot partners can click through to an interactive showcase or portal overview.

### Issue ID: `ISSUE-P1-04`

- **Location:** [`src/routes/about.tsx:27-35`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/about.tsx#L27-L35)
- **Current Behavior:** 6 out of 7 team members are displayed as generic colored gradient blocks with initials (`CS`, `HP`, `PR`, `LV`, `AN`, `RV`) without photos, bios, or professional links.
- **Evidence:** `about.tsx` lines 156–172.
- **Why It Matters:** Appears like placeholder content to enterprise procurement evaluators.
- **Recommended Change:** Add authentic team headshots, 1-sentence background summaries, and verified LinkedIn profile links.
- **Dependencies:** Team asset collection.
- **Acceptance Criteria:** Every team member card features a photograph or cohesive professional illustration and a verified LinkedIn link.

### Issue ID: `ISSUE-P1-05`

- **Location:** [`src/routes/praxys.tsx:36`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx#L36), [`index.tsx:41`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/index.tsx#L41)
- **Current Behavior:** The website mentions a "14-dimension scoring engine" but conceals all 14 metric names.
- **Evidence:** `praxys.tsx:36-38`.
- **Why It Matters:** Misses the opportunity to showcase proprietary intellectual property documented in `C:\Projects\Promptsense\PRAXYS_METRIC_CATALOGUE.md`.
- **Recommended Change:** Provide an interactive or accordion breakdown of the 14 dimensions (Skill Integrity, Attention Score, Cognitive Offloading, Behavioral Stability, etc.).
- **Dependencies:** Metric catalogue content curation.
- **Acceptance Criteria:** Visitors can view the exact definitions and sample outputs of the 14 capability metrics on `/praxys`.

---

## 3. P2: Important UX, Visual Consistency & SEO Improvements

### Issue ID: `ISSUE-P2-01`

- **Location:** All child routes (`about.tsx:22`, `contact.tsx:23`, `praxys.tsx:23`, `technology.tsx:23`, `research.tsx:23`, `privacy.tsx:16`, `terms.tsx:16`)
- **Current Behavior:** Canonical tags and OpenGraph URL tags use relative paths (`href="/about"`).
- **Evidence:** Route `head` definitions.
- **Why It Matters:** Violates RFC 6596. Search engines frequently discard relative canonicals, leaving the site vulnerable to duplicate indexing.
- **Recommended Change:** Update all canonical links and `og:url` tags to use absolute URLs (`https://autopraxys.com/about`).
- **Acceptance Criteria:** Every rendered page emits a fully qualified absolute canonical link.

### Issue ID: `ISSUE-P2-02`

- **Location:** [`src/routes/__root.tsx:102`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L102)
- **Current Behavior:** `twitter:card` is set to `"summary_large_image"`, but no `og:image` or `twitter:image` is configured.
- **Evidence:** `__root.tsx` lines 92–103.
- **Why It Matters:** Links shared on social media, Slack, or LinkedIn render as plain text without preview banners.
- **Recommended Change:** Design and host a 1200x630 OpenGraph banner card (`public/og-image.png`) and declare it in root metadata.
- **Acceptance Criteria:** Social sharing linters (LinkedIn Post Inspector, Twitter Card Validator) preview a rich 1200x630 banner card.

### Issue ID: `ISSUE-P2-03`

- **Location:** [`src/styles.css:64-98`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css#L64-L98) vs [`src/styles.css:145-180`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/styles.css#L145-L180)
- **Current Behavior:** Two conflicting `:root` blocks exist in CSS; the second block overrides the first, leaving unused slate tokens.
- **Evidence:** `styles.css` lines 64–98 and 145–180.
- **Why It Matters:** Causes maintenance confusion and bloats CSS bundle.
- **Recommended Change:** Consolidate into a single clean `:root` block with warm tokens.
- **Acceptance Criteria:** CSS contains exactly one `:root` token definition block.

### Issue ID: `ISSUE-P2-04`

- **Location:** [`src/components/illustrations/index.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/illustrations/index.tsx)
- **Current Behavior:** All 7 SVG diagrams have `aria-hidden="true"` with no alternative descriptions.
- **Evidence:** `illustrations/index.tsx` lines 19, 77, 140, 190, 224, 249, 275.
- **Why It Matters:** Violates WCAG accessibility guidelines; vision-impaired users miss all diagrams.
- **Recommended Change:** Add accessible `<title>` elements, `<desc>` descriptions, and informative captions.
- **Acceptance Criteria:** Screen readers announce descriptive summaries for all 7 SVG diagrams.

### Issue ID: `ISSUE-P2-05`

- **Location:** [`src/components/site/SiteNav.tsx:58-102`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteNav.tsx#L58-L102)
- **Current Behavior:** Mobile drawer menu lacks keyboard trap, `Escape` key close listener, and outside-click dismissal.
- **Evidence:** `SiteNav.tsx` lines 58–102.
- **Why It Matters:** Impairs mobile accessibility and keyboard navigation.
- **Recommended Change:** Implement an `Escape` key listener and outside-click hook to cleanly dismiss the drawer.
- **Acceptance Criteria:** Pressing `Escape` or clicking outside the menu dismisses the mobile drawer.

### Issue ID: `ISSUE-P2-06`

- **Location:** [`src/routes/contact.tsx:148`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/contact.tsx#L148)
- **Current Behavior:** LinkedIn link contains `?viewAsMember=true` administrator parameter.
- **Evidence:** `contact.tsx` line 148.
- **Why It Matters:** Unprofessional URL that causes non-admin visitors to experience odd redirect handling.
- **Recommended Change:** Change link to `https://www.linkedin.com/company/autopraxys-private-limited/`.
- **Acceptance Criteria:** Link resolves cleanly to public LinkedIn company profile without admin parameters.

---

## 4. P3: Polish, Maintenance & Asset Modernizations

### Issue ID: `ISSUE-P3-01`

- **Location:** [`src/components/ui/`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/ui/)
- **Current Behavior:** 45 boilerplate shadcn/ui components (~120 KB) are present but never imported.
- **Evidence:** Static grep across `src/` shows zero usages outside `ui/` itself.
- **Recommended Change:** Delete unused files from `src/components/ui/` to eliminate dead code.

### Issue ID: `ISSUE-P3-02`

- **Location:** [`package.json:15-66`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/package.json#L15-L66)
- **Current Behavior:** 19 `@radix-ui/*` packages, cmdk, recharts, date-fns, etc., are installed but unused.
- **Recommended Change:** Prune phantom dependencies from `package.json` to streamline build and lockfile size.

### Issue ID: `ISSUE-P3-03`

- **Location:** [`public/souryavarma-datla.png`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/souryavarma-datla.png)
- **Current Behavior:** Founder portrait is delivered as a 360 KB uncompressed PNG for a 96x96 container.
- **Recommended Change:** Convert to optimized WebP format (target size < 25 KB).

### Issue ID: `ISSUE-P3-04`

- **Location:** [`src/components/site/Wordmark.tsx:11`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/Wordmark.tsx#L11)
- **Current Behavior:** Wordmark relies on `mix-blend-multiply` to hide a white background.
- **Recommended Change:** Export a native transparent SVG wordmark.

### Issue ID: `ISSUE-P3-05`

- **Location:** [`public/robots.txt`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/robots.txt)
- **Current Behavior:** Missing `Sitemap:` directive.
- **Recommended Change:** Append `Sitemap: https://autopraxys.com/sitemap.xml`.
