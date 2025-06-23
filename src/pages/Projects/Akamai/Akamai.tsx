import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Akamai.css";
import { API_BASE_URL } from "../../Work/constants";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import RouteTransition from "../../../components/ui/RouteTransition";

interface RelatedProject {
  image: string;
  title: string;
  description: string;
}

const Akamai: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const initializeStickyBar = () => {
      const stickyData = document.getElementById("stickyData");
      const footer = document.querySelector(".footer-section");
      if (!stickyData || !footer) return;

      const handleStickyBarScroll = () => {
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

    initializeStickyBar();
  }, []);

  useEffect(() => {
    const initializeCardCarousel = () => {
      const track = document.querySelector("#carousel-track");
      if (!track) return;

      const cards = Array.from(track.children);
      const originalCardCount = cards.length;

      // Clone cards to avoid white space during infinite scroll
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        (clone as HTMLElement).classList.add("clone");
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

    initializeCardCarousel();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const relatedProjects: RelatedProject[] = [
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
    <RouteTransition>
      <ScrollToTop />
      <div>
        {/* Navbar */}
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="logo">
            <Link to="/" className="logo-link">
              <img
                src={`${API_BASE_URL}/uploads/Logo_Image_e91355f03e.webp`}
                alt="Veeville Logo"
                className="logo-image"
              />
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
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
                <div className="search-icon" onClick={toggleSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                {isSearchOpen && (
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
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Banner Section */}
        <section className="stamina-banner">
          <img
            src={`${API_BASE_URL}/uploads/Akamai_Banner_37385fa3d4.webp`}
            alt="Banner Image"
            className="stamina-banner__image"
          />
        </section>

        {/* About Section */}
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
                non-alcoholic spirit was born. Every step of the brand's
                creation was collaborative with Ben, driven by a commitment to
                communicate Seedlip's challenger proposition and lead a design
                transformation to create a category language for a category that
                didn't yet exist. Visually inspiring a paradigm shift to answer
                the question: What to drink when you're not drinking?
              </p>
            </div>
          </div>
        </section>

        {/* Image Banner Sections */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src={`${API_BASE_URL}/uploads/Akamai_Environment_Graphics_Middle01_1_063f27f206.webp`}
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Intro Section */}
        <section className="project-intro">
          <div className="project-intro__column project-intro__text">
            <p>
              We crafted the essence of the distillation process and the
              ingredients into a distinctive, exploratory, and illustrative 'art
              of nature' design language to bring the product's beauty and
              integrity to the fore. This approach reimagines the natural
              ingredients, and each variant is brought to life through artistic
              compositions of Seedlip's botanicals. The Seedlip monogram plays
              homage to the heritage of its distillation, elegantly housed
              within the iconic 'S.'
            </p>
          </div>
          <div className="project-intro__column project-intro__image">
            <img
              src={`${API_BASE_URL}/uploads/Akamai_Environment_Graphics_Right_eded965b10.webp`}
              alt="Tea Packaging Design"
            />
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src={`${API_BASE_URL}/uploads/Akamai_Environment_Graphics_Middle02_97f14b4505.webp`}
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Data Section */}
        <section className="project-datas">
          <div className="project-datas__column project-datas__image">
            <img
              src={`${API_BASE_URL}/uploads/Akamai_Environment_Graphics_Left_3a180c4c5a.webp`}
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
              The reimagined icon connects the brand's heritage with its
              refreshed premium positioning, representing both cultural depth
              and modern aspirations. By bringing this forgotten asset back to
              life, the butterfly now serves as a proud and evocative emblem of
              Xiang Piao Piao's transformation.
            </p>
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src={`${API_BASE_URL}/uploads/Akamai_Environment_Graphics_Middle06_cc633522e7.webp`}
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src={`${API_BASE_URL}/uploads/Akamai_Environment_Graphics_Middle05_1e6b207f88.webp`}
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Navigation */}
        <section className="project-navigation-section">
          <hr className="divider" />
          <div className="project-navigation">
            <Link to="/projects/munchatantra" className="prev-project">
              Previous Project
            </Link>
            <Link to="/work#Environmental-graphic" className="Categories-data">
              <span className="branding-title">Environmental Graphic</span>
            </Link>
            <Link to="/projects/kosi" className="next-project">
              Next Project
            </Link>
          </div>
        </section>

        {/* Related Projects Carousel */}
        <section className="project-cards-carousel">
          <h2 className="section-title">Related Projects</h2>
          <div className="carousel-wrapper">
            <div className="carousel-track" id="carousel-track">
              {relatedProjects.map((project, index) => (
                <div key={index} className="carousel-card">
                  <img src={project.image} alt={`Project ${index + 1}`} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="section-datas">
          <div className="sticky-data" id="stickyData">
            <div className="icon-wrapper left-icon">
              <Link to="/projects/munchatantra">
                <i className="fas fa-arrow-left"></i>
                <span className="tooltip left-tooltip">Previous Project</span>
              </Link>
            </div>

            <Link to="/work#Environmental-graphic" className="sticky-card">
              <span className="sticky-data-text">Environment Graphics</span>
            </Link>

            <div className="icon-wrapper right-icon">
              <Link to="/projects/kosi">
                <i className="fas fa-arrow-right"></i>
                <span className="tooltip right-tooltip">Next Project</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
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
      </div>
    </RouteTransition>
  );
};

export default Akamai;
