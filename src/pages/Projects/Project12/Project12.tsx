import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./project12.css";

const Project12: React.FC = () => {
  useEffect(() => {
    // Initialize all the JavaScript functionality
    const initializeAll = () => {
      // Navbar functionality
      const highlightActivePage = () => {
        const currentPath = window.location.pathname.split("/").pop();
        const menuItems = document.querySelectorAll(".nav-links li a");
        menuItems.forEach((item) => {
          if (
            item instanceof HTMLElement &&
            item.getAttribute("href") === currentPath
          ) {
            item.classList.add("active");
          }
        });
      };

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

      // Sticky navbar
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

      // Sticky bar functionality
      const initializeStickyBar = () => {
        const stickyData = document.getElementById("stickyData");
        const footer = document.querySelector(".footer-section");

        const handleStickyBarScroll = () => {
          if (!stickyData || !footer) return;

          const footerTop = footer.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (window.scrollY > 20) {
            stickyData.classList.remove("hidden");
          } else {
            stickyData.classList.add("hidden");
          }

          if (footerTop <= windowHeight) {
            stickyData.style.opacity = "0";
            stickyData.style.pointerEvents = "none";
          } else {
            stickyData.style.opacity = "1";
            stickyData.style.pointerEvents = "all";
          }
        };

        window.addEventListener("scroll", handleStickyBarScroll);
      };

      // Initialize carousel
      const initializeCardCarousel = () => {
        const track = document.querySelector("#carousel-track");
        if (!track) return;

        const cards = Array.from(track.children);
        const originalCardCount = cards.length;

        // Clone cards
        cards.forEach((card) => {
          const clone = card.cloneNode(true);
          if (clone instanceof HTMLElement) {
            clone.classList.add("clone");
            track.appendChild(clone);
          }
        });

        let index = 0;
        const cardWidth = (() => {
          const firstCard = cards[0];
          if (firstCard instanceof HTMLElement) {
            const style = window.getComputedStyle(firstCard);
            const marginRight = parseFloat(style.marginRight) || 0;
            return firstCard.offsetWidth + marginRight;
          }
          return 0;
        })();

        const scrollNext = () => {
          if (!(track instanceof HTMLElement)) return;

          index++;
          track.style.transition = "transform 0.5s ease";
          track.style.transform = `translateX(-${index * cardWidth}px)`;

          if (index >= originalCardCount) {
            setTimeout(() => {
              if (!(track instanceof HTMLElement)) return;
              track.style.transition = "none";
              index = 0;
              track.style.transform = "translateX(0px)";
            }, 500);
          }
        };

        setInterval(scrollNext, 3000);
      };

      highlightActivePage();
      setupHamburgerMenu();
      setupStickyNavbar();
      initializeStickyBar();
      initializeCardCarousel();
    };

    initializeAll();
  }, []);

  const toggleSearch = () => {
    const overlay = document.getElementById("search-overlay");
    const inputField = overlay?.querySelector("input");

    if (inputField instanceof HTMLInputElement) {
      inputField.value = "";
    }
    if (overlay instanceof HTMLElement) {
      overlay.style.display = "flex";
      inputField?.focus();

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

      <section className="stamina-banner">
        <img
          src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/Logo.png"
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/1.Kahlua_Bottle-1.png"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/2.Kahlua_CASE-STUDY_Letters-Morph_V001-2.mp4"
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

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/3.-Kahlua_Bottle-2-scaled.jpg"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/4.-Kahlua_Bottle-3-1.png"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/5.-Kahlua_Stamp.png"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/6.-Kahlua_Crest.png"
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/7.-Kahlua_Typography.png"
            alt="Tea Packaging Design"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/8.-Kahlua_Ribbon-REVERSE.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/9.-Kahlua_Drinks.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/10.-Kahlua_toolkit.png"
            alt="Floral Cups"
            className="banner-img"
          />
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

export default Project12;
