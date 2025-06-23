import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./pepsicoKosi.css";

const PepsicoKosi: React.FC = () => {
  useEffect(() => {
    // Initialize video banner dimensions
    const adjustVideoHeight = () => {
      const banner = document.querySelector(".byoma-banner") as HTMLElement;
      const windowWidth = window.innerWidth;

      if (windowWidth > 768) {
        if (windowWidth > 1400) {
          banner.style.height = "600px";
        } else if (windowWidth > 1024) {
          banner.style.height = "500px";
        } else {
          banner.style.height = "400px";
        }
      } else {
        banner.style.height = "auto";
      }
    };

    // Initialize carousel
    const initializeCardCarousel = () => {
      const track = document.querySelector("#carousel-track");
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

      setInterval(scrollNext, 3000);
    };

    // Run initializations
    adjustVideoHeight();
    initializeCardCarousel();

    // Add event listeners
    window.addEventListener("resize", adjustVideoHeight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", adjustVideoHeight);
    };
  }, []);

  return (
    <>
      <section className="byoma-banner">
        <iframe
          src="https://player.vimeo.com/video/606353184?h=67084e5c40&badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
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
            src="http://localhost:1337/uploads/middle_image_6a883ad0e5.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/layout_image_8c29182272.webp"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="http://localhost:1337/uploads/layout_iamge2_044d42df41.webp"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/middle_image2_6b88ab5eab.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="http://localhost:1337/uploads/middle_image3_df397f1f1a.webp"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/pepsico" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Film-Motion-Graphocs" className="Categories-data">
            <span className="branding-title">Film and Motion Graphocs</span>
          </Link>
          <Link to="/projects/lam" className="next-project">
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
            <Link to="/projects/pepsico">
              <i className="fas fa-arrow-left"></i>
              <span className="tooltip left-tooltip">Previous Project</span>
            </Link>
          </div>

          <Link to="/work#Film-Motion-Graphocs" className="sticky-card">
            <span className="sticky-data-text">Film and Motion Graphocs</span>
          </Link>

          <div className="icon-wrapper right-icon">
            <Link to="/projects/lam">
              <i className="fas fa-arrow-right"></i>
              <span className="tooltip right-tooltip">Next Project</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PepsicoKosi;
