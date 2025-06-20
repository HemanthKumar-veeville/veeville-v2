import React from "react";
import { Link } from "react-router-dom";
import styles from "../../pages/Work/Work.module.css";

interface NavbarProps {
  isSticky: boolean;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  onToggleMenu: () => void;
  onToggleSearch: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isSticky,
  isMenuOpen,
  isSearchOpen,
  onToggleMenu,
  onToggleSearch,
}) => {
  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img
            src="http://localhost:1337/uploads/Logo_Image_e91355f03e.webp"
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
                <div className={styles.searchBox}>
                  <i className="fa-solid fa-magnifying-glass" />
                  <input
                    type="text"
                    placeholder="Ask Bob Anything"
                    className={styles.searchInput}
                  />
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
