export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  featured: boolean;
  date: string;
} 