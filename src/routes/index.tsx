import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard, StatusBadge } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { SharedProcessFlow } from "@/components/illustrations";
import { ProductExamplesWidget } from "@/components/site/ProductExamples";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "AutoPraxys | Human–AI Behavioral Intelligence Platform",
      },
      {
        name: "description",
        content:
          "Praxys turns permitted human–AI interaction evidence into clearer decisions about AI risk, workflow collaboration, and human capability.",
      },
      { property: "og:title", content: "AutoPraxys | Human–AI Behavioral Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Praxys turns permitted human–AI interaction evidence into clearer decisions about AI risk, workflow collaboration, and human capability.",
      },
      { property: "og:url", content: "https://autopraxys.com" },
      { property: "og:image", content: "https://autopraxys.com/autopraxys-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com" }],
  }),
  component: IndexPage,
});

const productExperiences = [
  {
    id: "collaboration",
    title: "Praxys Collaboration",
    eyebrow: "Workflow Friction & Insights",
    status: "partial" as const,
    headline: "Find one thing to improve.",
    problem:
      "You get stuck in prompt reformulations, syntax fix cycles, and friction loops that turn a 2-minute question into 20 minutes of tweaking.",
    solution:
      "Identifies recurring friction cadences in real-time and provides a single, actionable suggestion to structure your prompt better.",
    benefit:
      "Apply concrete prompt structure recommendations to eliminate repetitive trial-and-error cycles.",
    link: "/praxys#collaboration",
    accent: "text-primary",
  },
  {
    id: "assurance",
    title: "Praxys Assurance",
    eyebrow: "Sensitive Information Protection",
    status: "partial" as const,
    headline: "Catch sensitive info before sending.",
    problem:
      "Accidental pasting of database credentials, customer records, or API keys into external public LLM chat windows.",
    solution:
      "Scans prompts locally in your browser before network dispatch, flagging credentials with clear Cancel & Edit or Send Anyway options.",
    benefit:
      "Protect sensitive data at the point of action before it leaves your browser, without blocking everyday work.",
    link: "/praxys#assurance",
    accent: "text-red-700 dark:text-red-400",
  },
  {
    id: "capability",
    title: "Praxys Capability",
    eyebrow: "Task Synthesis & Templates",
    status: "prototype" as const,
    headline: "Turn repeated tasks into reusable workflows.",
    problem:
      "Rewriting the same multi-step instructions, tone constraints, and formatting rules every time you perform a routine AI task.",
    solution:
      "Detects repeated prompt patterns across your sessions and synthesizes editable, reusable prompt templates with variable placeholders.",
    benefit:
      "Review and save proven prompt templates for yourself and your team, building lasting leverage from everyday work.",
    link: "/praxys#capability",
    accent: "text-teal-foreground",
  },
];

function IndexPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Human–AI Behavioral Intelligence</Eyebrow>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
                  Get more out of the way you work with AI.
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
                  Praxys helps you spot recurring workflow friction, catch potentially sensitive
                  information before sending it, and turn repeated AI tasks into reusable workflows.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <CTA to="/contact" size="lg">
                    Join waitlist
                  </CTA>
                  <CTA to="/praxys" variant="ghost" size="lg">
                    Explore the platform
                  </CTA>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    Spot friction & find 1 thing to improve
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" aria-hidden="true" />
                    Catch sensitive info before sending
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                    Turn repeated tasks into reusable workflows
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Product Preview Placeholder */}
            <Reveal delay={160} className="w-full">
              <MediaPlaceholder
                aspectRatio="16/9"
                product="Praxys Platform"
                tag="Product preview coming soon"
                title="Point-of-Action Intelligence Interface"
                description="Live demonstration preview: friction alerts, pre-dispatch credential interception, and workflow template generator across ChatGPT, Claude, and developer tools."
                caption="High-fidelity interactive preview container. Real video capture from pilot deployments will be inserted once production recording concludes."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. THREE PRODUCT EXPERIENCES */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Three Tangible User Experiences</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink md:text-4xl text-balance">
                Built to solve the day-to-day challenges of working with AI.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base text-muted-foreground">
                Instead of abstract metrics, Praxys delivers concrete, point-of-action support
                directly where you interact with AI.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {productExperiences.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 80}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {p.eyebrow}
                      </span>
                      <StatusBadge status={p.status} />
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{p.headline}</p>

                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Friction:</strong> {p.problem}
                      </p>
                      <p>
                        <strong className="text-foreground">What you experience:</strong>{" "}
                        {p.solution}
                      </p>
                      <p className="text-xs text-foreground/80 pt-1 border-t border-border/40">
                        <strong>Outcome:</strong> {p.benefit}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-border/60">
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary/80"
                    >
                      <span>Explore {p.title}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. THE SHARED INTELLIGENCE PROCESS */}
      <section className="border-y border-border/60 bg-card/40 py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Shared Architecture</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink md:text-4xl text-balance">
                From permitted signals to evidence-backed decisions.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base text-muted-foreground">
                Praxys never records background keystrokes or unauthorized activity. Only explicitly
                permitted AI interaction telemetry enters the normalization pipeline.
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <Reveal delay={120}>
              <SharedProcessFlow />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. THREE DECISION EXAMPLES IN ACTION */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <ProductExamplesWidget />
          </Reveal>
        </Container>
      </section>

      {/* 5. RESEARCH & EVIDENCE FOUNDATIONS */}
      <section className="border-t border-border/60 bg-card/40 py-24 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <Reveal>
                <Eyebrow>Evidence-Led Philosophy</Eyebrow>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink md:text-4xl text-balance">
                  Grounded in empirical discovery, not marketing hype.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Praxys began by listening to the people experiencing the rapid transition to AI
                  assistance. Our exploratory discovery interviews identified deep, consistent
                  patterns: while generative output speed increased dramatically, independent
                  problem formulation and conceptual retention often degraded.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <CTA to="/research" variant="secondary">
                    Review published citations & studies
                  </CTA>
                  <CTA to="/technology" variant="ghost">
                    See technology specifications
                  </CTA>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={100}>
                <GlassCard className="p-6 text-center">
                  <div className="font-display text-4xl font-semibold text-primary">150</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    STEM Students Interviewed
                  </div>
                  <p className="mt-2 text-[11px] text-muted-foreground/80">
                    Qualitative discovery cohort identifying cognitive offloading patterns.
                  </p>
                </GlassCard>
              </Reveal>

              <Reveal delay={160}>
                <GlassCard className="p-6 text-center">
                  <div className="font-display text-4xl font-semibold text-primary">10</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Professors Consulted
                  </div>
                  <p className="mt-2 text-[11px] text-muted-foreground/80">
                    Computer science & engineering faculty evaluating learning visibility.
                  </p>
                </GlassCard>
              </Reveal>

              <Reveal delay={200} className="col-span-2">
                <div className="rounded-2xl border border-border/80 bg-card p-5 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-ink">Scientific Honesty:</span> These figures
                  represent initial qualitative discovery interviews, not controlled clinical
                  trials. We distinguish observed behavioral signals from causal learning outcomes.
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CONVERSION CTA BANNER */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-20 shadow-[var(--shadow-lift)]"
              style={{ backgroundImage: "var(--gradient-blue)" }}
            >
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl text-balance">
                Join the waitlist for the Praxys behavioral intelligence platform.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85">
                We are onboarding select enterprise teams and higher education institutions for
                pilot cohorts.
              </p>
              <div className="mt-8 flex justify-center">
                <CTA
                  to="/contact"
                  variant="ghost"
                  size="lg"
                  className="border-white/30 bg-white/10 text-primary-foreground hover:bg-white/20"
                >
                  Join waitlist
                </CTA>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
