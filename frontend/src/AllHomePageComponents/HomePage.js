import React, { useState } from 'react';
import '../AllCssFiles/HomePage.css';
import products from '../AllHomePageComponents/ProductsData.js';
import SearchBar from '../AllHomePageComponents/SearchBar.js';
import Banner from '../AllHomePageComponents/BannerContent.js';
import ProductList from '../AllHomePageComponents/ProductList.js';
import TopNav from '../AllHomePageComponents/TopNav.js'; 
import createEmptyCart from '../Orchestrator/CreateEmptycart.js';

function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleAddToCart = (product) => {
    try{
      const cartId = createEmptyCart();
      if(cartId){
        setCartItems(prevItems => [...prevItems, product]);
      }
    }catch(error) {
      console.error("Error creating cart:", error);
    }
  };

  return (
    <div className="home-container">
    <Banner />
    <SearchBar products={products} onFilter={setFilteredProducts} />
    <TopNav cartItems={cartItems} />
    <ProductList filteredProducts={filteredProducts} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default HomePage;
