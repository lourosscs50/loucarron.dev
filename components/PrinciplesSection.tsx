const principles = [
  {
    title: "Clean Architecture",
    description:
      "Systems are structured to separate concerns and protect core logic from unnecessary coupling.",
  },
  {
    title: "System Boundaries",
    description:
      "Strong boundaries keep responsibilities clear and prevent domain logic from leaking into the core.",
  },
  {
    title: "Platform Thinking",
    description:
      "Projects are designed as foundations that can evolve into larger systems without losing direction.",
  },
  {
    title: "Test-First Discipline",
    description:
      "The riskiest features should be validated before they are trusted in production.",
  },
];

export default function PrinciplesSection() {
  return (
    <section id="principles" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
          Engineering Principles
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          How I approach software design.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">{principle.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">
              {principle.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/8 p-6">
        <p className="text-lg font-medium">
          “Evolution isn’t deviation. It’s convergence.”
        </p>
        <p className="mt-2 text-sm text-white/65">
          I design systems to evolve by strengthening the core, not by letting
          responsibilities drift.
        </p>
      </div>
    </section>
  );
}