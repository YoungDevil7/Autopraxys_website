import { createFileRoute } from "@tanstack/react-router";
import { Container, CTA, Eyebrow, StatusBadge } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

export const Route = createFileRoute("/praxys")({
  head: () => ({
    meta: [
      { title: "Praxys Platform — Assurance, Collaboration & Capability" },
      {
        name: "description",
        content:
          "The unified human–AI behavioral intelligence platform powering three specialized product experiences: Praxys Assurance, Praxys Collaboration, and Praxys Capability.",
      },
      { property: "og:title", content: "Praxys Platform — Assurance, Collaboration & Capability" },
      {
        property: "og:description",
        content:
          "One foundation powering three specialized product experiences: Assurance (AI risk), Collaboration (friction & workflow), and Capability (learning & autonomy).",
      },
      { property: "og:url", content: "https://autopraxys.com/praxys" },
      { property: "og:image", content: "https://autopraxys.com/autopraxys-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/praxys" }],
  }),
  component: PraxysPlatformPage,
});

function PraxysPlatformPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-4xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">The Umbrella Platform</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
              One foundation. Three specialized intelligence experiences.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
              Praxys observes permitted human–AI interactions, normalizes the evidence, and
              generates targeted findings across enterprise risk, workflow collaboration, and human
              capability.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTA to="/contact" size="lg">
                Join waitlist
              </CTA>
              <CTA to="/technology" variant="ghost" size="lg">
                Review architecture
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. PRODUCT 1: PRAXYS ASSURANCE */}
      <section id="assurance" className="scroll-mt-20 py-24 md:py-32 border-b border-border/60">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <Eyebrow>01 · Sensitive Information Protection</Eyebrow>
                  <StatusBadge status="partial" />
                </div>
              </Reveal>

              <Reveal delay={60}>
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                  Praxys Assurance
                </h2>
                <p className="mt-2 text-lg text-red-600 dark:text-red-400 font-medium">
                  Catch sensitive information before sending it to an AI model.
                </p>
              </Reveal>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Who it is for:</strong> Anyone working with AI
                  tools who handles sensitive customer data, API keys, or confidential project
                  notes, as well as security and compliance leaders needing auditable governance.
                </p>
                <p>
                  <strong className="text-foreground">The Problem:</strong> It is easy to
                  accidentally paste a live API key, database URI, or confidential client record
                  into a public LLM chat interface. Once sent, sensitive information has left your
                  perimeter.
                </p>
                <p>
                  <strong className="text-foreground">What the user experiences:</strong> Prompts
                  are evaluated client-side in the browser before network transmission. If a
                  credential or sensitive pattern is detected, a point-of-action warning appears
                  with two immediate choices:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>
                    <strong className="text-foreground">Cancel & Edit Prompt:</strong> Stops
                    dispatch immediately and leaves the draft prompt in your editor so you can
                    redact the secret safely.
                  </li>
                  <li>
                    <strong className="text-foreground">Send Anyway:</strong> Allows authorized
                    submission (e.g. for mock test keys) while recording an explicit policy
                    acknowledgment trail.
                  </li>
                </ul>
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-xs">
                  <strong className="text-red-700 dark:text-red-400">
                    Transparent Coverage & Scope Boundary:
                  </strong>{" "}
                  Assurance evaluates permitted browser extension sessions using high-entropy regex
                  and pattern signatures. It catches common credentials before dispatch, but is not
                  a 100% guarantee against all sensitive disclosures or an enterprise SIEM
                  replacement. A scanner finding is not proof of an exploit.
                </div>
              </div>

              <Reveal delay={140}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CTA to="/contact" variant="secondary">
                    Join waitlist for Assurance
                  </CTA>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <MediaPlaceholder
                aspectRatio="4/3"
                product="Praxys Assurance"
                tag="Illustrative workflow preview"
                title="Point-of-Action Pre-Dispatch Warning"
                description="Visualizes client-side interception of an embedded secret with instant Cancel & Edit or Send Anyway decisions before network transmission."
                caption="Illustrative representation of the Assurance warning dialog. Production screencasts will be attached upon pilot cohort release."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. PRODUCT 2: PRAXYS COLLABORATION */}
      <section
        id="collaboration"
        className="scroll-mt-20 py-24 md:py-32 border-b border-border/60 bg-card/30"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <Reveal delay={120} className="order-2 lg:order-1">
              <MediaPlaceholder
                aspectRatio="4/3"
                product="Praxys Collaboration"
                tag="Illustrative dashboard preview"
                title="Friction Indicator & Actionable Prompt Suggestion"
                description="Displays detected prompt thrashing patterns: cycle count, revision latency, and a concrete suggestion to structure your prompt better."
                caption="Illustrative visualization of Collaboration friction telemetry and recommendations. Real dashboard data is currently in pilot evaluation."
              />
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="flex items-center gap-3">
                  <Eyebrow>02 · Workflow Efficiency</Eyebrow>
                  <StatusBadge status="partial" />
                </div>
              </Reveal>

              <Reveal delay={60}>
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                  Praxys Collaboration
                </h2>
                <p className="mt-2 text-lg text-primary font-medium">
                  Spot recurring friction and find one concrete thing to improve.
                </p>
              </Reveal>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Who it is for:</strong> Developers, knowledge
                  workers, and teams who use AI daily and want to get unstuck faster from repetitive
                  prompt tweaking and format fixes.
                </p>
                <p>
                  <strong className="text-foreground">The Problem:</strong> When an AI model returns
                  the wrong output, users frequently fall into "prompt thrashing"—submitting 5 to 10
                  minor reformulations in rapid succession, turning a 2-minute task into 20 minutes
                  of trial-and-error.
                </p>
                <p>
                  <strong className="text-foreground">What the user experiences:</strong> Praxys
                  Collaboration observes interaction cadence and revision physics to detect stalled
                  cycles in real-time. Instead of raw charts, it provides:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>
                    <strong className="text-foreground">Friction Diagnostic:</strong> Identifies the
                    root cause (e.g., format thrashing, vague constraints, missing schema).
                  </li>
                  <li>
                    <strong className="text-foreground">One Actionable Suggestion:</strong> A
                    concrete prompt improvement you can copy directly (e.g., adding an explicit JSON
                    schema block to eliminate syntax retries).
                  </li>
                </ul>
                <div className="rounded-xl border border-blue/20 bg-blue/5 p-4 text-xs">
                  <strong className="text-primary">Transparent Availability Boundary:</strong>{" "}
                  Collaboration surfaces descriptive cadence metrics and prompt optimization tips.
                  It does not promise automatic productivity boosts, ingest external billing
                  invoices, or calculate speculative dollar ROI without verified baseline outcome
                  data.
                </div>
              </div>

              <Reveal delay={140}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CTA to="/contact" variant="secondary">
                    Join waitlist for Collaboration
                  </CTA>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PRODUCT 3: PRAXYS CAPABILITY */}
      <section id="capability" className="scroll-mt-20 py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <Eyebrow>03 · Task Synthesis & Reusable Workflows</Eyebrow>
                  <StatusBadge status="prototype" />
                </div>
              </Reveal>

              <Reveal delay={60}>
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                  Praxys Capability
                </h2>
                <p className="mt-2 text-lg text-teal-foreground font-medium">
                  Turn repeated AI tasks into reusable workflows and templates.
                </p>
              </Reveal>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Who it is for:</strong> Individuals and teams
                  who repeatedly perform complex, multi-step tasks with AI (such as release note
                  generation, code reviews, meeting summaries, or data synthesis) and want to build
                  lasting leverage.
                </p>
                <p>
                  <strong className="text-foreground">The Problem:</strong> Most people treat every
                  AI interaction as an isolated chat, constantly retyping the same instructions,
                  formatting rules, and quality constraints from scratch.
                </p>
                <p>
                  <strong className="text-foreground">What the user experiences:</strong> Praxys
                  Capability recognizes repeated task patterns across sessions. It surfaces an
                  editable template preview that extracts variables:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>
                    <strong className="text-foreground">Pattern Recognition:</strong> Notifies you
                    when a routine task has been prompted multiple times this week.
                  </li>
                  <li>
                    <strong className="text-foreground">Reusable Template Synthesis:</strong>{" "}
                    Generates a structured prompt template with placeholders (e.g.
                    &#123;&#123;commit_log&#125;&#125;) that you can review, edit, and save to your
                    workspace.
                  </li>
                </ul>
                <div className="rounded-xl border border-teal/30 bg-teal/5 p-4 text-xs">
                  <strong className="text-teal-foreground">
                    Prototype Status & Scientific Honesty:
                  </strong>{" "}
                  Capability template synthesis is an active prototype in pilot evaluation. It does
                  not claim causal cognitive improvement, permanent knowledge retention, or
                  autonomous agent execution without human review.
                </div>
              </div>

              <Reveal delay={140}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CTA to="/contact" variant="secondary">
                    Join waitlist for Capability
                  </CTA>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <MediaPlaceholder
                aspectRatio="4/3"
                product="Praxys Capability"
                tag="Illustrative prototype preview"
                title="Reusable Workflow Template Generator"
                description="Shows how repeated prompting patterns are recognized and synthesized into editable, parameterized prompt templates with review-and-save controls."
                caption="Illustrative representation of the Capability template generator. Real workflow synthesis is currently in active prototype testing."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. ROADMAP & HONEST STATUS MATRIX */}
      <section className="border-t border-border/60 bg-card/40 py-24">
        <Container className="max-w-4xl">
          <div className="text-center">
            <Reveal>
              <Eyebrow className="justify-center">Product Transparency</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Implementation Status Across Products
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
                We clearly separate what is currently active in pilot deployments from what is on
                the engineering roadmap.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-accent/30 text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-4">Capability / Engine</th>
                  <th className="px-5 py-4">Product Experience</th>
                  <th className="px-5 py-4">Verification Status</th>
                  <th className="px-5 py-4">Current Deployment Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">Client Interaction Telemetry</td>
                  <td className="px-5 py-4 text-muted-foreground">Shared Platform</td>
                  <td className="px-5 py-4">
                    <StatusBadge status="implemented" />
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    Manifest V3 Extension (ChatGPT, Claude)
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">
                    Interaction Cadence & Friction Loops
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">Praxys Collaboration</td>
                  <td className="px-5 py-4">
                    <StatusBadge status="implemented" />
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    Internal & Pilot Cohort Telemetry
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">
                    Sensitive Credential Pre-Dispatch Scan
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">Praxys Assurance</td>
                  <td className="px-5 py-4">
                    <StatusBadge status="partial" />
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    Regex & Entropy Prototype
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">
                    Socratic Reflection Intervention
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">Praxys Capability</td>
                  <td className="px-5 py-4">
                    <StatusBadge status="partial" />
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    Prompt Template Pilot Testing
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-ink">
                    Automated Incident Workflow & SIEM Sync
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">Praxys Assurance</td>
                  <td className="px-5 py-4">
                    <StatusBadge status="planned" />
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    Q2 2027 Enterprise Roadmap
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-14 text-center">
            <CTA to="/contact" size="lg">
              Join waitlist
            </CTA>
          </div>
        </Container>
      </section>
    </>
  );
}
