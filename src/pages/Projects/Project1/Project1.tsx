import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./project1.css";
import Navbar from "../../../components/ui/Navbar";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import { API_BASE_URL } from "../../Work/constants";
import { useCarousel } from "../../../lib/hooks/useCarousel";
import { useStickyBar } from "../../../lib/hooks/useStickyBar";

const Project1: React.FC = () => {
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

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar
        isSticky={isSticky}
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
        onToggleMenu={handleToggleMenu}
        onToggleSearch={handleToggleSearch}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      <section className="stamina-banner">
        <img
          src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/1-HC_Line_Up_01-copy-1-scaled.jpg"
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/2-HVC_Range_KV-1.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/3-HVC_CS_Image_01.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/4-HVC_CS_Image_03.png"
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

      <section className="project-videos">
        <div className="project-videos__column">
          <video
            className="project-videos__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/5_Label-Drawing_V001.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-videos__column">
          <video
            className="project-videos__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/6_-Havana-Club-Range_V003.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/7_HVC-03.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/8-HVC_CS_Image_02.png"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/8-HVC_CS_Image_02.png"
            alt="Design Concept 2"
            className="project-images__img"
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/10-Iconica-Logo.png"
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/11-HVC_FullRange.png"
            alt="Floral Cups"
            className="banner-img"
          />
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/12_HVC_Animation_Pearlfisher.mp4"
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

      <section className="project-media">
        <div className="project-media__column project-media__video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="project-media__media"
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/13_Iconica_V001.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-media__column project-media__image">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/14_Logo-Inspo-1.png"
            alt="Creative Design"
            className="project-media__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/11/15-HVC_KV_2.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

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
            <Link to="/projects/project1">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Brand-identity" className="sticky-card">
            <span className="sticky-data-text">Brand Identity</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/project2">
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
    </>
  );
};

export default Project1;
