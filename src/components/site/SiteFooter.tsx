import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

const groups = [
  {
    title: "Platform",
    links: [
      { to: "/praxys", label: "Praxys" },
      { to: "/technology", label: "Technology" },
      { to: "/research", label: "Research" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8">
        <div className="max-w-xs">
          <Link to="/" aria-label="AutoPraxys home">
            <Wordmark />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Building the intelligence layer for human-AI collaboration — measuring
            how humans grow with AI, not just what they produce.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {g.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} AutoPraxys Private Limited. All rights reserved.</p>
          <p>Praxys — The AI Capability Intelligence Platform.</p>
        </div>
      </div>
    </footer>
  );
}