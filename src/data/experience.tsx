export type SeniorityTypes = "semisenior" | "senior" | "lead" | "fullstack";

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  seniority: SeniorityTypes;
  employmentType?: string;
  points: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Indicum Technology",
    companyUrl: "http://indicumtechnology.com.ar/",
    location: "Buenos Aires, Argentina",
    startDate: "Sep 2023",
    endDate: "Jan 2026",
    logo: "/logos/indi.png",
    seniority: "semisenior",
    employmentType: "Full Stack Developer",
    points: [
      "Developed and maintained frontend applications using React, ensuring responsive interfaces across devices.",
      "Built backend functionalities using PHP and Laravel following MVC architecture patterns.",
      "Designed and optimized SQL queries (DDL, DML) to enhance database performance.",
      "Integrated REST APIs and handled data manipulation between frontend and backend.",
      "Utilized Git for version control and participated in Agile methodologies.",
      "Applied clean code principles and best practices throughout the development lifecycle.",
    ],
    skills: ["React", "PHP", "Laravel", "SQL", "Git", "REST APIs"],
  },
  {
    title: "Frontend Developer",
    company: "Zink In Tech",
    location: "Buenos Aires, Argentina",
    startDate: "Jul 2022",
    endDate: "Jul 2024",
    logo: "/logos/zink.png",
    seniority: "semisenior",
    employmentType: "Frontend Developer",
    points: [
      "Developed complex React modules for an ERP system serving multiple clients.",
      "Participated in planning, design, and development of new features.",
      "Maintained and enhanced the company's core system functionality.",
      "Managed tasks and tracked project progress using Jira.",
      "Collaborated with cross-functional teams to deliver scalable solutions.",
    ],
    skills: ["React", "ERP Systems", "Jira", "Agile"],
  },
  {
    title: "Full Stack Programmer",
    company: "Winpax",
    location: "Buenos Aires, Argentina",
    startDate: "Aug 2021",
    endDate: "Jul 2022",
    logo: "/logos/winpax.png",
    seniority: "fullstack",
    employmentType: "Full Stack Programmer",
    points: [
      "Developed frontend interfaces using React.",
      "Implemented backend functionalities with PHP.",
      "Created and optimized SQL queries for data manipulation and reporting.",
      "Integrated libraries and frameworks to extend system capabilities.",
      "Collaborated in team settings to meet objectives and deadlines.",
    ],
    skills: ["React", "PHP", "SQL"],
  },
];
