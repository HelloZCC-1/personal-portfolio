import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "张晨晨",
  englishName: "Marco",
  displayName: "Marco",
  title: "Java Backend Developer / AI Application Developer",
  location: "China / Chongqing",
  email: "Zhangchenchenone@gmail.com",
  portfolioUrl: "https://personal-portfolio-lac-three-70.vercel.app",
  summary:
    "我是一名信息与通信工程硕士在读学生，专注于 Java 后端开发、AI Agent 应用与智能音频识别系统的工程化落地。",
  englishSummary:
    "I build reliable backend systems and practical AI applications.",
  targetRoles: ["Java 后端开发", "AI 应用开发"],
  education: [
    {
      school: "延安大学",
      degree: "本科",
      major: "通信工程",
      period: "2019.09 - 2023.07",
    },
    {
      school: "重庆邮电大学",
      degree: "硕士在读",
      major: "信息与通信工程",
      period: "2024.09 - 至今",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/HelloZCC-1" },
    { label: "博客 Blog", href: "https://hellozcc-1.github.io/" },
  ],
};
