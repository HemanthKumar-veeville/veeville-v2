import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../Work/constants";
import ScrollToTop from "../../components/ui/ScrollToTop";
import RouteTransition from "../../components/ui/RouteTransition";
import { useCarousel } from "../../lib/hooks/useCarousel";
import Footer from "@/components/ui/Footer/Footer";
import { ProjectData } from "./types";
import "./ProjectPage.css";
import RelatedProjectsCarousel from "@/components/ui/RelatedProjectsCarousel";
import {
  slides,
  tabs,
  portfolioItems,
  relatedProjects,
  sections,
  socialLinks,
} from "../Work/data";

interface ProjectPageProps {
  data: ProjectData;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Project cards carousel
  const { trackRef, trackStyle, clonedItems } = useCarousel({
    items: relatedProjects,
    scrollInterval: 3000,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const initializeStickyBar = () => {
      const stickyData = document.getElementById("stickyData");
      const footer = document.querySelector(".footer-section");
      if (!stickyData || !footer) return;

      const handleStickyBarScroll = () => {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (window.scrollY > 20) {
          stickyData.classList.remove("hidden");
        } else {
          stickyData.classList.add("hidden");
        }

        if (footerTop <= windowHeight) {
          stickyData.style.opacity = "0";
          stickyData.style.pointerEvents = "none";
        } else {
          stickyData.style.opacity = "1";
          stickyData.style.pointerEvents = "all";
        }
      };

      window.addEventListener("scroll", handleStickyBarScroll);
      return () => window.removeEventListener("scroll", handleStickyBarScroll);
    };

    initializeStickyBar();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <RouteTransition>
      <ScrollToTop />

      <RelatedProjectsCarousel relatedProjects={relatedProjects} />
    </RouteTransition>
  );
};

export default ProjectPage;
