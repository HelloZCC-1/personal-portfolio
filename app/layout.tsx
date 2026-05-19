import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
