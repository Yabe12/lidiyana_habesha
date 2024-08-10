// src/components/TextSection.js
import React from 'react';
import styles from './TextSection.module.css';

const TextSection = () => {
  return (
    <div className={styles.textSection}>
      <h1 className={styles.title}>Welcome to Our Site!</h1>
      <p className={styles.description}>
        Contact us for more information or visit our social media channels to stay updated.
      </p>
    </div>
  );
};

export default TextSection;
