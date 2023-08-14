export interface Image {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface IPortfolioItemInput {
  description: string;
  images: Image[];
  title: string;
  link?: string;
  href?: string;
  technologies: string[];
  type: string;
  year: number;
}

export interface IPortfolioSkillInput {
  name: string;
  slug: string;
  icon: string;
  prefix?: string;
}
