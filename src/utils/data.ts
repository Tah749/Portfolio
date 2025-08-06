import { Project } from '../types/project';
import { SiteConfig } from '../types/site';
import { getProjectDescription } from './github';

export async function getProjects(): Promise<Project[]> {
  const projects = await import('../data/projects.json');
  const projectsList = projects.default.projects;
  
  // Sort projects by date (newer first)
  const sortedProjects = [...projectsList].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Descending order (newer first)
  });
  
  // Explicitly cast each project to ensure type compatibility
  return sortedProjects.map(project => ({
    ...project,
    githubUrl: project.githubUrl as string | null,
    liveUrl: project.liveUrl as string | null
  })) as Project[];
}

export async function getEnhancedProjects(): Promise<Project[]> {
  const projects = await import('../data/projects.json');
  const baseProjects = projects.default.projects;
  
  // Sort projects by date (newer first) before enhancing
  const sortedProjects = [...baseProjects].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Descending order (newer first)
  });
  
  // Enhance projects with README content from GitHub (client-side only)
  const enhancedProjects = await Promise.all(
    sortedProjects.map(async (project) => {
      if (project.githubUrl) {
        const readmeDescription = await getProjectDescription(
          project.githubUrl, 
          project.longDescription || project.description
        );
        
        return {
          ...project,
          longDescription: readmeDescription
        };
      }
      
      return project;
    })
  );
  
  // Explicitly cast each project to ensure type compatibility
  return enhancedProjects.map(project => ({
    ...project,
    githubUrl: project.githubUrl as string | null,
    liveUrl: project.liveUrl as string | null
  })) as Project[];
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