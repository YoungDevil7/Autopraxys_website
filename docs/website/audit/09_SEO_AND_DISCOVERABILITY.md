# Praxys Website Audit — 09. SEO & Discoverability Technical Audit

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Primary Source Files:**

- [`src/routes/__root.tsx:77-138`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L77-L138)
- [`src/routes/sitemap[.]xml.ts`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/sitemap[.]xml.ts)
- [`public/robots.txt`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/robots.txt)
- Individual route head functions in `src/routes/*.tsx`

---

## 1. Page Metadata, Titles & Meta Descriptions Audit

| Route Path        | Exact `<title>` Tag                                                  | Meta Description                                                                                                                                       | Canonical URL Tag in Source             | OpenGraph `og:url` Tag                     | SEO Evaluation / Issues                                                     |
| :---------------- | :------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- | :----------------------------------------- | :-------------------------------------------------------------------------- |
| **`/`**           | `"AutoPraxys \| Behavioral Intelligence for Human-AI Collaboration"` | `"AutoPraxys builds Praxys, the world's first AI Capability Intelligence Platform — measuring not what AI produces, but how humans grow with it."`     | **MISSING** (No canonical link set)     | **MISSING** (No `og:url` set)              | Strong title and description, but missing canonical link and OpenGraph URL. |
| **`/about`**      | `"About — AutoPraxys"`                                               | `"AutoPraxys Private Limited exists to create the intelligence layer for human-AI collaboration — measuring how humans grow with AI."`                 | `href="/about"` (**Relative URL**)      | `content="/about"` (**Relative URL**)      | **Defect:** Canonical and OG URL must be absolute.                          |
| **`/contact`**    | `"Contact — AutoPraxys"`                                             | `"Request a Praxys demo or start a capability intelligence pilot with AutoPraxys Private Limited."`                                                    | `href="/contact"` (**Relative URL**)    | `content="/contact"` (**Relative URL**)    | **Defect:** Canonical and OG URL must be absolute.                          |
| **`/praxys`**     | `"Praxys — The AI Capability Intelligence Platform"`                 | `"Praxys turns human-AI interaction into capability intelligence: telemetry, a 14-dimension scoring engine, state detection, and a coaching layer."`   | `href="/praxys"` (**Relative URL**)     | `content="/praxys"` (**Relative URL**)     | **Defect:** Canonical and OG URL must be absolute.                          |
| **`/technology`** | `"Technology — AutoPraxys"`                                          | `"The philosophy behind Praxys: behavioral intelligence, capability intelligence, privacy-first telemetry, and human-centered AI."`                    | `href="/technology"` (**Relative URL**) | `content="/technology"` (**Relative URL**) | **Defect:** Canonical and OG URL must be absolute.                          |
| **`/research`**   | `"Research — AutoPraxys"`                                            | `"The discovery research behind Praxys: 150 STEM students, 10 university professors, and 3 industry professionals on how AI is reshaping capability."` | `href="/research"` (**Relative URL**)   | `content="/research"` (**Relative URL**)   | **Defect:** Canonical and OG URL must be absolute.                          |
| **`/privacy`**    | `"Privacy — AutoPraxys"`                                             | `"How AutoPraxys approaches privacy: privacy-first telemetry, behavioral metadata, and explicit consent for Prompt Intelligence features."`            | `href="/privacy"` (**Relative URL**)    | `content="/privacy"` (**Relative URL**)    | **Defect:** Canonical and OG URL must be absolute.                          |
| **`/terms`**      | `"Terms — AutoPraxys"`                                               | `"The terms governing use of the AutoPraxys website and the Praxys platform."`                                                                         | `href="/terms"` (**Relative URL**)      | `content="/terms"` (**Relative URL**)      | **Defect:** Canonical and OG URL must be absolute.                          |

---

## 2. Technical SEO Deficiencies & Protocol Violations

### 1. Defective Server-Side Sitemap (`src/routes/sitemap[.]xml.ts`)

The server endpoint at `/sitemap.xml` generates XML output via an SSR handler. However, line 4 sets:

```ts
const BASE_URL = "";
```

Resulting in the following XML payload:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>/technology</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>/praxys</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  ...
</urlset>
```

**Impact:** According to the official [Sitemaps.org XML schema standard](https://www.sitemaps.org/protocol.html), all `<loc>` elements **must specify fully qualified URLs** beginning with the protocol (e.g. `https://autopraxys.com/about`). Web search crawlers (Googlebot, Bingbot) will flag this sitemap as syntax-invalid and refuse to parse it.

### 2. Relative Canonical URLs Across All Child Routes

