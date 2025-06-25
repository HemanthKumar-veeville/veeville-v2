import React from "react";
import ScrollToTop from "../../components/ui/ScrollToTop";
import RouteTransition from "../../components/ui/RouteTransition";
import "./ProjectPage.css";
import RelatedProjectsCarousel from "../../components/ui/RelatedProjectsCarousel";
import { relatedProjects } from "../Work/data";

const ProjectPage: React.FC = () => {
  return (
    <RouteTransition>
      <ScrollToTop />
      <RelatedProjectsCarousel relatedProjects={relatedProjects} />
    </RouteTransition>
  );
};

export default ProjectPage;
