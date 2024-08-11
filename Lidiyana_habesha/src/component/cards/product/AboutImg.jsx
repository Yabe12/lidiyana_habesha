import React from 'react';
import styles from './Card.module.css';
import myImage from '../../../assets/images/about.png';

const Card = () => {
  return (
    <div className={styles.imageSection}>
    <div className={styles.imageContainer}>
    <div className={styles.image}><img src={myImage} alt="Description" /></div>
    </div>
  </div>
  );
};

export default Card;
