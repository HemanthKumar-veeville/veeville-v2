import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Kyoorius.css";
import Navbar from "../../../components/ui/Navbar";
import ScrollToTop from "../../../components/ui/ScrollToTop";

interface CarouselCard {
  image: string;
  title: string;
  description: string;
}

const Kyoorius: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const initializeCardCarousel = () => {
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
                track.style.transform = "translateX(0px)";
              }
            }, 500);
          }
        }
      };

      setInterval(scrollNext, scrollInterval);
    };

    initializeCardCarousel();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar
        isSticky={isSticky}
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onToggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      <section className="stamina-banner">
        <img
          src="http://localhost:1337/uploads/Banner_Kyoorius_f9a1028487.webp"
          alt="Banner Image"
          className="stamina-banner__image"
        />
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>
              How do we evolve and flourish, with captivating craft and
              consideration?
            </h2>
          </div>
          <div className="about-right">
            <p>
              Since becoming a subsidiary of Beam Suntory in 2016 and achieving
              B Corp certification, this quintessentially British brand has
              remained committed to being the best gin for both people and the
              planet. From its beginnings in a West London micro-distillery,
              Sipsmith has earned its reputation as the home of outrageously
              good hand-crafted gin.
            </p>
          </div>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_Kyoorius1_4b0626daac.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-datas">
        <div className="project-datas__column project-datas__image">
          <img
            src="http://localhost:1337/uploads/left_side1_98ff391a29.webp"
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
            src="http://localhost:1337/uploads/Middle_image2_ad3d5174ca.webp"
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
            src="http://localhost:1337/uploads/right_side1_85f31879e4.webp"
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/Middle_image3_4cc7e0db95.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/drlreport" className="prev-project">
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
            <Link to="/projects/drlreport">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Book-design" className="sticky-card">
            <span className="sticky-data-text">Book Design</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/kdem">
              <i className="fas fa-arrow-right"></i>
              <span className="tooltip right-tooltip">Next Project</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer-section">
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
      </footer>
    </>
  );
};

export default Kyoorius;
