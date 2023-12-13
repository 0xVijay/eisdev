import React from 'react';
import './SearchResults.css';
import headerUser from "./assets/Header-namegroup.png";

const Header = () => {
    return (
        <div class="threat-header-container">
            <div class="ti-header">
                <div class="ti-header-txt">
                    <p>Threat Intelligence</p>
                </div>
                <div><img class='header-image-group' src={headerUser} alt="Header User">
                </img></div>
            </div>
        </div>
    );
};

export default Header;
