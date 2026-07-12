import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — AutoPraxys" },
      {
        name: "description",
        content:
          "How AutoPraxys approaches privacy: privacy-first telemetry, behavioral metadata, and explicit consent for Prompt Intelligence features.",
      },
      { property: "og:title", content: "Privacy — AutoPraxys" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Privacy" title="Privacy at AutoPraxys" updated="July 2026">
      <LegalSection heading="Privacy-first by default">
        <p>
          Praxys is designed around a privacy-first principle. Core capability
          analytics operate on behavioral metadata — signals such as timing,
          revision and edit patterns — rather than the content of what a person
          writes.
        </p>
      </LegalSection>
      <LegalSection heading="Behavioral metadata">
        <p>
          The platform interprets behavioral signals to understand capability
          development. This metadata is used to generate capability intelligence
          and coaching, not to surveil individuals.
        </p>
      </LegalSection>
      <LegalSection heading="Explicit consent for Prompt Intelligence">
        <p>
          Certain optional features — grouped as Prompt Intelligence — analyze
          richer interaction data. These features require explicit user consent
          before they are enabled.
        </p>
      </LegalSection>
      <LegalSection heading="How data is used">
        <p>
          Data processed by Praxys is used to provide capability intelligence,
          coaching and analytics to users and participating institutions or
          organizations, and to support research into human-AI capability.
        </p>
      </LegalSection>
      <LegalSection heading="Your choices">
        <p>
          Users and partner organizations can request information about the data
          associated with them and how it is processed. To make a request, please
          contact us.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about privacy can be sent to AutoPraxys Private Limited at
          souryav.info@gmail.com.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}