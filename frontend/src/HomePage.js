import React, { useState } from 'react';
import './HomePage.css';
import products from './ProductsData.js';
import SearchBar from './SearchBar.js';
import Banner from './BannerContent.js';
import ProductList from './ProductList.js';
import TopNav from './TopNav.js'; 

function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="home-container">
    <Banner />
    <SearchBar products={products} onFilter={setFilteredProducts} />
    <TopNav />
    <ProductList filteredProducts={filteredProducts} />
    </div>
  );
}

export default Home;
