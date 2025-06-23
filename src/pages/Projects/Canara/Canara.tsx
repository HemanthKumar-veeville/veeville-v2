import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Canara.css";

const Canara: React.FC = () => {
  useEffect(() => {
    // Initialize sticky navbar
    const setupStickyNavbar = () => {
      const navbar = document.querySelector(".navbar");
      const navLinks = document.querySelectorAll(".nav-links li a");
      const hamburgerIcon = document.querySelector(".hamburger i");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar?.classList.add("sticky");
          navLinks.forEach((link) => link.classList.add("sticky-link"));
          hamburgerIcon?.classList.add("sticky-icon");
        } else {
          navbar?.classList.remove("sticky");
          navLinks.forEach((link) => link.classList.remove("sticky-link"));
          hamburgerIcon?.classList.remove("sticky-icon");
        }
      });
    };

    // Initialize sticky bar
    const initializeStickyBar = () => {
      const stickyData = document.getElementById("stickyData");
      const footer = document.querySelector(".footer-section");

      const handleStickyBarScroll = () => {
        if (!stickyData || !footer) return;

        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Toggle visibility based on scroll
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

      return () => {
        window.removeEventListener("scroll", handleStickyBarScroll);
      };
    };

    // Initialize carousel
    const initializeCardCarousel = () => {
      const track = document.querySelector("#carousel-track");
      if (!track) return;

      let cards = Array.from(track.children);
      const originalCardCount = cards.length;

      // Clone cards
      cards.forEach((card) => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.classList.add("clone");
        track.appendChild(clone);
      });

      let index = 0;

      const getCardWidth = () => {
        const firstCard = cards[0] as HTMLElement;
        const style = window.getComputedStyle(firstCard);
        const marginRight = parseFloat(style.marginRight) || 0;
        return firstCard.offsetWidth + marginRight;
      };

      const scrollNext = () => {
        const cardWidth = getCardWidth();
        index++;
        (track as HTMLElement).style.transition = "transform 0.5s ease";
        (track as HTMLElement).style.transform = `translateX(-${
          index * cardWidth
        }px)`;

        if (index >= originalCardCount) {
          setTimeout(() => {
            (track as HTMLElement).style.transition = "none";
            index = 0;
            (track as HTMLElement).style.transform = `translateX(0px)`;
          }, 500);
        }
      };

      const interval = setInterval(scrollNext, 3000);

      return () => clearInterval(interval);
    };

    // Toggle search overlay
    const setupSearchOverlay = () => {
      const searchIcon = document.querySelector(".search-icon");
      const searchOverlay = document.getElementById("search-overlay");

      if (searchIcon && searchOverlay) {
        searchIcon.addEventListener("click", () => {
          const inputField = searchOverlay.querySelector("input");
          if (inputField) {
            (inputField as HTMLInputElement).value = "";
          }
          searchOverlay.style.display = "flex";
          inputField?.focus();
        });

        searchOverlay.addEventListener("click", (e) => {
          if (e.target === searchOverlay) {
            searchOverlay.style.display = "none";
          }
        });
      }
    };

    // Setup hamburger menu
    const setupHamburgerMenu = () => {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      const hamburgerIcon = document.querySelector(".hamburger i");

      hamburger?.addEventListener("click", () => {
        navLinks?.classList.toggle("active");
        if (navLinks?.classList.contains("active")) {
          hamburgerIcon?.classList.remove("fa-bars");
          hamburgerIcon?.classList.add("fa-xmark");
          hamburger.classList.add("close-style");
        } else {
          hamburgerIcon?.classList.remove("fa-xmark");
          hamburgerIcon?.classList.add("fa-bars");
          hamburger.classList.remove("close-style");
        }
      });
    };

    // Initialize all functionality
    setupStickyNavbar();
    initializeStickyBar();
    initializeCardCarousel();
    setupSearchOverlay();
    setupHamburgerMenu();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", setupStickyNavbar);
    };
  }, []);

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
              <div className="search-icon">
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
        <iframe
          src="https://player.vimeo.com/video/737452487?h=6d6996a38b&badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
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
            src="http://localhost:1337/uploads/middle_image_10d8bb7897.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/layout_image_9e8f4cdc9d.webp"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/layout_image2_a373425125.webp"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/middle_image3_97df48f19a.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/middle_image2_bb74a29365.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/practo" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Film-Motion-Graphocs" className="Categories-data">
            <span className="branding-title">Film and Motion Graphocs</span>
          </Link>
          <Link to="/dilsenaman" className="next-project">
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
            <Link to="/practo">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Film-Motion-Graphocs" className="sticky-card">
            <span className="sticky-data-text">Film and Motion Graphocs</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/dilsenaman">
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

export default Canara;
