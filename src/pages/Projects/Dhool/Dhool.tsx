import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dhool.css";

const API_BASE_URL = "http://localhost:1337";

const Dhool: React.FC = () => {
  useEffect(() => {
    // Initialize carousel
    const initializeCardCarousel = ({
      trackSelector = "#carousel-track",
      scrollInterval = 3000,
      scrollStep = 1,
    } = {}) => {
      const track = document.querySelector(trackSelector) as HTMLElement | null;
      if (!track) return console.warn("Carousel track not found.");

      let cards = Array.from(track.children);
      const originalCardCount = cards.length;

      // Clone cards to avoid white space during infinite scroll
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        (clone as HTMLElement).classList.add("clone");
        track.appendChild(clone);
      });

      let index = 0;

      function getCardWidth() {
        const firstCard = cards[0] as HTMLElement;
        const style = window.getComputedStyle(firstCard);
        const marginRight = parseFloat(style.marginRight) || 0;
        return firstCard.offsetWidth + marginRight;
      }

      function scrollNext() {
        if (!track) return;
        const cardWidth = getCardWidth();
        index++;
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        if (index >= originalCardCount) {
          setTimeout(() => {
            if (!track) return;
            track.style.transition = "none";
            index = 0;
            track.style.transform = `translateX(0px)`;
          }, 500);
        }
      }

      setInterval(scrollNext, scrollInterval);
    };

    // Initialize sticky bar
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

      // Cleanup
      return () => {
        window.removeEventListener("scroll", handleStickyBarScroll);
      };
    };

    // Initialize components
    initializeCardCarousel();
    initializeStickyBar();
  }, []);

  return (
    <>
      <section className="stamina-banner">
        <img
          src={`${API_BASE_URL}/uploads/banner_91262070c4.webp`}
          alt="Banner Image"
          className="stamina-banner__image"
        />
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
            src={`${API_BASE_URL}/uploads/middle_image1_3cd73202dd.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="recollagen-section">
        <div className="recollagen-left">
          <img
            src={`${API_BASE_URL}/uploads/layout_image1_4a4f666e4c.webp`}
            alt="Top visual with text"
            className="recollagen-image top-image"
          />
        </div>
        <div className="recollagen-right">
          <p>
            Our strategic vision for ReCollagen was to combine its medical-grade
            efficacy with the sensory delights and daily rituals of skincare
            routines, creating a collagen-specific offering reflective of its
            deep expertise and care.
            <br />
            <br />
            This transformation aimed to go beyond superficial rejuvenation,
            positioning ReCollagen as a leader in holistic collagen skincare,
            helping people replenish the look and feel of healthy, radiant skin
            while embracing the notion that youth is present in all of us,
            regardless of age. It just needs to be awakened and nurtured a bit
            more as we get older.
          </p>
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image_2_da754db459.webp`}
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
            src={`${API_BASE_URL}/uploads/layout_image2_564d589620.webp`}
            alt="Tea Packaging Design"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image3_481c916312.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner last-middle">
        <div className="image-wrapper">
          <img
            src={`${API_BASE_URL}/uploads/middle_image_4_823673c94c.webp`}
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/mtr" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Brand-identity" className="Categories-data">
            <span className="branding-title">Brand Identity</span>
          </Link>
          <Link to="/projects/kheemasutra" className="next-project">
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
                src={`${API_BASE_URL}/uploads/Thumbnail_Akamai_e98ec23a74.webp`}
                alt="Project 1"
              />
              <h3>Akamai</h3>
              <p>Fusing personality and authenticity</p>
            </div>
            <div className="carousel-card">
              <img
                src={`${API_BASE_URL}/uploads/BSF_Banner_8bb1b6c31e.webp`}
                alt="Project 2"
              />
              <h3>BSF</h3>
              <p>Reasserting leadership and expertise</p>
            </div>
            <div className="carousel-card">
              <img
                src={`${API_BASE_URL}/uploads/DRL_Thumbnail_8bd6627090.webp`}
                alt="Project 3"
              />
              <h3>DRL Report</h3>
              <p>Treasuring story and symbolism</p>
            </div>
            <div className="carousel-card">
              <img
                src={`${API_BASE_URL}/uploads/KDEM_thumbanail_f37f8768a9.webp`}
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
            <Link to="/projects/mtr">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Brand-identity" className="sticky-card">
            <span className="sticky-data-text">Brand Identity</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/kheemasutra">
              <i className="fas fa-arrow-right"></i>
              <span className="tooltip right-tooltip">Next Project</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dhool;
