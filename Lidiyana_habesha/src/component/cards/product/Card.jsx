import React from 'react';
import styles from './Card.module.css';
import exampleImage from '../../../assets/images/c.png'; 

const Card = () => {
  return (
    <div className={styles.card}>
         <div className={styles.text}>
        <span>Products </span>
     
      </div>
      <div className={styles.image}>
        <img src={exampleImage} alt="Example" className={styles.image} />
      </div>
   
    </div>
  );
};

export default Card;
