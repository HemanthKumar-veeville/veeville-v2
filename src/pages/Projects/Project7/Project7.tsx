import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";
import "./project7.css";

const Project7: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Use the sticky bar hook
  useStickyBar({
    stickyBarId: "stickyData",
    footerSelector: ".footer-section",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
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

        <div className="hamburger" onClick={toggleMenu}>
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
              {isSearchOpen && (
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
              )}
            </div>
          </li>
        </ul>
      </nav>

      <section className="stamina-banner">
        <img
          src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/04/Lucozade_Image01.jpg"
          alt="Banner Image"
          className="stamina-banner__image"
        />
        <div className="banner-content">
          <h1>Welcome to Our Site</h1>
          <p>Discover vibrant creativity.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>
              How do we re-energise one of Britain's biggest beverage icons?
            </h2>
          </div>
          <div className="about-right">
            <p>
              Lucozade is an icon in the energy drinks category. Created in
              Newcastle in 1927 with one original recipe, today it's sold in 15
              different countries. Now no longer one drink, but many – with
              different product ranges created to cater to different drinkers'
              needs – the time was right for the first major refresh in
              Lucozade's 97 year history. Our strategy to reinvigorate the brand
              involved consolidating Lucozade's ranges of Energy and Sport under
              a unified masterbrand approach. This involved a new visual
              identity and logo redesign, including Lucozade's iconic arc and
              wordmark.
            </p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/04/Lucoade_Image02.jpg"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/04/L01.jpg"
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

      <section className="kotex-grid-video">
        <div className="kotex-grid-video__container">
          <video
            className="kotex-grid-video__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/04/Lucozade_Image03.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="project-feature">
        <div className="project-feature__column project-feature__video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="project-feature__media"
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/04/Lucozade_CASE-STUDY_Bottles-Rotating_960x1080_V001.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-feature__column project-feature__text">
          <h2>Crafting the Story</h2>
          <p>
            Dive into the narrative of our design journey — from concept
            sketches to final creations. The process blends innovation with
            heritage, using motion and form to connect tradition with
            contemporary storytelling.
          </p>
          <p>
            Each visual element is carefully curated to evoke emotion, define
            brand identity, and engage audiences at every level. The video
            illustrates how a simple sketch transforms into a powerful brand
            symbol.
          </p>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/04/Lucozade_Image04.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/project1" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Environmental-graphic" className="Categories-data">
            <span className="branding-title">Environment Graphics</span>
          </Link>
          <Link to="/project2" className="next-project">
            Next Project
          </Link>
        </div>
      </section>

      <section className="section-datas">
        <div className="sticky-data" id="stickyData">
          <div className="icon-wrapper left-icon">
            <Link to="/project1">
              <i className="fas fa-arrow-left" />
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Environmental-graphic" className="sticky-card">
            <span className="sticky-data-text">Environment Graphics</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/project2">
              <i className="fas fa-arrow-right" />
              <span className="tooltip right-tooltip">Next Project</span>
            </Link>
          </div>
        </div>
      </section>

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
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project7;
