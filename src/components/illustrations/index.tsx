import { cn } from "@/lib/utils";

const grad = (
  <defs>
    <linearGradient id="ip-blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="oklch(0.6 0.13 253)" />
      <stop offset="1" stopColor="oklch(0.72 0.1 220)" />
    </linearGradient>
    <linearGradient id="ip-teal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="oklch(0.72 0.1 200)" />
      <stop offset="1" stopColor="oklch(0.8 0.09 170)" />
    </linearGradient>
  </defs>
);

/* Hero: human capability growing alongside AI — two intertwining paths rising */
export function HeroWeave({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 420" fill="none" className={className} aria-hidden="true">
      {grad}
      <g opacity="0.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={i}
            x1="40"
            x2="480"
            y1={70 + i * 55}
            y2={70 + i * 55}
            stroke="oklch(0.9 0.012 240)"
            strokeWidth="1"
          />
        ))}
      </g>
      {/* AI path */}
      <path
        d="M50 350 C 160 340, 190 220, 300 200 C 400 182, 430 150, 480 110"
        stroke="url(#ip-teal)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="900"
        strokeDashoffset="900"
        style={{ animation: "draw 2.4s ease-out forwards" }}
      />
      {/* Human capability path */}
      <path
        d="M50 360 C 150 356, 210 300, 300 250 C 390 200, 430 120, 480 60"
        stroke="url(#ip-blue)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="960"
        strokeDashoffset="960"
        style={{ animation: "draw 2.6s ease-out 0.2s forwards" }}
      />
      {[
        [300, 250],
        [390, 200],
        [480, 60],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="5"
          fill="oklch(0.6 0.13 253)"
          style={{ animation: "pulse-dot 3s ease-in-out infinite", animationDelay: `${i * 0.4}s` }}
        />
      ))}
      <circle cx="480" cy="110" r="4" fill="oklch(0.72 0.1 195)" />
    </svg>
  );
}

/* Telemetry -> Behavior -> Intelligence -> Coaching -> Growth */
const flowSteps = ["Telemetry", "Behavior", "Intelligence", "Coaching", "Growth"];
export function FlowDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 960 160" className={className} fill="none" aria-hidden="true">
      {grad}
      {flowSteps.map((label, i) => {
        const x = 40 + i * 190;
        return (
          <g key={label}>
            {i < flowSteps.length - 1 && (
              <path
                d={`M${x + 130} 80 L ${x + 180} 80`}
                stroke="oklch(0.72 0.09 210)"
                strokeWidth="2"
                markerEnd="url(#arrow)"
                strokeDasharray="60"
                strokeDashoffset="60"
                style={{ animation: `draw 0.6s ease-out ${0.3 + i * 0.25}s forwards` }}
              />
            )}
            <rect
              x={x}
              y={45}
              width={130}
              height={70}
              rx={16}
              fill="oklch(0.995 0.004 85)"
              stroke="oklch(0.9 0.012 240)"
            />
            <circle cx={x + 26} cy={80} r={8} fill={i % 2 ? "url(#ip-teal)" : "url(#ip-blue)"} />
            <text
              x={x + 46}
              y={85}
              fill="oklch(0.24 0.035 258)"
              fontSize="14"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
            >
              {label}
            </text>
          </g>
        );
      })}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="oklch(0.72 0.09 210)" />
        </marker>
      </defs>
    </svg>
  );
}

