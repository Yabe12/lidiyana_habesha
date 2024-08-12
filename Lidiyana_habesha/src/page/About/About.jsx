import React from 'react';
import styles from './About.module.css';
import ImageSection from '../../component/cards/product/AboutImg';


const About = () => {
  return (
  <div className="div">


 <div className={styles.aboutUsContainer}>

 <div className={styles.text}>
 <h1 className={styles.heading}>ABOUT US</h1>
      <p className={styles.paragraph}>Welcome to lidiyana habesha! We are passionate about providing you with the best clothing and fashion accessories. Our mission is to offer high-quality products that make you look and feel great.</p>
      <div className={styles.nameofower}>Founder & CEO @lidiana_marketing_firm
      Founder, Creative director @lidiana_habesha</div>
      <h2 className={styles.heading}>OUT STORY</h2>
      <p className={styles.paragraph}>[Your Store Name] was founded in [Year] with the goal of bringing unique and stylish clothing to fashion enthusiasts around the world. We believe in quality, style, and customer satisfaction.</p>
  
     
 </div>
 <div className={styles.img}>< ImageSection/></div>
    </div>
  </div>
  );
};

export default About;


