export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SeoConfig = {
  title: string;
  titleTemplate: string;
  description: string;
  ogImage: string;
};

export type ThemeTokens = {
  accent: string;
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  website?: string;
  availability?: string;
  ctaLinks: CtaLink[];
  socialLinks: SocialLink[];
  seo: SeoConfig;
  themeTokens: ThemeTokens;
};

export type ProjectCard = {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type ExperienceHighlight = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  tech: string[];
};
