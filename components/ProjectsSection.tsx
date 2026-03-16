import ProjectCard from "./ProjectCard"
import { projects } from "@/lib/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8ea8ff]">
            Featured Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Selected work that reflects how I build.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}