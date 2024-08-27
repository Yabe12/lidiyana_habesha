import React, { useState } from "react";
import Card from "../../component/cards/product/Card";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import p6 from "../../assets/images/p6.png";
import p7 from "../../assets/images/p7.png";
import p8 from "../../assets/images/p8.png";
import p9 from "../../assets/images/p9.png";
import p10 from "../../assets/images/p10.png";
import p11 from "../../assets/images/p11.png";
import p12 from "../../assets/images/p12.png";

import ProductCard from "../../component/cards/product/ProductCard";
import styles from "./ProductDisplay.module.css";
import ProductListCard from "../../component/cards/product/productlistcard";
import ProductCarousel from "../../component/cards/product/ProductCarousel";

const ProductDisplay = () => {
  const [category, setCategory] = useState("For_all");

  const renderProducts = () => {
    switch (category) {
      case "For_female":
        return (
          <div className={styles.cardcontainer}>
            <div className={styles.card}>
              <ProductListCard image={p5} text="67$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p6} text="100$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p7} text="49$" />
            </div>
          </div>
        );
      case "For_male":
        return (
          <div className={styles.cardcontainer}>
            <div className={styles.card}>
              <ProductListCard image={p5} text="67$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p6} text="100$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p7} text="49$" />
            </div>
          </div>
        );
      case "For_all":
      default:
        return (
          <div className={styles.cardcontainer}>
            <div className={styles.card}>
              <ProductListCard image={p1} text="100$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p2} text="12$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p3} text="50$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p4} text="45$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p5} text="12$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p6} text="89$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p7} text="500$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p8} text="10$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p9} text="37$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p10} text="87$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p1} text="90$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p2} text="20$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p4} text="76$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p5} text="67$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p6} text="100$" />
            </div>
            <div className={styles.card}>
              <ProductListCard image={p7} text="49$" />
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <ProductCarousel />
      <div className={styles.category}>
        <button onClick={() => setCategory("For_all")}>For_all</button>
        <button onClick={() => setCategory("For_female")}>For_female</button>
        <button onClick={() => setCategory("For_male")}>For_male</button>
      </div>
      <div className={styles.productDisplay}>{renderProducts()}</div>
    </div>
  );
};

export default ProductDisplay;
