import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="scroll-mt-28 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="精选项目 / Featured Projects"
          description="三个项目分别覆盖 Java 后端、AI Agent 与 AI 应用工程化，适合快速了解我的技术主线。"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article
              key={project.slug}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-200 hover:shadow-xl"
            >
              <div className="h-3 bg-gradient-to-r from-slate-950 via-blue-600 to-violet-500" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3 text-xs font-medium text-slate-500">
                  <span>{project.type}</span>
                  <span>{project.duration ?? project.year}</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-8 text-slate-950">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  {project.shortTitle}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`查看项目详情：${project.title}`}
                  className="mt-auto inline-flex h-10 w-fit items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  查看详情 Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
