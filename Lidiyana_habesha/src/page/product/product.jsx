// src/components/ProductDisplay.js
import React from 'react';
import ProductCard from '../../component/cards/product/ProductCard';

const ProductDisplay = () => {
  return (
    <div>
      <ProductCard
    imageSrc="../../assets/images/A.jpg"
    instagramLink="https://instagram.com/product1"
    cartLink="https://cdn-icons-png.flaticon.com/128/10553/10553842.png"
    likeLink="https://cdn-icons-png.flaticon.com/128/11127/11127640.png"
    favoriteLink="#favorite1"
  />
    </div>
  );
};

export default ProductDisplay;
