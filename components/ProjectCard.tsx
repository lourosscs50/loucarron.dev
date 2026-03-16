import Link from "next/link"
import type { Project } from "@/lib/projects"

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#14141A] p-6">

      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        {project.status && (
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
            {project.status}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-6 text-white/70">
        {project.tagline}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/75"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-xl border border-white/10 px-4 py-2 text-white/85 transition hover:bg-white/5"
        >
          View Project
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 px-4 py-2 text-white/55 transition hover:bg-white/5 hover:text-white/85"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}