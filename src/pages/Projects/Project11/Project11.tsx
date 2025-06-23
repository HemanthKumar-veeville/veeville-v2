import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./project11.css";

const Project11: React.FC = () => {
  useEffect(() => {
    // Initialize all the JavaScript functionality
    const initializeAll = () => {
      // Navbar functionality
      const highlightActivePage = () => {
        const currentPath = window.location.pathname.split("/").pop();
        const menuItems = document.querySelectorAll(".nav-links li a");
        menuItems.forEach((item) => {
          const href = item.getAttribute("href");
          if (href && currentPath && href.endsWith(currentPath)) {
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

          if (window.scrollY > 20) {
            stickyData.classList.remove("hidden");
          } else {
            stickyData.classList.add("hidden");
          }

          if (footerTop <= windowHeight) {
            (stickyData as HTMLElement).style.opacity = "0";
            (stickyData as HTMLElement).style.pointerEvents = "none";
          } else {
            (stickyData as HTMLElement).style.opacity = "1";
            (stickyData as HTMLElement).style.pointerEvents = "all";
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
          (clone as HTMLElement).classList.add("clone");
          track.appendChild(clone);
        });

        let index = 0;
        const scrollInterval = 3000;

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

        setInterval(scrollNext, scrollInterval);
      };

      // Initialize search functionality
      const setupSearch = () => {
        const searchIcon = document.querySelector(".search-icon");
        const searchOverlay = document.getElementById("search-overlay");
        const searchInput = searchOverlay?.querySelector("input");

        searchIcon?.addEventListener("click", () => {
          if (searchOverlay && searchInput) {
            searchInput.value = "";
            (searchOverlay as HTMLElement).style.display = "flex";
            searchInput.focus();
          }
        });

        searchOverlay?.addEventListener("click", (e) => {
          const target = e.target as HTMLElement;
          if (target === searchOverlay) {
            (searchOverlay as HTMLElement).style.display = "none";
          }
        });
      };

      // Call all initialization functions
      highlightActivePage();
      setupHamburgerMenu();
      setupStickyNavbar();
      initializeStickyBar();
      initializeCardCarousel();
      setupSearch();
    };

    initializeAll();
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

      <section className="stamina-banner">
        <img
          src="http://localhost:1337/uploads/KDEM_01_600f33a0a3.webp"
          alt="Let's Talk Stamina Banner"
          className="stamina-banner__image"
        />
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>
              How do we forge ahead as pioneers and create a stream of change?
            </h2>
          </div>
          <div className="about-right">
            <p>
              The story of SodaStream has always been about a change for better.
              As the pioneer of sparkling water creation, the brand has been
              empowering consumers to challenge the status quo and to create
              sparkling water experiences in the comfort of their own homes.
            </p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-02.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-03.png"
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-04-1.png"
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-06.png"
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-07.png"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-08.png"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-09.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-10.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-11.png"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-12.png"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-14.png"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-13.png"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/sodastream-case-study-15.png"
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

export default Project11;
