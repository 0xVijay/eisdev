// Search.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import searchIcon from './assets/searchbar-search-icon.png';
import avxIcon from './assets/header-logo.svg';
import rightIcon from './assets/arrow-right.svg';

const Header = () => {
  return (
    <header className="search-header">
      <div className="search-logo">
        <img src={avxIcon} alt="Header Logo" />
      </div>
      <div className="header-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div> 
    </header>
  );
};

const SearchContainer = () => {

    const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement your search logic here
    // For example, you might want to navigate to a search results page
    navigate(`/search-results/${searchTerm}`);
  };

    return (
      <>
        <div className="search-container">
          <h1 className="search-heading">Empower Your Strategy: Elevate Your Rankings with Tailored <span className="search-heading-seo">SEO Insights</span>.</h1>
          <div className="search-btn-container">
            <button className="search-selected-btn">Asset</button>
            <button className="search-not-selected-btn">Exploit</button>
            <button className="search-not-selected-btn">Certificate</button>
            <button className="search-not-selected-btn">Image</button>
            <button className="search-not-selected-btn">Domain</button>
          </div>
          <div className="search-bar-container">
            <div className="search-bar-input-container">
              <img onClick={handleSearch} src={searchIcon} alt="Search Icon" className="search-icon" />
              <input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="search-bar" placeholder="Type Your Website Here..." />
              <img onClick={handleSearch} src={rightIcon} alt="arrow-right" className="arrow-right" />
            </div>
          </div>
        </div>
      </>
    );
  };
  

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement your search logic here
    // For example, you might want to navigate to a search results page
    navigate(`/search-results/${searchTerm}`);
  };

  return (
    <div className="search-body-container">
      <Header />
      <SearchContainer />
    </div>
  );
};

export default Search;
