export type Skill = {
  name: string;
  level: "Learning" | "Comfortable" | "Advanced";
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};
