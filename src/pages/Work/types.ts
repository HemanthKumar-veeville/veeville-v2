export interface Slide {
  image: string;
  alt: string;
}

export interface TabItem {
  id: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

export interface CarouselProject extends Project {
  isActive?: boolean;
}

export interface RelatedProject {
  imageUrl: string;
  title: string;
  description: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface FooterSection {
  title: string;
  text: string;
  link?: string;
}

export interface CopyrightLink {
  text: string;
  href: string;
}

export interface Copyright {
  text: string;
  links: CopyrightLink[];
}

export interface SectionBlock {
  heading: string;
  description: string;
  items: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
} 