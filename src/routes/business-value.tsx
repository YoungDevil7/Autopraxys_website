import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, StatusBadge } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

export const Route = createFileRoute("/business-value")({
  head: () => ({
    meta: [
      { title: "Business Value — AutoPraxys | Measuring Human–AI Intelligence" },
      {
        name: "description",
        content:
          "Why human–AI behavioral intelligence matters commercially: turn permitted interaction evidence into clearer decisions about AI risk, workflow collaboration, and human capability.",
      },
      {
        property: "og:title",
        content: "Business Value — AutoPraxys | Measuring Human–AI Intelligence",
      },
      {
        property: "og:description",
        content:
          "AI adoption is not the outcome. Better work is. Explore how Praxys turns permitted interaction evidence into clearer enterprise decisions.",
      },
      { property: "og:url", content: "https://autopraxys.com/business-value" },
      { property: "og:image", content: "https://autopraxys.com/autopraxys-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/business-value" }],
  }),
  component: BusinessValuePage,
});

function BusinessValuePage() {
  return (
    <>
      {/* ========================================================================= */}
      {/* SECTION A — HERO: THE BUSINESS PROBLEM */}
      {/* ========================================================================= */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">
              The Business Value of Human–AI Intelligence
            </Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
              AI adoption is not the outcome. Better work is.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
              Organizations are investing in AI, but adoption alone does not reveal whether work is
              safer, workflows are more effective, or people are developing the capabilities they
              need. Praxys turns permitted human–AI interaction evidence into clearer decisions
              about AI risk, collaboration and human capability.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTA to="/praxys" size="lg">
                Explore the platform
              </CTA>
              <CTA to="/contact" variant="ghost" size="lg">
                Join the waitlist
              </CTA>
            </div>
          </Reveal>

          {/* Restrained Hero Evidence-to-Decision Preview */}
          <Reveal delay={240} className="mt-14">
            <MediaPlaceholder
              aspectRatio="16:9"
              badge="Illustrative Framework"
              title="From Permitted Evidence to Enterprise Decisions"
              caption="Illustrative schematic: how permitted client telemetry transforms into actionable risk warnings, friction diagnostics, and capability development reviews without raw prompt logging."
            />
          </Reveal>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION B — FOUR BUSINESS PRIORITIES */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 border-t border-border/60">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Strategic Priorities</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Four enterprise challenges Praxys is designed to inform
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-3 text-base text-muted-foreground">
                Enterprise leaders face questions that seat licenses, prompt counts, and vendor
                usage metrics cannot answer. Here is how our three product experiences address them,
                along with explicit boundaries on what the evidence establishes.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 space-y-12">
            {/* 1. AI Risk and Governance */}
            <Reveal>
              <div className="rounded-3xl border border-border/80 bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
                      Priority 01
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      AI Risk and Governance
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status="partial" />
                    <span className="text-xs text-muted-foreground font-mono">
                      Praxys Assurance
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">The Business Problem</h4>
                      <p className="mt-1">
                        Organizations need visibility into policy-relevant AI-use behavior and
                        traceable decisions, not merely an AI adoption count. Raw tool access logs
                        show that an employee opened an LLM, but cannot reveal whether sensitive
                        client credentials or unvetted source code entered public model interfaces.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">The Praxys Connection</h4>
                      <p className="mt-1">
                        Praxys Assurance evaluates policy-relevant signals at interaction time. It
                        supports client-side pattern scanning (such as high-entropy keys or API
                        tokens), pre-dispatch warnings, and structured hold/override workflows while
                        recording an auditable decision trail for compliance.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">Business Decision Informed</h4>
                      <p className="mt-1">
                        Helps security, risk, and compliance teams investigate high-risk behavioral
                        clusters, verify user policy acknowledgment before sensitive dispatches, and
                        conduct retrospective policy audits grounded in verified interaction
                        records.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-accent/40 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Operational Boundary
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        A detection is not proof that an incident occurred or was prevented. Praxys
                        Assurance provides targeted behavioral and pattern evaluation; it does not
                        claim full security perimeter coverage or replace an enterprise SIEM.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    Focus: Pre-dispatch pattern scanning, policy holds, and decision trails.
                  </p>
                  <CTA to="/praxys#assurance" variant="secondary" size="sm">
                    Explore Assurance →
                  </CTA>
                </div>
              </div>
            </Reveal>

            {/* 2. Workflow Efficiency and Collaboration */}
            <Reveal>
              <div className="rounded-3xl border border-border/80 bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
                      Priority 02
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      Workflow Efficiency and Collaboration
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status="partial" />
                    <span className="text-xs text-muted-foreground font-mono">
                      Praxys Collaboration
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">The Business Problem</h4>
                      <p className="mt-1">
                        High AI usage does not necessarily mean that work is efficient or produces
                        better outcomes. Teams often fall into repetitive prompt churn, copy-paste
                        thrashing, and friction loops that consume hours without advancing the
                        deliverable.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">The Praxys Connection</h4>
                      <p className="mt-1">
                        Praxys Collaboration examines interaction cadence, iteration depth, prompt
                        revision rhythms, and turn-taking latency. It maps behavioral workflow
                        patterns across teams to pinpoint where human–AI collaboration flows
                        smoothly and where workers become stalled.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">Business Decision Informed</h4>
                      <p className="mt-1">
                        Helps engineering and operational leaders identify workflows worth
                        investigating, diagnose tool friction before making seat-licensing
                        decisions, and evaluate where workflow guidelines or custom model tooling
                        could improve task execution.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-accent/40 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Operational Boundary
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        Interaction behavior is strictly distinguished from inferred efficiency.
                        Estimated tool cost is not provider billing data, and activity metrics must
                        not be confused with independently measured task outcomes. We do not promise
                        guaranteed cost savings without verified baseline data.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    Focus: Iteration latency, prompt thrashing detection, and workflow friction.
                  </p>
                  <CTA to="/praxys#collaboration" variant="secondary" size="sm">
                    Explore Collaboration →
                  </CTA>
                </div>
              </div>
            </Reveal>

            {/* 3. Human Capability and Development */}
            <Reveal>
              <div className="rounded-3xl border border-border/80 bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
                      Priority 03
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      Human Capability and Development
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status="prototype" />
                    <span className="text-xs text-muted-foreground font-mono">
                      Praxys Capability
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">The Business Problem</h4>
                      <p className="mt-1">
                        Organizations need to understand whether AI-supported work is building
                        lasting capability or creating fragile dependency. Workers often retype the
                        same ad-hoc prompts repeatedly without capturing institutional knowledge,
                        while passive copy-pasting erodes foundational domain mastery.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">The Praxys Connection</h4>
                      <p className="mt-1">
                        Praxys Capability investigates behavioral indicators of autonomy, critical
                        review, and task repetition. It detects routine prompt patterns across
                        sessions and helps users review and save editable, structured workflow
                        templates, converting repetitive conversational churn into shared
                        organizational assets.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">Business Decision Informed</h4>
                      <p className="mt-1">
                        Helps learning, development, and operational leaders identify cohorts
                        needing upskilling, scale proven prompt templates across teams, and pinpoint
                        where developmental coaching or reflection prompts can reinforce domain
                        competence.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-accent/40 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Operational Boundary
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        Behavioral proxies and template synthesis are not direct measurements of
                        knowledge retention, cognitive decline, or certified competence. We present
                        these signals as developmental hypotheses and workflow leverage
                        opportunities, not causally proven clinical learning outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    Focus: Task pattern detection, reusable workflow synthesis, and autonomy
                    indicators.
                  </p>
                  <CTA to="/praxys#capability" variant="secondary" size="sm">
                    Explore Capability →
                  </CTA>
                </div>
              </div>
            </Reveal>

            {/* 4. Evidence-Backed Business Decisions */}
            <Reveal>
              <div className="rounded-3xl border border-border/80 bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
                      Priority 04
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      Evidence-Backed Business Decisions
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status="implemented" />
                    <span className="text-xs text-muted-foreground font-mono">
                      Shared Intelligence Layer
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">The Business Problem</h4>
                      <p className="mt-1">
                        AI adoption decisions often rely on usage counts, anecdotal employee
                        feedback, or isolated vendor productivity claims. Without canonical evidence
                        linking telemetry to explicit operational limits, leadership makes policy
                        and procurement bets in the dark.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">The Praxys Connection</h4>
                      <p className="mt-1">
                        Our shared architecture normalizes permitted client telemetry into
                        reproducible evidence with cryptographic provenance. It applies specialized
                        risk, friction, and capability analysis while explicitly recording signal
                        uncertainty, boundaries, and confidence intervals.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">Business Decision Informed</h4>
                      <p className="mt-1">
                        Equips enterprise decision-makers with a balanced understanding of what is
                        known from telemetry, what remains uncertain, and what additional outcome
                        measurement is necessary before altering security policies, tooling
                        contracts, or team workflows.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-accent/40 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Operational Boundary
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        Praxys does not currently integrate with every enterprise ERP, HRIS, or CRM
                        system. Telemetry is gathered strictly from consented browser-level capture
                        and verified API connectors; enterprise outcome attribution requires
                        deliberate baseline coordination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    Focus: Canonical schemas, cryptographic provenance, and explicit uncertainty
                    reporting.
                  </p>
                  <CTA to="/technology" variant="secondary" size="sm">
                    Explore the Technology →
                  </CTA>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C — WHO USES THIS AND WHY (STAKEHOLDER PERSPECTIVES) */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 border-t border-border/60 bg-accent/20">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Enterprise Stakeholders</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Who uses Praxys intelligence and what decisions it informs
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-3 text-base text-muted-foreground">
                Different leaders require different evidence. Here is how Praxys serves key
                enterprise decision-makers without conflating interaction counts with business
                outcomes.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. CIO / CTO */}
            <Reveal delay={60}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div>
                  <div className="inline-flex rounded-lg bg-teal/10 p-2.5 text-teal border border-teal/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">CIO / CTO</h3>
                  <p className="mt-1 text-xs font-medium text-teal">
                    Workflow Visibility & Operational Architecture
                  </p>

                  <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Primary Focus:</strong> AI tool sprawl,
                      engineering interaction friction, and model deployment ROI.
                    </p>
                    <p>
                      <strong className="text-foreground">Decisions Informed:</strong> Which tooling
                      creates excessive cognitive thrashing, where developer assistance requires
                      in-house fine-tuning, and whether to consolidate redundant vendor seats.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Operational note:</span> Focuses
                  on client-side telemetry; does not replace APM or system performance monitoring.
                </div>
              </div>
            </Reveal>

            {/* 2. CISO / AI Governance */}
            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div>
                  <div className="inline-flex rounded-lg bg-blue/10 p-2.5 text-primary border border-blue/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    CISO & AI Governance
                  </h3>
                  <p className="mt-1 text-xs font-medium text-primary">
                    Policy-Relevant Signals & Auditable Decisions
                  </p>

                  <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Primary Focus:</strong> Sensitive data
                      exposure, unauthorized external LLM usage, and traceable policy compliance.
                    </p>
                    <p>
                      <strong className="text-foreground">Decisions Informed:</strong> Verifying
                      employee acknowledgment before high-risk dispatches, pinpointing systemic
                      credential exposure patterns, and maintaining evidentiary audit trails.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Operational note:</span>{" "}
                  Pre-dispatch pattern scanner; not a substitute for a full enterprise SIEM or
                  perimeter firewall.
                </div>
              </div>
            </Reveal>

            {/* 3. People, Learning & Transformation Leaders */}
            <Reveal delay={180}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div>
                  <div className="inline-flex rounded-lg bg-amber-500/10 p-2.5 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    People & Learning
                  </h3>
                  <p className="mt-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                    Capability Development & Cognitive Autonomy
                  </p>

                  <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Primary Focus:</strong> Skill retention,
                      critical inquiry vs passive acceptance, and developmental coaching.
                    </p>
                    <p>
                      <strong className="text-foreground">Decisions Informed:</strong> Which
                      employee cohorts exhibit healthy interactive problem-solving vs passive
                      dependency, and where to deploy Socratic nudges or structured training.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Operational note:</span>{" "}
                  Behavioral proxies represent assessment hypotheses, not certified psychological or
                  clinical evaluations.
                </div>
              </div>
            </Reveal>

            {/* 4. Finance & Business Leaders */}
            <Reveal delay={240}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                <div>
                  <div className="inline-flex rounded-lg bg-teal/10 p-2.5 text-teal border border-teal/20">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    Finance & Operations
                  </h3>
                  <p className="mt-1 text-xs font-medium text-teal">
                    Licensing Utility, Efficiency & Cost Analysis
                  </p>

                  <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Primary Focus:</strong> AI tool license
                      utilization, operational efficiency, and grounding procurement in evidence.
                    </p>
                    <p>
                      <strong className="text-foreground">Decisions Informed:</strong> Determining
                      whether high-cost enterprise AI tiers are yielding productive workflow
                      changes, identifying dormant seat allocations, and prioritizing technology
                      investments.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Operational note:</span>{" "}
                  Distinguishes interaction activity from external financial ledgers or
                  independently verified business ROI.
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="mt-8 rounded-xl border border-border/70 bg-card p-4 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Transparent Architecture Note:</span>{" "}
              Praxys provides behavioral evidence relevant to each of these executive roles. We do
              not claim that every stakeholder listed above currently has a dedicated,
              production-ready standalone portal.
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION D — HOW BUSINESS VALUE SHOULD BE MEASURED */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 border-t border-border/60">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Rigorous Evaluation</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                How enterprise business value should be measured
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-3 text-base text-muted-foreground">
                We believe enterprises should never accept ungrounded vendor ROI claims. Real value
                must be demonstrated through controlled before-and-after evidence.
              </p>
            </Reveal>
          </div>

          {/* 5-Stage Measurement Flow */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                num: "01",
                stage: "Baseline",
                title: "Establish Starting State",
                desc: "Record starting workflow telemetry, risk signals, resource consumption, or independently assessed task performance before changing tooling or policy.",
                tag: "Pre-Condition",
              },
              {
                num: "02",
                stage: "Intervention",
                title: "Document the Change",
                desc: "Clearly define the intervention: rolling out Praxys Assurance policy holds, deploying prompt guidelines, or introducing Socratic coaching.",
                tag: "Action",
              },
              {
                num: "03",
                stage: "Measurement",
                title: "Collect Comparable Evidence",
                desc: "Gather permitted interaction data post-intervention, controlling for cohort differences, project complexity, and seasonal workload where feasible.",
                tag: "Telemetry",
              },
              {
                num: "04",
                stage: "Evaluation",
                title: "Isolate Real Effects",
                desc: "Distinguish observed behavioral shifts from causal conclusions. Report confidence bounds, signal limitations, and remaining uncertainties honestly.",
                tag: "Analysis",
              },
              {
                num: "05",
                stage: "Decision",
                title: "Evidence-Based Action",
                desc: "Retain, calibrate, or discontinue the intervention based on verified findings, rather than continuing to fund unmeasured AI programs.",
                tag: "Outcome",
              },
            ].map((step, idx) => (
              <Reveal key={step.num} delay={idx * 60}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="font-mono text-teal">Stage {step.num}</span>
                      <span className="rounded-md border border-border bg-accent/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {step.tag}
                      </span>
                    </div>
                    <div className="mt-3 font-display text-sm font-semibold text-primary uppercase tracking-wider">
                      {step.stage}
                    </div>
                    <h4 className="mt-1 font-display text-base font-semibold text-ink">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted-foreground font-mono">
                    Step {step.num} of 05
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Core Principle Banner */}
          <Reveal delay={240}>
            <div className="mt-10 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Core Architectural Principle
                  </span>
                  <p className="font-display text-lg font-semibold text-ink md:text-xl">
                    “Cost savings, productivity improvement, risk reduction, and capability
                    development must be demonstrated using appropriate outcome data; they must not
                    be inferred from interaction counts alone.”
                  </p>
                  <p className="text-xs text-muted-foreground">
                    This principle guides how Praxys structures telemetry, reports uncertainty, and
                    advises enterprise pilot evaluation.
                  </p>
                </div>
                <div className="shrink-0">
                  <CTA to="/research" variant="secondary" size="md">
                    Review Research Evidence →
                  </CTA>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E — ONE PLATFORM, THREE CONNECTED EXPERIENCES */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 border-t border-border/60 bg-accent/20">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Unified Intelligence</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                One platform, three connected business experiences
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-3 text-base text-muted-foreground">
                Praxys Assurance, Collaboration, and Capability are not three disparate tools. They
                share a canonical intelligence foundation that turns permitted telemetry into
                reproducible findings across the organization.
              </p>
            </Reveal>
          </div>

          {/* 5-Step Shared Process Flow */}
          <div className="mt-14">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: "01",
                  title: "Permitted Signals",
                  desc: "Consented browser telemetry captures timing, revision physics & tool cadence without logging prompt text.",
                  status: "implemented" as const,
                },
                {
                  step: "02",
                  title: "Normalized Evidence",
                  desc: "Canonical schemas format raw telemetry with cryptographic provenance, redaction & tenant isolation.",
                  status: "implemented" as const,
                },
                {
                  step: "03",
                  title: "Specialized Analysis",
                  desc: "Three purpose-built engines evaluate risk patterns, workflow friction, and developmental indicators.",
                  status: "partial" as const,
                },
                {
                  step: "04",
                  title: "Findings & Decisions",
                  desc: "Pre-dispatch warnings, workflow bottleneck alerts, and Socratic reflection nudges for authorized users.",
                  status: "partial" as const,
                },
                {
                  step: "05",
                  title: "Outcome Measurement",
                  desc: "Correlating findings with verified enterprise outcomes (task completion, incident reduction, audit trails).",
                  status: "planned" as const,
                },
              ].map((item, idx) => (
                <Reveal key={item.step} delay={idx * 60}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-teal">
                          Stage {item.step}
                        </span>
                        <StatusBadge status={item.status} />
                      </div>
                      <h4 className="mt-3 font-display text-base font-semibold text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted-foreground">
                      {idx === 0 && "Capture"}
                      {idx === 1 && "Normalization"}
                      {idx === 2 && "Tri-Engine Intelligence"}
                      {idx === 3 && "Intervention"}
                      {idx === 4 && "Enterprise Integration"}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Three Connected Experiences Summary Matrix */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal delay={60}>
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Product Experience 01
                  </span>
                  <StatusBadge status="partial" />
                </div>
                <h4 className="mt-2 font-display text-lg font-semibold text-ink">
                  Praxys Assurance
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Answers the executive question:{" "}
                  <strong className="text-foreground">
                    “Are our teams introducing unmanaged security or compliance risks as they adopt
                    generative AI?”
                  </strong>
                </p>
                <div className="mt-4 pt-3 border-t border-border/50">
                  <Link
                    to="/praxys"
                    hash="assurance"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Assurance specifications</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                    Product Experience 02
                  </span>
                  <StatusBadge status="partial" />
                </div>
                <h4 className="mt-2 font-display text-lg font-semibold text-ink">
                  Praxys Collaboration
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Answers the executive question:{" "}
                  <strong className="text-foreground">
                    “Where is human–AI interaction delivering real flow, and where is it creating
                    hidden workflow friction?”
                  </strong>
                </p>
                <div className="mt-4 pt-3 border-t border-border/50">
                  <Link
                    to="/praxys"
                    hash="collaboration"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Collaboration specifications</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Product Experience 03
                  </span>
                  <StatusBadge status="prototype" />
                </div>
                <h4 className="mt-2 font-display text-lg font-semibold text-ink">
                  Praxys Capability
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Answers the executive question:{" "}
                  <strong className="text-foreground">
                    “Are our people growing their critical autonomy and domain mastery, or are
                    foundational capabilities decaying?”
                  </strong>
                </p>
                <div className="mt-4 pt-3 border-t border-border/50">
                  <Link
                    to="/praxys"
                    hash="capability"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Capability specifications</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION F — FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 border-t border-border/60">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Commercial Partnership</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] text-ink sm:text-4xl md:text-5xl text-balance">
              Make AI adoption measurable beyond usage.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance">
              Explore how Praxys approaches AI risk, collaboration and human capability—and help
              shape its next stage of development.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTA to="/praxys" size="lg">
                Explore Praxys
              </CTA>
              <CTA to="/contact" variant="ghost" size="lg">
                Join the waitlist
              </CTA>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-xs text-muted-foreground">
              Direct inquiries:{" "}
              <a
                href="mailto:sourya@autopraxys.com"
                className="underline underline-offset-4 hover:text-foreground font-medium"
              >
                sourya@autopraxys.com
              </a>{" "}
              · AutoPraxys Private Limited
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
