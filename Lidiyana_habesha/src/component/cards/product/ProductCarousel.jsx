import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductCarousel.module.css"; // Adjust the path as needed
import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";
import p3 from "../../../assets/images/p3.png";
import p4 from "../../../assets/images/p4.png";
import p5 from "../../../assets/images/p5.png";
import p6 from "../../../assets/images/p6.png";
import p7 from "../../../assets/images/p7.png";
import p8 from "../../../assets/images/p8.png";
import p9 from "../../../assets/images/p9.png";
import p10 from "../../../assets/images/p10.png";
import Card from "./Card";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: "Product 1",
      image: p1,
      rate: "★★★★☆",
      instagramLink: "https://www.instagram.com/profile1",
    },
    {
      name: "Product 2",
      image: p2,
      rate: "★★★☆☆",
      instagramLink: "https://www.instagram.com/profile2",
    },
    {
      name: "Product 3",
      image: p3,
      rate: "★★★★★",
      instagramLink: "https://www.instagram.com/profile3",
    },
    {
      name: "Product 1",
      image: p4,
      rate: "★★★★☆",
      instagramLink: "https://www.instagram.com/profile1",
    },
    {
      name: "Product 2",
      image: p5,
      rate: "★★★☆☆",
      instagramLink: "https://www.instagram.com/profile2",
    },
    {
      name: "Product 3",
      image: p6,
      rate: "★★★★★",
      instagramLink: "https://www.instagram.com/profile3",
    },
    {
      name: "Product 1",
      image: p7,
      rate: "★★★★☆",
      instagramLink: "https://www.instagram.com/profile1",
    },
    {
      name: "Product 2",
      image: p8,
      rate: "★★★☆☆",
      instagramLink: "https://www.instagram.com/profile2",
    },
    {
      name: "Product 3",
      image: p9,
      rate: "★★★★★",
      instagramLink: "https://www.instagram.com/profile3",
    },
    {
      name: "Product 1",
      image: p10,
      rate: "★★★★☆",
      instagramLink: "https://www.instagram.com/profile1",
    },
  ];

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.whole}>
      <div className={styles.leader}>
        <Card />
      </div>
      <div className={styles.productContainer}>
        <div className={styles.productWrapper}>
          <button className={styles.leftArrow} onClick={previousSlide}>
            &#10094;
          </button>
          <ProductCard
            name={products[currentIndex].name}
            image={products[currentIndex].image}
            rate={products[currentIndex].rate}
            instagramLink={products[currentIndex].instagramLink}
          />
          <button className={styles.rightArrow} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
