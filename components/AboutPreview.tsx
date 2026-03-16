export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            I’m focused on building systems that are structured to last.
          </h2>
          <p className="mt-4 text-white/65">
            My work is centered on backend engineering, scalable architecture,
            and creating software foundations that can support larger ideas over
            time.
          </p>
        </div>

        <a
          href="/about"
          className="inline-flex rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5"
        >
          Read More
        </a>
      </div>
    </section>
  );
}