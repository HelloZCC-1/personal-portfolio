import Image from "next/image";
import { BotanicalAccent } from "@/components/common/BotanicalAccent";
import { ButtonLink } from "@/components/common/ButtonLink";
import { FloralVisual } from "@/components/common/FloralVisual";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-white">
      <BotanicalAccent className="right-0 top-12 h-56 w-56 opacity-70" />
      <FloralVisual className="right-6 top-24 h-64 w-64 opacity-60" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-200 via-violet-200 to-transparent opacity-45 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600">
            Portfolio / 求职作品集
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-slate-950 sm:text-7xl">
            张晨晨 / Marco
          </h1>
          <p className="mt-5 text-2xl font-medium text-slate-800">
            Java 后端开发 · AI 应用开发
          </p>
          <div className="mt-6 max-w-2xl space-y-3 text-lg leading-8 text-slate-600">
            <p>{profile.summary}</p>
            <p>{profile.englishSummary}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">查看项目 Projects</ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              查看简历 Resume
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              联系我 Contact
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-7 shadow-2xl shadow-slate-950/25">
            <BotanicalAccent
              variant="dark"
              className="right-4 top-6 h-48 w-48 opacity-80"
            />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-medium text-blue-200">
                    Personal Brand
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold text-white">
                    Marco
                  </h2>
                  <p className="mt-3 text-sm text-slate-300">
                    硕士在读 · Java / AI Application
                  </p>
                </div>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-xl shadow-blue-950/30">
                  <Image
                    src="/images/avatar/avatar.png"
                    alt="Marco avatar"
                    fill
                    priority
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-7 inline-flex rounded-full border border-emerald-200/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100">
                Available for Internship
              </div>

              <div className="mt-7 space-y-4">
                {[
                  "Java Backend Systems",
                  "AI Agent Engineering",
                  "RAG & MCP Tooling",
                  "Audio Recognition Applications",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-100 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm leading-7 text-slate-300">
                  以可维护的后端系统为基础，把 AI 能力接入真实业务流程，
                  关注稳定性、可解释流程与端到端交付。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
