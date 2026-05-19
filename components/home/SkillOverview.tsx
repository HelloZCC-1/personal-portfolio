import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { skillCategories } from "@/data/skills";

export function SkillOverview() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="技术栈 / Skills"
          description="围绕 Java 后端、数据库缓存、AI Agent、RAG 与前端工程化构建能力栈。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {skillCategories.map((category) => (
            <Link
              key={category.title}
              href="/skills"
              className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-sm"
            >
              <h2 className="text-base font-semibold text-slate-950">
                {category.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
