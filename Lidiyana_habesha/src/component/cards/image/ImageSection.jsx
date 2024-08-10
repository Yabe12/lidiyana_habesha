// src/components/ImageSection.js
import React from 'react';
import styles from './ImageSection.module.css';
import myImage from '../../../assets/images/B.jpg';
const ImageSection = () => {
  return (
    <div className={styles.imageSection}>
      <div className={styles.imageContainer}>
      <div className={styles.image}><img src={myImage} alt="Description" /></div>
      </div>
    </div>
  );
};

export default ImageSection;
