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
    title: "ClientForge",
    category: "Application Platform",
    description: "Multi-tenant foundation for building secure, scalable client-facing business systems.",
    tags: ["Multi-Tenant", "Identity", "PostgreSQL"],
  },
];

export default function SystemsSection() {
  return (
   <section id="systems" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">Systems I Build</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">An ecosystem of layered software systems.</h2>
          <p className="mt-4 text-white/65">
            These projects are not random apps. They represent different responsibilities across event infrastructure, detection, orchestration, and application platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <div key={system.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8ea8ff]">{system.category}</p>
              <h3 className="mt-3 text-2xl font-semibold">{system.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{system.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
