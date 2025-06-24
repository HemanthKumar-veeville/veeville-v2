export interface RelatedProject {
  image: string;
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;  // unique identifier for the project
  title: string;
  bannerImage: string;
  question: string;
  description: string;
  mainImage: string;
  additionalImages?: string[];
  relatedProjects: RelatedProject[];
  customCSS?: string;  // optional custom styles for specific projects
  videoUrl?: string;  // optional video URL for projects with video content
  stats?: {
    label: string;
    value: string;
  }[];
  // Add any other common fields across projects
} 