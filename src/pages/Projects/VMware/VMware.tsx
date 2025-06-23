import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VMware.css";

// Import custom hooks if needed
import { useCarousel } from "../../../lib/hooks/useCarousel";

const VMware: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle sticky data bar
  useEffect(() => {
    const handleStickyBarScroll = () => {
      const footer = document.querySelector(".footer-section");
      const stickyData = document.getElementById("stickyData");

      if (footer && stickyData) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop <= windowHeight) {
          stickyData.style.opacity = "0";
          stickyData.style.pointerEvents = "none";
        } else {
          stickyData.style.opacity = "1";
          stickyData.style.pointerEvents = "all";
        }
      }
    };

    window.addEventListener("scroll", handleStickyBarScroll);
    return () => window.removeEventListener("scroll", handleStickyBarScroll);
  }, []);

  // Initialize carousel
  useEffect(() => {
    const track = document.querySelector("#carousel-track");
    if (!track) return;

    const cards = Array.from(track.children);
    const originalCardCount = cards.length;

    // Clone cards for infinite scroll
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      if (clone instanceof Element) {
        clone.classList.add("clone");
        track.appendChild(clone);
      }
    });

    let index = 0;
    const scrollInterval = 3000;

    const scrollNext = () => {
      const cardWidth = cards[0].getBoundingClientRect().width;
      index++;
      if (track instanceof HTMLElement) {
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        if (index >= originalCardCount) {
          setTimeout(() => {
            if (track instanceof HTMLElement) {
              track.style.transition = "none";
              index = 0;
              track.style.transform = "translateX(0px)";
            }
          }, 500);
        }
      }
    };

    const intervalId = setInterval(scrollNext, scrollInterval);
    return () => clearInterval(intervalId);
  }, []);

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

        <div
          className={`hamburger ${isMenuOpen ? "close-style" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              <div
                className="search-icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              {isSearchOpen && (
                <div
                  id="search-overlay"
                  style={{ display: "flex" }}
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setIsSearchOpen(false);
                    }
                  }}
                >
                  <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                      type="text"
                      placeholder="Ask Bob Anything"
                      className="search-input"
                      autoFocus
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
          src="http://localhost:1337/uploads/VM_Ware_01_0db983d988.webp"
          alt="Let's Talk Stamina Banner"
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
            src="http://localhost:1337/uploads/VM_Ware_01_0db983d988.webp"
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
            src="http://localhost:1337/uploads/VM_Ware_06_03f8ed56e6.webp"
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/VM_Ware_02_8bf4c5a4a3.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="http://localhost:1337/uploads/VM_Ware_07_a795f36015.webp"
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

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/VM_Ware_08_072a443e85.webp"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/VM_Ware_09_3e1c3cc372.webp"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner VMWare-imag">
        <div className="image-wrapper VMWare-wrappaer">
          <img
            src="http://localhost:1337/uploads/VM_Ware_04_5c3094f007.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/nauvata" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Environmental-graphic" className="Categories-data">
            <span className="branding-title">Environmental Graphic</span>
          </Link>
          <Link to="/projects/akamai" className="next-project">
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
            <Link to="/projects/nauvata">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Environmental-graphic" className="sticky-card">
            <span className="sticky-data-text">Environment Graphics</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/akamai">
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

export default VMware;
