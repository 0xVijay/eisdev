import React from 'react';
import './SearchResults.css';
import headerUser from "./assets/Header-namegroup.png";
import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    const urlPath = location.pathname;

    const getTextBasedOnUrl = (url) => {
        if (url.includes('search-results')) {
            return 'Domain Space';
        } else if (url.includes('dashboard')) {
            return 'Dashboard';
        } else if (url.includes('certspace')) {
            return 'Certificate Space';
        } else if (url.includes('phishing')) {
            return 'Phishing Monitoring';
        }
        return 'Threat Intelligence'; // Fallback text if none of the conditions are met
    };

    return (
        <div class="threat-header-container">
            <div class="ti-header">
                <div class="ti-header-txt">
                    <p>{getTextBasedOnUrl(urlPath)}</p>
                </div>
                <div><img class='header-image-group' src={headerUser} alt="Header User">
                </img></div>
            </div>
        </div>
    );
};

export default Header;
