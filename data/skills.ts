import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description: "Java 服务端开发、接口设计与登录鉴权。",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Spring Boot", level: "Comfortable" },
      { name: "Spring MVC", level: "Comfortable" },
      { name: "MyBatis", level: "Comfortable" },
      { name: "RESTful API", level: "Comfortable" },
      { name: "JWT", level: "Comfortable" },
    ],
  },
  {
    title: "Database & Cache",
    description: "数据库设计、Redis 缓存与常见缓存稳定性问题处理。",
    skills: [
      { name: "MySQL", level: "Comfortable" },
      { name: "Redis", level: "Comfortable" },
      { name: "缓存穿透", level: "Comfortable" },
      { name: "缓存击穿", level: "Comfortable" },
      { name: "缓存雪崩", level: "Learning" },
      { name: "Lua", level: "Comfortable" },
    ],
  },
  {
    title: "AI Application",
    description: "AI Agent、RAG 与模型 API 工程化接入。",
    skills: [
      { name: "Spring AI", level: "Learning" },
      { name: "RAG", level: "Comfortable" },
      { name: "Milvus", level: "Learning" },
      { name: "Embedding", level: "Learning" },
      { name: "Agent", level: "Comfortable" },
      { name: "MCP", level: "Learning" },
      { name: "DashScope", level: "Learning" },
    ],
  },
  {
    title: "Frontend",
    description: "Web 应用界面与个人作品集展示。",
    skills: [
      { name: "Vue", level: "Comfortable" },
      { name: "TypeScript", level: "Comfortable" },
      { name: "Next.js", level: "Comfortable" },
      { name: "Tailwind CSS", level: "Comfortable" },
    ],
  },
  {
    title: "Tools",
    description: "开发、部署、压测与工程协作工具。",
    skills: [
      { name: "Git", level: "Comfortable" },
      { name: "Linux", level: "Comfortable" },
      { name: "Docker", level: "Learning" },
      { name: "Nginx", level: "Comfortable" },
      { name: "JMeter", level: "Learning" },
      { name: "Maven", level: "Comfortable" },
    ],
  },
];
