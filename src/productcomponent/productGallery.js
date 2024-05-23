import React from 'react';
import product from './product'
import './ProductGallery.css';  // Optional: Add CSS for styling

const ProductGallery = () => {
  const products = [
    {
      image: 'C:\Users\venky\OneDrive\Desktop\productpage\images\-473Wx593H-460157351-black-MODEL.avif',
      price: 29.99,
      mfgDate: '2023-01-01',
      size: 'M'
    },
    {
      image: 'C:\Users\venky\OneDrive\Desktop\productpage\images\-473Wx593H-465097799-multi-MODEL4.avif',
      price: 39.99,
      mfgDate: '2023-02-01',
      size: 'L'
    },
    {
      image: 'C:\Users\venky\OneDrive\Desktop\productpage\images\-473Wx593H-466083793-multi-MODEL.avif',
      price: 49.99,
      mfgDate: '2023-03-01',
      size: 'S'
    }
  ];

  return (
    <div className="product-gallery">
      {products.map((product, index) => (
        <Product
          key={index}
          image={product.image}
          price={product.price}
          mfgDate={product.mfgDate}
          size={product.size}
        />
      ))}
    </div>
  );
};

export default ProductGallery;
