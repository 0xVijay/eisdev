// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { Helmet } from "react-helmet";
import CertSpace from './CertSpace';
import PhishingMonitoring from "./PhishingMonitoring";
import Dashboard from "./Dashboard";

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
        <Route path="/search-results/" element={<SearchResults />} />
        <Route path="/dashboard/:searchTerm" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/certspace" element={<CertSpace/>} />
        <Route path="/phishing-monitoring" element={<PhishingMonitoring/>} />
      </Routes>
    </Router>
  );
};

export default App;
