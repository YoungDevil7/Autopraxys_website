import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  aspectRatio?: "16/9" | "4/3" | "21/9" | "auto";
  product:
    | "Praxys Assurance"
    | "Praxys Collaboration"
    | "Praxys Capability"
    | "Praxys Platform"
    | "Architecture";
  tag?: string;
  title: string;
  description: string;
  caption?: string;
  children?: ReactNode;
  className?: string;
}

export function MediaPlaceholder({
  aspectRatio = "16/9",
  product,
  tag = "Product preview coming soon",
  title,
  description,
  caption,
  children,
  className,
}: MediaPlaceholderProps) {
  const ratioClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "21/9": "aspect-[21/9]",
    auto: "min-h-[280px]",
  }[aspectRatio];

  const productBadgeColors = {
    "Praxys Assurance": "bg-red-500/10 text-red-700 border-red-500/20",
    "Praxys Collaboration": "bg-blue/10 text-primary border-blue/20",
    "Praxys Capability": "bg-teal/10 text-teal-foreground border-teal/20",
    "Praxys Platform": "bg-accent text-foreground border-border",
    Architecture: "bg-muted text-muted-foreground border-border",
  }[product];

  return (
    <figure className={cn("group w-full", className)}>
      <div
        className={cn(
          "relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-[var(--shadow-soft)] transition-all duration-300",
          ratioClasses,
        )}
        role="region"
        aria-label={`${product}: ${title} (${tag})`}
      >
        {/* Subtle dot pattern grid in background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.5 0.05 250 / 0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Top bar with product tag and status */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide",
                productBadgeColors,
              )}
            >
              {product}
            </span>
            <span className="text-xs font-medium text-muted-foreground">·</span>
            <span className="text-xs font-medium text-muted-foreground">{tag}</span>
          </div>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>
        </div>

        {/* Center content or slot */}
        <div className="relative z-10 my-auto py-6">
          {children ? (
            children
          ) : (
            <div className="max-w-md">
              <h4 className="font-display text-xl font-semibold text-ink md:text-2xl">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          )}
        </div>

        {/* Bottom subtle note */}
        <div className="relative z-10 flex items-center justify-between border-t border-border/50 pt-3 text-[11px] text-muted-foreground/80">
          <span>{title}</span>
          <span className="italic">Honest placeholder · Production capture pending</span>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
