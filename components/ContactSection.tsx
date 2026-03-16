export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#14141A] p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Let’s build something meaningful.
        </h2>
        <p className="mt-4 max-w-2xl text-white/65">
          I’m interested in backend systems, full-stack platforms, and software
          projects that require thoughtful architecture and clean implementation.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:louross101@gmail.com"
            className="rounded-2xl bg-[#4F7CFF] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#4F7CFF]/20 transition hover:-translate-y-0.5"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/lourosscs50"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lou-carron-2b2652123/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}