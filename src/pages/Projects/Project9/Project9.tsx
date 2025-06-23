import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./project9.css";

const Project9: React.FC = () => {
  useEffect(() => {
    // Initialize sticky navbar
    const setupStickyNavbar = () => {
      const navbar = document.querySelector(".navbar");
      const navLinks = document.querySelectorAll(".nav-links li a");
      const hamburgerIcon = document.querySelector(".hamburger i");

      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar?.classList.add("sticky");
          navLinks.forEach((link) => link.classList.add("sticky-link"));
          hamburgerIcon?.classList.add("sticky-icon");
        } else {
          navbar?.classList.remove("sticky");
          navLinks.forEach((link) => link.classList.remove("sticky-link"));
          hamburgerIcon?.classList.remove("sticky-icon");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };

    // Initialize sticky bar
    const initializeStickyBar = () => {
      const stickyData = document.getElementById("stickyData");
      const footer = document.querySelector(".footer-section");

      const handleStickyBarScroll = () => {
        if (!stickyData || !footer) return;

        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Toggle visibility based on scroll position
        if (window.scrollY > 20) {
          stickyData.classList.remove("hidden");
        } else {
          stickyData.classList.add("hidden");
        }

        // Hide near footer
        if (footerTop <= windowHeight) {
          stickyData.style.opacity = "0";
          stickyData.style.pointerEvents = "none";
        } else {
          stickyData.style.opacity = "1";
          stickyData.style.pointerEvents = "all";
        }
      };

      window.addEventListener("scroll", handleStickyBarScroll);
      return () => window.removeEventListener("scroll", handleStickyBarScroll);
    };

    setupStickyNavbar();
    initializeStickyBar();
  }, []);

  const toggleSearch = () => {
    const overlay = document.getElementById("search-overlay");
    const inputField = overlay?.querySelector("input") as HTMLInputElement;

    if (overlay && inputField) {
      inputField.value = "";
      overlay.style.display = "flex";
      inputField.focus();

      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
          overlay.style.display = "none";
        }
      });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img
              src="http://localhost:1337/uploads/Logo_Image_e91355f03e.webp"
              alt="Veeville Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <div className="hamburger">
          <i className="fa-solid fa-bars"></i>
        </div>

        <ul className="nav-links">
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
              <div id="search-overlay">
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

      <section className="byoma-banner">
        <video className="byoma-banner__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_01.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>
              How do we depart from the norm, to make people stand up, take
              notice and take action?
            </h2>
          </div>
          <div className="about-right">
            <p>
              After entrepreneur Ben Branson was diagnosed with autism and ADHD,
              he became aware of the significant challenges that neurodivergent
              individuals face. Inspired by his journey, Ben launched the
              media-led charity PRISM ND to offer support and raise awareness.
              Having previously collaborated with Pearlfisher on the creation of
              the non-alcoholic drinks brands Seedlip and Seasn, we once again
              partnered with Ben for his latest venture, establishing a fresh
              and compelling visual identity for the charity's first social
              impact campaign, THE HIDDEN 20%.
            </p>
          </div>
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_03.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/CASE-STUDY_Merch-slider_V003.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_05-1.jpg"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_06-1.jpg"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_07-1.jpg"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_08-1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_09-1.jpg"
            alt="Butterfly Cup"
          />
        </div>
        <div className="project-datas__column project-datas__text">
          <p>
            Large, stylised punctuation marks appear in the charity's ad
            campaigns and marketing materials, emphasising The Hidden 20%'s
            platform for its community and extending into accentuating facts or
            prompting questions. The punchy colour palette, complemented by the
            dyslexia-friendly font Lexend, which comes alive in the defined tone
            of voice guidelines, evokes positivity and approachability.
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_10.jpg"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_11.jpg"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_12.jpg"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_13.jpg"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/01/Hidden-20_Pearlfisher_14.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Environmental-graphic" className="sticky-card">
            <span className="sticky-data-text">Environment Graphics</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/project2">
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

export default Project9;
