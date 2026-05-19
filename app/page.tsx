import type { Metadata } from "next";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FocusAreas } from "@/components/home/FocusAreas";
import { HeroSection } from "@/components/home/HeroSection";
import { PortfolioBridge } from "@/components/home/PortfolioBridge";
import { TechKeywords } from "@/components/home/TechKeywords";

export const metadata: Metadata = {
  title: "张晨晨 / Marco - Java 后端开发与 AI 应用开发作品集",
  description:
    "张晨晨的个人作品集网站，展示 Java 后端开发、AI Agent、智能运维和鸟声识别 AI 应用工程化项目。",
  keywords: [
    "Java",
    "Spring Boot",
    "Redis",
    "MySQL",
    "AI Agent",
    "RAG",
    "MCP",
    "FastAPI",
    "PyTorch",
    "Vue",
    "Next.js",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioBridge />
      <FocusAreas />
      <FeaturedProjects />
      <TechKeywords />
    </>
  );
}
