import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { PrivacyShield, SignalWave, GrowthCurve } from "@/components/illustrations";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — AutoPraxys" },
      {
        name: "description",
        content:
          "The philosophy behind Praxys: behavioral intelligence, capability intelligence, privacy-first telemetry, and human-centered AI.",
      },
      { property: "og:title", content: "Technology — AutoPraxys" },
      {
        property: "og:description",
        content:
          "Behavioral intelligence, capability intelligence, and privacy-first telemetry for human-centered AI.",
      },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechnologyPage,
});

const pillars = [
  {
    title: "Behavioral Intelligence",
    body: "We read how people work with AI — the rhythm of keystrokes, retries, edits and revisions — rather than only what they submit.",
    viz: <SignalWave className="w-full" />,
  },
  {
    title: "Capability Intelligence",
    body: "Behavioral signals are interpreted into a picture of real capability: autonomy, retention and adaptability over time.",
    viz: <GrowthCurve className="w-full" />,
  },
  {
    title: "Privacy-first telemetry",
    body: "Core analytics operate on behavioral metadata. Prompt Intelligence features require explicit user consent — privacy by default.",
    viz: <PrivacyShield className="mx-auto h-44 w-44" />,
  },
];

function TechnologyPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>Technology</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-ink md:text-6xl text-balance">
              Human-centered AI, measured honestly.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Praxys is built on a simple conviction: the most important thing to
              measure in the AI era is not output, but how humans grow. Our
              technology turns everyday human-AI interaction into a clear,
              respectful signal of capability.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-28">
        <Container className="space-y-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <GlassCard className="grid items-center gap-10 p-10 md:grid-cols-2">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <h2 className="text-3xl font-semibold text-ink text-balance">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
                <div className={i % 2 ? "md:order-1" : ""}>{p.viz}</div>
              </GlassCard>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-border/60 bg-card/40 py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl text-balance">
              Intelligence that respects the human in the loop.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex justify-center gap-3">
              <CTA to="/praxys">Explore the platform</CTA>
              <CTA to="/research" variant="ghost">
                See the research
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}