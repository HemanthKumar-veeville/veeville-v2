import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./VBL.css";
import RouteTransition from "../../../components/ui/RouteTransition";
import ScrollToTop from "../../../components/ui/ScrollToTop";

interface RelatedProject {
  image: string;
  title: string;
  description: string;
}

const VBL: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isStickyBarHidden, setIsStickyBarHidden] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      // Handle sticky bar visibility
      const footer = document.querySelector(".footer-section");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsStickyBarHidden(window.scrollY <= 20);

        if (footerTop <= windowHeight) {
          const stickyData = document.getElementById("stickyData");
          if (stickyData) {
            stickyData.style.opacity = "0";
            stickyData.style.pointerEvents = "none";
          }
        } else {
          const stickyData = document.getElementById("stickyData");
          if (stickyData) {
            stickyData.style.opacity = "1";
            stickyData.style.pointerEvents = "all";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    const originalCardCount = cards.length;

    // Clone cards for infinite scroll
    cards.forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.classList.add("clone");
      track.appendChild(clone);
    });

    const getCardWidth = () => {
      const firstCard = cards[0] as HTMLElement;
      const style = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(style.marginRight) || 0;
      return firstCard.offsetWidth + marginRight;
    };

    const scrollNext = () => {
      const cardWidth = getCardWidth();
      setCarouselIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${nextIndex * cardWidth}px)`;

        if (nextIndex >= originalCardCount) {
          setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateX(0px)";
          }, 500);
          return 0;
        }
        return nextIndex;
      });
    };

    const intervalId = setInterval(scrollNext, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearchOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleSearch();
    }
  };

  const relatedProjects: RelatedProject[] = [
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
        {/* Navbar */}
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

          <div className="hamburger" onClick={toggleMenu}>
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
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
                  <div id="search-overlay" onClick={handleSearchOverlayClick}>
                    <div className="search-box">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input
                        type="text"
                        placeholder="Ask Bob Anything"
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                      />
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Banner Section */}
        <section className="byoma-banner">
          <iframe
            src="https://player.vimeo.com/video/1057781748?h=88f155abf8&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-left">
              <h2>
                How do we make 60 million daily interactions instantly playful
                and special?
              </h2>
            </div>
            <div className="about-right">
              <p>
                McDonald's boasts a menu full of famous favourites with over 60
                million people served every day. Our multi-year collaboration to
                redesign the fast-food icon's global packaging system was
                centred on activating the brand positioning to make delicious,
                feel-good moments easy for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Image Banner */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="http://localhost:1337/uploads/middle_image_101739d782.webp"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Data Section */}
        <section className="project-datas">
          <div className="project-datas__column project-datas__image">
            <img
              src="http://localhost:1337/uploads/thumbnail_6eead439f0.webp"
              alt="Butterfly Cup"
            />
          </div>
          <div className="project-datas__column project-datas__text">
            <p>
              A new, unified label shape inspired by the ornate architecture of
              Havana immediately unifies the core range, framing the brand's
              iconic logo anchored at its heart—a proud symbol of the vibrant
              pulse and energy that flows through Havana's streets. This created
              a canvas for each product's unique story to be expressed, taking
              consumers on a journey from the unrestrained confidence and
              vibrancy through to richer, layered, more crafted and complex
              taste experiences.
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

        {/* Second Image Banner */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="http://localhost:1337/uploads/middle_image2_44dca40d93.webp"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Intro Section */}
        <section className="project-intro">
          <div className="project-intro__column project-intro__text">
            <p>
              The butterfly introduces a world of harmonious fragrance and
              beauty, reflected in bespoke illustrations of each tea's natural
              ingredients. Using a modern take on Chinese Xieyi paintings, the
              designs balance softness and vibrance. Background colours – orchid
              blue, rose pink, and jasmine green – elevate the experience while
              aiding shelf presence and recognition.
            </p>
          </div>
          <div className="project-intro__column project-intro__image">
            <img
              src="http://localhost:1337/uploads/layout_image2_34567f5502.webp"
              alt="Tea Packaging Design"
            />
          </div>
        </section>

        {/* Third Image Banner */}
        <section className="image-banner">
          <div className="image-wrapper">
            <img
              src="http://localhost:1337/uploads/middle_image4_f5f33f42a1.webp"
              alt="Floral Cups"
              className="banner-img"
            />
          </div>
        </section>

        {/* Project Navigation */}
        <section className="project-navigation-section">
          <hr className="divider" />
          <div className="project-navigation">
            <Link to="/projects/dilsenaman" className="prev-project">
              Previous Project
            </Link>
            <Link to="/work#Event-design" className="Categories-data">
              <span className="branding-title">Event Design</span>
            </Link>
            <Link to="/projects/swiggy" className="next-project">
              Next Project
            </Link>
          </div>
        </section>

        {/* Related Projects Carousel */}
        <section className="project-cards-carousel">
          <h2 className="section-title">Related Projects</h2>
          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              id="carousel-track"
              ref={carouselTrackRef}
            >
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
          <div
            className={`sticky-data ${isStickyBarHidden ? "hidden" : ""}`}
            id="stickyData"
          >
            <div className="icon-wrapper left-icon">
              <Link to="/projects/dilsenaman">
                <i className="fas fa-arrow-left"></i>
                <span className="tooltip left-tooltip">Previous Project</span>
              </Link>
            </div>

            <Link to="/work#Event-design" className="sticky-card">
              <span className="sticky-data-text">Event Design</span>
            </Link>

            <div className="icon-wrapper right-icon">
              <Link to="/projects/swiggy">
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

export default VBL;
