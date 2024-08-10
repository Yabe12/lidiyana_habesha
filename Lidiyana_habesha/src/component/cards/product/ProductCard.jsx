import React from 'react';
import styles from './ProductCard.module.css'; // Importing the CSS module

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="your-image-path.jpg" alt="Product" />
      </div>
      <div className={styles.text}>
        <span className={styles.productName}>Product Name</span>
        <p className={styles.rate}>★★★★☆</p>
      </div>
      <div className={styles.hoverContent}>
        <button className={styles.addToCart}>Add to Cart</button>
        <a href="https://www.instagram.com/yourprofile" className={styles.instagramLink}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
