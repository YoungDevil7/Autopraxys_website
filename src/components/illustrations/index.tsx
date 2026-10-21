import { cn } from "@/lib/utils";

const grad = (
  <defs>
    <linearGradient id="ip-blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="oklch(0.58 0.14 253)" />
      <stop offset="1" stopColor="oklch(0.68 0.11 215)" />
    </linearGradient>
    <linearGradient id="ip-teal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="oklch(0.68 0.1 195)" />
      <stop offset="1" stopColor="oklch(0.76 0.09 175)" />
    </linearGradient>
    <linearGradient id="ip-amber" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="oklch(0.7 0.14 65)" />
      <stop offset="1" stopColor="oklch(0.8 0.12 75)" />
    </linearGradient>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0 0 L6 3 L0 6 Z" fill="oklch(0.65 0.09 230)" />
    </marker>
  </defs>
);

/*
 * Shared Intelligence Pipeline Diagram:
 * Permitted signals -> Normalized evidence -> Specialized analysis -> Findings & decisions
 */
export function SharedProcessFlow({ className }: { className?: string }) {
  const steps = [
    {
      title: "Permitted Signals",
      desc: "Client-side extension & consented app interactions",
      tag: "Capture",
      color: "url(#ip-teal)",
    },
    {
      title: "Normalized Evidence",
      desc: "Provenance hashing & schema normalization",
      tag: "Process",
      color: "url(#ip-blue)",
    },
    {
      title: "Specialized Analysis",
      desc: "Assurance, Collaboration & Capability engines",
      tag: "Analyze",
      color: "url(#ip-blue)",
    },
    {
      title: "Findings & Decisions",
      desc: "Policy warnings, workflow nudges & governance",
      tag: "Act",
      color: "url(#ip-teal)",
    },
  ];

  return (
    <div className={cn("w-full", className)}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:border-border hover:shadow-[var(--shadow-lift)]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span className="uppercase tracking-[0.14em] text-teal">Step 0{idx + 1}</span>
                <span className="rounded-md border border-border/80 bg-accent/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {step.tag}
                </span>
              </div>
              <h4 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
            <div className="mt-4 flex items-center gap-2 pt-3 border-t border-border/50 text-[11px] text-muted-foreground font-medium">
              <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
              <span>
                {idx === 0 && "Zero unpermitted access"}
                {idx === 1 && "Zero raw prompt exposure"}
                {idx === 2 && "Three purpose-built engines"}
                {idx === 3 && "Evidence-backed outcomes"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
 * Technology Architecture System Diagram
 */
export function ArchitecturePipeline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 360"
      fill="none"
      className={cn("w-full max-w-4xl mx-auto", className)}
      role="img"
      aria-label="Praxys Architecture: From permitted client telemetry to normalization, three specialized engines, and tenant decisions."
    >
      <title>Praxys System Architecture</title>
      <desc>
        Layer 1 captures permitted telemetry. Layer 2 performs provenance hashing. Layer 3 routes
        evidence to Assurance, Collaboration, and Capability engines. Layer 4 generates findings and
        decisions.
      </desc>
      {grad}

      {/* Background container */}
      <rect
        x="10"
        y="10"
        width="880"
        height="340"
        rx="20"
        fill="oklch(0.995 0.004 85)"
        stroke="oklch(0.89 0.012 240)"
      />

      {/* Section 1: Ingestion */}
      <g>
        <rect
          x="40"
          y="50"
          width="220"
          height="260"
          rx="14"
          fill="oklch(0.98 0.006 85)"
          stroke="oklch(0.88 0.012 240)"
        />
        <text
          x="60"
          y="80"
          fill="oklch(0.48 0.025 255)"
          fontSize="11"
          fontFamily="Inter"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          01 · INGESTION LAYER
        </text>
        <rect
          x="60"
          y="105"
          width="180"
          height="50"
          rx="8"
          fill="white"
          stroke="oklch(0.89 0.012 240)"
        />
        <text
          x="75"
          y="128"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Browser Extension
        </text>
        <text x="75" y="143" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Manifest V3 · Client-side
        </text>

        <rect
          x="60"
          y="168"
          width="180"
          height="50"
          rx="8"
          fill="white"
          stroke="oklch(0.89 0.012 240)"
        />
        <text
          x="75"
          y="191"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Permitted AI Contexts
        </text>
        <text x="75" y="206" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          ChatGPT, Claude & IDEs
        </text>

        <rect
          x="60"
          y="230"
          width="180"
          height="50"
          rx="8"
          fill="white"
          stroke="oklch(0.89 0.012 240)"
        />
        <text
          x="75"
          y="253"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Consent Gate
        </text>
        <text x="75" y="268" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Metadata-first default
        </text>
      </g>

      {/* Arrow 1 */}
      <path
        d="M 270 180 L 320 180"
        stroke="oklch(0.68 0.1 220)"
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />

      {/* Section 2: Normalization & Core Engine */}
      <g>
        <rect
          x="330"
          y="50"
          width="240"
          height="260"
          rx="14"
          fill="oklch(0.98 0.006 85)"
          stroke="oklch(0.88 0.012 240)"
        />
        <text
          x="350"
          y="80"
          fill="oklch(0.48 0.025 255)"
          fontSize="11"
          fontFamily="Inter"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          02 · THREE ENGINES
        </text>

        {/* Engine A */}
        <rect
          x="350"
          y="105"
          width="200"
          height="52"
          rx="8"
          fill="white"
          stroke="oklch(0.85 0.03 20)"
          strokeWidth="1.5"
        />
        <text
          x="365"
          y="128"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Praxys Assurance
        </text>
        <text x="365" y="144" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Risk & policy evaluation
        </text>

        {/* Engine B */}
        <rect
          x="350"
          y="168"
          width="200"
          height="52"
          rx="8"
          fill="white"
          stroke="oklch(0.56 0.14 253)"
          strokeWidth="1.5"
        />
        <text
          x="365"
          y="191"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Praxys Collaboration
        </text>
        <text x="365" y="207" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Friction & iteration loops
        </text>

        {/* Engine C */}
        <rect
          x="350"
          y="230"
          width="200"
          height="52"
          rx="8"
          fill="white"
          stroke="oklch(0.68 0.1 195)"
          strokeWidth="1.5"
        />
        <text
          x="365"
          y="253"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Praxys Capability
        </text>
        <text x="365" y="269" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Autonomy & growth indices
        </text>
      </g>

      {/* Arrow 2 */}
      <path
        d="M 580 180 L 630 180"
        stroke="oklch(0.68 0.1 220)"
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />

      {/* Section 3: Decisions & Interfaces */}
      <g>
        <rect
          x="640"
          y="50"
          width="220"
          height="260"
          rx="14"
          fill="oklch(0.98 0.006 85)"
          stroke="oklch(0.88 0.012 240)"
        />
        <text
          x="660"
          y="80"
          fill="oklch(0.48 0.025 255)"
          fontSize="11"
          fontFamily="Inter"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          03 · DECISIONS & ACTION
        </text>

        <rect
          x="660"
          y="105"
          width="180"
          height="50"
          rx="8"
          fill="white"
          stroke="oklch(0.89 0.012 240)"
        />
        <text
          x="675"
          y="128"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Assurance Warnings
        </text>
        <text x="675" y="143" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Quarantine & safe dispatch
        </text>

        <rect
          x="660"
          y="168"
          width="180"
          height="50"
          rx="8"
          fill="white"
          stroke="oklch(0.89 0.012 240)"
        />
        <text
          x="675"
          y="191"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Workflow Insights
        </text>
        <text x="675" y="206" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Friction & iteration maps
        </text>

        <rect
          x="660"
          y="230"
          width="180"
          height="50"
          rx="8"
          fill="white"
          stroke="oklch(0.89 0.012 240)"
        />
        <text
          x="675"
          y="253"
          fill="oklch(0.2 0.035 258)"
          fontSize="13"
          fontFamily="Inter"
          fontWeight="600"
        >
          Socratic Coaching
        </text>
        <text x="675" y="268" fill="oklch(0.48 0.025 255)" fontSize="11" fontFamily="Inter">
          Reflection & autonomy nudges
        </text>
      </g>
    </svg>
  );
}

/* Backwards-compatible vector components */
export function HeroWeave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      className={className}
      role="img"
      aria-label="Intertwining trajectories of human capability and AI collaboration"
    >
      <title>Human–AI Capability Trajectory</title>
      {grad}
      <g opacity="0.4">
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={i}
            x1="40"
            x2="480"
            y1={70 + i * 55}
            y2={70 + i * 55}
            stroke="oklch(0.89 0.012 240)"
            strokeWidth="1"
          />
        ))}
      </g>
      <path
        d="M50 350 C 160 340, 190 220, 300 200 C 400 182, 430 150, 480 110"
        stroke="url(#ip-teal)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 360 C 150 356, 210 300, 300 250 C 390 200, 430 120, 480 60"
        stroke="url(#ip-blue)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="480" cy="60" r="5" fill="oklch(0.56 0.14 253)" />
      <circle cx="480" cy="110" r="4" fill="oklch(0.68 0.1 195)" />
    </svg>
  );
}

