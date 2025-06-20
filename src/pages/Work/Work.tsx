import React, { useState, useEffect, useCallback } from "react";
import styles from "./Work.module.css";
import { slides, tabs, portfolioItems } from "./data";
import { Project, PortfolioItem } from "./types";
import Navbar from "../../components/ui/Navbar";
import Carousel from "../../components/ui/Carousel";
import TabFilter from "../../components/ui/TabFilter";
import PortfolioGrid from "../../components/ui/PortfolioGrid";

// Convert PortfolioItem to Project
const convertToProject = (item: PortfolioItem): Project => ({
  ...item,
  category: "all", // Default category
  image: item.imageUrl,
});

const Work: React.FC = () => {
  // State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    portfolioItems.map(convertToProject)
  );

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

  // Filter projects based on active tab and submitted search query
  useEffect(() => {
    let filtered = portfolioItems.map(convertToProject);

    // Filter by category if not "all"
    if (activeTab !== "all") {
      filtered = filtered.filter((project) => project.category === activeTab);
    }

    // Filter by submitted search query if exists
    if (submittedSearchQuery.trim()) {
      const query = submittedSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query)
      );
    }

    setFilteredProjects(filtered);
  }, [activeTab, submittedSearchQuery]);

  // Toggle search overlay
  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) {
      setSearchQuery(""); // Clear search input
      setSubmittedSearchQuery(""); // Clear submitted search
    }
  }, [isSearchOpen]);

  // Handle search input and submission
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSubmittedSearchQuery(query); // Update submitted search on form submission
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
        onSearch={handleSearch}
        searchQuery={searchQuery}
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
