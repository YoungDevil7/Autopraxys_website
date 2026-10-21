import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

const groups = [
  {
    title: "Products",
    links: [
      { to: "/praxys#assurance", label: "Praxys Assurance", external: false },
      { to: "/praxys#collaboration", label: "Praxys Collaboration", external: false },
      { to: "/praxys#capability", label: "Praxys Capability", external: false },
      { to: "/praxys", label: "Umbrella Platform", external: false },
    ],
  },
  {
    title: "Deep Dives",
    links: [
      { to: "/technology", label: "Technology Architecture", external: false },
      { to: "/research", label: "Research & Evidence", external: false },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About & Team", external: false },
      { to: "/business-value", label: "Business Value", external: false },
      { to: "/contact", label: "Join Waitlist", external: false },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { to: "/privacy", label: "Privacy Policy", external: false },
      { to: "/terms", label: "Terms of Use", external: false },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-card/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] md:px-8">
        <div className="max-w-sm">
          <Link to="/" aria-label="AutoPraxys home">
            <Wordmark />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Praxys is the human–AI behavioral intelligence platform. We turn permitted interaction
            evidence into clearer decisions about AI risk, workflow collaboration, and human
            capability.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">AutoPraxys Private Limited.</p>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {g.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  {l.to.includes("#") ? (
                    <a
                      href={l.to}
                      className="text-sm text-foreground/85 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/85 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} AutoPraxys Private Limited. All rights reserved.</p>
          <p>Praxys — Human–AI Behavioral Intelligence Platform.</p>
        </div>
      </div>
    </footer>
  );
}
