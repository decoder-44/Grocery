import React, { useState } from 'react';
import '../AllCssFiles/TopNav.css';

function TopNav() {
  const [showCategory, setShowCategory] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

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

      <button>Cart</button>
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
