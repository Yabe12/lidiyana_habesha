import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import exampleImage from "../../../assets/images/c.png";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <span>Products </span>
      </div>
      <div className={styles.image}>
        <div className={styles.productlist}>
          <ul className={styles.list}>
            <li className={styles.li}>
              <a href="link_to_product_1">FOR FEMAIL</a>
            </li>
            <li className={styles.li}>
              <a href="link_to_product_2">FOR MALE</a>
            </li>
            <li className={styles.li}>
              <a href="link_to_product_3">FOR WEEDING</a>
            </li>

            <li className={styles.li}>
              <a href="link_to_product_5">FOR CASULAL</a>
            </li>
            <li className={styles.li}>
              <a href="link_to_product_6">FOR HOLIDAY</a>
            </li>
            <li className={styles.li}>
              <a href="link_to_product_7">FOR GIFT</a>
            </li>
            <li className={styles.li}>
              <a href="link_to_product_8">FOR CHILDE</a>
            </li>
            <li className={styles.li}>
              <a href="link_to_product_9">FOR FAMILY</a>
            </li>
          </ul>
        </div>
        <div className={styles.button}>
          <Link to="https://www.instagram.com/lidiana_solomon/?hl=en">
            <button className={styles.button}>Go to instagram</button>
          </Link>
        </div>
        {/* <img src={exampleImage} alt="Example" className={styles.image} /> */}
      </div>
    </div>
  );
};

export default Card;
