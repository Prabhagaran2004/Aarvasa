import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="icon-input">
        <span>📍</span>
        <input type="text" placeholder="Location" />
      
        <span>🏠</span>
        <input type="text" placeholder="Flat +1" />

        <span>₹</span>
        <input type="text" placeholder="Budget" />
      </div>

      <div className="arrow-icon">↓</div>
      <button style={{ backgroundColor: '#6C1E3C', color: 'white' }}>Search</button>
    </div>
  );
};

export default SearchBar;
