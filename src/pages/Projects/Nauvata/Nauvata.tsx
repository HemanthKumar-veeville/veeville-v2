import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/ui/Navbar";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import { API_BASE_URL } from "../../Work/constants";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";
import "./Nauvata.css";

interface CarouselCard {
  image: string;
  title: string;
  description: string;
}

const Nauvata: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    scrollThreshold: 20,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const carouselCards: CarouselCard[] = [
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
      <Navbar
        isSticky={isSticky}
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onToggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      <section className="stamina-banner">
        <img
          src={`${API_BASE_URL}/uploads/banner_4703c42754.webp`}
          alt="Banner Image"
          className="stamina-banner__image"
        />
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>
              How do we make 60 million daily interactions instantly playful and
              special?
            </h2>
          </div>
          <div className="about-right">
            <p>
              McDonald's boasts a menu full of famous favourites with over 60
              million people served every day. Our multi-year collaboration to
              redesign the fast-food icon's global packaging system was centred
              on activating the brand positioning to make delicious, feel-good
              moments easy for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image_f244a5ace6.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src={`${API_BASE_URL}/uploads/layout_image_84f88b8ea7.webp`}
            alt="Butterfly Cup"
          />
        </div>
        <div className="project-datas__column project-datas__text">
          <p>
            A new, unified label shape inspired by the ornate architecture of
            Havana immediately unifies the core range, framing the brand's
            iconic logo anchored at its heart—a proud symbol of the vibrant
            pulse and energy that flows through Havana's streets. This created a
            canvas for each product's unique story to be expressed, taking
            consumers on a journey from the unrestrained confidence and vibrancy
            through to richer, layered, more crafted and complex taste
            experiences.
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
            src={`${API_BASE_URL}/uploads/middle_image1_74633a8f00.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-intro">
        <div className="project-intro__column project-intro__text">
          <p>
            The butterfly introduces a world of harmonious fragrance and beauty,
            reflected in bespoke illustrations of each tea's natural
            ingredients. Using a modern take on Chinese Xieyi paintings, the
            designs balance softness and vibrance. Background colours – orchid
            blue, rose pink, and jasmine green – elevate the experience while
            aiding shelf presence and recognition.
          </p>
        </div>
        <div className="project-intro__column project-intro__image">
          <img
            src={`${API_BASE_URL}/uploads/layout_image2_094b4cca71.webp`}
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image3_dd118dc570.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/decathlon" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Environmental-graphic" className="Categories-data">
            <span className="branding-title">Environment Graphics</span>
          </Link>
          <Link to="/projects/vmware" className="next-project">
            Next Project
          </Link>
        </div>
      </section>

      <section className="project-cards-carousel">
        <h2 className="section-title">Related Projects</h2>
        <div className="carousel-wrapper">
          <div className="carousel-track" id="carousel-track">
            {carouselCards.map((card, index) => (
              <div key={index} className="carousel-card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-datas">
        <div className="sticky-data" id="stickyData">
          <div className="icon-wrapper left-icon">
            <Link to="/projects/decathlon">
              <i className="fas fa-arrow-left" />
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Environmental-graphic" className="sticky-card">
            <span className="sticky-data-text">Environment Graphics</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/vmware">
              <i className="fas fa-arrow-right" />
              <span className="tooltip right-tooltip">Next Project</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer-section">
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
      </footer>
    </>
  );
};

export default Nauvata;
