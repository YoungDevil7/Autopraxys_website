# Praxys Website Audit — 08. Navigation & Conversion Journey Audit

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Primary Source Files:**

- [`src/components/site/SiteNav.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteNav.tsx)
- [`src/components/site/SiteFooter.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteFooter.tsx)
- [`src/components/site/primitives.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/primitives.tsx)
- [`src/routes/contact.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/contact.tsx)

---

## 1. Visitor Conversion Journey Mapping

```
Visitor Lands on Homepage (/)
  │
  ├─> Reads Value Proposition ("Measure how humans grow with AI")
  │     │
  │     ├─> Clicks "Explore Praxys" (CTA) ──────> Navigates to /praxys (Product details)
  │     │                                           │
  │     │                                           └─> Reads Roadmap ("Showcase platform live")
  │     │                                                 │
  │     │                                                 └─> [DEAD END: No link to showcase]
  │     │
  │     └─> Clicks "Request a demo" (CTA) ─────> FORCES FULL PAGE RELOAD to /contact
  │                                                 │
  │                                                 ▼
  │                                    Lands on /contact Lead Form
  │                                                 │
  │                                    Fills: Name, Email, Org, Interest, Message
  │                                                 │
  │                                    Clicks "Send request"
  │                                                 │
  │                         ┌───────────────────────┴───────────────────────┐
  │                         ▼                                               ▼
  │                [If formsubmit.co succeeds]                    [If adblocker/firewall blocks]
  │                         │                                               │
  │                         ▼                                               ▼
  │             Displays "Thank you" screen                       Fires `mailto:sourya@...`
  │             (Form payload sent to external relay)             AND immediately displays
  │                                                               "Thank you" screen anyway!
```

---

## 2. Header & Footer Navigation Audit

### Header Navigation ([`src/components/site/SiteNav.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteNav.tsx))

