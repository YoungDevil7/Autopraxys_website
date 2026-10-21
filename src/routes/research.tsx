import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, GlassCard } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Evidence — AutoPraxys" },
      {
        name: "description",
        content:
          "The research foundations of AutoPraxys: qualitative discovery cohorts, peer-reviewed human–AI interaction citations, and empirical behavioral telemetry.",
      },
      { property: "og:title", content: "Research & Evidence — AutoPraxys" },
      {
        property: "og:description",
        content:
          "Peer-reviewed human–AI interaction citations, qualitative discovery findings, and an honest methodology separating proxies from validated outcomes.",
      },
      { property: "og:url", content: "https://autopraxys.com/research" },
      { property: "og:image", content: "https://autopraxys.com/autopraxys-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/research" }],
  }),
  component: ResearchPage,
});

const publishedStudies = [
  {
    citation:
      "Dell'Acqua, F., McFowland, E., Mollick, E. R., Lifshitz-Assaf, H., Kellogg, K., Rajendran, S., Krayer, L., Candelon, F., & Lakhani, K. R. (2023).",
    title:
      "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality",
    venue:
      "Harvard Business School Technology & Operations Mgt. Unit Working Paper No. 24-013 / SSRN.",
    url: "https://ssrn.com/abstract=4573321",
    excerpt:
      "“For tasks outside the frontier, AI decreased consultants' performance, with consultants using AI being 19 percentage points less likely to produce correct solutions compared to those without AI.”",
    context:
      "Demonstrates the 'jagged frontier' effect: workers frequently overestimate AI capabilities on complex tasks, accepting flawed answers without critical verification.",
  },
  {
    citation: "Noy, S., & Zhang, W. (2023).",
    title:
      "Experimental evidence on the productivity effects of generative artificial intelligence",
    venue: "Science, 381(6654), 187–192.",
    url: "https://doi.org/10.1126/science.adh2586",
    excerpt:
      "“Generative AI technology increased productivity: average time to complete tasks dropped by ~40%, and output quality rose by ~0.45 standard deviations... AI compressed productivity inequality, but raises critical questions regarding skill development and independent problem-solving.”",
    context:
      "Confirms that while AI dramatically accelerates production speed, it simultaneously introduces dependencies on foundational cognitive stages.",
  },
  {
    citation: "Passi, S., & Vorvoreanu, M. (2022).",
    title: "Overreliance on AI Systems: Path Toward Addressing Overreliance",
    venue: "Microsoft Research / ACM CHI 2022 Workshop on Trust and Reliance in AI-assisted Tasks.",
    url: "https://www.microsoft.com/en-us/research/publication/overreliance-on-ai-systems/",
    excerpt:
      "“Overreliance occurs when people uncritically accept AI recommendations, failing to identify errors even when they possess the requisite domain knowledge to do so.”",
    context:
      "Directly describes the 'Capability Illusion' observed in AutoPraxys discovery interviews: users with sufficient training overlook errors due to cognitive offloading.",
  },
];

const discoveryCohorts = [
  {
    number: "150",
    label: "STEM Students Interviewed",
    detail:
      "Qualitative discovery sessions across university cohorts assessing prompt iteration habits and independent problem articulation.",
  },
  {
    number: "10",
    label: "University Professors Consulted",
    detail:
      "Computer science and engineering faculty evaluating learning visibility, academic integrity, and pedagogical assessment challenges.",
  },
  {
    number: "3",
    label: "Industry Engineering Leads",
    detail:
      "Senior software engineering managers assessing junior developer code comprehension and code-review confidence.",
  },
];

const taxonomyMatrix = [
  {
    category: "Consumer AI Interfaces (Web)",
    telemetry: "Session length & text log only",
    assurance: "Post-hoc filter / provider discretion",
    collaboration: "None (individual chat interface)",
    capability: "None (answers provided directly)",
    privacy: "Cloud-hosted; provider terms govern training",
  },
  {
    category: "Developer Copilot Extensions",
    telemetry: "Acceptance rate & active keypress",
    assurance: "Public code match detection",
    collaboration: "Basic acceptance percentage",
    capability: "None (completion-oriented)",
    privacy: "Telemetry governed by enterprise license tier",
  },
  {
    category: "Traditional LMS Platforms",
    telemetry: "Submission timestamp & grade only",
    assurance: "Plagiarism text similarity",
    collaboration: "None (static submission portal)",
    capability: "Summative test scores",
    privacy: "Institutionally hosted student records",
  },
  {
    category: "Praxys Intelligence Platform",
    telemetry: "Interaction cadence & edit physics",
    assurance: "Pre-dispatch regex & entropy policy scans",
    collaboration: "Loop detection & friction diagnostics",
    capability: "Socratic reflection & autonomy calibration",
    privacy: "Metadata-first; client-side isolation by default",
  },
];

function ResearchPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Evidence & Foundations</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
              Grounded in published science. Verified through discovery.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
              AutoPraxys bridges peer-reviewed human–AI interaction literature with empirical
              behavioral observation. We separate measurable interaction signals from unverified
              causal assertions.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. PEER-REVIEWED CITATIONS */}
      <section className="py-24 md:py-32 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Peer-Reviewed Literature</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Independent Academic Research on Human–AI Interaction
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                Our product thesis is anchored in rigorous published findings on cognitive
                offloading, overreliance, and the jagged technological frontier. Note: External
                published studies document broader human–AI behavioral challenges; they do not claim
                to validate or endorse the Praxys platform specifically.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 space-y-8">
            {publishedStudies.map((study, idx) => (
              <Reveal key={study.title} delay={idx * 80}>
                <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-[var(--shadow-soft)] transition-all hover:border-border">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/50 pb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {study.venue}
                    </span>
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>View primary publication</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-ink md:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground font-mono">{study.citation}</p>

                  <div className="mt-5 rounded-2xl border border-border/70 bg-accent/30 p-5">
                    <blockquote className="text-sm font-medium italic leading-relaxed text-foreground/90">
                      {study.excerpt}
                    </blockquote>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Relevance to Praxys:</strong>{" "}
                    {study.context}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. DISCOVERY COHORT FINDINGS */}
      <section className="py-24 md:py-32 border-b border-border/60 bg-card/30">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Qualitative Discovery</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Initial Field Discovery Cohorts
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                Before engineering software, we conducted semi-structured qualitative interviews to
                understand how AI tools change working behavior.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {discoveryCohorts.map((cohort, idx) => (
              <Reveal key={cohort.label} delay={idx * 70}>
                <GlassCard className="h-full flex flex-col justify-between">
                  <div>
                    <div className="font-display text-5xl font-semibold text-primary">
                      {cohort.number}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                      {cohort.label}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {cohort.detail}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-8">
            <div className="rounded-2xl border border-border/80 bg-card p-6 text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Methodological Limitations:</strong> These
              interviews represent qualitative exploratory discovery aimed at identifying problem
              areas. They do not constitute controlled double-blind trials or causal claims of
              cognitive skill degradation. AutoPraxys is currently partnering with academic
              institutions to establish formal experimental validation.
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. OBJECTIVE TAXONOMY MATRIX */}
      <section className="py-24 md:py-32 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Architectural Taxonomy</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                How Praxys Compares to Existing Tool Categories
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 text-base text-muted-foreground">
                Different software categories serve different purposes. Praxys does not replace AI
                assistants; it introduces the missing behavioral observation layer.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
            <table className="w-full min-w-[760px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-border/80 bg-accent/30 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-4 font-semibold">Category</th>
                  <th className="px-5 py-4 font-semibold">Interaction Telemetry</th>
                  <th className="px-5 py-4 font-semibold">Pre-Dispatch Assurance</th>
                  <th className="px-5 py-4 font-semibold">Friction Analysis</th>
                  <th className="px-5 py-4 font-semibold">Socratic Coaching</th>
                  <th className="px-5 py-4 font-semibold">Privacy Boundary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {taxonomyMatrix.map((row) => {
                  const isPraxys = row.category.includes("Praxys");
                  return (
                    <tr
                      key={row.category}
                      className={
                        isPraxys
                          ? "bg-primary/5 font-medium"
                          : "hover:bg-accent/20 transition-colors"
                      }
                    >
                      <td className="px-5 py-4 font-semibold text-ink whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{row.telemetry}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.assurance}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.collaboration}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.capability}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.privacy}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            * Analysis based on documented public product documentation and API specifications as of
            Q4 2026. Enterprise tiers for frontier providers offer robust SOC2 and
            zero-data-retention guarantees for server-side processing; Praxys operates client-side
            at the interaction interface.
          </p>
        </Container>
      </section>

      {/* 5. RESEARCH BRIEF PLACEHOLDER & CTA */}
      <section className="py-24 bg-card/40">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <div className="rounded-3xl border border-border/80 bg-card p-8 md:p-12 shadow-[var(--shadow-soft)]">
              <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-foreground uppercase tracking-wider">
                Research Working Paper
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink md:text-3xl">
                AutoPraxys Research Brief: Behavioral Observation Protocol
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our methodology working paper detailing client telemetry normalization, metric
                calculation indices, and early pilot observations is currently undergoing peer
                review with academic advisors.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <CTA to="/contact" size="md">
                  Request research working paper
                </CTA>
                <CTA to="/about" variant="ghost" size="md">
                  About the team
                </CTA>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
