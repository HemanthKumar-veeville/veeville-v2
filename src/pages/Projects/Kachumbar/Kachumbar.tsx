import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import RouteTransition from "../../../components/ui/RouteTransition";
import "./Kachumbar.css";

const API_BASE_URL = "http://localhost:1337";

interface RelatedProject {
  image: string;
  title: string;
  description: string;
}

const Kachumbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize carousel
  useCarousel({
    scrollInterval: 3000,
    scrollStep: 1,
  });

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
    <RouteTransition>
      <ScrollToTop />
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
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
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
              <div
                id="search-overlay"
                style={{ display: isSearchOpen ? "flex" : "none" }}
              >
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

      <section className="stamina-banner">
        <img
          src={`${API_BASE_URL}/uploads/BANNER_0974fb021f.webp`}
          alt="Banner Image"
          className="stamina-banner__image"
        />
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>Restaging the Global Rum Icon, Havana Club</h2>
          </div>
          <div className="about-right">
            <p>
              Havana Club partnered with Pearlfisher to embark on an ambitious
              portfolio redesign, activating a new segmentation strategy while
              reinforcing its reputation as a premium, global icon in rum.
              Spanning from some of the most accessible liquids to the rarest
              blends in market, Havana Club looked to harmonise the range while
              simultaneously highlighting the unique qualities and character of
              each rum. Taking inspiration from the vibrant city of Havana,
              Cuba—the city the brand calls home—the refreshed portfolio is
              diverse, storied and full of character, bringing to life the
              brand's rich legacy in rum-making and elevating its Cuban DNA
              through a timeless yet modern transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image_cb169fdc57.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="recollagen-section">
        <div className="recollagen-left">
          <img
            src={`${API_BASE_URL}/uploads/layout_image1_4a2a3c4b7f.webp`}
            alt="Top visual with text"
            className="recollagen-image top-image"
          />
        </div>
        <div className="recollagen-right">
          <p>
            Our strategic vision for ReCollagen was to combine its medical-grade
            efficacy with the sensory delights and daily rituals of skincare
            routines, creating a collagen-specific offering reflective of its
            deep expertise and care.
            <br />
            <br />
            This transformation aimed to go beyond superficial rejuvenation,
            positioning ReCollagen as a leader in holistic collagen skincare,
            helping people replenish the look and feel of healthy, radiant skin
            while embracing the notion that youth is present in all of us,
            regardless of age. It just needs to be awakened and nurtured a bit
            more as we get older.
          </p>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image_2_bc505f10f3.webp`}
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
            src={`${API_BASE_URL}/uploads/layout_image2_fada6b391f.webp`}
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image3_b0f01ddccb.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner last-middle">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image4_114b12a2b9.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/kheemasutra" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Brand-identity" className="Categories-data">
            <span className="branding-title">Brand Identity</span>
          </Link>
          <Link to="/projects/karnataka" className="next-project">
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
            <Link to="/projects/kheemasutra">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Brand-identity" className="sticky-card">
            <span className="sticky-data-text">Brand Identity</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/karnataka">
              <i className="fas fa-arrow-right"></i>
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
  );
};

export default Kachumbar;
