import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./project16.css";
import Navbar from "../../../components/ui/Navbar";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import { API_BASE_URL } from "../../Work/constants";

const Project16: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

      <section className="byoma-banner">
        <video className="byoma-banner__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-01-3.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>How do you humanise the science of collagen?</h2>
          </div>
          <div className="about-right">
            <p>
              Yatsen Group's acquisition of ReCollagen brought a unique
              medical-grade collagen formula into its established beauty brand
              portfolio. To successfully navigate the transition and move from a
              clinical to a consumer-facing brand, Pearlfisher reimagined
              ReCollagen, making it both an efficacious and desirable new brand
              for China's skincare market.
            </p>
          </div>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-02.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="recollagen-section">
        <div className="recollagen-left">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-03.png"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-04.mp4"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-05.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-08.jpg"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-08.jpg"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="pack-experience">
        <div className="pack-experience__column pack-experience__text">
          <p>
            The idea of being part of a community of girls comes to life through
            the creation of a pack of relatable characters, introducing Kiara,
            Thembeka, Amy and Mia. Their individual personalities, vibe and
            style – from the fashion-forward Kiara to the bold, sporty Thembeka
            – feature across brand touch points and uniquely designed tins.
            <br />
            <br />
            This pack of friends come together to help girls through their
            individual experiences with a positive attitude.
          </p>
        </div>
        <div className="pack-experience__column pack-experience__video">
          <video autoPlay muted loop playsInline>
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-09.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-10.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="image-banner">
        <div className="image-wrapper image-data">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-11.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-12.png"
            alt="Floral Cups"
            className="banner-img"
          />
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-14.mp4"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-13.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-15.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-16.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-media__column project-media__image">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-17.png"
            alt="Creative Design"
            className="project-media__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-18-scaled.jpg"
            alt="Floral Cups"
            className="banner-img"
          />
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-20.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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

export default Project16;
