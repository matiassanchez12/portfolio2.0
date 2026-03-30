import { ProjectCard } from "@/types/project";
import { CeluDiagram, ChronoDiagram, EmailApiDiagram} from "./diagrams"

export const projectsData: ProjectCard[] = [
  {
    id: 'chrono',
    title: 'Chrono Task',
    href: 'https://chrono-task-productivity.vercel.app/admin',
    status: 'running',
    technologies: ['Laravel', 'PostgreSQL', 'Redis', 'Nginx'],
    description: 'High-throughput API architecture with master-slave replication and sophisticated caching layers.',
    diagram: ChronoDiagram,
  },
  {
    id: 'youremail',
    title: 'Youremail API',
    href: 'https://youremailapi.com/',
    status: 'running',
    technologies: ['Next.js', 'SMTP', 'Material UI', 'Node.js'],
    description: 'Enterprise SMTP abstraction layer designed to decouple email delivery logic through a centralized dashboard.',
    diagram: EmailApiDiagram,
    metrics: [{ label: 'Integration', value: 'Fast' }, { label: 'Security', value: 'Proxy' }]
  },
  {
    title: "En el celu",
    href: "https://enelcelu.com", // Ajustar link real
    github: "",
    description: "Geo-targeted social ecosystem for community engagement. Features a multi-tenant architecture supporting distinct business, municipal, and institutional roles with localized content delivery.",
    status: "running",
    technologies: [
      "Next.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Material UI",
      "VPS Don Web"
    ],
    id: "1",
    diagram: CeluDiagram
  }
];
