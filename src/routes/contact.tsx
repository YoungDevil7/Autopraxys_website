import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AutoPraxys" },
      {
        name: "description",
        content:
          "Request a Praxys demo or start a capability intelligence pilot with AutoPraxys Private Limited.",
      },
      { property: "og:title", content: "Contact — AutoPraxys" },
      {
        property: "og:description",
        content: "Request a demo or start a pilot with AutoPraxys.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CONTACT_INBOX = "souryav.info@gmail.com";

const field =
  "w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const organization = String(data.get("org") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const payload = {
      name,
      email,
      organization,
      interest,
      message,
      _subject: "New AutoPraxys contact request",
      _template: "table",
      _captcha: "false",
      _replyto: email,
    };

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
        throw new Error("Request failed");
      }

      setSent(true);
    } catch {
      // Fallback: open the user's mail app so the request still goes through
      const subject = encodeURIComponent("New AutoPraxys contact request");
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization}`,
          `Interest: ${interest}`,
          "",
          message,
        ].join("\n"),
      );
      window.location.href = `mailto:${CONTACT_INBOX}?subject=${subject}&body=${body}`;
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-ink md:text-6xl text-balance">
              Let's build the capability standard.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Request a Praxys demo, or explore a capability intelligence pilot for
              your institution or organization. We read every message.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_INBOX}`}
                  className="mt-1 block text-lg font-medium text-primary hover:underline"
                >
                  {CONTACT_INBOX}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Phone
                </p>
                <a
                  href="tel:+919441063377"
                  className="mt-1 block text-lg font-medium text-primary hover:underline"
                >
                  9441063377
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/company/autopraxys-private-limited/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg font-medium text-primary hover:underline"
                >
                  AutoPraxys on LinkedIn
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Company
                </p>
                <p className="mt-1 text-lg font-medium text-ink">
                  AutoPraxys Private Limited
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border/70 bg-card/80 p-8 shadow-[var(--shadow-soft)] backdrop-blur-sm">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-2xl text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-teal)" }}
                >
                  ✓
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
                  Thank you.
                </h2>
                <p className="mt-3 max-w-xs text-muted-foreground">
                  Your request has been noted. The AutoPraxys team will be in touch
                  shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                      Name
                    </label>
                    <input id="name" name="name" required className={field} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={field}
                      placeholder="you@organization.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="org" className="mb-2 block text-sm font-medium text-ink">
                    Organization
                  </label>
                  <input id="org" name="org" className={field} placeholder="University or company" />
                </div>
                <div>
                  <label htmlFor="interest" className="mb-2 block text-sm font-medium text-ink">
                    I'm interested in
                  </label>
                  <select id="interest" name="interest" className={cn(field, "appearance-none")}>
                    <option>Requesting a demo</option>
                    <option>A university pilot</option>
                    <option>An enterprise pilot</option>
                    <option>Research collaboration</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={cn(field, "resize-none")}
                    placeholder="Tell us a little about your context."
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] disabled:pointer-events-none disabled:opacity-70"
                  style={{ backgroundImage: "var(--gradient-blue)" }}
                >
                  {sending ? "Sending…" : "Send request"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
