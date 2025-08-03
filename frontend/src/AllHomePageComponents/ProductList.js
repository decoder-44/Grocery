import React from 'react';
import '../AllCssFiles/ProductList.css';

function ProductList({ filteredProducts }) {
  return (
    <div className="products-list">
      {filteredProducts.map((product, idx) => (
        <div className="product-card" key={idx}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span className="product-price">{product.price}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
