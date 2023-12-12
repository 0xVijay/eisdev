import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SearchResults.css';
import headerLogo from "./assets/header-logo.svg";
import headerUser from "./assets/Header-namegroup.png";
import gridAlt from "./assets/grid-alt.svg";
import MuiTableComponent from './MuiTableComponent';
import Sidebar from './Sidebar';

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
        <div class="threat-header-container">
            <div class="ti-header">
                <div class="ti-header-txt">
                    <p>Threat Intelligence</p>
                </div>
                <div><img class='header-image-group' src={headerUser} alt="Header User">
                </img></div>
            </div>
        </div>

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
                {/* <div class="ti-table-header">
                    <p class="ti-table-header-txt">DNS Vulnerability</p>
                </div>
                <div class="ti-table-separator-line">
                </div>
                <div class="ti-table-contents-container">
                    <table class="ti-dns-table">
                        <thead class="dns-table-col-head">
                        <tr className='ti-table-header-border'>
                                <th>S. No</th>
                                <th>Name</th>
                                <th>Record</th>
                                <th>Fix Recommendation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="dns-table-body-txt">
                                <td>1</td>
                                <td>SPF Record Missing</td>
                                <td>A</td>
                                <td>Recommendation</td>
                            </tr>
                            <tr class="dns-table-body-txt">
                                <td>2</td>
                                <td>SPF Record Missing</td>
                                <td>SPF</td>
                                <td>Recommendation</td>
                            </tr>
                            <tr class="dns-table-body-txt">
                                <td>3</td>
                                <td>SPF Record Missing</td>
                                <td>SPF</td>
                                <td>Recommendation</td>
                            </tr>
                            <tr class="dns-table-body-txt">
                                <td>4</td>
                                <td>SPF Record Missing</td>
                                <td>MX</td>
                                <td>Recommendation</td>
                            </tr>
                            <tr class="dns-table-body-txt">
                                <td>5</td>
                                <td>SPF Record Missing</td>
                                <td>MX</td>
                                <td>Recommendation</td>
                            </tr>
                            <tr class="dns-table-body-txt">
                                <td>6</td>
                                <td>SPF Record Missing</td>
                                <td>AA</td>
                                <td>Recommendation</td>
                            </tr>
                            <tr class="dns-table-body-txt">
                                <td>7</td>
                                <td>SPF Record Missing</td>
                                <td>MX</td>
                                <td>Recommendation</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
                <MuiTableComponent />
            </div>
        </div>
    </div>
    </div>
  );
};

export default SearchResults;
