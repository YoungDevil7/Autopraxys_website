import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — AutoPraxys" },
      {
        name: "description",
        content:
          "The discovery research behind Praxys: 150 STEM students, 4 university professors, and 3 industry professionals on how AI is reshaping capability.",
      },
      { property: "og:title", content: "Research — AutoPraxys" },
      {
        property: "og:description",
        content:
          "Discovery findings from students, professors and professionals on AI and human capability.",
      },
      { property: "og:url", content: "/research" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

const cohort = [
  { stat: "150", label: "STEM students interviewed" },
  { stat: "4", label: "University professors consulted" },
  { stat: "3", label: "Industry professionals" },
];

const findings = [
  {
    who: "Students",
    head: "Faster output, weaker retention.",
    body: "Work is submitted faster — but explaining the core concept becomes much harder, and retention drops significantly.",
  },
  {
    who: "Professionals",
    head: "Deeper dependency.",
    body: "Code writes itself. Engineers grow dependent on AI and lose confidence modifying what it generates — without tracking capability.",
  },
  {
    who: "Institutions",
    head: "Zero visibility.",
    body: "Organizations see output rise but cannot see skill growth or AI dependency. Faculty cannot evaluate AI-assisted learning quality or depth.",
  },
];

const comparison = [
  { name: "ChatGPT", analytics: "Output only", cap: false, coach: false, priv: false },
  { name: "Claude", analytics: "Output only", cap: false, coach: false, priv: false },
  { name: "Traditional LMS", analytics: "Basic", cap: false, coach: false, priv: "Varies" },
  { name: "Productivity tools", analytics: "Partial", cap: false, coach: false, priv: false },
  { name: "Praxys", analytics: "Advanced", cap: true, coach: true, priv: true },
];

function Cell({ v }: { v: boolean | string }) {
  if (typeof v === "string")
    return <span className="text-sm text-muted-foreground">{v}</span>;
  return v ? (
    <span className="text-teal" aria-label="Yes">
      ●
    </span>
  ) : (
    <span className="text-muted-foreground/40" aria-label="No">
      —
    </span>
  );
}

function ResearchPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>Research</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-ink md:text-6xl text-balance">
              We went and asked. Here is what we found.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Praxys began with discovery, not assumptions. We spoke with the
              people living the shift — students, faculty and working
              professionals — to understand how AI is quietly reshaping human
              capability.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {cohort.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <GlassCard className="text-center">
                <div className="font-display text-6xl font-semibold text-primary">
                  {c.stat}
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.12em] text-muted-foreground">
                  {c.label}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-6 md:grid-cols-3">
          {findings.map((f, i) => (
            <Reveal key={f.who} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border/70 bg-card/60 p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                  {f.who}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {f.head}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <GlassCard className="p-10 text-center">
              <p className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl text-balance">
                Across every group, one finding held: no existing tool measures
                learning — only output.
              </p>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      {/* COMPARISON */}
      <section className="border-y border-border/60 bg-card/40 py-24">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Why Praxys is different</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
                Nothing else measures capability.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    {["Platform", "Analytics", "Capability", "Coaching", "Privacy-first"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => {
                    const isPraxys = row.name === "Praxys";
                    return (
                      <tr
                        key={row.name}
                        className={
                          isPraxys
                            ? "rounded-xl bg-primary/5"
                            : "border-b border-border/60"
                        }
                      >
                        <td className="px-4 py-4 font-semibold text-ink">
                          {row.name}
                        </td>
                        <td className="px-4 py-4">
                          <Cell v={row.analytics} />
                        </td>
                        <td className="px-4 py-4">
                          <Cell v={row.cap} />
                        </td>
                        <td className="px-4 py-4">
                          <Cell v={row.coach} />
                        </td>
                        <td className="px-4 py-4">
                          <Cell v={row.priv} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-sm text-muted-foreground">
              Feature analysis based on publicly available product documentation,
              Q1 2025. Praxys does not compete with AI assistants — it makes them
              measurable.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 text-center">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl text-balance">
              A category is emerging. We're building its evidence base.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex justify-center gap-3">
              <CTA to="/contact">Partner on a study</CTA>
              <CTA to="/about" variant="ghost">
                About AutoPraxys
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}