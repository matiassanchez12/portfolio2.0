export interface ProjectFrontmatter {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isPublished: boolean;
}

export interface ProjectPost {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface ProjectPostPreview {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

export type ProjectStatus = "running" | "building" | "abandoned";

export interface ProjectCard {
  id: string;
  title: string;
  href?: string;
  github?: string;
  status: ProjectStatus;
  technologies: string[];
  description: string;
  diagram: React.ComponentType; // El componente SVG que hicimos
  metrics?: { label: string; value: string }[];
}

export type ProjectCardProps = ProjectCard;
