import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { CTA } from "./primitives";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/praxys", label: "Platform" },
  { to: "/technology", label: "Technology" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
  { to: "/business-value", label: "Business Value" },
];

const productSubLinks = [
  {
    to: "/praxys#assurance",
    title: "Praxys Assurance",
    desc: "AI risk, sensitive information & evidence-backed governance",
  },
  {
    to: "/praxys#collaboration",
    title: "Praxys Collaboration",
    desc: "Interaction friction, workflow patterns & efficiency analysis",
  },
  {
    to: "/praxys#capability",
    title: "Praxys Capability",
    desc: "Human learning, autonomy & cognitive sustainability",
  },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Scroll background toggle
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  // Escape key listener for accessible dismissal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-xl shadow-xs"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8"
        aria-label="Main Navigation"
      >
        {/* Brand Wordmark */}
        <Link
          to="/"
          aria-label="AutoPraxys Home"
          onClick={() => {
            setMobileOpen(false);
            setProductsOpen(false);
          }}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
          <Wordmark />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 md:flex">
          {/* Platform / Products menu with popover */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              onMouseEnter={() => setProductsOpen(true)}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-1",
                productsOpen || location.pathname === "/praxys"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground",
              )}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              <span>Platform</span>
              <svg
                viewBox="0 0 12 12"
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  productsOpen && "rotate-180",
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2.5 4.5 L6 8 L9.5 4.5" />
              </svg>
            </button>

            {productsOpen && (
              <div
                onMouseLeave={() => setProductsOpen(false)}
                className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-2xl border border-border/80 bg-card p-3 shadow-[var(--shadow-lift)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
                role="menu"
                aria-label="Praxys Products"
              >
                <div className="border-b border-border/50 px-3 pb-2 pt-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Three Product Experiences
                  </span>
                </div>
                <div className="mt-1 space-y-1">
                  {productSubLinks.map((sub) => (
                    <a
                      key={sub.to}
                      href={sub.to}
                      onClick={() => setProductsOpen(false)}
                      className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-accent/60 group"
                      role="menuitem"
                    >
                      <div className="text-xs font-semibold text-ink group-hover:text-primary transition-colors">
                        {sub.title}
                      </div>
                      <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                        {sub.desc}
                      </div>
                    </a>
                  ))}
                  <div className="border-t border-border/50 pt-2 px-3 pb-1">
                    <Link
                      to="/praxys"
                      onClick={() => setProductsOpen(false)}
                      className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore umbrella platform</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/technology"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-1"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Technology
          </Link>

          <Link
            to="/research"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-1"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Research
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-1"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            About
          </Link>

          <Link
            to="/business-value"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-1"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Business Value
          </Link>
        </div>

        {/* Primary Header CTA */}
        <div className="hidden md:block">
          <CTA to="/contact" size="sm" className="px-5 py-2">
            Join waitlist
          </CTA>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <div className="space-y-1.5" aria-hidden="true">
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-transform duration-200",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-opacity duration-200",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-transform duration-200",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation-menu"
          className="border-t border-border/80 bg-background/98 backdrop-blur-2xl md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-1 px-6 py-5">
            <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Products
            </div>
            <a
              href="/praxys#assurance"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              Praxys Assurance
            </a>
            <a
              href="/praxys#collaboration"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              Praxys Collaboration
            </a>
            <a
              href="/praxys#capability"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              Praxys Capability
            </a>

            <div className="my-2 border-t border-border/60" />

            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-4 pt-2">
              <CTA to="/contact" className="w-full">
                Join waitlist
              </CTA>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
