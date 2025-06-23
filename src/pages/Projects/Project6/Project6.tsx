import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./project6.css";

const Project6: React.FC = () => {
  useEffect(() => {
    // Initialize card carousel
    const initializeCardCarousel = ({
      trackSelector = "#carousel-track",
      scrollInterval = 3000,
    } = {}) => {
      const track = document.querySelector(trackSelector);
      if (!track) return console.warn("Carousel track not found.");

      let cards = Array.from(track.children) as HTMLElement[];
      const originalCardCount = cards.length;

      // Clone cards to avoid white space during infinite scroll
      cards.forEach((card) => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.classList.add("clone");
        track.appendChild(clone);
      });

      let index = 0;

      function getCardWidth() {
        const style = window.getComputedStyle(cards[0]);
        const marginRight = parseFloat(style.marginRight) || 0;
        return cards[0].offsetWidth + marginRight;
      }

      function scrollNext() {
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
      }

      setInterval(scrollNext, scrollInterval);
    };

    initializeCardCarousel();
  }, []);

  return (
    <>
      <section className="byoma-banner">
        <div className="video-container">
          <iframe
            className="byoma-banner__video"
            src="https://www.youtube.com/embed/YBt2G19qhmU?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>How do you humanise the science of collagen?</h2>
          </div>
          <div className="about-right">
            <p>
              Yatsen Group's acquisition of ReCollagen brought a unique
              medical-grade collagen formula into its established beauty brand
              portfolio. To successfully navigate the transition and move from a
              clinical to a consumer-facing brand, Pearlfisher reimagined
              ReCollagen, making it both an efficacious and desirable new brand
              for China's skincare market.
            </p>
          </div>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-02.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="recollagen-section">
        <div className="recollagen-left">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-03.png"
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

      <section className="project-videos">
        <div className="project-videos__column">
          <video
            className="project-videos__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-04.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-videos__column">
          <video
            className="project-videos__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-05.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="project-images">
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-08.jpg"
            alt="Design Concept 1"
            className="project-images__img"
          />
        </div>
        <div className="project-images__column">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-08.jpg"
            alt="Design Concept 2"
            className="project-images__img"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-09.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-10.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="image-banner">
        <div className="image-wrapper image-data">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-11.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-12.png"
            alt="Floral Cups"
            className="banner-img"
          />
        </div>
      </section>

      <section className="project-videos">
        <div className="project-videos__column">
          <video
            className="project-videos__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-14.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-videos__column">
          <video
            className="project-videos__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-13.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="kotex-pack">
        <video className="kotex-pack__video" autoPlay muted loop playsInline>
          <source
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-15.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="project-media">
        <div className="project-media__column project-media__video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="project-media__media"
          >
            <source
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-16.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="project-media__column project-media__image">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-17.png"
            alt="Creative Design"
            className="project-media__img"
          />
        </div>
      </section>

      <section className="image-banner">
        <div className="image-wrapper">
          <img
            src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-18-scaled.jpg"
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
              src="https://pearlfisher.wpenginepowered.com/wp-content/uploads/2024/03/RECOLLAGEN_CASE-STUDY-20.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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

export default Project6;
