import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";
import "./Munchatantra.css";

const API_BASE_URL = "http://localhost:1337";

const Munchatantra: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useCarousel({
    trackSelector: "#carousel-track",
    scrollInterval: 3000,
    scrollStep: 1,
  });

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
              src={`${API_BASE_URL}/uploads/Logo_Image_e91355f03e.webp`}
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
          src={`${API_BASE_URL}/uploads/Top_Banner_b6a01a6873.webp`}
          alt="Banner Image"
          className="stamina-banner__image"
        />
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>How do we change the way the world drinks?</h2>
          </div>
          <div className="about-right">
            <p>
              In a drinks market saturated by sugary soft drinks but with a
              growing global movement towards health and abstinence, Seedlip
              founder, Ben Branson, saw an opportunity to combine his farming
              heritage and love of nature and design. Ben's early days of
              experimental distillation in his kitchen at home sparked a
              cultural shift – as the world's first sophisticated, distilled,
              non-alcoholic spirit was born. Every step of the brand's creation
              was collaborative with Ben, driven by a commitment to communicate
              Seedlip's challenger proposition and lead a design transformation
              to create a category language for a category that didn't yet
              exist. Visually inspiring a paradigm shift to answer the question:
              What to drink when you're not drinking?
            </p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/Middle_1_f922ec4379.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-intro">
        <div className="project-intro__column project-intro__text">
          <p>
            We crafted the essence of the distillation process and the
            ingredients into a distinctive, exploratory, and illustrative 'art
            of nature' design language to bring the product's beauty and
            integrity to the fore. This approach reimagines the natural
            ingredients, and each variant is brought to life through artistic
            compositions of Seedlip's botanicals. The Seedlip monogram plays
            homage to the heritage of its distillation, elegantly housed within
            the iconic 'S.'
          </p>
        </div>
        <div className="project-intro__column project-intro__image">
          <img
            src={`${API_BASE_URL}/uploads/Bottom_4_b8505889dd.webp`}
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/Middle_2_67c2547f24.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src={`${API_BASE_URL}/uploads/Bottom_2_98cec9623d.webp`}
            alt="Butterfly Cup"
          />
        </div>
        <div className="project-datas__column project-datas__text">
          <p>
            The butterfly mascot, once a fleeting feature in the brand's
            identity, has been revived by Pearlfisher. Inspired by the Golden
            Kaiser-i-Hind butterfly – a rare and cherished symbol of grace and
            balance in Chinese culture – the new butterfly design embodies
            harmony, elegance, and sophistication.
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

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/Middle_3_4cf2205960.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/genes" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Book-design" className="Categories-data">
            <span className="branding-title">Brand Identity</span>
          </Link>
          <Link to="/projects/seafund" className="next-project">
            Next Project
          </Link>
        </div>
      </section>

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

      <section className="section-datas">
        <div className="sticky-data" id="stickyData">
          <div className="icon-wrapper left-icon">
            <Link to="/projects/genes">
              <i className="fas fa-arrow-left" />
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Brand-identity" className="sticky-card">
            <span className="sticky-data-text">Brand Identity</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/seafund">
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

export default Munchatantra;
