import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./project17.css";
import ScrollToTop from "../../../components/ui/ScrollToTop";
import RouteTransition from "../../../components/ui/RouteTransition";

interface CarouselCard {
  image: string;
  title: string;
  description: string;
}

const Project17: React.FC = () => {
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

    // Initialize carousel
    const initializeCardCarousel = () => {
      const track = document.querySelector("#carousel-track") as HTMLElement;
      if (!track) return;

      const cards = Array.from(track.children);
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
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        if (index >= originalCardCount) {
          setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = "translateX(0px)";
          }, 500);
        }
      };

      const interval = setInterval(scrollNext, 3000);
      return () => clearInterval(interval);
    };

    const cleanupFunctions = [
      setupStickyNavbar(),
      initializeStickyBar(),
      initializeCardCarousel(),
    ];

    return () => cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
  }, []);

  const toggleSearch = () => {
    const overlay = document.getElementById("search-overlay");
    const inputField = overlay?.querySelector("input");

    if (inputField) {
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

  const toggleMenu = () => {
    const navLinks = document.querySelector(".nav-links");
    const hamburgerIcon = document.querySelector(".hamburger i");
    const hamburger = document.querySelector(".hamburger");

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

  const carouselCards: CarouselCard[] = [
    {
      image: "http://localhost:1337/uploads/Thumbnail_Akamai_e98ec23a74.webp",
      title: "Akamai",
      description: "Fusing personality and authenticity",
    },
    {
      image: "http://localhost:1337/uploads/BSF_Banner_8bb1b6c31e.webp",
      title: "BSF",
      description: "Reasserting leadership and expertise",
    },
    {
      image: "http://localhost:1337/uploads/DRL_Thumbnail_8bd6627090.webp",
      title: "DRL Report",
      description: "Treasuring story and symbolism",
    },
    {
      image: "http://localhost:1337/uploads/KDEM_thumbanail_f37f8768a9.webp",
      title: "KDEM Project",
      description: "Revitalizing energy with design",
    },
  ];

  return (
    <RouteTransition>
      <ScrollToTop />
      <div>
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

          <div className="hamburger" onClick={toggleMenu}>
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
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_Header.png"
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

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_01.png"
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
              homage to the heritage of its distillation, elegantly housed
              within the iconic 'S.'
            </p>
          </div>
          <div className="project-intro__column project-intro__image">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_02.png"
              alt="Tea Packaging Design"
            />
          </div>
        </section>

        <section className="project-images">
          <div className="project-images__column">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_03.png"
              alt="Design Concept 1"
              className="project-images__img"
            />
          </div>
          <div className="project-images__column">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_04.png"
              alt="Design Concept 2"
              className="project-images__img"
            />
          </div>
        </section>

        <section className="project-images">
          <div className="project-images__column">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_05.png"
              alt="Design Concept 1"
              className="project-images__img"
            />
          </div>
          <div className="project-images__column">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_06.png"
              alt="Design Concept 2"
              className="project-images__img"
            />
          </div>
        </section>

        <section className="project-intro">
          <div className="project-intro__column project-intro__text">
            <p>
              The brand is further elevated through copper caps and detailing,
              paying tribute to the copper stills that bring its unique drink to
              life. Becoming more than just a drink, product or brand by
              extending its inspiration, education and growth into 35 markets
              worldwide, Seedlip was acquired by global giant Diageo just one
              year after launch, in 2016.
            </p>
          </div>
          <div className="project-intro__column project-intro__image">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_07.png"
              alt="Tea Packaging Design"
            />
          </div>
        </section>

        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2023/11/SEEDLIP_08.png"
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
              {carouselCards.map((card, index) => (
                <div key={index} className="carousel-card">
                  <img src={card.image} alt={`Project ${index + 1}`} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
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

export default Project17;
