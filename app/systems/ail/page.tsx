import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AilSystemPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Link
          href="/#systems"
          className="text-sm text-white/50 transition hover:text-white/80"
        >
          ← Back to systems
        </Link>

        <header className="mt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/90">
            System Layer
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="text-red-400">A.I.L.</span>
            <span className="text-white"> — AI Intelligence Layer</span>
          </h1>
          <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
            A governed intelligence layer that brings structured, auditable,
            provider-agnostic AI capabilities into production systems without
            allowing AI to own business logic.
          </p>
        </header>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-red-400/95 sm:text-2xl">
            Intelligence without ownership
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
            <p>
              A.I.L. is not a chatbot. It is a controlled intelligence layer that
              sits between product surfaces and core systems, enforcing how AI
              is invoked—not what your domain decides.
            </p>
            <p>
              It standardizes provider access, prompt execution, bounded memory,
              structured outputs, and observability so teams can use models in
              production without scattering ad hoc calls or burying prompt logic
              in business code.
            </p>
            <p>
              Its job is to make AI usable inside real systems while preserving
              clear ownership: core systems remain authoritative; A.I.L. governs
              the intelligence boundary.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Why this layer exists
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
            <p>
              Without a dedicated layer, teams typically embed direct provider
              calls in application code, mix prompt and domain logic, and ship
              weak observability. There is no reliable operational boundary—only
              scattered SDK usage that is hard to audit, test, or replace.
            </p>
            <p>
              A.I.L. exists to turn that into a platform capability: a single,
              governed place for how intelligence runs, what it may access, and
              how it is traced—not an implementation detail left to each service.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Core capabilities
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Provider Abstraction</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Swap and route models behind a stable internal surface so
                products do not couple to vendor SDKs.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Prompt Registry</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Versioned, reviewable prompts and templates—not one-off strings
                in application code.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Structured Execution</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Contracts for inputs, outputs, and failure modes so intelligence
                integrates like any other subsystem.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">MemoryCore</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Bounded, policy-aware memory so context is explicit—not an
                unbounded black box.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Decision Support</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Recommendations and ranked options under core-owned rules, not
                autonomous decisions over domain state.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Reliability Layer</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Retries, timeouts, and degradation paths suited to production
                traffic, not demo-grade calls.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
              <h3 className="font-semibold text-white">Observability & Audit</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Traceable runs, attribution, and evidence suitable for operators
                and review—not opaque completions.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-red-400/95 sm:text-2xl">
            Products → A.I.L. → Core
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
            <p>
              Products consume intelligence: they request governed execution
              through A.I.L. Core systems—events, workflows, tenancy, and
              authoritative data—remain the source of truth.
            </p>
            <p>
              A.I.L. governs how models are called, what they see, and how
              outputs are shaped; it does not replace core ownership of state
              or rules. AI is a dependency and an integration point, not the
              center of the architecture.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Ecosystem integrations
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-white">SignalForge</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Detection and analytics can invoke A.I.L. for interpretation or
                scoring while SignalForge retains ownership of signals, rules,
                and alert semantics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">ChronoFlow</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Orchestration steps may call A.I.L. for bounded assistance;
                ChronoFlow continues to own workflow state, transitions, and
                compensations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">ControlPlane</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Operator views can surface traces and outcomes produced through
                A.I.L. without ControlPlane inheriting prompt or provider logic.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Guardrails
          </h2>
          <ul className="mt-8 list-disc space-y-3 pl-5 text-sm leading-7 text-white/70 marker:text-white/40">
            <li>AI is a dependency, not the core.</li>
            <li>A.I.L. advises and core systems decide.</li>
            <li>No domain logic is allowed to leak into A.I.L.</li>
            <li>Structured contracts come before convenience.</li>
            <li>Observability and auditability are required, not optional.</li>
            <li>
              Providers are replaceable execution targets, not architectural
              anchors.
            </li>
          </ul>
        </section>

        <section className="mt-20 border-t border-white/10 pb-8 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Current build status
          </h2>
          <p className="mt-6 text-base leading-8 text-white/65">
            A.I.L. is being built as a production-minded intelligence
            foundation—prioritizing contracts, memory boundaries, reliability,
            and observability over novelty. The focus is a layer you can run,
            reason about, and evolve under real operational constraints.
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}
