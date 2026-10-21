import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
      {children}
    </span>
  );
}

type StatusType = "implemented" | "partial" | "prototype" | "planned";

export function StatusBadge({ status, className }: { status: StatusType; className?: string }) {
  const configs: Record<StatusType, { label: string; bg: string; text: string; dot: string }> = {
    implemented: {
      label: "Implemented",
      bg: "bg-teal/10 border-teal/30",
      text: "text-teal-foreground",
      dot: "bg-teal",
    },
    partial: {
      label: "Partial (In Pilot)",
      bg: "bg-blue/10 border-blue/30",
      text: "text-primary",
      dot: "bg-primary",
    },
    prototype: {
      label: "Prototype",
      bg: "bg-amber-500/10 border-amber-500/30",
      text: "text-amber-800 dark:text-amber-300",
      dot: "bg-amber-500",
    },
    planned: {
      label: "Planned Roadmap",
      bg: "bg-muted border-border",
      text: "text-muted-foreground",
      dot: "bg-muted-foreground",
    },
  };

  const config = configs[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.08em]",
        config.bg,
        config.text,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} aria-hidden="true" />
      {config.label}
    </span>
  );
}

type CTAProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function CTA({ children, to, href, variant = "primary", size = "md", className }: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  }[size];

  const variantStyles = {
    primary:
      "text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5",
    secondary:
      "border border-border bg-card text-foreground shadow-sm hover:border-primary/40 hover:bg-accent/40 hover:-translate-y-0.5",
    ghost:
      "border border-border/80 bg-card/60 text-foreground hover:border-primary/50 hover:bg-card hover:-translate-y-0.5",
  }[variant];

  const style = variant === "primary" ? { backgroundImage: "var(--gradient-blue)" } : undefined;

  if (to) {
    return (
      <Link to={to} className={cn(base, sizeStyles, variantStyles, className)} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cn(base, sizeStyles, variantStyles, className)} style={style}>
      {children}
    </a>
  );
}

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/70 bg-card/85 p-8 shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
