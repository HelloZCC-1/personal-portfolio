import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/common/PageShell";
import { CaseStudyNav } from "@/components/projects/CaseStudyNav";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ListSectionProps = {
  id: string;
  title: string;
  items: string[];
};

const caseStudySections = [
  { id: "background", label: "Background" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "features", label: "Features" },
  { id: "architecture", label: "Architecture" },
  { id: "challenges", label: "Challenges" },
  { id: "highlights", label: "Highlights" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
  { id: "note", label: "Note" },
];

function ListSection({ id, title, items }: ListSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
    >
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project ? `${project.title} - Marco Portfolio` : "Project",
    description: project?.overview ?? project?.background,
    keywords: project?.tags,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const prevSlug = previousProject?.slug;
  const nextSlug = nextProject?.slug;

  return (
    <>
      <CaseStudyNav sections={caseStudySections} />
      <PageShell>
        <Link
          href="/projects"
          aria-label="返回项目列表"
          className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
        >
          返回项目列表 / Back to Projects
        </Link>

        <section className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black shadow-2xl shadow-slate-950/20">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-9">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-200">
                Case Study / {project.type}
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-lg text-slate-300">
                {project.shortTitle}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                {project.overview}
              </p>
              <div className="mt-7 grid gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-slate-400">年份 / Year</p>
                  <p className="mt-1 font-medium text-white">
                    {project.duration ?? project.year}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-slate-400">角色 / Role</p>
                  <p className="mt-1 font-medium text-white">核心参与</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-slate-400">状态 / Status</p>
                  <p className="mt-1 font-medium text-white">本地验证</p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ProjectVisual project={project} size="hero" />
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section
            id="background"
            className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-950">
              项目背景 / Background
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              {project.background}
            </p>
          </section>
          <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-950">
              我的角色 / My Role
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-700">
              {project.role}
            </p>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ListSection
            id="responsibilities"
            title="我的职责 / Responsibilities"
            items={project.responsibilities}
          />
          <ListSection
            id="features"
            title="核心功能 / Core Features"
            items={project.features}
          />
        </div>

        <section
          id="architecture"
          className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-slate-950">
            技术架构 / Architecture
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {project.architecture.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-xs font-medium text-blue-600">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="challenges"
          className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-slate-950">
            技术难点与解决方案 / Challenges & Solutions
          </h2>
          <div className="mt-6 space-y-4">
            {project.challenges.map((challenge, index) => (
              <div
                key={challenge}
                className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-red-500">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-600">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {project.solutions[index] ?? "方案待补充。"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <ListSection
            id="highlights"
            title="项目亮点 / Highlights"
            items={project.highlights}
          />
          <section
            id="results"
            className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-950">
              项目成果 / Results
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              {project.result}
            </p>
          </section>
          <section
            id="reflection"
            className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-950">
              项目收获 / Reflection
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              {project.reflection}
            </p>
          </section>
        </div>

        {project.note ? (
          <section
            id="note"
            className="scroll-mt-28 rounded-xl border border-blue-100 bg-blue-50/70 p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-950">
              补充说明 / Note
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-700">
              {project.note}
            </p>
          </section>
        ) : null}

        <div className="h-24" />
      </PageShell>

      <nav className="fixed bottom-10 left-0 z-50 w-full flex justify-center gap-6 px-4">
        {prevSlug ? (
          <Link
            href={`/projects/${prevSlug}`}
            aria-label="上一项目"
            className="hidden h-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 px-5 text-sm font-medium text-slate-700 shadow-lg backdrop-blur transition hover:border-blue-200 hover:text-blue-600 sm:inline-flex"
          >
            上一项目
          </Link>
        ) : (
          <span className="hidden h-11 items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 text-sm font-medium text-slate-300 shadow-lg sm:inline-flex">
            上一项目
          </span>
        )}
        <Link
          href="/projects"
          aria-label="返回项目列表"
          className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white shadow-lg transition hover:bg-blue-600"
        >
          返回列表
        </Link>
        {nextSlug ? (
          <Link
            href={`/projects/${nextSlug}`}
            aria-label="下一项目"
            className="hidden h-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 px-5 text-sm font-medium text-slate-700 shadow-lg backdrop-blur transition hover:border-blue-200 hover:text-blue-600 sm:inline-flex"
          >
            下一项目
          </Link>
        ) : (
          <span className="hidden h-11 items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 text-sm font-medium text-slate-300 shadow-lg sm:inline-flex">
            下一项目
          </span>
        )}
      </nav>
    </>
  );
}
