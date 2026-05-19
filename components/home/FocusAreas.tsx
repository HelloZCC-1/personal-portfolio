import { SectionHeader } from "@/components/common/SectionHeader";

const focusAreas = [
  {
    title: "Java Backend Engineering",
    description: "后端接口设计、认证鉴权、缓存优化、高并发业务处理",
  },
  {
    title: "AI Agent Application",
    description: "RAG、MCP、工具调用、多 Agent 运维分析流程",
  },
  {
    title: "AI Application Engineering",
    description: "模型推理服务、Web 前端、移动端 App 落地",
  },
];

export function FocusAreas() {
  return (
    <section className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Focus"
          title="核心方向 / Focus Areas"
          description="围绕后端工程能力与 AI 应用落地能力，形成适合实习岗位展示的项目主线。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-violet-100" />
              <h2 className="mt-5 text-lg font-semibold text-slate-950">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
