import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BSF.css";
import { API_BASE_URL } from "../../Work/constants";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import RouteTransition from "../../../components/ui/RouteTransition";
import { useCarousel } from "../../../lib/hooks/useCarousel";

interface RelatedProject {
  image: string;
  title: string;
  description: string;
}

const BSF: React.FC = () => {
  // State for navbar and search functionality
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const relatedProjects: RelatedProject[] = [
    {
      image: `${API_BASE_URL}/uploads/Thumbnail_Akamai_e98ec23a74.webp`,
      title: "Akamai",
      description: "Fusing personality and authenticity",
    },
    {
      image: `${API_BASE_URL}/uploads/BSF_Banner_8bb1b6c31e.webp`,
      title: "BSF",
      description: "Reasserting leadership and expertise",
    },
    {
      image: `${API_BASE_URL}/uploads/DRL_Thumbnail_8bd6627090.webp`,
      title: "DRL Report",
      description: "Treasuring story and symbolism",
    },
    {
      image: `${API_BASE_URL}/uploads/KDEM_thumbanail_f37f8768a9.webp`,
      title: "KDEM Project",
      description: "Revitalizing energy with design",
    },
  ];

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
      <div>
        {/* Navbar */}
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="logo">
            <Link to="/" className="logo-link">
              <img
                src={`${API_BASE_URL}/uploads/Logo_Image_e91355f03e.webp`}
                alt="Veeville Logo"
                className="logo-image"
              />
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/work">WORK</Link>
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
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                {isSearchOpen && (
                  <div id="search-overlay">
                    <div className="search-box">
                      <i className="fa-solid fa-magnifying-glass"></i>
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

        {/* Banner Section */}
        <section className="stamina-banner">
          <img
            src={`${API_BASE_URL}/uploads/Banner_BSF_ac3901fcba.webp`}
            alt="Let's Talk Stamina Banner"
            className="stamina-banner__image"
          />
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-left">
              <h2>
                How do we democratise skincare and give everyone the building
                blocks to better skin?
              </h2>
            </div>
            <div className="about-right">
              <p>
                The passion project of FutureLabs Founder Marc Elrick, BYOMA was
                pushing for a total skincare reset as the world's first brand
                dedicated to regenerating the skin's structure and barrier
                function – the biggest breakthrough in skin science in the last
                10 years.
              </p>
            </div>
          </div>
        </section>

        {/* Image Banner */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src={`${API_BASE_URL}/uploads/Middle_BSF_d1f41eed46.webp`}
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Data Section */}
        <section className="project-datas">
          <div className="project-datas__column project-datas__image">
            <img
              src={`${API_BASE_URL}/uploads/Main_logo_7ba6e27ceb.gif`}
              alt="Butterfly Cup"
            />
          </div>
          <div className="project-datas__column project-datas__text">
            <p>
              We worked collaboratively with Marc and his team to create a bold,
              vibrant and energetic identity and design that speaks to the idea
              of the next generation of skincare for both the industry and the
              young audience it wants to attract.
            </p>
            <p>
              The split device of the 'O' in the logo is a nod to the brand's
              mission of breaking beauty barriers with breakthrough formulas.
              The modern typography and iconography lend beautifully to
              displaying the brand's pioneering science, ingredients and
              innovation all wrapped up in a shelf-popping joyful and sleek
              packaging design – one that ticks even more boxes with young
              consumers by removing excess packaging and providing refillable
              products at a good price point.
            </p>
          </div>
        </section>

        {/* Project Images */}
        <section className="project-images">
          <div className="project-images__column">
            <img
              src={`${API_BASE_URL}/uploads/side_bsf3_699bf447f1.webp`}
              alt="Design Concept 1"
              className="project-images__img"
            />
          </div>
          <div className="project-images__column">
            <img
              src={`${API_BASE_URL}/uploads/Side_bsf2_bc57ae135c.webp`}
              alt="Design Concept 2"
              className="project-images__img"
            />
          </div>
        </section>

        {/* Project Intro */}
        <section className="project-intro">
          <div className="project-intro__column project-intro__text">
            <p>
              We crafted the essence of the distillation process and the
              ingredients into a distinctive, exploratory, and illustrative 'art
              of nature' design language to bring the product's beauty and
              integrity to the fore. This approach reimagines the natural
              ingredients, and each variant is brought to life through artistic
              compositions of Seedlip's botanicals. The Seedlip monogram plays
              homage to the heritage of its distillation, elegantly housed
              within the iconic 'S.'
            </p>
          </div>
          <div className="project-intro__column project-intro__image">
            <img
              src={`${API_BASE_URL}/uploads/BSF_180e8e1f6b.gif`}
              alt="Tea Packaging Design"
            />
          </div>
        </section>

        {/* Additional Project Images */}
        <section className="project-images">
          <div className="project-images__column">
            <img
              src={`${API_BASE_URL}/uploads/side_BSF_5_17cd1c9801.webp`}
              alt="Design Concept 1"
              className="project-images__img"
            />
          </div>
          <div className="project-images__column">
            <img
              src={`${API_BASE_URL}/uploads/Side_bsf2_bc57ae135c.webp`}
              alt="Design Concept 2"
              className="project-images__img"
            />
          </div>
        </section>

        {/* Project Navigation */}
        <section className="project-navigation-section">
          <hr className="divider" />
          <div className="project-navigation">
            <Link to="/projects/seafund" className="prev-project">
              Previous Project
            </Link>
            <Link to="/work#Brand-identity" className="Categories-data">
              <span className="branding-title">Brand Identity</span>
            </Link>
            <Link to="/projects/lendersmark" className="next-project">
              Next Project
            </Link>
          </div>
        </section>

        {/* Related Projects Carousel */}
        <section className="project-cards-carousel">
          <h2 className="section-title">Related Projects</h2>
          <div className="carousel-wrapper">
            <div className="carousel-track" ref={trackRef} style={trackStyle}>
              {clonedItems.map((project, index) => (
                <div key={index} className="carousel-card">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="section-datas">
          <div className="sticky-data" id="stickyData">
            <div className="icon-wrapper left-icon">
              <Link to="/projects/seafund">
                <i className="fas fa-arrow-left"></i>
                <span className="tooltip left-tooltip">Previous Project</span>
              </Link>
            </div>

            <Link to="/work#Brand-identity" className="sticky-card">
              <span className="sticky-data-text">Brand Identity</span>
            </Link>

            <div className="icon-wrapper right-icon">
              <Link to="/projects/lendersmark">
                <i className="fas fa-arrow-right"></i>
                <span className="tooltip right-tooltip">Next Project</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
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
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </RouteTransition>
  );
};

export default BSF;
