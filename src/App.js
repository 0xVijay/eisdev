// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Search';
import SearchResults from './SearchResults';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <Router>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search-results/:searchTerm" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;
