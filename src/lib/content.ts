import siteRaw from "../content/site.json";
import projectsRaw from "../content/projects.json";
import experienceRaw from "../content/experience.json";
import type {
  ExperienceHighlight,
  ProjectCard,
  SiteConfig,
} from "../types/content";

export const siteConfig = siteRaw as SiteConfig;
export const projects = projectsRaw as ProjectCard[];
export const experience = experienceRaw as ExperienceHighlight[];
