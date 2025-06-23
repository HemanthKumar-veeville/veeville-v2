import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Terralite.css";
import { API_BASE_URL } from "../../Work/constants";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import RouteTransition from "../../../components/ui/RouteTransition";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";

interface RelatedProject {
  image: string;
  title: string;
  description: string;
}

const Terralite: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize carousel
  useCarousel();

  // Initialize sticky bar
  useStickyBar();

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
    const overlay = document.getElementById("search-overlay");
    if (!overlay) return;

    const inputField = overlay.querySelector("input") as HTMLInputElement;
    if (!inputField) return;

    inputField.value = "";
    overlay.style.display = "flex";
    inputField.focus();

    const handleOverlayClick = (e: MouseEvent) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    };

    overlay.addEventListener("click", handleOverlayClick);
  };

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

  return (
    <>
      <ScrollToTop />
      <RouteTransition>
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

        <section className="stamina-banner">
          <img
            src={`${API_BASE_URL}/uploads/banner_5745810e98.webp`}
            alt="Banner Image"
            className="stamina-banner__image"
          />
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-left">
              <h2>
                How do we evolve and flourish, with captivating craft and
                consideration?
              </h2>
            </div>
            <div className="about-right">
              <p>
                Since becoming a subsidiary of Beam Suntory in 2016 and
                achieving B Corp certification, this quintessentially British
                brand has remained committed to being the best gin for both
                people and the planet. From its beginnings in a West London
                micro-distillery, Sipsmith has earned its reputation as the home
                of outrageously good hand-crafted gin.
              </p>
            </div>
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src={`${API_BASE_URL}/uploads/middle_image_789f989e0b.webp`}
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        <section className="project-datas">
          <div className="project-datas__column project-datas__image">
            <img
              src={`${API_BASE_URL}/uploads/layout_image_9e595d88a8.webp`}
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
              The reimagined icon connects the brand's heritage with its
              refreshed premium positioning, representing both cultural depth
              and modern aspirations. By bringing this forgotten asset back to
              life, the butterfly now serves as a proud and evocative emblem of
              Xiang Piao Piao's transformation.
            </p>
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src={`${API_BASE_URL}/uploads/middle_image2_29947bb73b.webp`}
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
              homage to the heritage of its distillation, elegantly housed
              within the iconic 'S.'
            </p>
          </div>
          <div className="project-intro__column project-intro__image">
            <img
              src={`${API_BASE_URL}/uploads/layout_image2_aa94a63a1b.webp`}
              alt="Tea Packaging Design"
            />
          </div>
        </section>

        <section className="project-navigation-section">
          <hr className="divider" />
          <div className="project-navigation">
            <Link to="/projects/bsf" className="prev-project">
              Previous Project
            </Link>
            <Link to="/work#Brand-identity" className="Categories-data">
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
              {relatedProjects.map((project, index) => (
                <div key={index} className="carousel-card">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-datas">
          <div className="sticky-data" id="stickyData">
            <div className="icon-wrapper left-icon">
              <Link to="/projects/bsf">
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
      </RouteTransition>
    </>
  );
};

export default Terralite;
