"use client";

import { useEffect, useState } from "react";

type CaseStudyNavProps = {
  sections: {
    id: string;
    label: string;
  }[];
};

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Case study section navigation"
      className="hidden xl:block fixed right-6 top-32 z-40 w-56 rounded-xl border border-slate-200 bg-white/85 p-4 text-sm shadow-lg backdrop-blur"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        Sections
      </p>
      <div className="flex flex-col gap-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`transition hover:text-blue-600 ${
              activeId === section.id
                ? "font-semibold text-blue-600"
                : "text-slate-500"
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
