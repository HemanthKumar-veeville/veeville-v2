import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./project5.css";

const Project5: React.FC = () => {
  useEffect(() => {
    // Initialize sticky bar behavior
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

      return () => {
        window.removeEventListener("scroll", handleStickyBarScroll);
      };
    };

    // Initialize card carousel
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

      const getCardWidth = () => {
        const firstCard = cards[0];
        if (!firstCard) return 0;

        const style = window.getComputedStyle(firstCard);
        const marginRight = parseFloat(style.marginRight) || 0;
        return (firstCard as HTMLElement).offsetWidth + marginRight;
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

      const interval = setInterval(scrollNext, 3000);

      return () => {
        clearInterval(interval);
      };
    };

    initializeStickyBar();
    initializeCardCarousel();
  }, []);

  return (
    <>
      <section className="stamina-banner">
        <img
          src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/02_KOTEXTHEPACK_CaseStudy_Pearlfisher.png"
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
            <h2>
              How can we empower tween girls to embrace their periods with pride
              and confidence as they grow up to be young women?
            </h2>
          </div>
          <div className="about-right">
            <p>
              Challenging taboos and misconceptions around menstrual health, The
              Pack by Kotex revolutionises period education for tween girls in
              South Africa with confidence. This engaging kit is designed to
              provide girls with the tools and knowledge they need to navigate
              their first period, accompanied by a pack of friendly characters
              to help guide them along the way.
            </p>
          </div>
        </div>
      </section>

      <section className="kotex-pack">
        <iframe
          className="kotex-pack__video"
          src="https://player.vimeo.com/video/991613826?h=422f7fd875"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/04_KOTEXTHEPACK_CaseStudy_Pearlfisherpng.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="pack-experience">
        <div className="pack-experience__column pack-experience__text">
          <p>
            The idea of being part of a community of girls comes to life through
            the creation of a pack of relatable characters, introducing Kiara,
            Thembeka, Amy and Mia. Their individual personalities, vibe and
            style – from the fashion-forward Kiara to the bold, sporty Thembeka
            – feature across brand touch points and uniquely designed tins.
            <br />
            <br />
            This pack of friends come together to help girls through their
            individual experiences with a positive attitude.
          </p>
        </div>
        <div className="pack-experience__column pack-experience__video">
          <video autoPlay muted loop playsInline>
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/05_KOTEXTHEPACK_CaseStudy_Pearlfisher.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/06_KOTEXTHEPACK_CaseStudy_Pearlfisher.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/07_KOTEXTHEPACK_CaseStudy_Pearlfisher.png"
            alt="Floral Cups"
            className="banner-img"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/08_KOTEXTHEPACK_CaseStudy_Pearlfisher.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/09_KOTEXTHEPACK_CaseStudy_Pearlfisher.png"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/10_KOTEXTHEPACK_CaseStudy_Pearlfisher.png"
            alt="Design Concept 2"
            className="project-images__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper image-data">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/11_KOTEXTHEPACK_CaseStudy_Pearlfisher.png"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/12_KOTEXTHEPACK_CaseStudy_Pearlfisher.mp4"
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

      <section className="image-banner">
        <div className="image-wrapper image-data">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/13_KOTEXTHEPACK_CaseStudy_Pearlfisher.png"
            alt="Floral Cups"
            className="banner-img"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/02/14_KOTEXTHEPACK_CaseStudy_Pearlfishermp4-1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="project-navigation-section">
        <hr className="divider" />
        <div className="project-navigation">
          <Link to="/projects/project1" className="prev-project">
            Previous Project
          </Link>
          <Link to="/work#Film-Motion-Graphics" className="Categories-data">
            <span className="branding-title">Film & Motion Graphics</span>
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
    </>
  );
};

export default Project5;
