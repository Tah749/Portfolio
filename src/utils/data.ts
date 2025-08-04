import { Project } from '../types/project';
import { SiteConfig } from '../types/site';

export async function getProjects(): Promise<Project[]> {
  const projects = await import('../data/projects.json');
  return projects.default.projects;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const config = await import('../../config/site.json');
  return config.default;
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectsByCategory(projects: Project[], category: string): Project[] {
  return projects.filter(project => project.category === category);
} 