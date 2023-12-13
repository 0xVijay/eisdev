import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SearchResults.css';
import headerUser from "./assets/Header-namegroup.png";
import MuiTableComponent from './MuiTableComponent';
import Sidebar from './Sidebar';
import Header from './Header';
import { dom } from 'aria-query';

const domainCount = {
    "domainName": "appviewx.com",
    "orgName": "AppViewX",
    "parentDomainCount": 112331,
    "subDomainCount": 42342,
    "phishingDomainMetrics": {
        "potentialPhishingCount": 12234,
        "registeredPhishingSites": 24422,
        "unregisteredPhishingSites": 5767
    },
    "metrics": [
        {
            "title": "Untrusted CAs",
            "value": 190
        },
        {
            "title": "DNS Misconfiguration",
            "value": 100
        },
        {
            "title": "Certificate Mismatch",
            "value": 29
        },
        {
            "title": "Certificate Vulnerabilities",
            "value": 39
        }
    ]
}

const SearchResults = () => {

    const formatToK = (value) => {
        if (value < 1000) {
            return value.toString();
        } else {
            return (value / 1000).toFixed(1) + 'K';
        } 
    };

    const AnimatedCounter = ({ endValue }) => {
        const [count, setCount] = useState(0);
        const duration = 2000; // Complete the animation in 2000ms
    
        useEffect(() => {
            let step = Math.ceil(endValue / (duration / 100)); // Adjust the increment step to complete on time
            const timer = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + step;
                    if (newCount < endValue) {
                        return newCount;
                    } else {
                        clearInterval(timer);
                        return endValue; // Ensure we don't exceed the end value
                    }
                });
            }, 100); // Update every 100ms
    
            return () => clearInterval(timer); // Cleanup on unmount
        }, [endValue, duration]);
    
        return <p className="card-value-txt">{formatToK(count)}</p>;
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
                        <p class="domain-header-txt">{domainCount.domainName}</p>
                        <p class="domain-header-org-txt">{domainCount.orgName}</p>
                    </div>

                    <div class="card-container-1">
                        <div class="content-card-divided">
                            <div class="card-header">
                                <p class="card-header-txt-divided">Parent Domains</p>
                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.parentDomainCount} duration={1000} />
                            </div>
                            <div class="card-separator-line-divided">
                            </div>
                            <div className='subdomains-header'>
                            <div class="card-header">
                                <p class="card-header-txt-divided">Sub Domains</p>
                            </div>
                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.subDomainCount} duration={1000} />
                            </div>
                        </div>
                            <div class="content-card-divided">
                                <div class="card-header">
                                    <p class="card-header-txt-divided">Potential Phishing</p>
                                </div>
                                <div class="card-value">
                                    <AnimatedCounter endValue={domainCount.phishingDomainMetrics.potentialPhishingCount} duration={1000} />
                                </div>
                                <div class="card-separator-line-divided">
                                </div>
                                <div className='divided-card-bottom-container'>
                                    <div className='divided-card-bottom-individual-container-1'>
                                        <div class="card-header">
                                            <p class="card-header-txt-divided-bottom-left">Registered</p>
                                        </div>
                                        <div class="card-value">
                                            <AnimatedCounter endValue={domainCount.phishingDomainMetrics.registeredPhishingSites} duration={1000} />
                                        </div>
                                    </div>
                                    <div className='divided-card-bottom-individual-container-2 '>
                                        <div class="card-header">
                                            <p class="card-header-txt-divided-bottom-right">Unregistered</p>
                                        </div>
                                        <div class="card-value">
                                            <AnimatedCounter endValue={domainCount.phishingDomainMetrics.unregisteredPhishingSites} duration={1000} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="content-card">
                            <div class="card-header">
                                <p style={{marginTop: "22px", marginBottom:"20px"}} class="card-header-txt">{domainCount.metrics[0].title}</p>
                            </div>
                            <div class="card-separator-line">

                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.metrics[0].value} duration={1000} />
                            </div>
                        </div>
                        <div class="content-card">
                            <div class="card-header">
                                <p class="card-header-txt">{domainCount.metrics[1].title}</p>
                            </div>
                            <div class="card-separator-line">

                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.metrics[1].value} duration={1000} />
                            </div>
                        </div>
                        <div class="content-card">
                            <div class="card-header">
                                <p class="card-header-txt">{domainCount.metrics[2].title}</p>
                            </div>
                            <div class="card-separator-line">

                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.metrics[2].value} duration={1000} />
                            </div>
                        </div>
                        <div class="content-card">
                            <div class="card-header">
                                <p class="card-header-txt">{domainCount.metrics[3].title}</p>
                            </div>
                            <div class="card-separator-line">

                            </div>
                            <div class="card-value">
                                <AnimatedCounter endValue={domainCount.metrics[3].value} duration={1000} />
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
