import type { TimelineMilestone } from "@/lib/types";

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "usm",
    year: "2013-2018",
    title: "Computer Science Degree",
    organization: "University of Southern Maine",
    summary:
      "Built formal computer science fundamentals, deployed my first production website, and worked on game projects in the CI2 lab on the USM campus.",
    techHighlights: ["C#", "Unity", "Web Fundamentals"]
  },
  {
    id: "tyler-intern",
    year: "2017",
    title: "Software Development Intern",
    organization: "Tyler Technologies",
    summary:
      "Designed and shipped internal web tools that reduced daily operational friction for hosting teams.",
    techHighlights: ["C#", "ASP.NET", "SQL"]
  },
  {
    id: "tyler-senior",
    year: "2018-2022",
    title: "DevOps Engineer -> Senior DevOps Engineer",
    organization: "Tyler Technologies",
    summary:
      "Led full-stack feature work, supported production systems, and became the primary developer for user-facing experience improvements.",
    techHighlights: ["GraphQL", "Kubernetes", "PostgreSQL"]
  },
  {
    id: "blue-rabbit",
    year: "2022-2024",
    title: "Senior Engineer -> Tech Lead",
    organization: "Blue Rabbit Veterinary",
    summary:
      "Led Practice Portal delivery, built Salesforce-integrated order approval flows, and implemented Kafka-backed event workflows while scaling architecture and team delivery standards.",
    techHighlights: ["React", "Node.js", "Salesforce", "Kafka", "MongoDB"]
  },
  {
    id: "tyler-return",
    year: "2024-Present",
    title: "Senior Full Stack Engineer",
    organization: "Tyler Technologies",
    summary:
      "Returned with expanded leadership and product experience to modernize existing products and launch new initiatives.",
    techHighlights: ["React", "TypeScript", "Express", "TanStack Query", "AWS"]
  }
];
