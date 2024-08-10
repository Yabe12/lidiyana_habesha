import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Importing the ProductCard component

const ProductList = () => {
  // Define the product data
  const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'path-to-image-1.jpg',
      rate: '★★★★☆',
      instagramLink: 'https://www.instagram.com/profile1',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'path-to-image-2.jpg',
      rate: '★★★☆☆',
      instagramLink: 'https://www.instagram.com/profile2',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'path-to-image-3.jpg',
      rate: '★★★★★',
      instagramLink: 'https://www.instagram.com/profile3',
    },
    // Add more products as needed
  ]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          rate={product.rate}
          instagramLink={product.instagramLink}
        />
      ))}
    </div>
  );
};

export default ProductList;
