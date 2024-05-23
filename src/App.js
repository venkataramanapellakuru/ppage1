import React from 'react';
import './App.css';

// Product component
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

// ProductGallery component
const ProductGallery = () => {
  const products = [
    {
      image: '/images/image1.avif',
      price: 29.99,
      mfgDate: '2023-01-01',
      size: 'M'
    },
    {
      image: '/images/image2.avif',
      price: 39.99,
      mfgDate: '2023-02-01',
      size: 'L'
    },
    {
      image: '/images/image3.avif',
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

function App() {
  return (
    <div className="App">
      <h1>Product Gallery</h1>
      <ProductGallery />
    </div>
  );
}

export default App;
