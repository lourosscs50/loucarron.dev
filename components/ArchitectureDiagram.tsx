type ArchitectureDiagramProps = {
  nodes: string[]
}

export default function ArchitectureDiagram({
  nodes,
}: ArchitectureDiagramProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-xl font-semibold text-white">Architecture Flow</h2>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {nodes.map((node, index) => (
          <div key={`${node}-${index}`} className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-[#14141A] px-4 py-3 text-sm text-white/85">
              {node}
            </div>

            {index < nodes.length - 1 && (
              <div className="text-white/30">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}