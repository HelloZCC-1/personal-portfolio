export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectVisualType = "aiops" | "backend" | "audio";

export type ProjectVisualImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  tags: string[];
  type: string;
  year: string;
  duration?: string;
  role: string;
  status: string;
  techStack: string[];
  overview: string;
  background: string;
  responsibilities: string[];
  features: string[];
  highlights: string[];
  challenges: string[];
  solutions: string[];
  architecture: string[];
  result: string;
  reflection: string;
  note: string;
  visualType: ProjectVisualType;
  visual: ProjectVisualImage[];
  links?: ProjectLink[];
};
