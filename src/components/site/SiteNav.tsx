import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { CTA } from "./primitives";
import { cn } from "@/lib/utils";

const links = [
  { to: "/technology", label: "Technology" },
  { to: "/praxys", label: "Praxys" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link to="/" aria-label="AutoPraxys home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <CTA to="/contact" className="px-5 py-2.5">
            Request a demo
          </CTA>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn("block h-0.5 w-5 bg-foreground transition-opacity", open && "opacity-0")}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <CTA to="/contact" className="mt-2 w-full">
              Request a demo
            </CTA>
          </div>
        </div>
      )}
    </header>
  );
}