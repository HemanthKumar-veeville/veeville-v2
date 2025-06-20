import React, { useEffect, useState } from "react";
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
import { useCarousel } from "../../lib/hooks/useCarousel";
import PortfolioSection from "../../components/ui/PortfolioSection";

const WorkPage: React.FC = () => {
  // State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Brand-identity");

  // Project cards carousel
  const { trackRef, trackStyle, clonedItems } = useCarousel({
    items: relatedProjects,
    scrollInterval: 3000,
  });

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

  // Check URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const tab = tabs.find((t) => t.id === hash);
      if (tab) {
        setActiveTab(tab.id);
      }
    }
  }, []);

  // Event handlers
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${isNavbarSticky ? "sticky" : ""}`}>
        <div className="logo">
          <Link to="/" className="logo-link">
            <img
              src="http://localhost:1337/uploads/Logo_Image_e91355f03e.webp"
              alt="Veeville Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "close-style" : ""}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            className={isNavbarSticky ? "sticky-icon" : ""}
          />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/work" className="active">
              WORK
            </Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>

          <li>
            <div className="search-container">
              <div className="search-icon" onClick={toggleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              {isSearchOpen && (
                <div
                  id="search-overlay"
                  style={{ display: "flex" }}
                  onClick={toggleSearch}
                >
                  <div
                    className="search-box"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input
                      type="text"
                      placeholder="Ask Bob Anything"
                      className="search-input"
                    />
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>

      {/* Carousel */}
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

      {/* Tab Filter Section */}
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

      {/* Portfolio Sections */}
      <PortfolioSection activeTab={activeTab} />

      {/* Project Cards Carousel */}
      <section className="project-cards-carousel">
        <h2 className="section-title text-[32px] font-bold text-[#333333]">
          Related Projects
        </h2>
        <div className="carousel-wrapper">
          <div ref={trackRef} className="carousel-track" style={trackStyle}>
            {clonedItems.map((project, index) => (
              <div className="carousel-card" key={`${project.title}-${index}`}>
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <div className="columns-row">
          <div className="column">
            <h3>Contact</h3>
            <p>Let's chat.</p>
          </div>
          <div className="column">
            <h3>Newsletter</h3>
            <p>Subscribe.</p>
          </div>
          <div className="column">
            <h3>Join us</h3>
            <Link to="/career" className="footer-carrer">
              <p>Careers.</p>
            </Link>
          </div>
          <div className="spacer-column"></div>
        </div>

        <div className="info-row">
          <div className="locations">
            <span>Bengaluru.</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © Veeville 2009 - 2025
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </p>
          <div className="social-icons">
            <a href={socialLinks[0].url} aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href={socialLinks[1].url} aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={socialLinks[2].url} aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={socialLinks[3].url} aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href={socialLinks[4].url} aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
