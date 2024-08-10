// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          LIDIYANA_HABEHA
        </div>
        <nav>
          <ul className={styles.navList}>
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
