"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/project";

type ProjectVisualProps = {
  project: Project;
  size?: "card" | "hero";
};

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nOScgdmlld0JveD0nMCAwIDE2IDknIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzknIGZpbGw9JyMwZjE3MmEnLz48Y2lyY2xlIGN4PScxMicgY3k9JzInIHI9JzYnIGZpbGw9JyMyNTYzZWInIG9wYWNpdHk9Jy4zJy8+PC9zdmc+";

const variants: Record<Project["visualType"], Variants> = {
  aiops: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  },
  backend: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
  audio: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
};

function VisualTags({ project }: { project: Project }) {
  if (project.visualType === "aiops") {
    return ["RAG", "MCP", "SSE", "Tool Calling"];
  }

  if (project.visualType === "backend") {
    return ["Redis", "MySQL", "JWT", "Lua", "Order Flow"];
  }

  return ["Audio Upload", "FastAPI", "PyTorch", "Web/App", "Inference"];
}

export function ProjectVisual({ project, size = "card" }: ProjectVisualProps) {
  const height = size === "hero" ? "min-h-[320px]" : "h-48";
  const rounded = size === "hero" ? "rounded-xl" : "rounded-t-xl";
  const image = project.visual[0];

  return (
    <motion.div
      className={`relative overflow-hidden ${rounded} ${height} bg-gradient-to-br from-slate-950 via-slate-900 to-black p-5 sm:p-7`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={variants[project.visualType]}
    >
      <motion.div
        className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {image ? (
        <motion.div
          className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
          whileHover={{ scale: size === "card" ? 1.03 : 1.015 }}
          transition={{ duration: 0.25 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {VisualTags({ project }).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
