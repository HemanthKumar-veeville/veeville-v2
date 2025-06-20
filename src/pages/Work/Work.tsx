import React, { useState, useEffect, useCallback } from "react";
import styles from "./Work.module.css";
import { slides, tabs, projects } from "./data";
import { Project } from "./types";
import Navbar from "../../components/ui/Navbar";
import Carousel from "../../components/ui/Carousel";
import TabFilter from "../../components/ui/TabFilter";
import PortfolioGrid from "../../components/ui/PortfolioGrid";

const Work: React.FC = () => {
  // State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Handle navbar sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Filter projects based on active tab
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeTab)
      );
    }
  }, [activeTab]);

  // Toggle search overlay
  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles.workPage}>
      <Navbar
        isSticky={isNavbarSticky}
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
        onToggleMenu={toggleMenu}
        onToggleSearch={toggleSearch}
      />
      <Carousel
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
      <TabFilter tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <PortfolioGrid projects={filteredProjects} />
    </div>
  );
};

export default Work;
