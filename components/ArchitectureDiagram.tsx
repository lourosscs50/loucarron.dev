export default function ArchitectureDiagram() {
  const layers = [
    "Client / API Consumers",
    "ChronoFlow API",
    "Event Ingestion",
    "Workflow Engine",
    "State Store (PostgreSQL)",
    "Event Streams"
  ]

  return (
    <div className="my-10 flex flex-col items-center gap-3">
      {layers.map((layer, index) => (
        <div key={layer} className="flex flex-col items-center">
          <div className="w-72 rounded-xl border border-white/10 bg-[#14141A] px-6 py-4 text-center text-sm text-white/80 shadow">
            {layer}
          </div>

          {index < layers.length - 1 && (
            <div className="text-white/30 py-2">↓</div>
          )}
        </div>
      ))}
    </div>
  )
}