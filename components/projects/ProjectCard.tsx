import Link from "next/link";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-200 hover:shadow-xl">
      <div>
        <ProjectVisual project={project} />
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            <span>{project.type}</span>
            <span>/</span>
            <span>{project.duration ?? project.year}</span>
          </div>
          <h2 className="mt-4 text-xl font-semibold leading-8 text-slate-950">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-slate-500">{project.shortTitle}</p>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            {project.overview}
          </p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
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
          className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          查看详情 Details
        </Link>
      </div>
    </article>
  );
}
