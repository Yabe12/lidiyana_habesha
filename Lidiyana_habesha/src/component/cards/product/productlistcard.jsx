import React, { useState } from "react";
import { Rating } from "@mui/material";
import styles from "./ProductListCard.module.css"; // Assuming you have a CSS module

const ProductListCard = ({ image, text }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="Product" />
      </div>
      <div className={styles.text}>
        <span className={styles.productName}>{text}</span>
      </div>
      <div className={styles.icon}>🛒</div>
      <Rating
         value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </div>
  );
};

export default ProductListCard;
