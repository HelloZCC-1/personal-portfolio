import type { Metadata } from "next";
import { PageShell } from "@/components/common/PageShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "简历 / Resume - Marco",
  description: "在线预览或下载 Marco 的最新简历。",
};

export default function ResumePage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Resume"
        title="简历 / Resume"
        description="你可以在线预览或下载我的最新简历。"
      />
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          简历内容会持续更新，建议以本页面提供的 PDF 版本为准。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={siteConfig.resumePath}
            download
            aria-label="下载简历 PDF"
            className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            下载简历 Resume
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="在线预览简历 PDF"
            className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-slate-900 transition hover:border-blue-200 hover:text-blue-600"
          >
            在线预览 Preview
          </a>
        </div>
      </div>
    </PageShell>
  );
}
