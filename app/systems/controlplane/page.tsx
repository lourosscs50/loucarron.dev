import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ControlPlaneSystemPage() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/90">
            Operator Layer
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="text-blue-400">ControlPlane</span>
            <span className="text-white"> — Operator & Observability Layer</span>
          </h1>
          <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
            A read-only operator interface that provides cross-system visibility
            into workflows, decisions, and intelligence without mutating system
            state.
          </p>
        </header>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-blue-400/95 sm:text-2xl">
            Visibility without mutation
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
            <p>
              ControlPlane is not a control system in the operational sense: it
              does not execute workflows, apply rules, or decide outcomes.
            </p>
            <p>
              It surfaces truth across systems—correlated traces, decisions, and
              intelligence runs—so operators can see what happened and why, without
              the interface becoming another place where business logic lives.
            </p>
            <p>
              It exists for operators who need context across boundaries, not for
              embedding domain behavior.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Why this layer exists
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
            <p>
              As systems grow, behavior becomes opaque: services multiply, logs
              sprawl, and answering &quot;what ran, where, and in what order&quot;
              turns into manual archaeology.
            </p>
            <p>
              Raw logs are rarely enough. Tracing is often fragmented by tool or
              team. Operators lack a single read-only place to correlate execution,
              decisions, and intelligence across the platform.
            </p>
            <p>
              ControlPlane exists to close that gap without taking ownership of
              core or orchestration logic.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Core capabilities
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Execution Tracing</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Follow runs and steps across workflows without executing or
                replaying them from the UI.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Decision Visibility</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Surface how and when decisions and alerts were produced, linked
                back to source signals and rules.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Cross-System Correlation</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Tie together identifiers and timelines across subsystems so
                operators see one coherent story.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">Operator Navigation</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Purpose-built paths for investigation: from symptom to trace to
                originating context, read-only end to end.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
              <h3 className="font-semibold text-white">Read-Only Safety Model</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                The interface does not mutate system state: no hidden actions, no
                execution hooks—observation only.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-blue-400/95 sm:text-2xl">
            Observability over orchestration
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
            <p>
              ControlPlane sits above executing systems in the sense of concern:
              it consumes telemetry, traces, and exported facts—it does not produce
              authoritative domain data or drive workflows.
            </p>
            <p>
              It has no domain ownership: it reflects what core and orchestration
              layers already did. It does not influence outcomes, only surfaces
              them for human operators.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Ecosystem integrations
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-white">ChronoFlow</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Ingests execution traces and step metadata so operators can
                navigate workflow history without ChronoFlow ceding control of
                orchestration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">SignalForge</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Surfaces decision and alert lineage—what fired, on what evidence—
                while SignalForge keeps evaluation and rule ownership.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">A.I.L.</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Shows intelligence runs, contracts, and audit-relevant context
                produced by the governed layer without re-implementing prompts or
                providers in ControlPlane.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Guardrails
          </h2>
          <ul className="mt-8 list-disc space-y-3 pl-5 text-sm leading-7 text-white/70 marker:text-white/40">
            <li>Read-only by design.</li>
            <li>No domain logic.</li>
            <li>No side effects.</li>
            <li>No execution authority.</li>
            <li>Pure observability layer.</li>
          </ul>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Current status
          </h2>
          <p className="mt-6 text-base leading-8 text-white/65">
            ControlPlane is focused on operator visibility first—correlation,
            navigation, and a consistent read-only model. It is evolving alongside
            trace standardization across ChronoFlow and A.I.L. so the same
            identifiers and timelines show up whether you are debugging a workflow
            or an intelligence run.
          </p>
        </section>

        <section className="mt-20 border-t border-white/10 pb-8 pt-16">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Observed Systems
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-white/70">
            <p>
              <Link
                href="/projects/chronoflow"
                className="text-white/85 underline decoration-white/25 underline-offset-4 transition hover:decoration-white/50"
              >
                ChronoFlow
              </Link>
              — workflow execution traces.
            </p>
            <p>
              <Link
                href="/projects/signalforge"
                className="text-white/85 underline decoration-white/25 underline-offset-4 transition hover:decoration-white/50"
              >
                SignalForge
              </Link>
              — decision and alert traces.
            </p>
            <p>
              <Link
                href="/systems/ail"
                className="text-white/85 underline decoration-white/25 underline-offset-4 transition hover:decoration-white/50"
              >
                A.I.L.
              </Link>
              — intelligence execution traces.
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
