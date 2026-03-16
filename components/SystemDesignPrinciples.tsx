export default function SystemDesignPrinciples() {
  const principles = [
    {
      title: "Deterministic Systems",
      description:
        "I design systems so behavior is predictable, traceable, and easier to reason about under real production conditions.",
    },
    {
      title: "Separation of Concerns",
      description:
        "I keep domain rules, orchestration logic, and infrastructure responsibilities clearly separated to reduce complexity and avoid fragile codebases.",
    },
    {
      title: "Event-Driven Thinking",
      description:
        "I build around events, system flow, and state transitions so services can evolve cleanly as platforms grow.",
    },
    {
      title: "Strong Foundations First",
      description:
        "I prioritize architecture, boundaries, and maintainability early so future features can be added without forcing rewrites.",
    },
  ]

  return (
    <section
      id="principles"
      className="border-y border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
            System Design Principles
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            How I approach backend architecture and platform design.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            I focus on clear boundaries, event-driven structure, and scalable
            foundations that make systems easier to grow and maintain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-3xl border border-white/10 bg-[#14141A] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}