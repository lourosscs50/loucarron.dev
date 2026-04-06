import Link from "next/link";

const systems = [
  {
    title: "BeaconFlow",
    category: "Event Infrastructure",
    description: "Event ingestion and processing pipeline for structured backend systems.",
    tags: [".NET", "APIs", "Events"],
  },
  {
    title: "SignalForge",
    category: "Signal Detection",
    description: "Pattern and signal detection engine designed for modular system analysis.",
    tags: ["Detection", "Analytics", "Architecture"],
  },
  {
    title: "ChronoFlow",
    category: "Workflow Orchestration",
    description: "Modular orchestration platform built around strict boundaries and scalable evolution.",
    tags: ["Workflows", "Modular Monolith", "Platform"],
  },
  {
    title: "A.I.L.",
    category: "AI Intelligence Layer",
    description:
      "A governed intelligence layer that brings structured, auditable, and provider-agnostic AI capabilities into the ecosystem without letting AI own business logic.",
    tags: [
      "Provider abstraction",
      "Prompt registry",
      "Execution contracts",
      "Memory",
      "Decisioning",
      "Observability",
      "Reliability",
    ],
    href: "/systems/ail",
    isLayer: true,
  },
  {
    title: "ClientForge",
    category: "Application Platform",
    description: "Multi-tenant foundation for building secure, scalable client-facing business systems.",
    tags: ["Multi-Tenant", "Identity", "PostgreSQL"],
  },
  {
    title: "ControlPlane",
    category: "Operator & Observability Layer",
    description:
      "A read-only operator interface that provides cross-system visibility into workflows, decisions, and intelligence without mutating system state.",
    tags: [
      "Observability",
      "Operator UX",
      "Trace Navigation",
      "Cross-System Visibility",
    ],
    isControl: true,
  },
];

export default function SystemsSection() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
          Platform Systems
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          An ecosystem of layered software systems.
        </h2>
        <p className="mt-4 text-white/65">
          These projects are not random apps. They represent different responsibilities
          across event infrastructure, detection, orchestration, intelligence, and
          application platforms.
        </p>
        <p className="mt-4 text-white/65">
          Each system represents a distinct responsibility within a layered architecture
          — from data ingestion to intelligence to operator visibility.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {systems.map((system) => {
          const Card = (
            <div
              className={`group rounded-3xl border p-6 transition-all duration-300 ${
                system.isLayer
                  ? "border-red-500/40 bg-red-500/[0.03] shadow-[0_0_40px_rgba(220,38,38,0.15)]"
                  : system.isControl
                    ? "border-blue-500/40 bg-blue-500/[0.03]"
                    : "border-white/10 bg-white/5"
              } ${
                system.href ? "cursor-pointer" : ""
              } hover:border-white/20 hover:bg-white/[0.06]`}
            >
              {system.isLayer && (
                <div className="mb-3 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-400">
                  Intelligence Layer
                </div>
              )}

              {system.isControl && (
                <div className="mb-3 inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-400">
                  Operator Layer
                </div>
              )}

              <p
                className={`text-sm uppercase tracking-[0.2em] ${
                  system.isLayer ? "text-red-300" : "text-[#8ea8ff]"
                }`}
              >
                {system.category}
              </p>

              <h3
                className={`mt-3 text-2xl font-semibold tracking-tight ${
                  system.isLayer ? "text-red-400" : ""
                }`}
              >
                {system.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {system.description}
              </p>

              {system.isLayer ? (
                <div
                  className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-200 ease-out group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100"
                  aria-hidden
                >
                  <div className="flex translate-y-1 flex-col items-center justify-center gap-0.5 rounded-md border border-red-500/20 bg-red-500/[0.04] px-3 py-2 text-center text-[11px] leading-snug text-red-200/75 transition-transform duration-200 ease-out group-hover:translate-y-0">
                    <span>Products</span>
                    <span className="text-red-400/55">↓</span>
                    <span>A.I.L.</span>
                    <span className="text-red-400/55">↓</span>
                    <span>Core</span>
                  </div>
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs ${
                      system.isLayer
                        ? "border border-red-500/30 bg-red-500/10 text-red-200"
                        : system.isControl
                          ? "border border-blue-500/30 bg-blue-500/10 text-blue-200"
                          : "border border-white/10 text-white/70"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );

          return system.href ? (
            <Link key={system.title} href={system.href} className="block">
              {Card}
            </Link>
          ) : (
            <div key={system.title}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}
