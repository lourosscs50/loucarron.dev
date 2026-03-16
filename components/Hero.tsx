export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,124,255,0.18),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
        <div className="relative z-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
            Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            I build modular backend systems, platform foundations, and full-stack applications.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            My work focuses on clean architecture, scalable design, and systems that are built to evolve without losing their core direction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-[#4F7CFF] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#4F7CFF]/20 transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-medium text-white/80">Systems Ecosystem</p>
            <span className="rounded-full border border-[#4F7CFF]/30 bg-[#4F7CFF]/10 px-3 py-1 text-xs text-[#a9bcff]">
              Layered Thinking
            </span>
          </div>

          <div className="space-y-4">
            {["ClientForge", "ChronoFlow", "SignalForge", "BeaconFlow"].map((name, index) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{name}</p>
                  <span className="text-xs text-white/45">Layer {4 - index}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-white/60">
            A portfolio centered on systems design: event ingestion, signal detection,
            workflow orchestration, and multi-tenant platforms.
          </p>
        </div>
      </div>
    </section>
  );
}