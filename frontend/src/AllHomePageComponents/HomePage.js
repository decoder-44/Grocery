import React, { useState } from 'react';
import '../AllCssFiles/HomePage.css';
import products from '../AllHomePageComponents/ProductsData.js';
import SearchBar from '../AllHomePageComponents/SearchBar.js';
import Banner from '../AllHomePageComponents/BannerContent.js';
import ProductList from '../AllHomePageComponents/ProductList.js';
import TopNav from '../AllHomePageComponents/TopNav.js'; 

function HomePage() {
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

export default HomePage;