- **Brand Logo:** [`Wordmark.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/Wordmark.tsx) wrapped in TanStack `<Link to="/" />`. Resets mobile menu on click.
- **Desktop Links (Visible on `>= 768px`):**
  - `/technology` ("Technology")
  - `/praxys` ("Praxys")
  - `/research` ("Research")
  - `/about` ("About")
  - Active styling: `activeProps={{ className: "text-foreground" }}`.
- **Desktop CTA Button:**
  - `<CTA to="/contact" className="px-5 py-2.5">Request a demo</CTA>`
  - Due to `primitives.tsx:58`, this renders as a native `<a href="/contact">` tag, triggering an unneeded full page reload.
- **Mobile Menu Implementation ([`SiteNav.tsx:58-102`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteNav.tsx#L58-L102)):**
  - Button with hamburger animation (3 horizontal spans that animate into an 'X' using Tailwind classes `rotate-45`, `opacity-0`, `-rotate-45`).
  - Mobile drawer: Renders directly below `<header>` with backdrop blur.
  - Links: Maps the 4 navigation links + full-width `<CTA to="/contact">Request a demo</CTA>`.
  - **Deficiencies:**
    - No keyboard focus trap (`Tab` key navigates behind the open menu).
    - No `Escape` key listener to dismiss the menu.
    - No outside-click detection to dismiss the menu.

### Footer Navigation ([`src/components/site/SiteFooter.tsx`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/components/site/SiteFooter.tsx))

Structured into 3 distinct functional link groups:

1. **Platform:**
   - `/praxys` ("Praxys")
   - `/technology` ("Technology")
   - `/research` ("Research")
2. **Company:**
   - `/about` ("About")
   - `/contact` ("Contact")
3. **Legal:**
   - `/privacy` ("Privacy")
   - `/terms` ("Terms")

- All footer links use proper TanStack `<Link>` components and maintain client-side routing.

---

## 3. Comprehensive CTA & Destination Matrix

| Page Location            | Button / Link Text       | Intended Destination | Rendered Element |   Routing Mechanism   | Broken / Friction Flag                                     |
| :----------------------- | :----------------------- | :------------------- | :--------------: | :-------------------: | :--------------------------------------------------------- |
| **SiteNav (Desktop)**    | `Request a demo`         | `/contact`           |      `<a>`       |  Hard Browser Reload  | **UX Defect:** Forces hard reload via `primitives.tsx:58`. |
| **SiteNav (Mobile)**     | `Request a demo`         | `/contact`           |      `<a>`       |  Hard Browser Reload  | **UX Defect:** Forces hard reload via `primitives.tsx:58`. |
| **Hero (Primary)**       | `Explore Praxys`         | `/praxys`            |     `<Link>`     | SPA Client Navigation | Clean SPA transition.                                      |
| **Hero (Secondary)**     | `Request a demo`         | `/contact`           |      `<a>`       |  Hard Browser Reload  | **UX Defect:** Forces hard reload.                         |
| **Homepage Section 5**   | `See how Praxys works`   | `/praxys`            |     `<Link>`     | SPA Client Navigation | Clean SPA transition.                                      |
| **Homepage Section 8**   | `Read the research`      | `/research`          |     `<Link>`     | SPA Client Navigation | Clean SPA transition.                                      |
| **Homepage Section 8**   | `The technology`         | `/technology`        |     `<Link>`     | SPA Client Navigation | Clean SPA transition.                                      |
| **Homepage Section 9**   | `Get in touch`           | `/contact`           |      `<a>`       |  Hard Browser Reload  | **UX Defect:** Forces hard reload.                         |
| **About Page Bottom**    | `Get in touch`           | `/contact`           |      `<a>`       |  Hard Browser Reload  | **UX Defect:** Forces hard reload.                         |
| **Praxys Page Bottom**   | `Request a demo`         | `/contact`           |      `<a>`       |  Hard Browser Reload  | **UX Defect:** Forces hard reload.                         |
| **Technology Page**      | `Explore the platform`   | `/praxys`            |     `<Link>`     | SPA Client Navigation | Clean SPA transition.                                      |
| **Technology Page**      | `See the research`       | `/research`          |     `<Link>`     | SPA Client Navigation | Clean SPA transition.                                      |
| **Research Page Bottom** | `Partner on a study`     | `/contact`           |      `<a>`       |  Hard Browser Reload  | **UX Defect:** Forces hard reload.                         |
| **Research Page Bottom** | `About AutoPraxys`       | `/about`             |     `<Link>`     | SPA Client Navigation | Clean SPA transition.                                      |
| **In-Copy on `/praxys`** | "Showcase platform live" | _Showcase portal_    |       None       |     **Dead End**      | **Critical Defect:** Promised feature has no link.         |
| **In-Copy on `/praxys`** | "Pilot portal ready"     | _Client portal_      |       None       |     **Dead End**      | **Critical Defect:** Promised portal has no link.          |

---

## 4. Contact Form Architecture & Reliability Audit

### Implementation Analysis ([`src/routes/contact.tsx:38-96`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/contact.tsx#L38-L96))

The form submission is implemented using client-side `fetch`:

```ts
const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_INBOX}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(payload),
});
```

### Critical Findings & Security Risks:

1. **Third-Party Email Intermediary:** All inbound enterprise leads pass through `formsubmit.co`, an unverified third-party service outside AutoPraxys' direct control.
2. **Ad-Blocker & Privacy Shield Vulnerability:** Popular extensions (Brave Shields, uBlock Origin, Privacy Badger, Ghostery) routinely block `formsubmit.co` as an unverified cross-origin tracker.
3. **Flawed Fallback Handler:**
   ```ts
   } catch {
     // Fallback: open the user's mail app so the request still goes through
     window.location.href = `mailto:${CONTACT_INBOX}?subject=${subject}&body=${body}`;
     setSent(true);
   }
   ```
   If `fetch` fails (e.g. adblocker active), the code opens the mailto URL and **immediately transitions the UI to the "Thank you" screen**. If the user is on a webmail client (Gmail, Outlook 365) and has no desktop client mapped to `mailto:`, the browser does nothing, but the page tells the user their request was received.
4. **Missing Form Validation:**
   - Name and Email have HTML5 `required` attributes.
   - However, there is no real-time email format validation, corporate domain validation (e.g. flagging `@gmail.com` when requesting enterprise pilot), or character limit enforcement.
5. **No Consent / Privacy Policy Checkbox:**
   The form collects PII (Name, Email, Organization) without a consent acknowledgment checkbox linking to [`/privacy`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/privacy.tsx).

---

## 5. Cookie Consent & Privacy Compliance Interfaces

- **Cookie Banner:** **Completely Absent.** The site does not present a cookie banner or consent management modal. (Currently acceptable because the site does not set third-party tracking cookies or Google Analytics scripts).
- **Privacy Notice on Ingestion:** While the site mentions that "Prompt Intelligence features require explicit consent", there is no mockup or interactive example demonstrating how user consent is recorded in practice.
