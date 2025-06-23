import React, { useEffect } from "react";
import "./Revolutionari.css";
import { Link } from "react-router-dom";

const Revolutionari: React.FC = () => {
  useEffect(() => {
    // Initialize all the JavaScript functionality
    const initializeAll = () => {
      highlightActivePage();
      setupHamburgerMenu();
      setupStickyNavbar();
      initializeStickyBar();
      initializeCardCarousel();
    };

    // Highlight active page in navigation
    const highlightActivePage = () => {
      const currentPath = window.location.pathname.split("/").pop();
      const menuItems = document.querySelectorAll(".nav-links li a");
      menuItems.forEach((item) => {
        if (
          item instanceof HTMLElement &&
          item.getAttribute("href")?.includes(currentPath || "")
        ) {
          item.classList.add("active");
        }
      });
    };

    // Setup hamburger menu functionality
    const setupHamburgerMenu = () => {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      const hamburgerIcon = document.querySelector(".hamburger i");

      hamburger?.addEventListener("click", () => {
        navLinks?.classList.toggle("active");
        if (hamburgerIcon instanceof HTMLElement) {
          if (navLinks?.classList.contains("active")) {
            hamburgerIcon.classList.remove("fa-bars");
            hamburgerIcon.classList.add("fa-xmark");
            hamburger.classList.add("close-style");
          } else {
            hamburgerIcon.classList.remove("fa-xmark");
            hamburgerIcon.classList.add("fa-bars");
            hamburger.classList.remove("close-style");
          }
        }
      });
    };

    // Setup sticky navbar
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
    };

    // Initialize card carousel
    const initializeCardCarousel = () => {
      const track = document.querySelector("#carousel-track");
      if (!track) return;

      let cards = Array.from(track.children);
      const originalCardCount = cards.length;

      // Clone cards for infinite scroll
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        if (clone instanceof HTMLElement) {
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
              if (track instanceof HTMLElement) {
                track.style.transition = "none";
                index = 0;
                track.style.transform = `translateX(0px)`;
              }
            }, 500);
          }
        }
      };

      setInterval(scrollNext, scrollInterval);
    };

    // Toggle search overlay
    window.toggleSearch = () => {
      const overlay = document.getElementById("search-overlay");
      const inputField = overlay?.querySelector("input");

      if (inputField instanceof HTMLInputElement) {
        inputField.value = "";
      }
      if (overlay instanceof HTMLElement) {
        overlay.style.display = "flex";
        inputField?.focus();

        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            overlay.style.display = "none";
          }
        });
      }
    };

    initializeAll();

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
              <div
                className="search-icon"
                onClick={() => window.toggleSearch()}
              >
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
          src="http://localhost:1337/uploads/Revolutionari_Banner_033980bf4b.webp"
          alt="Banner Image"
          className="stamina-banner__image"
        />
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>
              How can an icon bridge tradition and trend in China's tea market?
            </h2>
          </div>
          <div className="about-right">
            <p>
              Since 2005, Xiang Piao Piao has been China's original powdered
              milk tea brand, bringing the comfort and fragrance of this
              national favorite into the home. Today, it faces tough competition
              from high street tea stores like Chagee, HeyTea, and Starbucks,
              which appeal to younger cohorts with innovative experiences,
              flavours, and ingredients. To meet the challenge, Xiang Piao Piao
              reinvented instant milk tea for home consumption. Made with fine
              teas, flower essences, and real UHT milk, the new series elevates
              the brand into a fresher, more natural, and premium space while
              retaining home-based convenience.
            </p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_RE_Images_ee43cb3d4c.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper image-conraier">
          <img
            src="http://localhost:1337/uploads/Middle_RE_Image1_92431bf213.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="http://localhost:1337/uploads/Website_Gif_d5a80501de.gif"
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

      <section className="gif-section">
        <div className="gif-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_RE_Image2_4ee9caac8d.webp"
            alt="Bento Box Animation"
            className="gif-image"
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
            src="http://localhost:1337/uploads/Side_RE_image2_4c96c7ad8c.webp"
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_RE_Image3_ef059f2a0e.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="http://localhost:1337/uploads/Change_begins_here_27f1f60dd5.gif"
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

      <section className="gif-section">
        <div className="gif-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_RE_Image4_09f90fe74d.webp"
            alt="Bento Box Animation"
            className="gif-image"
          />
        </div>
      </section>

      <section className="project-intro">
        <div className="project-intro__column project-intro__text">
          <p>
            Pearlfisher's global team accurately understood our brand challenges
            and supported XiangPiaoPiao as we embarked on a new chapter of
            premiumization and brand elevation. Their unique work approach,
            strategic thinking and world-class creativity have inspired our
            internal team. The delivered outcome has far exceeded our
            expectations. The key brand asset – the golden bird-wing butterfly –
            smartly conveys our brand DNA. It resonates with the consuming
            scenarios in line with the new positioning and has inspired our
            identity presence through pop-ups and the brand world.
          </p>
        </div>
        <div className="project-intro__column project-intro__image">
          <img
            src="http://localhost:1337/uploads/Side_RE_Image4_0d02ac0da4.webp"
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/sapgca" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Campaigns" className="Categories-data">
            <span className="branding-title">Campaigns</span>
          </Link>
          <Link to="/projects/levis" className="next-project">
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
            <Link to="/projects/sapgca">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Campaigns" className="sticky-card">
            <span className="sticky-data-text">Campaigns</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/levis">
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
            <span>London.</span>
            <span>New York.</span>
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

// Add this to make TypeScript happy with the window.toggleSearch function
declare global {
  interface Window {
    toggleSearch: () => void;
  }
}

export default Revolutionari;
