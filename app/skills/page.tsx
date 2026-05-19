import { PageShell } from "@/components/common/PageShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { skillCategories } from "@/data/skills";
import type { Skill } from "@/types/skill";

const levelWidth: Record<Skill["level"], string> = {
  Learning: "w-1/2",
  Comfortable: "w-3/4",
  Advanced: "w-full",
};

const levelLabel: Record<Skill["level"], string> = {
  Learning: "Learning",
  Comfortable: "Comfortable",
  Advanced: "Advanced",
};

export default function SkillsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Skills"
        title="技术栈 / Skills"
        description="按后端、数据库缓存、AI 应用、前端和工具链分类展示当前能力结构。"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <section
            key={category.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-950">
              {category.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {category.description}
            </p>
            <div className="mt-6 space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="rounded-lg bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium text-slate-900">
                      {skill.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {levelLabel[skill.level]}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 ${levelWidth[skill.level]}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
