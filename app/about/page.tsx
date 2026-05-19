import Image from "next/image";
import { BotanicalAccent } from "@/components/common/BotanicalAccent";
import { FloralVisual } from "@/components/common/FloralVisual";
import { PageShell } from "@/components/common/PageShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <PageShell>
      <div className="relative">
        <BotanicalAccent className="-right-8 -top-8 h-48 w-48 opacity-40" />
        <SectionHeader
          eyebrow="About"
          title="关于我 / About Me"
          description="信息与通信工程硕士在读，持续沉淀 Java 后端开发能力，并围绕 AI Agent 与鸟声识别方向做工程化实践。"
        />
      </div>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr]">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-9">
          <FloralVisual className="right-0 top-0 h-48 w-48 opacity-45" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src="/images/avatar/avatar.png"
                alt="Marco avatar"
                fill
                sizes="96px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-blue-600">Marco</p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                张晨晨
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Java 后端开发 / AI 应用开发
              </p>
            </div>
          </div>
          <div className="relative mt-7 space-y-3 text-sm leading-8 text-slate-600">
            <p>{profile.summary}</p>
            <p>{profile.englishSummary}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-950">
              教育经历 / Education
            </h2>
            <div className="mt-5 space-y-5">
              {profile.education.map((item) => (
                <div key={`${item.school}-${item.period}`}>
                  <p className="font-medium text-slate-900">{item.school}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.degree} · {item.major}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-950">
              研究成果 / Research
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              发表专利《一种基于渐进式多尺度特征融合与坐标注意力的鸟种识别方法》。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              该方向与鸟声识别系统的工程化实践相互补充，覆盖从识别方法到 Web
              与移动端应用落地的完整链路。
            </p>
          </section>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-slate-950">
          能力主线 / Capability Map
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            "Java 后端接口设计、认证鉴权、缓存治理与高并发业务处理",
            "AI Agent、RAG、MCP 工具调用与智能运维分析流程实践",
            "鸟声识别方向的模型推理服务、Web 前端与移动端 App 工程化经验",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
