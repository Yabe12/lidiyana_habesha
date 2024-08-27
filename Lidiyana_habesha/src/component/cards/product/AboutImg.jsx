import React from "react";
import styles from "./AboutImg.module.css";
import myImage from "../../../assets/images/about.png";

const AboutImg = () => {
  return (
    <div className={styles.imageSection}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src={myImage} alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default AboutImg;
