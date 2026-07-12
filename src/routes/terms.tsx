import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — AutoPraxys" },
      {
        name: "description",
        content:
          "The terms governing use of the AutoPraxys website and the Praxys platform.",
      },
      { property: "og:title", content: "Terms — AutoPraxys" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout eyebrow="Terms" title="Terms of Use" updated="July 2026">
      <LegalSection heading="Overview">
        <p>
          These terms govern your use of the AutoPraxys website and information
          about the Praxys platform, operated by AutoPraxys Private Limited. By
          using this site you agree to these terms.
        </p>
      </LegalSection>
      <LegalSection heading="Use of the website">
        <p>
          This website is provided for informational purposes. You agree to use it
          lawfully and not to misuse, disrupt, or attempt to gain unauthorized
          access to any part of it.
        </p>
      </LegalSection>
      <LegalSection heading="Intellectual property">
        <p>
          The Praxys name, the AutoPraxys brand, and the content and design of this
          website are the property of AutoPraxys Private Limited. They may not be
          reproduced without permission.
        </p>
      </LegalSection>
      <LegalSection heading="Product information">
        <p>
          Descriptions of the Praxys platform and its roadmap are provided for
          general information and may evolve as the platform develops. Nothing on
          this site constitutes a binding commitment or offer.
        </p>
      </LegalSection>
      <LegalSection heading="Limitation of liability">
        <p>
          The website is provided on an “as is” basis without warranties of any
          kind. AutoPraxys is not liable for any loss arising from use of the
          website to the extent permitted by law.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about these terms can be sent to AutoPraxys Private Limited at
          souryav.inmfo@gmail.com.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}