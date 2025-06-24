import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  slides,
  tabs,
  portfolioItems,
  relatedProjects,
  sections,
  socialLinks,
} from "./data";
import { RelatedProject } from "./types";
import { useCarousel } from "../../lib/hooks/useCarousel";
import PortfolioSection from "../../components/ui/PortfolioSection";
import RelatedProjectsCarousel from "../../components/ui/RelatedProjectsCarousel";
import { API_BASE_URL } from "./constants";
import Footer from "@/components/ui/Footer/Footer";

const WorkPage: React.FC = () => {
  // State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All-projects");
  const [showCarousel, setShowCarousel] = useState(true);

  // Refs
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Show/hide carousel based on search
  useEffect(() => {
    setShowCarousel(!submittedSearchQuery);
  }, [submittedSearchQuery]);

  // Focus search input when overlay opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Event handlers
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
      setSubmittedSearchQuery("");
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSearchQuery(searchQuery);
    setIsSearchOpen(false); // Close search overlay after submission
    window.scrollTo(0, 0); // Scroll to top when search is applied
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSubmittedSearchQuery(""); // Clear search when changing tabs
  };

  const clearSearch = () => {
    setSubmittedSearchQuery("");
    setSearchQuery("");
    window.scrollTo(0, 0); // Scroll to top when search is cleared
  };

  return (
    <div>
      {/* Show search results summary if there's a search query */}
      {submittedSearchQuery && (
        <div className="search-results-summary flex justify-between items-center w-full px-0 py-2 m-0">
          <div className="container">
            <h2>
              Search Results for "
              <span className="text-red-500">{searchQuery}</span>"
            </h2>
          </div>
          <div className="container w-fit mx-0 px-0">
            <button
              onClick={clearSearch}
              className="clear-search flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              <FontAwesomeIcon icon={faXmark} />
              Clear Search
            </button>
          </div>
        </div>
      )}

      {/* Carousel - only show if no search is active */}
      {showCarousel && (
        <section className="design-carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`dc-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}

          <div className="dc-text">
            Design
            <br />
            <span>for life.</span>
          </div>

          <div className="dc-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dc-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                data-index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* Tab Filter Section - hide during search */}
      {!submittedSearchQuery && (
        <section className="tab-filter-section">
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                data-tab={tab.id}
                id={tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Portfolio Section with search integration */}
      <PortfolioSection
        activeTab={activeTab}
        searchQuery={submittedSearchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Project Cards Carousel - only show if no search is active */}
      {showCarousel && (
        <RelatedProjectsCarousel relatedProjects={relatedProjects} />
      )}
    </div>
  );
};

export default WorkPage;
