import React, { useState } from "react";
import { Rating } from "@mui/material";

import styles from "./ProductListCard.module.css"; 

const ProductListCard = ({ image, text }) => {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); 
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)); 
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setCount(value);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="Product" />
      </div>
      <div className={styles.text}>
        <span className={styles.productName}>{text}</span>
      </div>
      {/* Uncomment if needed
      <button
        className={styles.icon}
        onClick={handleClick}
        style={{
          backgroundColor: isClicked ? 'green' : 'white',
          color: isClicked ? 'white' : 'black', 
        }}
      >
        🛒
      </button>
      */}
      <div className={styles.cart_button}>
        <div className={styles.count}>
          <button
            className={styles.counter_button}
            id="decrement"
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            type="number"
            value={count}
            onChange={handleInputChange}
            min="1"
          />
          <button
            className={styles.counter_button}
            id="increment"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className={styles.add_cart}>
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
