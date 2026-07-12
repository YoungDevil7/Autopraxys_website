import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
      {children}
    </span>
  );
}

type CTAProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CTA({ children, to, href, variant = "primary", className }: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles =
    variant === "primary"
      ? "text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
      : "border border-border bg-card/60 text-foreground hover:border-primary/40 hover:-translate-y-0.5";
  const style =
    variant === "primary" ? { backgroundImage: "var(--gradient-blue)" } : undefined;

  // Prefer a real <a href> for contact so navigation works even if client routing fails
  if (href || to === "/contact") {
    return (
      <a href={href ?? to} className={cn(base, styles, className)} style={style}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={cn(base, styles, className)} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cn(base, styles, className)} style={style}>
      {children}
    </a>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/70 bg-card/70 p-8 shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </div>
  );
}