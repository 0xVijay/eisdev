import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SearchResults.css';
import headerUser from "./assets/Header-namegroup.png";
import MuiTableComponent from './MuiTableComponent';
import Sidebar from './Sidebar';
import Header from './Header';

const SearchResults = () => {

    const AnimatedCounter = ({ endValue }) => {
        const [count, setCount] = useState(0);
        const duration = 1000; // 5 seconds duration
    
        useEffect(() => {
            // Calculate interval duration for each increment
            const intervalDuration = duration / endValue;
    
            const timer = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < endValue) {
                        return prevCount + 1;
                    } else {
                        clearInterval(timer);
                        return prevCount;
                    }
                });
            }, intervalDuration);
    
            return () => clearInterval(timer); // Cleanup on unmount
        }, [endValue]);
    
        return <p className="card-value-txt">{count}</p>;
    };

  const { searchTerm } = useParams();

  // Implement your search results display logic here

  return (
    <div>
      {/* Display search results */}

      {/* Add the HTML content here */}
      <div class="ti-container">
        <Sidebar />
        <Header />

        <div class="ti-cards-container">
            <div class="domain-header">
                <p class="domain-header-txt">Domain Name: {searchTerm}</p>
                <p class="domain-header-org-txt">Organization Name</p>
            </div>

            <div class="card-container-1">
                <div class="content-card-divided">
                    <div class="card-header">
                        <p class="card-header-txt-divided">Parent Domains</p>
                    </div>
                    <div class="card-value">
                    <AnimatedCounter endValue={139} duration={1000} />
                    </div>
                    <div class="card-separator-line">

                    </div>
                    <div class="card-header">
                        <p class="card-header-txt-divided">Sub Domains</p>
                    </div>
                    <div class="card-value">
                    <AnimatedCounter endValue={39} duration={1000} />
                    </div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <p class="card-header-txt">Potential Phishing</p>
                    </div>
                    <div class="card-separator-line">

                    </div>
                    <div class="card-value">
                    <AnimatedCounter endValue={329} duration={1000} />
                    </div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <p class="card-header-txt">Blacklisted CAs</p>
                    </div>
                    <div class="card-separator-line">

                    </div>
                    <div class="card-value">
                    <AnimatedCounter endValue={254} duration={1000} />
                    </div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <p class="card-header-txt">DNS Misconfiguration</p>
                    </div>
                    <div class="card-separator-line">

                    </div>
                    <div class="card-value">
                    <AnimatedCounter endValue={289} duration={1000} />
                    </div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <p class="card-header-txt">Certificate Mismatch</p>
                    </div>
                    <div class="card-separator-line">

                    </div>
                    <div class="card-value">
                    <AnimatedCounter endValue={54} duration={1000} />
                    </div>
                </div>
                <div class="content-card">
                    <div class="card-header">
                        <p class="card-header-txt">Cert Vulnerabilities</p>
                    </div>
                    <div class="card-separator-line">

                    </div>
                    <div class="card-value">
                    <AnimatedCounter endValue={372} duration={1000} />
                    </div>
                </div>
            </div>
            <div class="ti-table">
                <MuiTableComponent />
            </div>
        </div>
    </div>
    </div>
  );
};

export default SearchResults;
