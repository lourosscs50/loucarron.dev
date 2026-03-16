import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/lib/projects"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="mb-8 inline-block text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to projects
        </Link>

        <p className="mb-4 text-sm uppercase tracking-widest text-zinc-400">
          Project Case Study
        </p>

        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>

        <p className="mb-12 max-w-3xl text-xl text-zinc-300">
          {project.tagline}
        </p>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-100">
            Overview
          </h2>
          <p className="max-w-4xl leading-8 text-zinc-300">
            {project.description}
          </p>
        </section>

        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-100">
              Problem
            </h2>
            <p className="leading-8 text-zinc-300">
              {project.problem}
            </p>
          </section>

          <section className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-100">
              Solution
            </h2>
            <p className="leading-8 text-zinc-300">
              {project.solution}
            </p>
          </section>
        </div>

        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-zinc-100">
              System Flow
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">
              High-level flow of how the system is structured from entry point
              to core processing and persistence.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            {project.diagram.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-6 py-4 text-center text-sm font-medium text-zinc-200 shadow-sm">
                  {step}
                </div>

                {index < project.diagram.length - 1 && (
                  <div className="py-3 text-lg text-zinc-500">↓</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-zinc-100">
              Architecture
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">
              Key architectural decisions and boundaries that shape how the
              system is organized.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.architecture.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-sm leading-7 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-100">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 pt-8">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-blue-400 transition hover:underline"
            >
              View Repository →
            </a>
          ) : (
            <p className="text-sm text-zinc-500">
              Repository details coming soon.
            </p>
          )}
        </section>
      </div>
    </main>
  )
}