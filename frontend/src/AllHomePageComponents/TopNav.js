// TopNav.js
import React, { useState } from 'react';
import '../AllCssFiles/TopNav.css';

function TopNav({ cartItems }) {
  const [showCategory, setShowCategory] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  return (
    <div className="top-nav">
      <div className="dropdown">
        <button onClick={() => setShowCategory(prev => !prev)}>Category ▾</button>
        {showCategory && (
          <ul className="dropdown-menu">
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Dairy Items</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={() => setShowCartDropdown(prev => !prev)}>
          Cart ({cartItems.length})
        </button>
        {showCartDropdown && (
          <ul className="dropdown-menu">
            {cartItems.length === 0 ? (
              <li>Cart is empty</li>
            ) : (
              cartItems.map((item, idx) => (
                <li key={idx}>{item.name}</li>
              ))
            )}
          </ul>
        )}
      </div>

      <button>Orders</button>

      <div className="dropdown">
        <button onClick={() => setShowProfile(prev => !prev)}>Profile ▾</button>
        {showProfile && (
          <ul className="dropdown-menu">
            <li>Update Profile</li>
            <li>Log Out</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopNav;
