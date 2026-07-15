import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AutoPraxys" },
      {
        name: "description",
        content:
          "AutoPraxys Private Limited exists to create the intelligence layer for human-AI collaboration — measuring how humans grow with AI.",
      },
      { property: "og:title", content: "About — AutoPraxys" },
      {
        property: "og:description",
        content:
          "Our mission, story, and the team building the AI Capability Intelligence Platform.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { initials: "SD", name: "Souryavarma Datla", role: "Founder & CEO" },
  { initials: "CS", name: "Chaitanya Suryadevara", role: "CFO" },
  { initials: "HP", name: "Harshita Ponduri", role: "Frontend · Marketing" },
  { initials: "AK", name: "Apoorv Khanna", role: "Backend" },
  { initials: "LV", name: "Lakshmeesh Varma", role: "Backend" },
  { initials: "AN", name: "Aniket Nandy", role: "Frontend · UI/UX" },
];

const advisors = [
  {
    name: "Karthik Kalidindi",
    role: "Snowflake Database Administrator · AI Engineer, Morgan Stanley",
  },
  {
    name: "Dr. R. Rajkumar",
    role: "Assistant Professor, VIT Chennai · TN Director, IET",
  },
];

function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>About</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-ink md:text-6xl text-balance">
              Building the intelligence layer for human-AI collaboration.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AutoPraxys Private Limited exists to answer one question the AI era
              forgot to ask: not what AI produces, but how humans grow because of
              it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Our mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Understand how AI changes human capability — not just
                productivity.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={80}>
            <GlassCard className="h-full">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Our vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Create the intelligence layer for human-AI collaboration — a world
                that measures how humans grow with AI.
              </p>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      {/* FOUNDER STORY */}
      <section className="border-y border-border/60 bg-card/40 py-24 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <div
                className="flex h-24 w-24 items-center justify-center rounded-2xl font-display text-3xl font-semibold text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-blue)" }}
              >
                SD
              </div>
              <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
                Souryavarma Datla
              </h2>
              <p className="mt-1 text-sm uppercase tracking-[0.12em] text-muted-foreground">
                Founder & CEO
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                B.Tech Computer Science (Gaming Technology), SRM Institute of
                Science and Technology.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                “As a CS student, I watched something nobody was talking about. My
                peers were submitting better work — faster. But when asked to
                explain, modify, or defend it, they couldn't.”
              </p>
              <p>
                “AI had made them more productive. And less capable. That question
                became Praxys.”
              </p>
              <p className="font-display text-xl font-medium text-ink">
                The future should not only measure what AI can do. It should
                measure how humans grow because of it.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TEAM */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>The team</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl font-semibold text-ink md:text-5xl text-balance">
              Built by people who lived the problem.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl font-display text-lg font-semibold text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-teal)" }}
                  >
                    {m.initials}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Advisors & mentors
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {advisors.map((a, i) => (
              <Reveal key={a.name} delay={i * 80}>
                <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
                  <h4 className="font-display text-lg font-semibold text-ink">
                    {a.name}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{a.role}</p>
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
                Let's shape the AI-era capability standard together.
              </h2>
              <div className="mt-8 flex justify-center">
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