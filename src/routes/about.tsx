import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AutoPraxys — Mission, Team & Story" },
      {
        name: "description",
        content:
          "AutoPraxys Private Limited builds Praxys to understand how AI changes human behavior, collaboration, and capability.",
      },
      { property: "og:title", content: "About AutoPraxys — Mission, Team & Story" },
      {
        property: "og:description",
        content:
          "Our mission, authentic origins, team, and advisory board building the human–AI behavioral intelligence platform.",
      },
      { property: "og:url", content: "https://autopraxys.com/about" },
      { property: "og:image", content: "https://autopraxys.com/souryavarma-datla.png" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/about" }],
  }),
  component: AboutPage,
});

const teamMembers = [
  {
    name: "Souryavarma Datla",
    role: "Founder & CEO",
    focus: "Product architecture, telemetry design, and research vision.",
    initials: "SD",
    image: "/souryavarma-datla.png",
  },
  {
    name: "Lahari Bandaru",
    role: "GTM Lead",
    focus: "Institutional partnerships, pilot cohort onboarding, and market strategy.",
    initials: "LB",
    image: null,
  },
  {
    name: "Pakalapati V Seetha Rama Raju",
    role: "Backend Engineer",
    focus: "Normalization pipeline, metric evaluation engines, and server performance.",
    initials: "PR",
    image: null,
  },
  {
    name: "Aniket Nandy",
    role: "Frontend & UI/UX Engineer",
    focus: "Interface design, telemetry visualization, and interaction state management.",
    initials: "AN",
    image: null,
  },
];

const advisors = [
  {
    name: "Karthik Kalidindi",
    role: "Snowflake Database Administrator · AI Engineer, Morgan Stanley",
    expertise:
      "Enterprise database architecture, high-throughput pipeline reliability, and infosec compliance.",
  },
  {
    name: "Dr. R. Rajkumar",
    role: "Assistant Professor, VIT Chennai · TN Director, IET",
    expertise:
      "Pedagogical assessment, academic integrity governance, and computer science curriculum research.",
  },
];

function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">About AutoPraxys</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
              Building the intelligence layer for human–AI collaboration.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
              AutoPraxys Private Limited exists to turn permitted human–AI interaction evidence into
              clearer decisions about AI risk, workflow collaboration, and human capability.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-20 md:py-24 border-b border-border/60">
        <Container className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Our Mission
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Understand how AI changes human behavior, collaboration, and capability.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We believe that productivity tools measure only what is produced. Our mission is to
                observe how people arrive at solutions, identifying friction, policy anomalies, and
                learning opportunities along the way.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={80}>
            <GlassCard className="h-full">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                Our Vision
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Build the intelligence layer that helps people and organizations make better
                decisions about working with AI.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A future where humans and AI co-create with transparency—protecting sensitive
                organizational boundaries, eliminating workflow thrashing, and ensuring human skills
                compound rather than decay.
              </p>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      {/* 3. FOUNDER STORY */}
      <section className="py-24 md:py-32 border-b border-border/60 bg-card/30">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <Reveal>
              <div className="rounded-3xl border border-border/80 bg-card p-8 text-center shadow-[var(--shadow-soft)]">
                <img
                  src="/souryavarma-datla.png"
                  alt="Souryavarma Datla, Founder and CEO of AutoPraxys"
                  className="mx-auto h-32 w-32 rounded-2xl object-cover object-top shadow-md border border-border"
                />
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  Souryavarma Datla
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Founder & CEO
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  B.Tech Computer Science (Gaming Technology)
                  <br />
                  SRM Institute of Science and Technology
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-6">
                <Eyebrow>Authentic Origins</Eyebrow>
                <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl text-balance">
                  Observing the shift from the classroom to the engineering floor.
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    “As a computer science student at SRM, I witnessed an unprecedented behavioral
                    shift. My peers were submitting complex, beautifully formatted programming
                    assignments in record time. Yet when professors asked them in viva sessions to
                    explain an algorithm, refactor a helper function, or defend their architectural
                    choices, they frequently froze.”
                  </p>
                  <p>
                    “AI had made them demonstrably faster at producing output. But in many cases, it
                    had created a dangerous capability illusion: output was mistaken for
                    understanding. When we later consulted industry engineering teams, we found the
                    same pattern recurring with enterprise codebases—junior developers copying
                    solutions they could not debug under pressure.”
                  </p>
                  <blockquote className="border-l-2 border-primary pl-4 py-1 font-display text-lg font-medium italic text-ink">
                    “The AI era needs tools that measure human growth and behavioral integrity—not
                    just raw generation volume.”
                  </blockquote>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. TEAM */}
      <section className="py-24 md:py-32 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Current Core Team</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                The People Building Praxys
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                Engineers and operators focused on telemetry precision, system safety, and
                institutional adoption.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 70}>
                <div className="h-full flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:border-border">
                  <div>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-14 w-14 rounded-xl object-cover object-top border border-border"
                      />
                    ) : (
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-xl font-display text-lg font-semibold text-primary-foreground"
                        style={{ backgroundImage: "var(--gradient-teal)" }}
                      >
                        {member.initials}
                      </div>
                    )}
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {member.focus}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. ADVISORS & MENTORS */}
      <section className="py-24 md:py-32 bg-card/30">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Advisory & Institutional Guidance</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Advisors & Academic Mentors
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                Guiding our enterprise security architecture and pedagogical assessment rigor.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {advisors.map((advisor, idx) => (
              <Reveal key={advisor.name} delay={idx * 80}>
                <div className="h-full rounded-2xl border border-border/80 bg-card p-7 shadow-[var(--shadow-soft)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary font-display font-bold text-base border border-border">
                    {advisor.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {advisor.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {advisor.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Advisory Domain:</strong>{" "}
                    {advisor.expertise}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <CTA to="/contact" size="lg">
              Join waitlist
            </CTA>
          </div>
        </Container>
      </section>
    </>
  );
}
