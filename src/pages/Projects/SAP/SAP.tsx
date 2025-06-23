import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/ui/Navbar";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";
import "./SAP.css";

const SAP: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize carousel
  useCarousel();

  // Initialize sticky bar
  useStickyBar();

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle video banner dimensions
  useEffect(() => {
    const adjustVideoHeight = () => {
      const banner = document.querySelector(".byoma-banner") as HTMLElement;
      if (!banner) return;

      const windowWidth = window.innerWidth;
      if (windowWidth > 768) {
        if (windowWidth > 1400) {
          banner.style.height = "600px";
        } else if (windowWidth > 1024) {
          banner.style.height = "500px";
        } else {
          banner.style.height = "400px";
        }
      } else {
        banner.style.height = "auto";
      }
    };

    adjustVideoHeight();
    window.addEventListener("resize", adjustVideoHeight);
    return () => window.removeEventListener("resize", adjustVideoHeight);
  }, []);

  return (
    <>
      <Navbar
        isSticky={isSticky}
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onToggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      <section className="byoma-banner">
        <iframe
          src="https://player.vimeo.com/video/792552486?h=6c90181394&badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
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
            src="http://localhost:1337/uploads/middleimage3_059809ae33.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/layout_image_a3c8eecdff.webp"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/layout_image2_8fe6750a85.webp"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/middleimage_cd874c8eb2.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/middleimage2_a3a98859fd.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/skf" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Film-Motion-Graphocs" className="Categories-data">
            <span className="branding-title">Film and Motion Graphics</span>
          </Link>
          <Link to="/projects/pepsico" className="next-project">
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

      <section className="section-datas">
        <div className="sticky-data" id="stickyData">
          <div className="icon-wrapper left-icon">
            <Link to="/projects/skf">
              <i className="fas fa-arrow-left" />
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Film-Motion-Graphocs" className="sticky-card">
            <span className="sticky-data-text">Film and Motion Graphics</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/pepsico">
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

export default SAP;
