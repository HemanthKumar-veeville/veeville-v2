import React from "react";
import { useCarousel } from "../../lib/hooks/useCarousel";
import { RelatedProject } from "../../pages/Work/types";

interface RelatedProjectsCarouselProps {
  relatedProjects: RelatedProject[];
}

const RelatedProjectsCarousel: React.FC<RelatedProjectsCarouselProps> = ({
  relatedProjects,
}) => {
  // Project cards carousel
  const { trackRef, trackStyle, clonedItems } = useCarousel({
    items: relatedProjects,
    scrollInterval: 3000,
  });

  return (
    <section className="project-cards-carousel">
      <h2 className="section-title text-[32px] font-bold text-[#333333]">
        Related Projects
      </h2>
      <div className="carousel-wrapper">
        <div ref={trackRef} className="carousel-track" style={trackStyle}>
          {clonedItems.map((project: RelatedProject, index: number) => (
            <div className="carousel-card" key={`${project.title}-${index}`}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjectsCarousel;
