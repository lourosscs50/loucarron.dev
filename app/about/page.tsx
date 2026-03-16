export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
          About Me
        </p>

        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          I build systems that are meant to hold up over time.
        </h1>

        <div className="mt-10 space-y-6 text-base leading-8 text-white/70">
          <p>
            I’m a software developer focused on backend engineering, platform
            architecture, and full-stack systems that are structured for growth.
          </p>

          <p>
            My work centers on clean architecture, modular design, and building
            software with strong boundaries. I’m especially interested in event
            systems, workflow orchestration, multi-tenant platforms, and the
            kind of engineering decisions that make systems easier to scale and
            maintain.
          </p>

          <p>
            Instead of treating projects like isolated apps, I approach them as
            parts of a larger systems ecosystem. That is the thinking behind the
            work I’m building across BeaconFlow, SignalForge, ChronoFlow, and
            ClientForge.
          </p>

          <p>
            I care about writing software that is clear, testable, and built on
            foundations that can evolve without losing direction.
          </p>
        </div>
      </section>
    </main>
  );
}