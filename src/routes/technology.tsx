import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard, StatusBadge } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { ArchitecturePipeline, PrivacyShield } from "@/components/illustrations";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology Architecture — AutoPraxys" },
      {
        name: "description",
        content:
          "The technical architecture of Praxys: permitted interaction telemetry, canonical normalization, specialized intelligence engines, and verifiable privacy boundaries.",
      },
      { property: "og:title", content: "Technology Architecture — AutoPraxys" },
      {
        property: "og:description",
        content:
          "Evidence-based telemetry, canonical normalization, and three specialized intelligence engines grounded in transparent privacy boundaries.",
      },
      { property: "og:url", content: "https://autopraxys.com/technology" },
      { property: "og:image", content: "https://autopraxys.com/autopraxys-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/technology" }],
  }),
  component: TechnologyPage,
});

const pipelineStages = [
  {
    num: "01",
    title: "Permitted Interaction Telemetry",
    status: "implemented" as const,
    summary:
      "Captured via an opt-in Manifest V3 browser extension and permitted IDE plugins. Measures client-side keystroke inter-arrival timing, edit delta sizes, and prompt submission cycles.",
    limits:
      "Operates strictly in permitted web sessions; never captures background OS activity or unconsented tabs.",
  },
  {
    num: "02",
    title: "Canonical Normalization & Provenance",
    status: "implemented" as const,
    summary:
      "Raw interaction events are sanitized and formatted into standard schema records. Metadata (timing, frequency, ratios) is cleanly decoupled from prompt text.",
    limits: "Preserves audit trail integrity without transmitting raw personal identifiers.",
  },
  {
    num: "03",
    title: "Specialized Analysis & Evidence Evaluation",
    status: "partial" as const,
    summary:
      "Dispatches normalized evidence to the three purpose-built engines: Assurance (regex & entropy scanning), Collaboration (cadence & loop detection), and Capability (autonomy & offloading scoring).",
    limits:
      "Analytical models reflect specific heuristic and statistical indicators, not general human intelligence.",
  },
  {
    num: "04",
    title: "Findings, Uncertainty & Decisions",
    status: "partial" as const,
    summary:
      "Translates analytical scores into contextual findings. Scanner matches are clearly separated from confirmed security breaches; friction indicators are reported with confidence boundaries.",
    limits:
      "Findings are calibrated as decision support tools, not autonomous disciplinary systems.",
  },
  {
    num: "05",
    title: "Proportionate Intervention & Feedback",
    status: "prototype" as const,
    summary:
      "When policy thresholds or offloading anomalies are detected, Praxys returns non-blocking, guided feedback (such as a pre-dispatch warning or Socratic reflection prompt).",
    limits:
      "Currently in experimental pilot testing with controlled student and engineering cohorts.",
  },
];

const signalTaxonomy = [
  {
    level: "Observed Signal",
    nature: "Deterministic Raw Measurement",
    example: "Keydown event timestamp delta (e.g. 142ms), paste string length (e.g. 480 chars).",
    confidence: "High (Hardware/Browser Event)",
    limitation: "Raw signals convey timing, not intent or cognitive comprehension.",
  },
  {
    level: "Derived Feature",
    nature: "Statistical Synthesis",
    example:
      "Burst velocity, prompt revision cycle count, review dwell time prior to code execution.",
    confidence: "High (Mathematical Calculation)",
    limitation: "Reflects descriptive pacing; does not measure overall task complexity.",
  },
  {
    level: "Behavioral Proxy",
    nature: "Calibrated Analytical Index",
    example: "Interaction Strain Index, Cognitive Offloading Ratio, Autonomy Score.",
    confidence: "Moderate (Statistical Indicator)",
    limitation:
      "Useful for trends and coaching; must not be treated as a definitive psychometric assessment.",
  },
  {
    level: "Validated Outcome",
    nature: "Empirically Verified Impact",
    example:
      "Long-term skill retention, independent debugging efficacy, validated policy compliance.",
    confidence: "Requires Controlled Evaluation",
    limitation:
      "Demands multi-month academic cohort studies; Praxys does not claim causal outcomes prematurely.",
  },
];

function TechnologyPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">System Architecture</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
              Evidence-based telemetry. Three specialized intelligence layers.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
              A transparent architectural breakdown of how Praxys captures permitted client-side
              interaction signals, normalizes the evidence, and generates proportionate decisions
              without compromising privacy.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. SYSTEM ARCHITECTURE DIAGRAM */}
      <section className="py-20 md:py-28 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>System Topology</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                End-to-End Evidence Pipeline
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                Grounded in the real platform architecture: client-side collection, normalization,
                specialized engines, and tenant dashboards.
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <Reveal delay={120}>
              <ArchitecturePipeline />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. THE 5-STAGE EVIDENCE FLOW */}
      <section className="py-24 md:py-32 border-b border-border/60 bg-card/30">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Five-Stage Data Lifecycle</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                How Interaction Evidence Becomes Actionable
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                Every decision produced by Praxys can be traced back to verified interaction
                signals.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 space-y-6">
            {pipelineStages.map((stage, idx) => (
              <Reveal key={stage.num} delay={idx * 60}>
                <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-[var(--shadow-soft)] transition-all hover:border-border">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl font-semibold text-primary/40">
                        {stage.num}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-ink">{stage.title}</h3>
                    </div>
                    <StatusBadge status={stage.status} />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {stage.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/50 text-xs text-muted-foreground/90">
                    <strong className="text-foreground">Technical Guardrail:</strong> {stage.limits}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SIGNAL TAXONOMY & EPISTEMIC RIGOR */}
      <section className="py-24 md:py-32 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Epistemic Rigor</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Signal Taxonomy: What We Measure vs What We Infer
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                We maintain an honest boundary between what is directly observed, what is a derived
                indicator, and what requires external validation.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-accent/30 text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-4">Measurement Level</th>
                  <th className="px-5 py-4">Technical Nature</th>
                  <th className="px-5 py-4">Concrete Example</th>
                  <th className="px-5 py-4">Explicit Limitation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {signalTaxonomy.map((row) => (
                  <tr key={row.level} className="transition-colors hover:bg-accent/20">
                    <td className="px-5 py-4 font-semibold text-ink whitespace-nowrap">
                      {row.level}
                    </td>
                    <td className="px-5 py-4 text-xs font-medium text-primary">{row.nature}</td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">{row.example}</td>
                    <td className="px-5 py-4 text-xs text-muted-foreground italic">
                      {row.limitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 5. PRIVACY BOUNDARIES */}
      <section className="py-24 md:py-32 bg-card/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <Reveal>
                <Eyebrow>Data Governance</Eyebrow>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                  Strictly Defined Privacy Boundaries
                </h2>
              </Reveal>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Metadata Mode (Default):</strong> Core
                  telemetry measures interaction physics—timing, revision cadence, iteration loops,
                  and delta counts. Prompt text is neither captured nor transmitted to backend
                  servers.
                </p>
                <p>
                  <strong className="text-foreground">Deterministic & API-Level Processing:</strong>{" "}
                  Pattern scanning, credential detection, and friction indicators run via
                  deterministic client-side logic and rule-based evaluators. Where generative
                  synthesis is required (such as drafting Socratic nudges or parameterizing reusable
                  templates), Praxys utilizes existing commercial model APIs under strict
                  zero-data-retention agreements. We do not train proprietary foundation models on
                  customer prompts.
                </p>
                <p>
                  <strong className="text-foreground">Explicit Consent Boundaries:</strong> Richer
                  content evaluation (such as Assurance regex scanning or deep reflection context)
                  is strictly gated behind affirmative user or administrative policy consent.
                </p>
                <p>
                  <strong className="text-foreground">No Surveillance:</strong> Praxys does not
                  monitor webcam activity, capture background desktop screenshots, log raw
                  keystrokes in non-AI applications, or deploy covert endpoint agents.
                </p>
              </div>

              <Reveal delay={120}>
                <div className="mt-8">
                  <CTA to="/contact" size="md">
                    Join waitlist
                  </CTA>
                </div>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <GlassCard className="text-center p-10">
                <PrivacyShield className="mx-auto h-32 w-32" />
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  Privacy by Design
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Interaction physics are analyzed locally. Raw prompt payloads are isolated by
                  default.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
