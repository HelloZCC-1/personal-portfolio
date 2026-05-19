import type { Metadata } from "next";
import { BotanicalAccent } from "@/components/common/BotanicalAccent";
import { PageShell } from "@/components/common/PageShell";
import { SectionHeader } from "@/components/common/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "联系方式 / Contact - Marco",
  description: "通过邮箱、GitHub 或博客联系 Marco。",
};

export default function ContactPage() {
  const mailHref = `mailto:${profile.email}`;

  return (
    <PageShell>
      <div className="relative">
        <BotanicalAccent className="-right-6 -top-8 h-48 w-48 opacity-50" />
        <SectionHeader
          eyebrow="Contact"
          title="联系方式 / Contact"
          description="如果你正在寻找 Java 后端、AI Agent 或 AI 应用工程化方向的实习生，欢迎通过邮箱联系我。"
        />
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Open to internship opportunities in backend engineering and AI
          application development.
        </p>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-2xl shadow-slate-950/15">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-200">
            Let&apos;s Talk
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            让我们聊聊实习机会 / Let&apos;s Talk
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            如果你正在寻找 Java 后端、AI Agent 或 AI
            应用工程化方向的实习生，欢迎通过邮箱联系我。
          </p>
          <div className="mt-6">
            <a
              href={mailHref}
              aria-label="发送邮件给 Marco"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-slate-950 transition hover:bg-blue-50 hover:text-blue-700"
            >
              发送邮件 Mail Me
            </a>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        <a
          href={mailHref}
          aria-label="通过邮件联系 Marco"
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
        >
          <h2 className="text-lg font-semibold text-slate-950">Email</h2>
          <p className="mt-3 break-all text-sm font-medium text-blue-600">
            {profile.email}
          </p>
        </a>
        {profile.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`打开 ${social.href.includes("github.com") ? "GitHub" : "Blog"}`}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-950">
              {social.href.includes("github.com") ? "GitHub" : "Blog"}
            </h2>
            <p className="mt-3 break-all text-sm font-medium text-blue-600">
              {social.href}
            </p>
          </a>
        ))}
        {profile.portfolioUrl ? (
          <a
            href={profile.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="打开 Portfolio 网站"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-950">Portfolio</h2>
            <p className="mt-3 break-all text-sm font-medium text-blue-600">
              {profile.portfolioUrl}
            </p>
          </a>
        ) : null}
      </div>
    </PageShell>
  );
}
