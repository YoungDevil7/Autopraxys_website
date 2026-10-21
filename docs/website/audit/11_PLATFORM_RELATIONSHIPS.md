# Praxys Website Audit — 11. Website Relationship to Wider Praxys Platform

**Auditor:** Antigravity AI  
**Audit Date:** October 20, 2026  
**Primary Reference Repositories:**

- Active Marketing Website: `C:\Projects\Autopraxys_website-main\Autopraxys_website-main`
- Core Platform Repo: `C:\Projects\Promptsense`

---

## 1. Platform Ecosystem Mapping

The founder's broader software repository (`C:\Projects\Promptsense`) houses a multi-application platform consisting of backend scoring engines, a browser telemetry extension, and multiple dedicated frontend web portals. Below is the relationship map between the public marketing website and each platform component:

```
                          ┌────────────────────────────────────────────────────────┐
                          │               AutoPraxys Marketing Website             │
                          │ (C:\Projects\Autopraxys_website-main\Autopraxys_website-main) │
                          │                  Public Domain: autopraxys.com         │
                          └───────────────────────────┬────────────────────────────┘
                                                      │
                       Mentions in copy only ("Pilot portal ready", "Showcase live")
                       ZERO Working Links | ZERO Shared Components | ZERO API Calls
                                                      │
                                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 Wider Platform Repo (C:\Projects\Promptsense)                           │
│                                                                                                         │
│  ┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐   ┌────────────────┐ │
│  │   frontend-praxys     │   │  frontend-client001   │   │frontend-control-center│   │frontend-showcase│ │
│  │ User Capability Portal│   │  Pilot Client Portal  │   │   Admin Supervision   │   │ Interactive Demo│ │
│  │ (Home, Behavior, etc.)│   │ (Admin/Employee roles)│   │  (System-wide telemetry)│ (Pre-client showcase)│
│  └───────────┬───────────┘   └───────────┬───────────┘   └───────────┬───────────┘   └───────┬────────┘ │
│              │                           │                           │                       │          │
│              └───────────────────────────┼───────────────────────────┴───────────────────────┘          │
│                                          ▼                                                              │
│                         ┌─────────────────────────────────┐                                             │
│                         │        FastAPI Python Backend   │                                             │
│                         │   (C:\Projects\Promptsense\backend)   │                                       │
│                         │  • Scoring Engine (14 Dimensions)│                                            │
│                         │  • State Detection Classifier   │                                             │
│                         │  • SQLite/PostgreSQL Database   │                                             │
│                         └────────────────┬────────────────┘                                             │
│                                          ▲                                                              │
│                                          │ Telemetry Ingestion API                                      │
│                         ┌────────────────┴────────────────┐                                             │
│                         │   Chrome Extension (Manifest V3)│                                             │
│                         │ (C:\Projects\Promptsense\chrome-ext)  │                                       │
│                         │  • Keystroke & Edit Listeners   │                                             │
│                         │  • ChatGPT & Claude Content Sinks│                                            │
│                         └─────────────────────────────────┘                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Itemized Component Relationship Matrix

| Platform Application / Component                                  | Path in Repository                                                   | What It Does                                                                                                                                                                               | Website Relationship Type         | Current State on Website                                                                                                                                                                                                                                   |
| :---------------------------------------------------------------- | :------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Praxys Intelligence Frontend (`frontend-praxys`)**              | `C:\Projects\Promptsense\frontend-praxys`                            | Authenticated user application providing real-time capability scoring, behavioral analysis (`Behavior.tsx`), efficiency tracking, decision trees (`Decisions.tsx`), and learning coverage. | **Mention in Copy Only**          | Referred to conceptually as "Praxys" and "Showcase platform", but **no login link, no subdomain link, and no screenshots** appear on the marketing site.                                                                                                   |
| **Client001 Pilot Portal (`frontend-client001`)**                 | `C:\Projects\Promptsense\frontend-client001`                         | Multi-tenant institutional portal with separate admin (`src/pages/admin/`) and employee (`src/pages/employee/`) dashboards for tracking pilot cohorts.                                     | **Mention in Copy Only**          | Claimed in roadmap ([`praxys.tsx:52`](file:///c:/Projects/Autopraxys_website-main/Autopraxys_website-main/src/routes/praxys.tsx#L52)): _"Pilot portal ready"_. However, there is **no link, no button, and no authentication entry point** on the website. |
| **Control Center (`frontend-control-center` / `control_center`)** | `C:\Projects\Promptsense\frontend-control-center` & `control_center` | Internal systems operations dashboard for supervising active telemetry streams, scoring engine throughput, and user sessions.                                                              | **Zero Reference**                | Not mentioned or linked on the website (appropriate for an internal administrative tool).                                                                                                                                                                  |
| **Workforce / Enterprise Frontend (`frontend-enterprise`)**       | `C:\Projects\Promptsense\frontend-enterprise`                        | Enterprise workforce capability analytics dashboard designed for enterprise HR, L&D, and engineering managers.                                                                             | **Conceptual Reference Only**     | Mentioned in the satellite diagram as "Enterprise Intelligence" and in contact form dropdown as "An enterprise pilot". No product screens or direct links exist.                                                                                           |
| **Interactive Showcase (`frontend-showcase`)**                    | `C:\Projects\Promptsense\frontend-showcase`                          | Dedicated interactive demo frontend created to showcase Praxys telemetry and metric evaluation without requiring live Chrome extension data.                                               | **Mention in Copy Only**          | Claimed as _"Showcase platform live"_, but visitors have no way to access or launch it from the website.                                                                                                                                                   |
| **Core Python Backend (`backend/`)**                              | `C:\Projects\Promptsense\backend`                                    | FastAPI backend running the 14-dimension scoring engine, state detection, and database models.                                                                                             | **Zero Direct Integration**       | The marketing website makes no API calls to the backend. Inbound marketing leads go to `formsubmit.co`, completely bypassing the Praxys backend.                                                                                                           |
| **Chrome Telemetry Extension (`chrome-extension/`)**              | `C:\Projects\Promptsense\chrome-extension`                           | The actual ingestion mechanism: collects keystroke inter-arrival times, retries, paste events, and edit events from AI web apps.                                                           | **Descriptive Reference in Copy** | Described in copy as _"Keystroke timing & rhythm, retry rates & revision patterns"_, but the website never explains that an extension is the client collector.                                                                                             |

---

## 3. Analysis of Platform Integration Gaps

### 1. The "Walled Garden" Marketing Disconnect

Currently, the marketing website and the product codebase are completely siloed:

- The marketing website was generated and edited in **Lovable** (`.lovable/project.json`) as a standalone brochureware project.
- The product platform was developed in **Vite + React** and **Python FastAPI** inside `C:\Projects\Promptsense`.
- Because there are no shared npm packages, no submodules, and no cross-linking, updates in the platform (such as new metric visualizations or pilot features) never reflect on the marketing website.

### 2. Missing Authentication & Client Onboarding Gateways

A standard enterprise B2B SaaS website header includes:

- Navigation Links (Product, Technology, Research, About)
- Direct Call to Action (`Request a Demo`)
- **Existing Customer / Pilot Sign In (`Sign In` / `Client Portal`)**
  Currently, AutoPraxys clients participating in pilots have **no web gateway** to reach `frontend-client001` or `frontend-praxys` from the primary brand domain `autopraxys.com`. Adding a discreet "Sign In" button linking to the hosted portal (e.g. `app.autopraxys.com` or `portal.autopraxys.com`) is an immediate best practice.

### 3. Untapped Showcase Assets

`frontend-showcase` was specifically built to demonstrate the platform. Linking to a live deployment of the showcase or embedding interactive demo widgets directly into `/praxys` would immediately solve the marketing site's "Ghost Software" deficit.
