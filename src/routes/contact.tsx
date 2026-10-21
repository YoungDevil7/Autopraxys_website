import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Join Waitlist — AutoPraxys" },
      {
        name: "description",
        content:
          "Join the waitlist for the Praxys human–AI behavioral intelligence platform. Inquire about enterprise and university pilot cohorts.",
      },
      { property: "og:title", content: "Join Waitlist — AutoPraxys" },
      {
        property: "og:description",
        content:
          "Join the waitlist for Praxys Assurance, Collaboration, and Capability pilot cohorts.",
      },
      { property: "og:url", content: "https://autopraxys.com/contact" },
      { property: "og:image", content: "https://autopraxys.com/autopraxys-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/contact" }],
  }),
  component: ContactWaitlistPage,
});

const CONTACT_INBOX = "sourya@autopraxys.com";

const inputStyles =
  "w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

function ContactWaitlistPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSubmission, setLastSubmission] = useState<{
    name: string;
    email: string;
    organization: string;
    interest: string;
    message: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const payload = {
      name,
      email,
      organization: organization || "Not specified",
      interest,
      message: message || "No additional note provided",
      _subject: `New AutoPraxys Waitlist Request: ${name} (${organization || "Independent"})`,
      _template: "table",
      _captcha: "false",
      _replyto: email,
    };

    setLastSubmission({ name, email, organization, interest, message });

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_INBOX}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Submission relay returned status ${res.status}`);
      }

      const json = await res.json();
      if (json.success === "false" || json.error) {
        throw new Error(json.message || "Relay service rejected payload");
      }

      setFormState("success");
    } catch (err: unknown) {
      console.warn("Automated form delivery failed:", err);
      // Truthful error state: Do not pretend submission succeeded
      setFormState("error");
      setErrorMessage(
        "Automated network delivery was blocked by your browser privacy settings or network firewall.",
      );
    }
  }

  const directMailtoUrl = lastSubmission
    ? `mailto:${CONTACT_INBOX}?subject=${encodeURIComponent(
        `AutoPraxys Waitlist Inquiry: ${lastSubmission.name}`,
      )}&body=${encodeURIComponent(
        [
          `Name: ${lastSubmission.name}`,
          `Work Email: ${lastSubmission.email}`,
          `Organization: ${lastSubmission.organization}`,
          `Interest: ${lastSubmission.interest}`,
          "",
          `Notes: ${lastSubmission.message}`,
        ].join("\n"),
      )}`
    : `mailto:${CONTACT_INBOX}?subject=${encodeURIComponent("AutoPraxys Waitlist Inquiry")}`;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Left Column: Context & Direct Contact */}
        <div>
          <Reveal>
            <Eyebrow>Join the Waitlist</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl text-balance">
              Partner with us on behavioral intelligence.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We are accepting pilot applications for enterprise teams, university cohorts, and
              research labs. Tell us about your environment and which product experience you are
              looking to evaluate.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-border/80 bg-card/60 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Direct Inquiries & Security Review
                </span>
                <a
                  href={`mailto:${CONTACT_INBOX}`}
                  className="mt-1 block text-base font-semibold text-primary hover:underline"
                >
                  {CONTACT_INBOX}
                </a>
                <p className="mt-1 text-xs text-muted-foreground">
                  Monitored directly by the founding team. Typical response time within 24 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card/60 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Company Identity
                </span>
                <p className="mt-1 text-sm font-semibold text-ink">AutoPraxys Private Limited</p>
                <a
                  href="https://www.linkedin.com/company/autopraxys-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  <span>AutoPraxys on LinkedIn</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Waitlist Application Form */}
        <Reveal delay={100}>
          <div className="rounded-3xl border border-border/80 bg-card p-7 md:p-9 shadow-[var(--shadow-soft)]">
            {formState === "success" ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-2xl text-primary-foreground font-bold shadow-xs"
                  style={{ backgroundImage: "var(--gradient-teal)" }}
                  aria-hidden="true"
                >
                  ✓
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                  Application Received
                </h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for your interest in AutoPraxys. Our team will review your
                  organization's context and reach out with pilot timeline details.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setFormState("idle");
                      setLastSubmission(null);
                    }}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : formState === "error" ? (
              <div className="space-y-5">
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">Delivery Notice</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {errorMessage}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    We do not silently drop failed submissions. You can send your prefilled details
                    directly using your default email client:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={directMailtoUrl}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                      style={{ backgroundImage: "var(--gradient-blue)" }}
                    >
                      Send via Email Application
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormState("idle")}
                      className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-accent"
                    >
                      Back to Form
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className={inputStyles}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Work / Academic Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputStyles}
                      placeholder="jane@organization.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Organization / University{" "}
                    <span className="text-xs font-normal lowercase text-muted-foreground/80">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    className={inputStyles}
                    placeholder="Company or university department"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Product Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className={cn(inputStyles, "bg-card cursor-pointer")}
                  >
                    <option value="Praxys Platform (All Three)">
                      Praxys Platform (All Three Products)
                    </option>
                    <option value="Praxys Assurance (AI Risk & Governance)">
                      Praxys Assurance (AI Risk & Policy Protection)
                    </option>
                    <option value="Praxys Collaboration (Workflow Friction)">
                      Praxys Collaboration (Interaction Friction & Cadence)
                    </option>
                    <option value="Praxys Capability (Learning & Autonomy)">
                      Praxys Capability (Learning & Cognitive Sustainability)
                    </option>
                    <option value="Academic Research Study">
                      Academic / Research Cohort Study
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Context / Note{" "}
                    <span className="text-xs font-normal lowercase text-muted-foreground/80">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={cn(inputStyles, "resize-none")}
                    placeholder="Estimated cohort size, target tools (ChatGPT, Claude, IDE), or primary objectives."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full rounded-full py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] disabled:opacity-60 disabled:pointer-events-none"
                    style={{ backgroundImage: "var(--gradient-blue)" }}
                  >
                    {formState === "submitting" ? "Submitting application…" : "Join waitlist"}
                  </button>
                </div>

                <p className="text-[11px] text-center text-muted-foreground">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-foreground">
                    Privacy Policy
                  </a>
                  . We do not share lead details with third-party data brokers.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
