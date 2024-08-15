// src/components/ProductDisplay.js
import React from 'react';
import Card from '../../component/cards/product/Card';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';
import p6 from '../../assets/images/p6.png';
import p7 from '../../assets/images/p7.png';
import p8 from '../../assets/images/p8.png';
import p9 from '../../assets/images/p9.png';
import p10 from '../../assets/images/p10.png';
import p11 from '../../assets/images/p11.png';
import p12 from '../../assets/images/p12.png';

import ProductCard from '../../component/cards/product/ProductCard';
import styles from './ProductDisplay.module.css'; // Import CSS module for styles
import ProductListCard from '../../component/cards/product/productlistcard';

const ProductDisplay = () => {
  return (
    <div>
    <div className={styles.whole}>
      <div className={styles.leader}>
        <Card />
      </div>
      <div className={styles.productContainer}>
      <div className={styles.productWrapper}>
        <ProductCard
          name="Product 1"
          image={p1}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image={p2} // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image={p3} // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={p4}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image={p5}// Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image={p6}// Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={p7}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image={p8} // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image={p9}// Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         <ProductCard
          name="Product 1"
          image={p10}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        />
        <ProductCard
          name="Product 2"
          image={p11} // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
        <ProductCard
          name="Product 3"
          image={p12} // Replace with the correct image path
          rate="★★★★★"
          instagramLink="https://www.instagram.com/profile3"
        />
         {/* <ProductCard
          name="Product 1"
          image={p13}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        /> */}
        <ProductCard
          name="Product 2"
          image="../../assets/images/c.png" // Replace with the correct image path
          rate="★★★☆☆"
          instagramLink="https://www.instagram.com/profile2"
        />
       
         {/* <ProductCard
          name="Product 1"
          image={p14}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        /> */}
        
      
        {/* Repeat as needed */}
      </div>
    </div>



    
    </div>
    <div className={styles.catagory}>
      llllllll????????
    </div>
    <div className={styles.cardcontainer}>
    <div className={styles.card}>
    
    <ProductListCard 
        image={p1} 
        text="100$" 
      />

          </div>
           <div className={styles.card}>  <ProductListCard 
        image={p2}
        text="12$" 
      /></div> 
           <div className={styles.card}>  <ProductListCard 
        image={p3} 
        text="50$" 
      /></div> 
             <div className={styles.card}>  <ProductListCard 
        image={p4} 
        text="45$" 
      /></div> 
         <div className={styles.card}>    <ProductListCard 
        image={p5}
        text="12$" 
      /></div> 
           <div className={styles.card}>  <ProductListCard 
        image={p6}
        text="89$" 
      /></div>
           <div className={styles.card}>   <ProductListCard 
        image={p7}
        text="500$" 
      /></div> 
          <div className={styles.card}>   <ProductListCard 
        image={p8}
        text="10$" 
      /></div> 
          <div className={styles.card}>   <ProductListCard 
        image={p9}
        text="37$" 
      /></div>
            <div className={styles.card}>   <ProductListCard 
        image={p10}
        text="87$" 
      /></div>
         <div className={styles.card}>    <ProductListCard 
        image={p1}
        text="90$" 
      /></div> 
         <div className={styles.card}>   <ProductListCard 
        image={p2}
        text="20$" 
      /></div> 
         {/* <ProductCard
          name="Product 1"
          image={p13}
          rate="★★★★☆"
          instagramLink="https://www.instagram.com/profile1"
        /> */}
          <div className={styles.card}>   <ProductListCard 
        image={p4}
        text="76$" 
      /></div>
        <div className={styles.card}>    <ProductListCard 
        image={p5}
        text="67$" 
      /></div> 
         <div className={styles.card}>    <ProductListCard 
        image={p6}
        text="100$" 
      /></div> 
          <div className={styles.card}>   <ProductListCard 
        image={p7}
        text="49$" 
      /></div> 
       
      
      
        </div>
    </div>
  );
};

export default ProductDisplay;
