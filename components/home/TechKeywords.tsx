import { SectionHeader } from "@/components/common/SectionHeader";

const keywords = [
  "Java",
  "Spring Boot",
  "Redis",
  "MySQL",
  "Spring AI",
  "RAG",
  "MCP",
  "Milvus",
  "FastAPI",
  "PyTorch",
  "Vue",
  "Next.js",
];

export function TechKeywords() {
  return (
    <section className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Keywords"
          title="技术关键词 / Tech Keywords"
          description="这些关键词覆盖当前作品集中的主要工程能力与 AI 应用实践。"
        />
        <div className="mt-10 flex w-full flex-wrap gap-3">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
