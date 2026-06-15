import type { TimelineMilestone } from '@/lib/types';

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'usm',
    year: '2013-2018',
    title: 'Computer Science Degree',
    organization: 'University of Southern Maine',
    summary:
      'Built formal computer science fundamentals, deployed my first production website, and worked on game projects in the CI2 lab on the USM campus.',
    techHighlights: ['C#', 'Unity', 'Web Fundamentals']
  },
  {
    id: 'tyler-intern',
    year: '2017',
    title: 'Software Development Intern',
    organization: 'Tyler Technologies',
    summary: 'Designed and shipped internal web tools that reduced daily operational friction for hosting teams.',
    techHighlights: ['C#', 'ASP.NET', 'SQL']
  },
  {
    id: 'tyler-senior',
    year: '2018-2022',
    title: 'DevOps Engineer -> Senior DevOps Engineer',
    organization: 'Tyler Technologies',
    summary:
      'Led full-stack feature work, supported production systems, and became the primary developer for user-facing experience improvements.',
    techHighlights: ['GraphQL', 'Kubernetes', 'PostgreSQL']
  },
  {
    id: 'blue-rabbit',
    year: '2022-2024',
    title: 'Senior Engineer -> Tech Lead',
    organization: 'Blue Rabbit Veterinary',
    summary:
      'Led Practice Portal delivery, built Salesforce-integrated order approval flows, and implemented Kafka-backed event workflows while scaling architecture and team delivery standards.',
    techHighlights: ['React', 'Node.js', 'Salesforce', 'Kafka', 'MongoDB']
  },
  {
    id: 'tyler-return',
    year: '2024-2026',
    title: 'Senior Full Stack Engineer',
    organization: 'Tyler Technologies',
    summary:
      'Returned with expanded leadership and product experience to modernize existing products and launch new initiatives.',
    techHighlights: ['React', 'TypeScript', 'Express', 'TanStack Query', 'AWS']
  },
  {
    id: 'wedgewood-join',
    year: '2026-Present',
    title: 'AWS Connect Engineer',
    organization: 'Wedgewood',
    summary:
      'In June 2026, after almost two years back at Tyler Technologies I decided to take an opportunity to at Wedgewood Pharmacy to rejoin friends and to get back into the techstack I prefer. Starting out I am focusing on learning and improving the AWS Connect functionality within our team and then I will be branching out to work on more projects in the future.',
    techHighlights: ['React', 'TypeScript', 'AWS', 'CI/CD', 'Kafka', 'MongoDB', 'Express']
  }
];
