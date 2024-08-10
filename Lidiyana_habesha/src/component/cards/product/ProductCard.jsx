import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <svg 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 116.83 182.61" 
          style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} 
          version="1.1" 
          xmlSpace="preserve" 
          xmlns="http://www.w3.org/2000/svg" 
          className={styles.imgProduct}
        >
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path 
              d="M." 
              className={styles.filShoes2}
            ></path>
          </g>
        </svg>
      </div>
      <div className={styles.text}>
        <span>Shoes Force</span>
        <p>$100</p>
      </div>
    </div>
  );
};

export default ProductCard;
