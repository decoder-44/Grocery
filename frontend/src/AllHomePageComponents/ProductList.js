import React from 'react';
import '../AllCssFiles/ProductList.css';
import AddToCart from './AddToCart.js';

function ProductList({ filteredProducts, onAddToCart }) {
  return (
    <div className="products-list">
      {filteredProducts.map((product, idx) => (
        <div className="product-card" key={idx}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span className="product-price">{product.price}</span>
          <AddToCart product={product} onAdd={onAddToCart} className="add-to-cart"/>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
