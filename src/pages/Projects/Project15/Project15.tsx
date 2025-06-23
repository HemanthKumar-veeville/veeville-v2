import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./project15.css";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import RouteTransition from "../../../components/ui/RouteTransition";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";

const Project15: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize carousel
  useCarousel();

  // Initialize sticky navigation
  useStickyBar();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = () => {
    const overlay = document.getElementById("search-overlay");
    if (overlay) {
      const inputField = overlay.querySelector("input");
      if (inputField instanceof HTMLInputElement) {
        inputField.value = ""; // reset input every time
      }
      overlay.style.display = "flex";
      if (inputField) {
        inputField.focus();
      }

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.style.display = "none";
        }
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              </div>
            </li>
          </ul>
        </nav>

        {/* Banner Section */}
        <section className="stamina-banner">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/EXTRA-if-not-used-on-header.png"
            alt="Banner Image"
            className="stamina-banner__image"
          />
          <div className="banner-content">
            <h1>Welcome to Our Site</h1>
            <p>Discover vibrant creativity.</p>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-left">
              <h2>How do we seize the sun and create a bright new future?</h2>
            </div>
            <div className="about-right">
              <p>
                The first suncare brand launched in the US and still America's
                most trusted, Beiersdorf's iconic sunscreen, Coppertone, was
                blending into an evolving suncare category bursting with both
                SPF numbers and emerging 'beauty sun' brands.
              </p>
            </div>
          </div>
        </section>

        {/* Image Banners */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/1.Coppertone_logo.png"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Data Section */}
        <section className="project-datas">
          <div className="project-datas__column project-datas__image">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/3.Coppertone_logo2.png"
              alt="Butterfly Cup"
            />
          </div>
          <div className="project-datas__column project-datas__text">
            <p>
              Our team was tasked with reinstating its iconic status with a new
              visual identity system and brand architecture that would build on
              Coppertone's legacy of protection and, once again, cement its
              place as a category leader.
            </p>
            <p>
              The reimagined icon connects the brand's heritage with its
              refreshed premium positioning, representing both cultural depth
              and modern aspirations. By bringing this forgotten asset back to
              life, the butterfly now serves as a proud and evocative emblem of
              Xiang Piao Piao's transformation.
            </p>
          </div>
        </section>

        {/* Additional Image Banners */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/4.Coppertone_logo_colours.png"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/5.Coppertone_Complete1.png"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/7.Coppertone_Pacls.png"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Images Section */}
        <section className="project-images">
          <div className="project-images__column">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/8.Coppertone_BOARD.png"
              alt="Design Concept 1"
              className="project-images__img"
            />
          </div>
          <div className="project-images__column">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/9.Coppertone_HAT.png"
              alt="Design Concept 2"
              className="project-images__img"
            />
          </div>
        </section>

        {/* Final Image Banners */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/10.Coppertone_BW.png"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/11.Coppertone_BW.png"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Navigation */}
        <section className="project-navigation-section">
          <hr className="divider" />
          <div className="project-navigation">
            <Link to="/projects/project1" className="prev-project">
              Previous Project
            </Link>
            <Link to="/work#Environmental-graphic" className="Categories-data">
              <span className="branding-title">Environment Graphics</span>
            </Link>
            <Link to="/projects/project2" className="next-project">
              Next Project
            </Link>
          </div>
        </section>

        {/* Related Projects Carousel */}
        <section className="project-cards-carousel">
          <h2 className="section-title">Related Projects</h2>
          <div className="carousel-wrapper">
            <div className="carousel-track" id="carousel-track">
              <div className="carousel-card">
                <img
                  src="http://localhost:1337/uploads/Thumbnail_Akamai_e98ec23a74.webp"
                  alt="Project 1"
                />
                <h3>Akamai</h3>
                <p>Fusing personality and authenticity</p>
              </div>
              <div className="carousel-card">
                <img
                  src="http://localhost:1337/uploads/BSF_Banner_8bb1b6c31e.webp"
                  alt="Project 2"
                />
                <h3>BSF</h3>
                <p>Reasserting leadership and expertise</p>
              </div>
              <div className="carousel-card">
                <img
                  src="http://localhost:1337/uploads/DRL_Thumbnail_8bd6627090.webp"
                  alt="Project 3"
                />
                <h3>DRL Report</h3>
                <p>Treasuring story and symbolism</p>
              </div>
              <div className="carousel-card">
                <img
                  src="http://localhost:1337/uploads/KDEM_thumbanail_f37f8768a9.webp"
                  alt="Project 4"
                />
                <h3>KDEM Project</h3>
                <p>Revitalizing energy with design</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="section-datas">
          <div className="sticky-data" id="stickyData">
            <div className="icon-wrapper left-icon">
              <Link to="/projects/project1">
                <i className="fas fa-arrow-left"></i>
                <span className="tooltip left-tooltip">Previous Project</span>
              </Link>
            </div>

            <Link to="/work#Environmental-graphic" className="sticky-card">
              <span className="sticky-data-text">Environment Graphics</span>
            </Link>

            <div className="icon-wrapper right-icon">
              <Link to="/projects/project2">
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
              <span></span>
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

export default Project15;
