export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  englishName: string;
  displayName: string;
  title: string;
  location: string;
  email: string;
  portfolioUrl: string;
  phone?: string;
  summary: string;
  englishSummary: string;
  targetRoles: string[];
  education: {
    school: string;
    degree: string;
    major: string;
    period: string;
  }[];
  socials: SocialLink[];
};
