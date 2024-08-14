import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.flex} ${styles.flexCol} ${styles.mdFlexRow} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.mb6}`}>
          {/* About Section */}
          <div className={`${styles.mb4} ${styles.mdMb0}`}>
            <h4 className={`${styles.textLg} ${styles.fontBold} ${styles.textGray800} ${styles.mb2}`}>About Us</h4>
            <p className={`${styles.textGray700}`}>Learn more about our story and mission. We are dedicated to providing the best products and services for you.</p>
          </div>
          {/* Contact Section */}
          <div className={`${styles.mb4} ${styles.mdMb0}`}>
            <h4 className={`${styles.textLg} ${styles.fontBold} ${styles.textGray800} ${styles.mb2}`}>Contact Us</h4>
            <p className={`${styles.textGray700}`}>
              Email: <a href="mailto:Lidiyasolomon199@gmail.com" className={`${styles.textRose500} ${styles.hoverTextRose600}`}>info@lidiyana.com</a>
            </p>
            <p className={`${styles.textGray700}`}>
              Phone: <a href="tel:+1234567890" className={`${styles.textRose500} ${styles.hoverTextRose600}`}>+1 (234) 567-890</a>
            </p>
          </div>
          {/* Social Media Links */}
          <div className={`${styles.mb4} ${styles.mdMb0}`}>
            <h4 className={`${styles.textLg} ${styles.fontBold} ${styles.textGray800} ${styles.mb2}`}>Follow Us</h4>
            <div className={`${styles.flex} ${styles.justifyCenter} ${styles.spaceX4}`}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={`${styles.textGray700} ${styles.hoverTextRose500}`}>
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={`${styles.textGray700} ${styles.hoverTextRose500}`}>
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/lidiana_solomon/?hl=en" target="_blank" rel="noopener noreferrer" className={`${styles.textGray700} ${styles.hoverTextRose500}`}>
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={`${styles.textGray700} ${styles.hoverTextRose500}`}>
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.textGray700} ${styles.textSm}`}>
          <p>&copy; 2024 Lidiyana Habesha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
