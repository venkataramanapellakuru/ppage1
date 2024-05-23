import React from 'react';
import './Product.css';  // Optional: Add CSS for styling

const Product = ({ image, price, mfgDate, size }) => {
  return (
    <div className="product">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-details">
        <p>Price: ${price}</p>
        <p>MFG Date: {mfgDate}</p>
        <p>Size: {size}</p>
      </div>
    </div>
  );
};

export default Product;
