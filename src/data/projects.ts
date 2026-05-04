import { ProjectCard } from "@/types/project";
import { CeluDiagram, ChronoDiagram, EmailApiDiagram, PlattyDiagram, TesloDiagram} from "./diagrams"

export const projectsData: ProjectCard[] = [
  {
    id: 'platty',
    title: 'Platty',
    href: '',
    status: 'building',
    technologies: ['Laravel', 'PostgreSQL', 'Docker', 'Sail', 'React.js'],
    description: 'Modern SaaS platform what i am building with Laravel and Inertia.js. It features a robust multi-tenant architecture, dynamic content rendering, and a sophisticated caching strategy to ensure optimal performance and scalability.',
    diagram: PlattyDiagram,
  },
  {
    id: 'chrono',
    title: 'Chrono Task',
    href: 'https://chrono-task-productivity.vercel.app/admin',
    status: 'running',
    technologies: ['Nextjs', 'PostgreSQL', 'Prisma', 'Vercel'],
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
    id: 'teslo',
    title: 'Teslo Shop',
    href: 'https://teslo-e-shop.vercel.app/',
    status: 'running',
    technologies: ['Nextjs', 'Mongodb', 'Vercel', 'Material UI', 'Paypal SDK'],
    description: 'E-commerce created as challenge of Next.js course.',
    diagram: TesloDiagram,
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
