import { useState } from "react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./primitives";

type TabKey = "collaboration" | "assurance" | "capability";

export function ProductExamplesWidget({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<TabKey>("collaboration");
  const [assuranceAction, setAssuranceAction] = useState<"idle" | "canceled" | "sent">("idle");
  const [collabCopied, setCollabCopied] = useState(false);
  const [capabilitySaved, setCapabilitySaved] = useState(false);

  return (
    <div
      className={cn(
        "w-full rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            How Praxys Works In Practice
          </span>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink md:text-2xl">
            Three Concrete Experiences
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Clear, point-of-action support for your everyday AI interactions.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className="inline-flex flex-wrap rounded-full border border-border bg-background/80 p-1"
          role="tablist"
          aria-label="Product experience demonstrations"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "collaboration"}
            onClick={() => {
              setActiveTab("collaboration");
              setCollabCopied(false);
            }}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeTab === "collaboration"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Collaboration · Spot Friction
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "assurance"}
            onClick={() => {
              setActiveTab("assurance");
              setAssuranceAction("idle");
            }}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeTab === "assurance"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Assurance · Catch Sensitive Info
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "capability"}
            onClick={() => {
              setActiveTab("capability");
              setCapabilitySaved(false);
            }}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeTab === "capability"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Capability · Reusable Workflows
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="mt-6">
        {/* 1. COLLABORATION: FIND ONE THING TO IMPROVE */}
        {activeTab === "collaboration" && (
          <div className="space-y-4 animate-in fade-in duration-200" role="tabpanel">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <StatusBadge status="partial" />
                <span className="font-semibold text-primary">
                  Praxys Collaboration · Find One Thing to Improve
                </span>
              </div>
              <span className="italic text-[11px] text-muted-foreground">
                Illustrative example · Not live visitor telemetry
              </span>
            </div>

            <div className="rounded-2xl border border-blue/20 bg-blue/5 p-5 md:p-6">
              <div className="space-y-4">
                {/* Observed Pattern */}
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Observed Repeated-Work Pattern
                    </span>
                    <span className="rounded-md border border-border bg-accent/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      Cadence: 5 revisions / 8 min
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-medium text-ink">
                    You made 5 quick prompt adjustments in 8 minutes trying to get the model to
                    return valid, unescaped JSON for an API endpoint without markdown wrappers.
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2 rounded-lg bg-accent/30 p-2.5 text-center text-xs">
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Iterations</span>
                      <strong className="text-ink">5 cycles</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Dwell Time</span>
                      <strong className="text-ink">8m 14s</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block">
                        Detected Cause
                      </span>
                      <strong className="text-primary">Format Thrashing</strong>
                    </div>
                  </div>
                </div>

                {/* Specific Actionable Suggestion */}
                <div className="rounded-xl border border-blue/30 bg-card p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary font-bold">
                      💡
                    </span>
                    <span className="text-xs font-semibold text-ink">
                      Actionable Suggestion: One thing to change
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Instead of repeatedly asking the model to “fix JSON formatting” after the fact,
                    include a 2-line target schema and specify:
                  </p>
                  <div className="rounded-lg border border-border bg-accent/40 p-3 font-mono text-[11px] text-ink">
                    <code>
                      "Output strictly raw, valid JSON matching this schema: &#123; status: string,
                      data: array &#125;. Do not include markdown codeblocks or explanation."
                    </code>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCollabCopied(true)}
                      className="rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
                    >
                      {collabCopied ? "✓ Copied format suggestion!" : "Copy format suggestion"}
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                      Save to team guidelines
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-3 text-xs text-muted-foreground">
              <strong className="text-foreground">Honest capability boundary:</strong> Surfaces
              descriptive friction patterns and actionable formatting tips. It does not promise
              automatic speedups, claim guaranteed hours saved, or analyze proprietary prompts
              without consent.
            </div>
          </div>
        )}

        {/* 2. ASSURANCE: CATCH SENSITIVE INFORMATION BEFORE SENDING */}
        {activeTab === "assurance" && (
          <div className="space-y-4 animate-in fade-in duration-200" role="tabpanel">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <StatusBadge status="partial" />
                <span className="font-semibold text-red-600 dark:text-red-400">
                  Praxys Assurance · Point-of-Action Warning
                </span>
              </div>
              <span className="italic text-[11px] text-muted-foreground">
                Illustrative example · Client-side pre-dispatch scan
              </span>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 md:p-6">
              {/* Draft Prompt Context */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Draft Prompt About to Be Submitted:
                </span>
                <p className="mt-2 font-mono text-xs text-ink bg-accent/30 p-2.5 rounded-lg border border-border/60">
                  "Deploying v2.4 hotfix. Database connection string:{" "}
                  <mark className="bg-red-500/20 text-red-700 dark:text-red-300 px-1 rounded font-semibold">
                    postgresql://admin:sk_live_9a87f4c01bc89a@db.internal:5432/core
                  </mark>{" "}
                  — write a script to run pending migrations."
                </p>
              </div>

              {/* Point of Action Warning Banner */}
              <div className="mt-4 rounded-xl border-2 border-red-500/40 bg-card p-5 shadow-xs space-y-3">
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-700 dark:text-red-400"
                    aria-hidden="true"
                  >
                    !
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-ink">
                        Sensitive Information Warning
                      </span>
                      <span className="rounded-md border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-700 dark:text-red-400">
                        Rule: Live Credentials Pattern
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      This prompt contains what appears to be an active database credential (URI
                      with password / API key pattern). It was intercepted client-side before being
                      transmitted to the external model.
                    </p>
                  </div>
                </div>

                {/* Interactive Decisions */}
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAssuranceAction("canceled")}
                    className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-red-700"
                  >
                    Cancel & Edit Prompt (Recommended)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAssuranceAction("sent")}
                    className="rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Send Anyway (Record Acknowledgment)
                  </button>
                </div>

                {/* State feedback */}
                {assuranceAction === "canceled" && (
                  <div className="rounded-lg bg-teal/10 border border-teal/30 p-2.5 text-xs text-teal font-medium animate-in fade-in">
                    ✓ Dispatch canceled. The prompt was kept in your draft editor so you can remove
                    the credential safely.
                  </div>
                )}
                {assuranceAction === "sent" && (
                  <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-2.5 text-xs text-amber-800 dark:text-amber-300 font-medium animate-in fade-in">
                    ℹ Sent with policy override. An auditable acknowledgment timestamp was recorded
                    for compliance.
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-3 text-xs text-muted-foreground">
              <strong className="text-foreground">Honest capability boundary:</strong> Uses
              deterministic regex and high-entropy pattern scanning. It catches common credentials
              before dispatch, but does not guarantee 100% prevention of all sensitive disclosures
              and is not a substitute for an enterprise DLP or SIEM system.
            </div>
          </div>
        )}

        {/* 3. CAPABILITY: TURN REPEATED TASKS INTO REUSABLE WORKFLOWS */}
        {activeTab === "capability" && (
          <div className="space-y-4 animate-in fade-in duration-200" role="tabpanel">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <StatusBadge status="prototype" />
                <span className="font-semibold text-teal-foreground">
                  Praxys Capability · Repeated Task to Reusable Workflow
                </span>
              </div>
              <span className="italic text-[11px] text-muted-foreground">
                Illustrative prototype preview · Workflow template synthesis
              </span>
            </div>

            <div className="rounded-2xl border border-teal/20 bg-teal/5 p-5 md:p-6">
              <div className="space-y-4">
                {/* Pattern Detected */}
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Repeated Task Pattern Detected
                    </span>
                    <span className="rounded-md border border-teal/30 bg-teal/10 px-2 py-0.5 text-[10px] font-mono text-teal-foreground">
                      Observed: 4 times this week
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-medium text-ink">
                    You frequently prompt AI to summarize engineering sprint tickets into executive
                    release notes, rewriting instructions and markdown formatting constraints each
                    time.
                  </p>
                </div>

                {/* Editable Reusable Template Box */}
                <div className="rounded-xl border border-teal/30 bg-card p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-ink">
                        Synthesized Reusable Workflow Template
                      </span>
                      <span className="text-[10px] rounded bg-accent px-1.5 py-0.5 text-muted-foreground font-mono">
                        Draft
                      </span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">Review & Edit</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground block">
                      Template Title:
                    </label>
                    <input
                      type="text"
                      readOnly
                      value="Sprint Release Notes Generator"
                      className="w-full rounded-lg border border-border bg-accent/30 px-3 py-1.5 text-xs font-medium text-ink focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground block">
                      Reusable Prompt Instruction (with variables):
                    </label>
                    <div className="rounded-lg border border-border bg-accent/30 p-3 font-mono text-[11px] text-ink leading-relaxed">
                      <code>
                        You are a release manager. Analyze the following commit log:
                        &#123;&#123;commit_log&#125;&#125;
                        <br />
                        <br />
                        Generate:
                        <br />
                        1. Executive Summary (2-3 bullet points)
                        <br />
                        2. Changelog (grouped into Features, Fixes, and Breaking Changes)
                        <br />
                        3. Risk Assessment (any database migrations flagged)
                        <br />
                        <br />
                        Format: Clean, executive-ready markdown without preamble.
                      </code>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setCapabilitySaved(true)}
                      className="rounded-lg bg-teal px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-teal/90"
                    >
                      {capabilitySaved
                        ? "✓ Saved to workspace templates!"
                        : "Save as Reusable Template"}
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                      Customize Variables
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-card p-3 text-xs text-muted-foreground">
              <strong className="text-foreground">Honest capability boundary:</strong> This is a
              prototype capability in active development. It helps users recognize repetitive prompt
              patterns and package them into templates, but is not yet an automated multi-agent
              execution pipeline.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