/* Capability Intelligence Core — center hub with 6 satellites */
const satellites = [
  "Prompt Intelligence",
  "Knowledge Intelligence",
  "Enterprise Intelligence",
  "Capability Trajectories",
  "Institution Intelligence",
  "Research Intelligence",
];
export function CapabilityCore({ className }: { className?: string }) {
  const cx = 260;
  const cy = 260;
  const R = 190;
  return (
    <svg viewBox="0 0 520 520" className={className} fill="none" aria-hidden="true">
      {grad}
      <circle cx={cx} cy={cy} r={R} stroke="oklch(0.9 0.012 240)" strokeDasharray="4 6" />
      {satellites.map((label, i) => {
        const angle = (i / satellites.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * R;
        const y = cy + Math.sin(angle) * R;
        return (
          <g key={label}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="oklch(0.85 0.02 220)" strokeWidth="1.2" />
            <g style={{ animation: "float-slow 7s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}>
              <circle cx={x} cy={y} r={44} fill="oklch(0.995 0.004 85)" stroke="oklch(0.9 0.012 240)" />
              <circle cx={x} cy={y} r={44} fill={i % 2 ? "url(#ip-teal)" : "url(#ip-blue)"} opacity="0.08" />
              <text
                x={x}
                y={y - 2}
                textAnchor="middle"
                fill="oklch(0.3 0.03 258)"
                fontSize="10"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                {label.split(" ").map((w, j) => (
                  <tspan key={j} x={x} dy={j === 0 ? 0 : 12}>
                    {w}
                  </tspan>
                ))}
              </text>
            </g>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={68} fill="url(#ip-blue)" />
      <circle cx={cx} cy={cy} r={68} fill="none" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1.5" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter" fontWeight="700">
        Capability
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter" fontWeight="700">
        Intelligence
      </text>
      <text x={cx} y={cy + 30} textAnchor="middle" fill="oklch(1 0 0 / 0.75)" fontSize="10" fontFamily="Inter">
        Core
      </text>
    </svg>
  );
}

/* Growth curve chart */
export function GrowthCurve({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} fill="none" aria-hidden="true">
      {grad}
      <line x1="40" y1="20" x2="40" y2="200" stroke="oklch(0.9 0.012 240)" />
      <line x1="40" y1="200" x2="380" y2="200" stroke="oklch(0.9 0.012 240)" />
      <path
        d="M40 200 L380 200 L380 90 C 320 110, 260 150, 200 150 C 140 150, 90 180, 40 190 Z"
        fill="url(#ip-blue)"
        opacity="0.1"
      />
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
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="600"
        strokeDashoffset="600"
        style={{ animation: "draw 2.2s ease-out forwards" }}
      />
      <circle cx="380" cy="35" r="5" fill="oklch(0.6 0.13 253)" />
    </svg>
  );
}

/* Behavioral signals — waveform / rhythm */
export function SignalWave({ className }: { className?: string }) {
  const bars = Array.from({ length: 28 });
  return (
    <svg viewBox="0 0 400 120" className={cn(className)} fill="none" aria-hidden="true">
      {grad}
      {bars.map((_, i) => {
        const h = 12 + Math.abs(Math.sin(i * 0.7)) * 70;
        return (
          <rect
            key={i}
            x={12 + i * 13.5}
            y={60 - h / 2}
            width="5"
            height={h}
            rx="2.5"
            fill={i % 3 === 0 ? "url(#ip-blue)" : "url(#ip-teal)"}
            opacity={0.4 + (i % 5) * 0.12}
            style={{ animation: "float-slow 4s ease-in-out infinite", animationDelay: `${i * 0.06}s` }}
          />
        );
      })}
    </svg>
  );
}

/* Privacy shield */
export function PrivacyShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      {grad}
      <path
        d="M100 20 L165 45 V100 C165 145, 135 172, 100 185 C65 172, 35 145, 35 100 V45 Z"
        fill="url(#ip-blue)"
        opacity="0.08"
        stroke="url(#ip-blue)"
        strokeWidth="2"
      />
      <path
        d="M75 100 L92 118 L128 78"
        stroke="url(#ip-teal)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="120"
        strokeDashoffset="120"
        style={{ animation: "draw 1.4s ease-out 0.3s forwards" }}
      />
    </svg>
  );
}

/* Capability gap — diverging output vs capability */
export function CapabilityGapViz({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 260" className={className} fill="none" aria-hidden="true">
      {grad}
      <path
        d="M30 210 C 120 160, 220 90, 410 40"
        stroke="url(#ip-teal)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="600"
        strokeDashoffset="600"
        style={{ animation: "draw 2s ease-out forwards" }}
      />
      <path
        d="M30 215 C 130 205, 240 190, 410 175"
        stroke="url(#ip-blue)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="600"
        strokeDashoffset="600"
        style={{ animation: "draw 2s ease-out 0.3s forwards" }}
      />
      <path d="M410 40 L410 175" stroke="oklch(0.6 0.13 253)" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="415" y="40" fill="oklch(0.4 0.06 200)" fontSize="12" fontFamily="Inter" fontWeight="600">
        Output
      </text>
      <text x="415" y="178" fill="oklch(0.45 0.08 258)" fontSize="12" fontFamily="Inter" fontWeight="600">
        Capability
      </text>
    </svg>
  );
}