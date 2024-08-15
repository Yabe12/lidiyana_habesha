import React from 'react';
import styles from './HomePage.module.css'; // Import your CSS module

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Liliyan Habesha</h1>
          <p>Your favorite destination for Ethiopian products and more.</p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div>
      </section>
      <section className={styles.featuredCategories}>
        <h2>Featured Categories</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <img src="/images/clothing.jpg" alt="Traditional Clothing" />
            <h3>Traditional Clothing</h3>
          </div>
          <div className={styles.categoryCard}>
            <img src="/images/home-decor.jpg" alt="Home Décor" />
            <h3>Home Décor</h3>
          </div>
          <div className={styles.categoryCard}>
            <img src="/images/jewelry.jpg" alt="Jewelry" />
            <h3>Jewelry</h3>
          </div>
        </div>
      </section>
      <section className={styles.deals}>
        <h2>Deals of the Day</h2>
        <div className={styles.dealGrid}>
          {/* Replace with dynamic content */}
          <div className={styles.dealCard}>
            <img src="/images/product1.jpg" alt="Deal Product" />
            <h3>Product Name</h3>
            <p className={styles.originalPrice}>$100.00</p>
            <p className={styles.discountedPrice}>$75.00</p>
          </div>
        </div>
      </section>
      <section className={styles.bestSellers}>
        <h2>Best Sellers</h2>
        <div className={styles.sellerCarousel}>
          {/* Replace with dynamic content */}
          <div className={styles.sellerCard}>
            <img src="/images/best-seller1.jpg" alt="Best Seller" />
            <h3>Best Seller Product</h3>
          </div>
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialSlider}>
          {/* Replace with dynamic content */}
          <div className={styles.testimonialCard}>
            <p>"Great service and wonderful products!"</p>
            <h4>Customer Name</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
