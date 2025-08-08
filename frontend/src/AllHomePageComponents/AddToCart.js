import React from 'react';
import '../AllCssFiles/AddToCart.css';

function AddToCart({ product, onAdd, className = '' }) {
  const handleClick = () => {
    onAdd(product)
  };

  return (
    <button className={`add-to-cart-btn ${className}`} onClick={handleClick}>
      🛒 Add to Cart
    </button>
  );
}

export default AddToCart;
