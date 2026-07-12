import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import {
  CapabilityCore,
  CapabilityGapViz,
  FlowDiagram,
  GrowthCurve,
} from "@/components/illustrations";

export const Route = createFileRoute("/")({
  component: Index,
});

const gaps = [
  {
    n: "01",
    title: "Cognitive Offloading",
    body: "Constant AI reliance causes invisible skill decay — the GPS effect for the intellect.",
  },
  {
    n: "02",
    title: "Capability Illusion",
    body: "Users appear competent through prompting but cannot independently modify or defend outputs.",
  },
  {
    n: "03",
    title: "Learning Invisibility",
    body: "Educators and managers have zero visibility into the quality of the thinking process.",
  },
  {
    n: "04",
    title: "AI Dependency Risk",
    body: "Organizations cannot distinguish productive collaboration from dangerous over-reliance.",
  },
];

const stages = [
  { label: "Telemetry", body: "Keystroke rhythm, retry rates, revision and edit events." },
  { label: "Behavior", body: "Patterns of how a person actually works with AI." },
  { label: "Capability Intelligence", body: "A 14-dimension scoring engine reads the signal." },
  { label: "Coaching", body: "Socratic nudges and reflection prompts — guiding, not blocking." },
  { label: "Growth", body: "Visible, measurable capability development over time." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <div>
            <Reveal>
              <Eyebrow>AI Capability Intelligence</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] text-ink md:text-6xl text-balance">
                Measure how humans{" "}
                <span className="text-primary">grow with AI.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                We built Praxys, the world's first AI Capability Intelligence
                Platform. Instead of measuring what AI produces, we help
                organizations understand whether AI is making their people more
                capable or simply more dependent.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <CTA to="/praxys">Explore Praxys</CTA>
                <CTA to="/contact" variant="ghost">
                  Request a demo
                </CTA>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative flex justify-center md:justify-end">
            <div className="animate-float relative w-full max-w-[26rem]">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.94 0.03 85 / 0.85) 0%, transparent 68%)",
                }}
              />
              <img
                src="/autopraxys-logo.png?v=5"
                alt="AutoPraxys"
                className="relative mx-auto w-[88%] object-contain mix-blend-multiply drop-shadow-[0_18px_40px_oklch(0.55_0.04_85_/_0.12)]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* THE WORLD CHANGED */}
      <section className="py-24 md:py-32">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">The world changed</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
              AI changed how people learn, think and work — almost overnight.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              ChatGPT reached 100 million users in 60 days. Students and workers
              are already inside AI workflows. But measurement never followed.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* THE INVISIBLE PROBLEM */}
      <section className="border-y border-border/60 bg-card/40 py-24 md:py-32">
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>The invisible problem</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                Organizations measure productivity. Nobody measures capability.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Output has increased faster than visibility. We can see that work
                is completed faster — but not how it's done, which skills are
                growing, and which are quietly deteriorating.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <GlassCard className="p-10">
              <CapabilityGapViz className="w-full" />
              <p className="mt-6 text-sm text-muted-foreground">
                Output climbs. Capability can quietly flatten. Praxys makes the
                gap between the two visible.
              </p>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      {/* THE CAPABILITY GAP */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The Capability Gap</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                AI gave us a new blind spot.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {gaps.map((g, i) => (
              <Reveal key={g.n} delay={i * 80}>
                <GlassCard className="h-full">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-semibold text-primary/40">
                      {g.n}
                    </span>
                    <h3 className="text-xl font-semibold text-ink">{g.title}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {g.body}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* INTRODUCE PRAXYS */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <Reveal className="order-2 md:order-1">
            <CapabilityCore className="mx-auto w-full max-w-md" />
          </Reveal>
          <div className="order-1 md:order-2">
            <Reveal>
              <Eyebrow>Introducing Praxys</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                The intelligence layer for human capability.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Praxys sits quietly around real human-AI work — capturing
                behavioral signals, turning them into capability intelligence, and
                returning coaching that helps people grow. Privacy-first by
                default.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8">
                <CTA to="/praxys">See how Praxys works</CTA>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* HOW PRAXYS WORKS */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>How Praxys works</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                From interaction to intelligence.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-14 hidden md:block">
            <FlowDiagram className="w-full" />
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-5">
            {stages.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border/70 bg-card/60 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-y border-border/60 bg-card/40 py-24 md:py-32">
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Why capability intelligence matters</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                Capability is the next strategic asset.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Organizations can no longer afford to ignore the gap between what
                people produce and what they actually know. Praxys does not
                compete with AI assistants — it makes them measurable.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <GlassCard className="p-10">
              <GrowthCurve className="w-full" />
              <p className="mt-6 text-sm text-muted-foreground">
                A measurable trajectory of human capability, growing with AI.
              </p>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      {/* RESEARCH-FIRST */}
      <section className="py-24 md:py-32">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Research-first philosophy</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="mt-8 font-display text-3xl font-medium leading-snug text-ink md:text-4xl text-balance">
              “The future should not only measure what AI can do. It should
              measure how humans grow because of it.”
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Souryavarma Datla · Founder
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex justify-center gap-3">
              <CTA to="/research">Read the research</CTA>
              <CTA to="/technology" variant="ghost">
                The technology
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <Container>
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-24"
              style={{ backgroundImage: "var(--gradient-blue)" }}
            >
              <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl text-balance">
                Help define the intelligence layer for the AI era.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
                Partner with AutoPraxys on a capability intelligence pilot for
                your institution or organization.
              </p>
              <div className="mt-9 flex justify-center">
                <CTA
                  to="/contact"
                  variant="ghost"
                  className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20"
                >
                  Get in touch
                </CTA>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
