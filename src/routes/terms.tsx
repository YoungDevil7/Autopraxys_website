import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — AutoPraxys" },
      {
        name: "description",
        content:
          "The terms governing use of the AutoPraxys website and the Praxys behavioral intelligence platform.",
      },
      { property: "og:title", content: "Terms of Use — AutoPraxys" },
      { property: "og:url", content: "https://autopraxys.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://autopraxys.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout eyebrow="Terms" title="Terms of Use" updated="October 2026">
      <LegalSection heading="Overview">
        <p>
          These terms govern your use of the AutoPraxys website and information about the Praxys
          human–AI behavioral intelligence platform (encompassing Praxys Assurance, Praxys
          Collaboration, and Praxys Capability), operated by AutoPraxys Private Limited. By
          accessing this site, you agree to these terms.
        </p>
      </LegalSection>
      <LegalSection heading="Use of the website">
        <p>
          This website is provided for informational and preview purposes. You agree to use it
          lawfully and not to misuse, disrupt, probe, or attempt to gain unauthorized access to any
          infrastructure or telemetry services.
        </p>
      </LegalSection>
      <LegalSection heading="Intellectual property">
        <p>
          The Praxys name, the AutoPraxys brand, technical architecture diagrams, telemetry designs,
          and all editorial content on this website are the intellectual property of AutoPraxys
          Private Limited. They may not be reproduced, republished, or redistributed without prior
          written consent.
        </p>
      </LegalSection>
      <LegalSection heading="Platform information & roadmap boundaries">
        <p>
          Descriptions of the Praxys platform, intelligence models, and product roadmaps reflect
          current engineering status and developmental directions. Software availability statuses
          (Implemented, Partial, Prototype, and Planned) are honest engineering representations and
          do not constitute a binding commercial guarantee or warranty.
        </p>
      </LegalSection>
      <LegalSection heading="Limitation of liability">
        <p>
          This website and its preview documentation are provided on an “as is” basis without
          warranties of any kind. AutoPraxys Private Limited is not liable for any direct, indirect,
          or consequential loss arising from reliance on website content to the maximum extent
          permitted by applicable law.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions regarding these terms may be directed to AutoPraxys Private Limited at{" "}
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
