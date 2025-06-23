import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Booket.css";

const Booket: React.FC = () => {
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

    // Initialize card carousel
    const initializeCardCarousel = () => {
      const track = document.querySelector("#carousel-track");
      if (!track) return;

      const cards = Array.from(track.children);
      const originalCardCount = cards.length;

      // Clone cards
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        if (clone instanceof Element) {
          clone.classList.add("clone");
          track.appendChild(clone);
        }
      });

      let index = 0;
      const scrollInterval = 3000;

      const getCardWidth = () => {
        const firstCard = cards[0];
        if (firstCard instanceof HTMLElement) {
          const style = window.getComputedStyle(firstCard);
          const marginRight = parseFloat(style.marginRight) || 0;
          return firstCard.offsetWidth + marginRight;
        }
        return 0;
      };

      const scrollNext = () => {
        const cardWidth = getCardWidth();
        index++;
        if (track instanceof HTMLElement) {
          track.style.transition = "transform 0.5s ease";
          track.style.transform = `translateX(-${index * cardWidth}px)`;

          if (index >= originalCardCount) {
            setTimeout(() => {
              track.style.transition = "none";
              index = 0;
              track.style.transform = "translateX(0px)";
            }, 500);
          }
        }
      };

      const intervalId = setInterval(scrollNext, scrollInterval);
      return () => clearInterval(intervalId);
    };

    // Setup hamburger menu
    const setupHamburgerMenu = () => {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      const hamburgerIcon = document.querySelector(".hamburger i");

      const toggleMenu = () => {
        navLinks?.classList.toggle("active");
        if (navLinks?.classList.contains("active")) {
          hamburgerIcon?.classList.remove("fa-bars");
          hamburgerIcon?.classList.add("fa-xmark");
          hamburger?.classList.add("close-style");
        } else {
          hamburgerIcon?.classList.remove("fa-xmark");
          hamburgerIcon?.classList.add("fa-bars");
          hamburger?.classList.remove("close-style");
        }
      };

      hamburger?.addEventListener("click", toggleMenu);
      return () => hamburger?.removeEventListener("click", toggleMenu);
    };

    // Initialize all functionality
    const cleanupFunctions = [
      setupStickyNavbar(),
      initializeStickyBar(),
      initializeCardCarousel(),
      setupHamburgerMenu(),
    ];

    // Cleanup on component unmount
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);

  const toggleSearch = () => {
    const overlay = document.getElementById("search-overlay");
    const inputField = overlay?.querySelector("input");
    if (inputField instanceof HTMLInputElement) {
      inputField.value = "";
    }
    if (overlay) {
      overlay.style.display = "flex";
      inputField?.focus();

      overlay.addEventListener("click", (e) => {
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

      <section className="stamina-banner">
        <img
          src="http://localhost:1337/uploads/Top_Banner_c502c259dd.webp"
          alt="Banner Image"
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
            src="http://localhost:1337/uploads/Middle_Image_1_40b0d648de.webp"
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
            src="http://localhost:1337/uploads/Booket_07_f5b553113d.webp"
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/Booket_08_e3b431666d.webp"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/Booket_09_599ff812d5.webp"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_Image_2_84cc0674df.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="http://localhost:1337/uploads/Booket_10_8cdf24b30a.webp"
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

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_Image_3_7abec34671.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/quaker" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Book-design" className="Categories-data">
            <span className="branding-title">Book Design</span>
          </Link>
          <Link to="/projects/kdem" className="next-project">
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
            <Link to="/projects/quaker">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Environmental-graphic" className="sticky-card">
            <span className="sticky-data-text">Environment Graphics</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/kdem">
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

export default Booket;
