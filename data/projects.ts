import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "aiops-decision-system",
    title: "基于 Spring AI 与 MCP 协议的智能 AIOps 决策系统",
    shortTitle: "Intelligent AIOps Decision System",
    shortDescription:
      "基于 Spring AI、MCP、RAG 和多 Agent 流程的智能运维告警分析系统。",
    tags: ["Spring AI", "AIOps", "RAG", "MCP", "Milvus", "SSE"],
    type: "AI Agent / AIOps",
    year: "2026",
    duration: "2026.01 - 2026.03",
    role:
      "参与 Agent 分析流程搭建、工具封装、RAG 知识库链路、接口联调和页面展示配合。",
    status:
      "本地开发与功能验证阶段，重点展示 AI Agent 到 AIOps 告警分析场景的工程化闭环。",
    techStack: [
      "Spring Boot",
      "Spring AI Alibaba",
      "DashScope",
      "Milvus",
      "RAG",
      "Multi-Agent",
      "MCP",
      "SSE",
    ],
    overview:
      "面向运维告警分析场景，搭建一个可读取告警、检索内部运维文档、查询日志和监控信息，并辅助生成告警分析报告的智能运维系统。",
    background:
      "传统告警处理依赖人工查看监控、日志和内部文档，排查链路分散且耗时。该项目尝试把大模型、RAG 知识库和工具调用能力接入运维分析流程，让系统能够围绕告警生成更结构化的分析过程和报告。",
    responsibilities: [
      "参与 Supervisor / Planner / Executor 多 Agent 分析流程设计与联调",
      "将时间查询、文档检索、Prometheus 活跃告警查询、日志查询封装为 Spring AI Tool",
      "参与 RAG 运维知识库链路搭建，包括文档上传、分片、向量化和 Milvus 检索",
      "配合完成模型回答、分析报告和前端页面展示的接口联调",
      "使用 SSE 支持长文本分析过程的流式返回",
    ],
    features: [
      "告警输入与分析任务创建",
      "内部运维文档检索和 TopK 召回",
      "Prometheus 活跃告警查询",
      "日志查询与工具调用结果汇总",
      "多 Agent 协作生成告警分析报告",
      "SSE 流式返回模型回答和分析报告",
    ],
    highlights: [
      "基于 Spring AI Alibaba Agent Framework 组合 Supervisor、Planner、Executor 三类 Agent",
      "实现任务规划 -> 工具执行 -> 结果反馈 -> 报告生成的基础闭环",
      "通过 MCP Client 接入外部工具能力，扩展系统可调用的工具边界",
      "使用 DashScope Embedding 与 Milvus 构建运维知识库检索链路",
      "通过 SSE 改善长文本报告生成时的等待体验",
    ],
    challenges: [
      "多 Agent 职责边界设计不清晰时，容易出现任务规划和工具执行职责混杂",
      "工具调用结果如果直接拼接给模型，容易造成信息噪声和上下文不可控",
      "RAG 检索结果需要真正辅助告警分析，而不是只提供泛化背景材料",
      "长文本分析报告生成耗时较长，用户等待体验不稳定",
    ],
    solutions: [
      "设计 Supervisor / Planner / Executor 的职责分工，分别负责调度、规划和执行",
      "将工具结果整理为结构化输出，再交给后续分析流程消费",
      "文档上传后进行自动分片、向量化并写入 Milvus，通过 TopK 检索辅助告警判断",
      "使用 SSE 分块返回模型回答和分析报告，让用户能看到持续生成过程",
    ],
    architecture: [
      "前端页面 -> AIOps 分析接口",
      "Spring Boot 服务 -> Spring AI Alibaba Agent Framework",
      "Supervisor -> Planner -> Executor",
      "Spring AI Tools -> 时间查询 / Prometheus 查询 / 日志查询 / 文档检索",
      "文档上传 -> DashScope Embedding -> Milvus 向量库 -> RAG 检索",
      "模型分析结果 -> SSE 流式返回 -> 前端报告展示",
    ],
    result:
      "完成了从告警输入、任务规划、工具调用、知识库检索到分析报告生成的基础闭环，可用于展示 AI Agent 在运维场景中的工程化落地思路。",
    reflection:
      "通过该项目，我进一步理解了 Agent 流程设计、RAG 检索质量、工具调用结构化输出和长任务交互体验之间的关系。",
    note:
      "项目当前以本地开发和功能验证为主，重点体现 AI Agent 与 AIOps 业务场景结合的工程能力。",
    visualType: "aiops",
    visual: [
      {
        src: "/images/projects/aiops-visual.svg",
        alt: "AIOps Agent workflow visual panel",
        width: 960,
        height: 540,
      },
    ],
  },
  {
    slug: "local-life-service-platform",
    title: "仿大众点评本地生活服务平台",
    shortTitle: "Local Life Service Platform",
    shortDescription:
      "围绕登录认证、Redis 缓存、Lua 秒杀和订单流转实现的 Java 后端项目。",
    tags: ["Java", "Spring Boot", "Redis", "Lua", "JWT", "MySQL"],
    type: "Java Backend",
    year: "2025",
    duration: "2025.10 - 2025.12",
    role: "负责用户认证、优惠券秒杀、店铺缓存、订单状态流转等模块。",
    status:
      "本地项目版本，重点展示 Java 后端接口设计、高并发秒杀、Redis 缓存治理和订单状态管理能力。",
    techStack: [
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Redis",
      "JWT",
      "Nginx",
      "Lua",
      "Spring Task",
    ],
    overview:
      "实现用户登录、店铺查询、优惠券秒杀、订单管理等核心功能，重点围绕高并发秒杀、缓存稳定性和订单状态流转进行设计。",
    background:
      "本地生活服务平台包含登录认证、商铺查询、优惠券抢购和订单管理等典型后端业务。项目通过模拟高并发秒杀和热点数据访问，重点训练 Java 后端在缓存、并发和业务一致性上的设计能力。",
    responsibilities: [
      "负责 JWT 登录认证与用户上下文传递",
      "负责店铺数据缓存、缓存穿透和缓存击穿处理",
      "负责优惠券秒杀库存校验、扣减和一人一单判断",
      "负责订单状态流转设计和超时未支付订单关闭",
      "参与接口调试、数据库表设计和核心业务流程验证",
    ],
    features: [
      "用户登录与 JWT 鉴权",
      "普通用户和商家角色区分",
      "店铺查询与热点数据缓存",
      "优惠券秒杀与下单记录校验",
      "订单创建、支付状态流转和超时关闭",
      "Redis 缓存空值、逻辑过期和 Lua 原子操作",
    ],
    highlights: [
      "基于 JWT 实现登录态校验，并通过角色字段区分普通用户和商家权限",
      "使用 Redis 缓存库存和用户下单记录",
      "通过 Lua 脚本完成库存校验、扣减和一人一单判断，保证高并发场景下操作原子性",
      "针对热点店铺数据使用逻辑过期降低缓存击穿风险",
      "针对非法查询使用缓存空值减少缓存穿透",
      "使用 Spring Task 定时关闭超时未支付订单",
    ],
    challenges: [
      "高并发秒杀下容易出现库存超卖问题",
      "一人一单判断需要和库存扣减保持原子性",
      "热点店铺数据在缓存失效时容易导致缓存击穿",
      "非法查询可能持续打到数据库并造成缓存穿透",
      "订单超时未支付需要可靠的后台处理机制",
    ],
    solutions: [
      "使用 Redis 存储库存和用户下单记录，降低数据库瞬时压力",
      "使用 Lua 脚本保证库存校验、扣减和一人一单判断的原子性",
      "热点数据使用逻辑过期策略，降低缓存击穿风险",
      "非法查询缓存空值，减少无效请求对数据库的访问",
      "使用 Spring Task 定时扫描并关闭超时未支付订单",
    ],
    architecture: [
      "前端请求 -> Nginx -> Spring Boot REST API",
      "JWT 拦截器 -> 用户身份解析 -> ThreadLocal 用户上下文",
      "业务服务层 -> MyBatis -> MySQL",
      "店铺缓存 / 秒杀库存 / 下单记录 -> Redis",
      "Lua 脚本 -> 原子校验库存与一人一单",
      "Spring Task -> 定时处理超时未支付订单",
    ],
    result:
      "完成了登录认证、店铺缓存、优惠券秒杀和订单状态流转等核心模块，能够清晰展示后端业务建模、缓存治理和并发一致性处理能力。",
    reflection:
      "该项目让我更系统地理解了 Redis 在真实业务中的使用方式，也加深了对缓存穿透、击穿、雪崩和高并发秒杀一致性问题的理解。",
    note:
      "项目为本地学习与实践版本，重点用于展示 Java 后端核心业务能力和高并发缓存方案。",
    visualType: "backend",
    visual: [
      {
        src: "/images/projects/backend-visual.svg",
        alt: "Backend cache and order flow visual panel",
        width: 960,
        height: 540,
      },
    ],
  },
  {
    slug: "bird-voice-recognition",
    title: "鸟声识别 Web 与移动端系统",
    shortTitle: "Bird Voice Recognition System",
    shortDescription:
      "将 PyTorch 鸟声识别模型封装为 FastAPI 服务，并接入 Web 与 Android App。",
    tags: ["FastAPI", "PyTorch", "Vue", "Capacitor", "Android", "AI Application"],
    type: "AI Application Engineering",
    year: "2026",
    duration: "2025.06 - 2026.05",
    role:
      "负责需求设计、模型推理接口封装、前后端联调、移动端打包和本地部署调试。",
    status:
      "当前项目为本地部署版本，Web 端和 Android App 可在同一局域网内调用本地 FastAPI 推理服务。",
    techStack: [
      "Vue",
      "TypeScript",
      "FastAPI",
      "Python",
      "PyTorch",
      "RESTful API",
      "Capacitor",
      "Android",
      "Deep Learning",
    ],
    overview:
      "一个基于深度学习模型的鸟类声音识别系统，支持 Web 端和 Android App 端上传鸟类音频，并通过本地 FastAPI 推理服务返回识别结果。",
    background:
      "鸟声识别模型如果只停留在离线脚本层面，很难被普通用户实际使用。该项目将本地 PyTorch 模型封装成可调用服务，并通过 Web 和移动端界面完成音频上传、推理和结果展示，重点训练 AI 模型到应用系统的工程化闭环。",
    responsibilities: [
      "负责识别流程需求设计和端到端调用链路设计",
      "使用 FastAPI 封装 PyTorch 模型推理接口",
      "完成 Web 前端音频上传、结果展示与接口联调",
      "使用 Capacitor 将前端项目打包为 Android App",
      "解决局域网联调、跨域、文件上传和移动端访问本地服务等问题",
    ],
    features: [
      "Web 端上传鸟类音频文件",
      "Android App 端上传音频并调用同一套后端接口",
      "FastAPI 接收文件并调用 PyTorch 模型推理",
      "返回鸟种预测结果并在前端展示",
      "支持局域网内 Web 与 App 共同访问本地推理服务",
    ],
    highlights: [
      "完成从音频上传、后端推理、结果返回到前端展示的完整链路",
      "使用 FastAPI 封装 PyTorch 模型推理接口",
      "使用 Capacitor 将前端项目打包为 Android App",
      "解决移动端 App 访问本地服务、局域网联调、跨域和文件上传等问题",
      "Web 端和 App 端通过统一 RESTful API 调用本地推理服务",
    ],
    challenges: [
      "模型只能本地推理，暂未公网部署",
      "App 端 localhost 无法访问电脑上的 FastAPI 服务",
      "移动端 WebView 文件上传存在兼容性问题",
      "FastAPI 与前端在跨域和文件上传上需要稳定联调",
      "Web 端和 App 端需要共用同一套后端接口",
    ],
    solutions: [
      "使用 FastAPI 封装 PyTorch 模型推理接口，提供统一 RESTful API",
      "App 端使用电脑局域网 IP 访问后端服务，而不是使用 localhost",
      "配置 Android cleartext traffic 和网络权限，允许本地 HTTP 调试",
      "使用 FormData 上传音频文件，避免手动设置 Content-Type",
      "Web 和 App 复用同一套 API 调用逻辑，减少接口分叉",
    ],
    architecture: [
      "Web / Android App -> 音频文件上传",
      "Vue + TypeScript -> RESTful API 调用",
      "Capacitor -> Android WebView 打包",
      "FastAPI -> 文件接收与参数校验",
      "PyTorch 模型 -> 本地推理 -> 鸟种识别结果",
      "识别结果 -> Web/App 前端展示",
    ],
    result:
      "完成了 Web 端与 Android App 端共用本地 FastAPI 推理服务的识别链路，能够展示 AI 模型从本地推理到多端应用落地的完整工程流程。",
    reflection:
      "该项目让我更关注 AI 应用工程化中的接口封装、移动端联调、文件上传、跨域处理和本地部署限制，而不仅是模型本身的准确率。",
    note:
      "当前为本地部署版本，重点展示 AI 模型到 Web 和移动端应用的工程化闭环，不是公网 Demo。",
    visualType: "audio",
    visual: [
      {
        src: "/images/projects/audio-visual.svg",
        alt: "Audio waveform and inference visual panel",
        width: 960,
        height: 540,
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
