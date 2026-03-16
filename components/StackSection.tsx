const techGroups = [
  {
    title: "Backend",
    items: [".NET", "ASP.NET Core", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Architecture",
    items: [
      "Clean Architecture",
      "Modular Monolith",
      "Event-Driven Design",
      "Multi-Tenancy",
    ],
  },
  {
    title: "Frontend",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Tools",
    items: ["PostgreSQL", "Docker", "GitHub", "VS Code"],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
            Tech Stack
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Tools and technologies I’m building with.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-[#14141A] p-6"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}