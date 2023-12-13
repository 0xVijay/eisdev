import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
        <button className="login-btn">Contact Us</button>
        <button className="signup-btn">Support</button>
      </div> 
    </header>
  );
};

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState(null);

  const isValidDomain = (urlString) => {
      const regex = new RegExp(/\.[a-z]{2,}$/);
      return regex.test(urlString);
  };

  const handleSearch = async () => {
      if (isValidDomain(searchTerm)) {
          setIsInvalidUrl(false); // Set isInvalidUrl to false as the domain is valid
          try {
              const response = await axios.get('https://api.publicapis.org/entries');
              setApiResponse(response.data);
              console.log(response.data);
              navigate(`/search-results/${searchTerm}`, { state: { apiData: response.data } });
          } catch (error) {
              console.error('Error fetching data: ', error);
          }
      } else {
          setIsInvalidUrl(true); // Set isInvalidUrl to true as the domain is invalid
          console.log('Invalid domain:', searchTerm);
          // Optionally, handle invalid domain inputs here
      }
  };

  const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
          handleSearch();
      }
  };

  return (
      <>
          <div className="search-container">
              <h1 className="search-heading">Fortify Your Defense: Enhance Your Security Posture with Customized <span className="search-heading-seo">Threat Intelligence Insights</span>.</h1>
              <div className="search-bar-container">
                  <div className="search-bar-input-container">
                      <img onClick={handleSearch} src={searchIcon} alt="Search Icon" className="search-icon" />
                      <input onKeyDown={handleKeyDown} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="search-bar" placeholder="Type Your Website Here..." />
                      <img onClick={handleSearch} src={rightIcon} alt="arrow-right" className="arrow-right" />
                  </div>
              </div>
              <div className="invalid-domain-err-container">
                  {isInvalidUrl && <p className="error-message">Please enter a valid domain. Ex: google.com</p>}
              </div>
          </div>
      </>
  );
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
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