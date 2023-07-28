import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAbout = location.pathname === "/about";
  const isDetail = location.pathname === "/detail";
  const isFavorites = location.pathname === "/favorites";

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        {isHome && <SearchBar onSearch={onSearch} />}

        {isHome &&
          <div>
            <button className={styles.links}>
              <Link to="/favorites" className={styles.linkText}>
                Favorites
              </Link>
            </button>
            <button className={styles.links}>
              <Link to="/about" className={styles.linkText}>
                About Me
              </Link>
            </button>
            <button onClick={logout} className={styles.logout}>
              Logout
            </button>
          </div>}

        {isAbout &&
          <div>
            <button className={styles.links}>
              <Link to="/favorites" className={styles.linkText}>
                Favorites
              </Link>
            </button>
            <button onClick={logout} className={styles.logout}>
              Logout
            </button>
          </div>}

        {isDetail &&
          <div>
            <button className={styles.links}>
              <Link to="/favorites" className={styles.linkText}>
                Favorites
              </Link>
            </button>
            <button className={styles.links}>
              <Link to="/about" className={styles.linkText}>
                About Me
              </Link>
            </button>
            <button onClick={logout} className={styles.logout}>
              Logout
            </button>
          </div>}

        {isFavorites &&
          <div>
            <button className={styles.links}>
              <Link to="/about" className={styles.linkText}>
                About Me
              </Link>
            </button>
            <button onClick={logout} className={styles.logout}>
              Logout
            </button>
          </div>}
      </div>
    </div>
  );
}
