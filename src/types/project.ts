export interface ProjectPhoto {
  url: string;
  caption?: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  photos?: ProjectPhoto[];
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  featured: boolean;
  date: string;
} 