In [`src/routes/about.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/about.tsx#L22), [`contact.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/contact.tsx#L23), [`praxys.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx#L23), [`technology.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/technology.tsx#L23), [`research.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/research.tsx#L23), [`privacy.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/privacy.tsx#L16), and [`terms.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/terms.tsx#L16), canonical tags are declared as:

```tsx
links: [{ rel: "canonical", href: "/about" }];
```

**Impact:** RFC 6596 explicitly mandates that canonical link relations should be absolute URIs (`https://autopraxys.com/about`). Search engines often ignore relative canonical tags, exposing the site to duplicate content indexing across staging, preview, and alternative domains.

### 3. Incomplete `robots.txt` ([`public/robots.txt`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/public/robots.txt))

```
User-agent: *
Allow: /
```

**Impact:** While it properly permits crawling, it is **missing the required sitemap declaration**:

```
Sitemap: https://autopraxys.com/sitemap.xml
```

### 4. Missing Social Sharing Preview Images (`og:image`, `twitter:image`)

In [`src/routes/__root.tsx:78-103`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L78-L103):

- `twitter:card` is explicitly set to `"summary_large_image"`.
- However, **neither `og:image` nor `twitter:image` is configured**.
  **Impact:** When links to `autopraxys.com` are shared on LinkedIn, X (Twitter), Slack, Discord, or WhatsApp, no preview banner is displayed, resulting in an unappealing, low-CTR text snippet.

---

## 3. Structured Data (JSON-LD) Audit

In [`src/routes/__root.tsx:121-132`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/__root.tsx#L121-L132), JSON-LD is embedded:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AutoPraxys Private Limited",
  "description": "Building Praxys, the world's first AI Capability Intelligence Platform.",
  "brand": "Praxys"
}
```

### Deficiencies:

- **Missing Corporate Entity Data:** Lacks `url` (`https://autopraxys.com`), `logo` (`https://autopraxys.com/autopraxys-logo.png`), `sameAs` (LinkedIn profile), and `founder` (`Souryavarma Datla`).
- **Missing `WebSite` Schema:** Lacks `WebSite` schema defining site name and search capabilities.
- **Missing `SoftwareApplication` Schema:** For a software company promoting an AI platform, adding `SoftwareApplication` schema for Praxys will dramatically improve knowledge graph indexing.

---

## 4. Semantic HTML & Heading Hierarchy Audit

| Route         | `<h1>` Count | `<h1>` Heading Text                                           | Hierarchy Evaluation                                        |
| :------------ | :----------: | :------------------------------------------------------------ | :---------------------------------------------------------- |
| `/`           |      1       | `Measure how humans grow with AI.`                            | **Pass.** Clean H1 followed by logical H2 section headings. |
| `/about`      |      1       | `Building the intelligence layer for human-AI collaboration.` | **Pass.** Single H1; H2s for mission, story, team.          |
| `/contact`    |      1       | `Let's build the capability standard.`                        | **Pass.** Single H1.                                        |
| `/praxys`     |      1       | `The intelligence layer for human capability.`                | **Pass.** Single H1; H2s for modules, engine, roadmap.      |
| `/technology` |      1       | `Human-centered AI, measured honestly.`                       | **Pass.** Single H1.                                        |
| `/research`   |      1       | `We went and asked. Here is what we found.`                   | **Pass.** Single H1.                                        |
| `/privacy`    |      1       | `Privacy at AutoPraxys`                                       | **Pass.** Rendered by `LegalLayout`.                        |
| `/terms`      |      1       | `Terms of Use`                                                | **Pass.** Rendered by `LegalLayout`.                        |

**Verdict on Heading Hierarchy:** Excellent semantic structure. Every single page contains exactly one `<h1>` element, followed by logical `<h2>` and `<h3>` tags.

---

## 5. Verification Limits: Source vs Deployed Checks

| Finding                                           |                Verified From Source                 |         Requires Deployed / External Check         |
| :------------------------------------------------ | :-------------------------------------------------: | :------------------------------------------------: |
| Empty `BASE_URL` in `sitemap[.]xml.ts`            |                    **VERIFIED**                     |                         —                          |
| Relative Canonical Tags in Route Meta             |                    **VERIFIED**                     |                         —                          |
| Missing `og:image` in `__root.tsx`                |                    **VERIFIED**                     |                         —                          |
| Missing Sitemap in `robots.txt`                   |                    **VERIFIED**                     |                         —                          |
| Google Search Console Verification HTML present   | **VERIFIED** (`public/google4893f3bf83c2be9c.html`) | Requires GSC dashboard check for live index status |
| Domain Resolution & SSL Cert for `autopraxys.com` |                          —                          |       **Requires DNS / Live Network Check**        |
| Actual Googlebot Indexing & SERP rankings         |                          —                          |      **Requires Search Console / SERP Query**      |