export function FlowDiagram({ className }: { className?: string }) {
  return <SharedProcessFlow className={className} />;
}

export function CapabilityCore({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 text-center rounded-2xl border border-border/80 bg-card", className)}>
      <div className="font-display text-lg font-semibold text-ink">Praxys Intelligence Core</div>
      <p className="mt-2 text-xs text-muted-foreground">
        Unified foundation connecting Assurance, Collaboration, and Capability.
      </p>
    </div>
  );
}

export function GrowthCurve({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      fill="none"
      role="img"
      aria-label="Conceptual comparison between raw output growth and verified capability growth"
    >
      <title>Output versus Capability Trajectory</title>
      {grad}
      <line x1="40" y1="20" x2="40" y2="200" stroke="oklch(0.89 0.012 240)" />
      <line x1="40" y1="200" x2="380" y2="200" stroke="oklch(0.89 0.012 240)" />
      <path
        d="M40 190 C 90 180, 140 150, 200 150 C 260 150, 320 110, 380 90"
        stroke="url(#ip-teal)"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d="M40 195 C 100 190, 150 140, 210 110 C 280 76, 330 55, 380 35"
        stroke="url(#ip-blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="380" cy="35" r="5" fill="oklch(0.56 0.14 253)" />
    </svg>
  );
}

