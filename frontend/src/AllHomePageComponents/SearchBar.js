import React, { useState, useEffect } from 'react';
import '../AllCssFiles/SearchBar.css';

function SearchBar({ products, onFilter }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
    onFilter(filtered);
  }, [search, products, onFilter]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
