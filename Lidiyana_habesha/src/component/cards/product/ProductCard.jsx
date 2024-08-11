import React from 'react';
import styles from './ProductCard.module.css'; // Importing the CSS module

const ProductCard = ({image,text}) => (

    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="Product" />
      </div>
      <div className={styles.text}>
        <span className={styles.productName}>{text}</span>
       
      </div>
     
    </div>
);

export default ProductCard;