export function SignalWave({ className }: { className?: string }) {
  const bars = Array.from({ length: 24 });
  return (
    <svg
      viewBox="0 0 360 100"
      className={cn(className)}
      fill="none"
      role="img"
      aria-label="Illustration of timing and cadence rhythm signals"
    >
      <title>Interaction Cadence Signals</title>
      {grad}
      {bars.map((_, i) => {
        const h = 10 + Math.abs(Math.sin(i * 0.75)) * 60;
        return (
          <rect
            key={i}
            x={12 + i * 14}
            y={50 - h / 2}
            width="5"
            height={h}
            rx="2.5"
            fill={i % 3 === 0 ? "url(#ip-blue)" : "url(#ip-teal)"}
            opacity={0.4 + (i % 5) * 0.12}
          />
        );
      })}
    </svg>
  );
}

export function PrivacyShield({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      role="img"
      aria-label="Privacy governance shield icon"
    >
      <title>Privacy by Default</title>
      {grad}
      <path
        d="M80 16 L132 36 V80 C132 116, 108 138, 80 148 C52 138, 28 116, 28 80 V36 Z"
        fill="url(#ip-blue)"
        opacity="0.08"
        stroke="url(#ip-blue)"
        strokeWidth="2"
      />
      <path
        d="M60 80 L74 94 L102 62"
        stroke="url(#ip-teal)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CapabilityGapViz({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 260"
      className={className}
      fill="none"
      role="img"
      aria-label="Diagram showing the divergence between raw AI-generated output volume and actual human understanding."
    >
      <title>The Capability Gap</title>
      {grad}
      <path
        d="M30 210 C 120 160, 220 90, 410 40"
        stroke="url(#ip-teal)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M30 215 C 130 205, 240 190, 410 175"
        stroke="url(#ip-blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M410 40 L410 175"
        stroke="oklch(0.56 0.14 253)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <text
        x="415"
        y="40"
        fill="oklch(0.4 0.06 200)"
        fontSize="12"
        fontFamily="Inter"
        fontWeight="600"
      >
        AI Output Volume
      </text>
      <text
        x="415"
        y="178"
        fill="oklch(0.45 0.08 258)"
        fontSize="12"
        fontFamily="Inter"
        fontWeight="600"
      >
        Retained Human Skill
      </text>
    </svg>
  );
}
