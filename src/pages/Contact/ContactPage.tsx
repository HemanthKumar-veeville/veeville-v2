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
import EnquiryForm from "../../components/ui/EnquiryForm";
import Footer from "../../components/ui/Footer/Footer";

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
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
