import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../Work/constants";

const ContactPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Refs
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentTime(
        date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    // Handle sticky navbar
    const handleScroll = () => {
      setIsNavbarSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Focus search input when overlay opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(false); // Close search overlay after submission
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${isNavbarSticky ? "sticky" : ""}`}>
        <div className="logo">
          <Link to="/" className="logo-link">
            <img
              src={`${API_BASE_URL}/uploads/Logo_Image_e91355f03e.webp`}
              alt="Veeville Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "close-style" : ""}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            className={isNavbarSticky ? "sticky-icon" : ""}
          />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/work">WORK</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact" className="active">
              CONTACT
            </Link>
          </li>

          <li>
            <div className="search-container">
              <div className="search-icon" onClick={toggleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              {isSearchOpen && (
                <div
                  id="search-overlay"
                  style={{ display: "flex" }}
                  onClick={toggleSearch}
                >
                  <div
                    className="search-box"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <form onSubmit={handleSearchSubmit}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Ask Bob Anything"
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button type="submit" className="search-submit">
                        Search
                      </button>
                    </form>
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
          src={`${API_BASE_URL}/uploads/Contact_Banner_acc5cd1db2.webp`}
          alt="Banner Image"
          className="stamina-banner__image"
        />
      </section>

      {/* Locations Section */}
      <section className="locations">
        <div className="locations-container">
          {/* Left Side */}
          <div className="location-block">
            <h2>Bengaluru</h2>
            <div className="time-display">{currentTime}</div>
            <p>
              Contact Us:{" "}
              <a href="mailto:getpersonal@veeville.com">
                getpersonal@veeville.com
              </a>
            </p>
            <p>080 2354 2582</p>
            <p>
              Veeville Consulting Private Limited #300,
              <br />
              3rd Floor, 1st Block, 3rd Main, RT Nagar,
              <br />
              Bangalore 560032
              <br />
              <a
                href="https://www.google.com/maps/place/Veeville+Consulting+%5BP%5D+Ltd./@13.020155,77.594268,15z/data=!4m6!3m5!1s0x3bae17f80fffffff:0x77dcef18685169d1!8m2!3d13.0201546!4d77.5942678!16s%2Fg%2F1vlqnnj7?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Us
              </a>
            </p>
          </div>

          {/* Right Side */}
          <div className="description-block">
            <h3>Connect with Us!</h3>
            <p>
              We'd love to hear from you. Reach out for partnerships, business
              inquiries, or just say hello!
            </p>
            <p>
              Email:{" "}
              <a href="mailto:getpersonal@veeville.com">
                getpersonal@veeville.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
