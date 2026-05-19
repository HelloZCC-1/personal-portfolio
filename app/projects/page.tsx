import type { Metadata } from "next";
import { BotanicalAccent } from "@/components/common/BotanicalAccent";
import { FloralVisual } from "@/components/common/FloralVisual";
import { PageShell } from "@/components/common/PageShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目经历 / Selected Projects - Marco",
  description: "展示 Java 后端、AI Agent 和 AI 应用工程化项目经历。",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-2xl shadow-slate-950/15">
        <BotanicalAccent
          variant="dark"
          className="right-6 top-4 h-56 w-56 opacity-80"
        />
        <FloralVisual
          variant="dark"
          className="right-20 top-10 h-56 w-56 opacity-45"
        />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-200">
            Projects
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            项目经历 / Selected Projects
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            这些项目覆盖 Java 后端、AI Agent 和 AI
            应用工程化，展示我从业务接口开发到智能系统落地的综合实践。
          </p>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageShell>
  );
}
