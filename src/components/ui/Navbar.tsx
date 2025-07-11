import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../pages/Work/Work.module.css";

interface NavbarProps {
  isSticky: boolean;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  onToggleMenu: () => void;
  onToggleSearch: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Navbar: React.FC<NavbarProps> = ({
  isSticky,
  isMenuOpen,
  isSearchOpen,
  onToggleMenu,
  onToggleSearch,
  onSearch,
  searchQuery,
}) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img
            src={`https://veeville-website.s3.ap-south-1.amazonaws.com/Images/Work+Page+Thumbnails/Logo+Image.webp`}
            alt="Veeville Logo"
            className={styles.logoImage}
          />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={onToggleMenu}>
        <i className="fa-solid fa-bars" />
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link to="/work">WORK</Link>
        </li>
        <li>
          <Link to="/clients">CLIENTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon} onClick={onToggleSearch}>
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            {isSearchOpen && (
              <div className={styles.searchOverlay}>
                <form onSubmit={handleSubmit} className={styles.searchBox}>
                  <i className="fa-solid fa-magnifying-glass" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className={styles.searchInput}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    className={styles.searchSubmit}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    Search
                  </button>
                </form>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
