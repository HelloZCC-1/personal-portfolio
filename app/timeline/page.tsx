import { BotanicalAccent } from "@/components/common/BotanicalAccent";
import { PageShell } from "@/components/common/PageShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { timeline } from "@/data/timeline";

export default function TimelinePage() {
  return (
    <PageShell>
      <div className="relative">
        <BotanicalAccent className="-right-8 -top-8 h-48 w-48 opacity-40" />
        <SectionHeader
          eyebrow="Timeline"
          title="成长经历 / Timeline"
          description="从本科通信工程基础，到硕士阶段的信息与通信工程学习，再到 Java 后端和 AI 应用项目实践。"
        />
      </div>
      <div className="relative">
        <div className="absolute left-[168px] top-0 hidden h-full w-px bg-slate-200 md:block" />
        <div className="space-y-6">
          {timeline.map((item) => (
            <article
              key={`${item.date}-${item.title}`}
              className="grid gap-4 md:grid-cols-[140px_32px_1fr]"
            >
              <p className="text-sm font-medium text-blue-600 md:pt-6 md:text-right">
                {item.date}
              </p>
              <div className="relative hidden md:block">
                <span className="absolute left-1/2 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-blue-500 shadow-sm" />
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                <h2 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
