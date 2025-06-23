import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";
import "./Kheemasutra.css";

const API_BASE_URL = "http://localhost:1337";

const Kheemasutra: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Initialize carousel
  useCarousel({
    trackSelector: "#carousel-track",
    scrollInterval: 3000,
    scrollStep: 1,
  });

  // Initialize sticky bar
  useStickyBar({
    stickyBarId: "stickyData",
    footerSelector: ".footer-section",
  });

  // Handle navbar sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle search overlay
  const toggleSearch = () => {
    const overlay = document.getElementById("search-overlay");
    if (overlay) {
      const inputField = overlay.querySelector("input") as HTMLInputElement;
      if (inputField) {
        inputField.value = "";
        overlay.style.display =
          overlay.style.display === "flex" ? "none" : "flex";
        if (overlay.style.display === "flex") {
          inputField.focus();
        }
      }
    }
  };

  return (
    <>
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

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`} />
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
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <div id="search-overlay">
                <div className="search-box">
                  <i className="fa-solid fa-magnifying-glass" />
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
          src={`${API_BASE_URL}/uploads/bannerimage_83fcc23f64.webp`}
          alt="Banner Image"
          className="stamina-banner__image"
        />
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
              blending into an evolving suncare category bursting with both SPF
              numbers and emerging 'beauty sun' brands.
            </p>
          </div>
        </div>
      </section>

      {/* Image Banner Sections */}
      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/MIDDLE_IMAGE_6_5c4fa4c082.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      {/* Project Data Section */}
      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src={`${API_BASE_URL}/uploads/layout_image_5f4c07cbf9.webp`}
            alt="Butterfly Cup"
          />
        </div>
        <div className="project-datas__column project-datas__text">
          <p>
            Our team was tasked with reinstating its iconic status with a new
            visual identity system and brand architecture that would build on
            Coppertone's legacy of protection and, once again, cement its place
            as a category leader.
          </p>
          <p>
            The reimagined icon connects the brand's heritage with its refreshed
            premium positioning, representing both cultural depth and modern
            aspirations. By bringing this forgotten asset back to life, the
            butterfly now serves as a proud and evocative emblem of Xiang Piao
            Piao's transformation.
          </p>
        </div>
      </section>

      {/* Additional Image Banners */}
      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image2_672c7d0729.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image_3_c6b3495b0c.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      {/* Project Images Section */}
      <section className="project-images">
        <div className="project-images__column">
          <img
            src={`${API_BASE_URL}/uploads/LAYOUT_IMAGE_2_f59c0e1ca7.webp`}
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src={`${API_BASE_URL}/uploads/layout_image3_8a9657ede2.webp`}
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      {/* Final Image Banners */}
      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image5_2f49115aaa.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image4_f2d69cfab3.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      {/* Project Navigation */}
      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/dhool" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Brand-identity" className="Categories-data">
            <span className="branding-title">Brand Identity</span>
          </Link>
          <Link to="/projects/kachumbar" className="next-project">
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
                src={`${API_BASE_URL}/uploads/Thumbnail_Akamai_e98ec23a74.webp`}
                alt="Project 1"
              />
              <h3>Akamai</h3>
              <p>Fusing personality and authenticity</p>
            </div>
            <div className="carousel-card">
              <img
                src={`${API_BASE_URL}/uploads/BSF_Banner_8bb1b6c31e.webp`}
                alt="Project 2"
              />
              <h3>BSF</h3>
              <p>Reasserting leadership and expertise</p>
            </div>
            <div className="carousel-card">
              <img
                src={`${API_BASE_URL}/uploads/DRL_Thumbnail_8bd6627090.webp`}
                alt="Project 3"
              />
              <h3>DRL Report</h3>
              <p>Treasuring story and symbolism</p>
            </div>
            <div className="carousel-card">
              <img
                src={`${API_BASE_URL}/uploads/KDEM_thumbanail_f37f8768a9.webp`}
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
            <Link to="/projects/dhool">
              <i className="fas fa-arrow-left" />
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Brand-identity" className="sticky-card">
            <span className="sticky-data-text">Brand Identity</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/kachumbar">
              <i className="fas fa-arrow-right" />
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
    </>
  );
};

export default Kheemasutra;
