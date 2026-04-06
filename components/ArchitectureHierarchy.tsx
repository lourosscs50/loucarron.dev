export default function ArchitectureHierarchy() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Platform Architecture
      </p>

      <div className="mt-12 flex flex-col items-center space-y-10">
        <div>
          <h3 className="text-xl font-semibold">Core Systems</h3>
          <p className="mt-2 text-sm text-white/60">
            BeaconFlow • SignalForge • ChronoFlow
          </p>
        </div>

        <span className="text-xl text-white/30">↓</span>

        <div>
          <h3 className="text-xl font-semibold text-red-400">A.I.L.</h3>
          <p className="mt-2 text-sm text-red-300/80">
            AI Intelligence Layer
          </p>
        </div>

        <span className="text-xl text-white/30">↓</span>

        <div>
          <h3 className="text-xl font-semibold text-blue-400">
            ControlPlane
          </h3>
          <p className="mt-2 text-sm text-blue-300/80">
            Operator & Observability Layer
          </p>
        </div>

        <span className="text-xl text-white/30">↓</span>

        <div>
          <h3 className="text-xl font-semibold">ClientForge</h3>
          <p className="mt-2 text-sm text-white/60">
            Application Platform
          </p>
        </div>
      </div>
    </section>
  );
}
