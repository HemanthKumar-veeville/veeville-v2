import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/ui/Navbar";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import { API_BASE_URL } from "../../Work/constants";
import useCarousel from "../../../lib/hooks/useCarousel";
import useStickyBar from "../../../lib/hooks/useStickyBar";
import "./veevilleExperiences.css";

const VeevilleExperience: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Initialize related projects carousel
  useCarousel({
    trackSelector: "#carousel-track",
    scrollInterval: 3000,
  });

  // Initialize sticky navigation
  const showStickyNav = useStickyBar({
    threshold: 50,
    hideNearFooter: true,
  });

  const handleSearch = (query: string) => {
    // Implement search functionality
    console.log("Search query:", query);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar
        isSticky={isSticky}
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onToggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        onSearch={handleSearch}
        searchQuery=""
      />

      {/* Design Carousel Section */}
      <section className="design-carousel">
        <div
          className={`dc-slide ${currentSlide === 0 ? "active" : ""}`}
          style={{
            backgroundImage: `url(${API_BASE_URL}/uploads/Top_1_7656394b6b.webp)`,
          }}
        />
        <div
          className={`dc-slide ${currentSlide === 1 ? "active" : ""}`}
          style={{
            backgroundImage: `url(${API_BASE_URL}/uploads/Top_2_6a6df54730.webp)`,
          }}
        />
        <div
          className={`dc-slide ${currentSlide === 2 ? "active" : ""}`}
          style={{
            backgroundImage: `url(${API_BASE_URL}/uploads/Top_3_ea8c062ab0.webp)`,
          }}
        />

        <div className="dc-dots">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`dc-dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              data-index={index}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
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

      {/* Image Banner Section */}
      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/Mid_1_60bf8d472f.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      {/* Project Intro Section */}
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
            src={`${API_BASE_URL}/uploads/Veeville_Experiences_08_302cfed5da.webp`}
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      {/* Second Image Banner */}
      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/Mid_2_85c97c2be3.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      {/* Project Data Section */}
      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src={`${API_BASE_URL}/uploads/Veeville_Experiences_09_be8c2c4fd0.webp`}
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

      {/* Third Image Banner */}
      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/Mid_3_e39343cfb3.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      {/* Second Project Intro Section */}
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
            src={`${API_BASE_URL}/uploads/Veeville_Experiences_10_cfdd84bfe9.webp`}
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      {/* Project Navigation */}
      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/bsf" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Book-design" className="Categories-data">
            <span className="branding-title">Book Design</span>
          </Link>
          <Link to="/projects/munchatantra" className="next-project">
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
        <div
          className={`sticky-data ${showStickyNav ? "" : "hidden"}`}
          id="stickyData"
        >
          <div className="icon-wrapper left-icon">
            <Link to="/projects/bsf">
              <i className="fas fa-arrow-left" />
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Environmental-graphic" className="sticky-card">
            <span className="sticky-data-text">Environment Graphics</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/munchatantra">
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

export default VeevilleExperience;
