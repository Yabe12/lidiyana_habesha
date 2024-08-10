// src/components/HomeSection.js
import React from 'react';
import TextSection from '../../component/cards/Text/TextSection';
import ImageSection from '../../component/cards/image/ImageSection';
import styles from './Home.module.css';

const HomeSection = () => {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <TextSection />
          <ImageSection />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
