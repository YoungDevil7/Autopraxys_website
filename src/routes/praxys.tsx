import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { CapabilityCore, FlowDiagram } from "@/components/illustrations";

export const Route = createFileRoute("/praxys")({
  head: () => ({
    meta: [
      { title: "Praxys — The AI Capability Intelligence Platform" },
      {
        name: "description",
        content:
          "Praxys turns human-AI interaction into capability intelligence: telemetry, a 14-dimension scoring engine, state detection, and a coaching layer.",
      },
      { property: "og:title", content: "Praxys — AI Capability Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Telemetry, capability scoring, state detection and coaching — the intelligence layer for human capability.",
      },
      { property: "og:url", content: "/praxys" },
    ],
    links: [{ rel: "canonical", href: "/praxys" }],
  }),
  component: PraxysPage,
});

const modules = [
  {
    kicker: "01 — Telemetry",
    title: "Behavioral signal capture",
    points: ["Keystroke timing & rhythm", "Retry rates & revision patterns", "Copy-paste and edit events"],
  },
  {
    kicker: "02 — Capability Scoring",
    title: "A 14-dimension scoring engine",
    points: ["Autonomy · Retention · Adaptability", "14 capability dimensions", "A composite capability score"],
  },
  {
    kicker: "03 — State Detection",
    title: "Understanding the moment",
    points: ["Autonomous · Assisted · Dependent", "Overwhelmed · Recovering", "Real-time state transitions"],
  },
  {
    kicker: "04 — Coaching Layer",
    title: "Guiding growth, not blocking it",
    points: ["Socratic interventions", "Reflection prompts & nudges", "Not blocking — guiding growth"],
  },
];

const roadmap = [
  { when: "Now", title: "Foundation", body: "Telemetry and scoring built. Showcase platform live. Pilot portal ready." },
  { when: "0–6 mo", title: "Validation", body: "University pilot cohort, behavioral data collection, first white paper." },
  { when: "6–18 mo", title: "Expansion", body: "University contracts, enterprise pilots, research publications, hardening." },
  { when: "18 mo+", title: "Standard", body: "Capability Intelligence as a standard. Research network. Platform at scale." },
];

function PraxysPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>Praxys</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-ink md:text-6xl text-balance">
              The intelligence layer for human capability.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Praxys observes real human-AI work and translates it into capability
              intelligence — a clear, longitudinal view of how people grow. It
              doesn't compete with AI assistants; it makes them measurable.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 hidden md:block">
            <FlowDiagram className="w-full" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((m, i) => (
              <Reveal key={m.kicker} delay={i * 70}>
                <GlassCard className="h-full">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                    {m.kicker}
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold text-ink">{m.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              Privacy-first: core analytics operate on behavioral metadata. Prompt
              Intelligence features require explicit user consent.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CAPABILITY INTELLIGENCE CORE */}
      <section className="border-y border-border/60 bg-card/40 py-24 md:py-32">
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>The Capability Intelligence Engine</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                A category-defining platform.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                At the center sits the Capability Intelligence Core, surrounded by
                the intelligence surfaces it powers — from prompt and knowledge
                intelligence to institution, enterprise, and research
                intelligence.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <CapabilityCore className="mx-auto w-full max-w-md" />
          </Reveal>
        </Container>
      </section>

      {/* ROADMAP */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Roadmap</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                From foundation to category standard.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {roadmap.map((r, i) => (
              <Reveal key={r.when} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-border/70 bg-card/60 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {r.when}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <Reveal>
            <div
              className="rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-20"
              style={{ backgroundImage: "var(--gradient-blue)" }}
            >
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-primary-foreground md:text-4xl text-balance">
                Bring capability intelligence to your cohort.
              </h2>
              <div className="mt-8 flex justify-center">
                <CTA
                  to="/contact"
                  variant="ghost"
                  className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20"
                >
                  Request a demo
                </CTA>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}