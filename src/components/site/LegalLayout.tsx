import { type ReactNode } from "react";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink md:text-5xl text-balance">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-sm text-muted-foreground">Last updated {updated}</p>
          </Reveal>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="legal-prose space-y-8">{children}</div>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <Reveal>
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">{heading}</h2>
        <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}