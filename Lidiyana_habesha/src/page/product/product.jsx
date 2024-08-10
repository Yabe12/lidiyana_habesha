// src/components/ProductDisplay.js
import React from 'react';
import Card from '../../component/cards/product/Card';
import productImage from '../../assets/images/B.jpg';
import ProductCard from '../../component/cards/product/ProductCard';
import styles from './ProductDisplay.module.css'; // Import CSS module for styles

const ProductDisplay = () => {
  return (
    <div className={styles.whole}>
      <div className={styles.leader}>
        <Card />
      </div>
      <div className={styles.productContainer}>
      <div className={styles.productWrapper}>
        <ProductCard
          name="Product 1"
          image={productImage}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={productImage}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={productImage}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={productImage}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={productImage}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={productImage}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image=
          "../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={productImage}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
      
        {/* Repeat as needed */}
      </div>
    </div>



    
    </div>
  );
};

export default ProductDisplay;
