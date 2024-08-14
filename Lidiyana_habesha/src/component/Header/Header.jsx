import React, { useState } from 'react';
import styles from './Header.module.css';
import LogoSection from '../logo/LogoSection';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          LIDIYANA_HABEHA
        </div>
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav>
          <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
