// const [search, setSearch] = useState('');

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(search.toLowerCase()) ||
//     product.description.toLowerCase().includes(search.toLowerCase())
//   );


// <div className="products-list">
//         {filteredProducts.map((product, idx) => (
//           <div className="product-card" key={idx}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <span className="product-price">{product.price}</span>
//           </div>
//         ))}
//       </div>

import React from 'react';
import './ProductList.css';

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
