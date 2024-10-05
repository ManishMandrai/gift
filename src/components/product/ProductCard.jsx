// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  if (!product) return null;

  // Define styles for the card and image
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    margin: '0 auto',
    maxWidth: '250px',
  };

  const imgStyle = {
    width: '100%',
    height: '200px', // Fixed height to avoid cropping
    objectFit: 'contain', // Maintain aspect ratio without cropping
    padding: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#ec4899', // Pink color
    color: 'white',
    textAlign: 'center',
    padding: '8px 16px',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'block',
    marginTop: '16px',
  };

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imgStyle} />
      <div style={{ padding: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{product.name}</h3>
        <p style={{ color: 'gray' }}>{product.shortDescription}</p>
        <p style={{ fontSize: '20px', fontWeight: '700' }}>{product.price}</p>
        <a href={product.buyLink} style={buttonStyle}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
