import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AutoPraxys" },
      {
        name: "description",
        content:
          "How AutoPraxys protects user privacy across Praxys Assurance, Collaboration, and Capability: privacy-first telemetry, behavioral metadata, and explicit consent boundaries.",
      },
      { property: "og:title", content: "Privacy Policy — AutoPraxys" },
      { property: "og:url", content: "https://autopraxys.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Privacy" title="Privacy at AutoPraxys" updated="October 2026">
      <LegalSection heading="Privacy-first by design">
        <p>
          Praxys is built on an architectural commitment to privacy-first telemetry. Across our
          three product experiences — Praxys Assurance, Praxys Collaboration, and Praxys Capability
          — core evaluations operate on behavioral metadata rather than the private contents of what
          people write.
        </p>
      </LegalSection>
      <LegalSection heading="Behavioral metadata & signal capture">
        <p>
          The platform captures permitted interaction events: session duration, turn frequency,
          revision timings, and interaction friction signals. This metadata is used to diagnose
          workflow friction, model capability progression, and evaluate governance policies without
          surveillance.
        </p>
      </LegalSection>
      <LegalSection heading="Explicit consent for content-level analysis">
        <p>
          Specific governance and reflection capabilities — such as sensitive data detection under
          Praxys Assurance or deep reflection coaching in Praxys Capability — require explicit
          organizational policy enablement and user consent. Raw prompt text is never ingested
          silently or without verified authorization.
        </p>
      </LegalSection>
      <LegalSection heading="How data is used & protected">
        <p>
          Interaction data is processed solely to provide behavioral intelligence, risk alerts,
          workflow diagnostics, and developmental feedback to authorized users and their
          organizations. AutoPraxys does not sell customer telemetry, nor do we use proprietary
          customer data to train public foundation models.
        </p>
      </LegalSection>
      <LegalSection heading="Data subject rights & choices">
        <p>
          Participating users and enterprise administrators retain full rights to request summaries,
          exports, or deletions of telemetry records associated with their accounts. To exercise
          these rights or request an audit log, please reach out to our security team.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions, data requests, or security inquiries can be sent directly to AutoPraxys Private
          Limited at{" "}
          <a
            href="mailto:sourya@autopraxys.com"
            className="text-[var(--ink)] font-medium underline underline-offset-4 hover:text-[var(--accent)]"
          >
            sourya@autopraxys.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
