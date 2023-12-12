import React from 'react';
import headerLogo from "./assets/header-logo.svg";
import gridAlt from "./assets/grid-alt.svg";
import './SearchResults.css';

const Sidebar = () => {
    return (
<div class="threat-sidebar-container">
            <div class="threat-sidebar">
                <div class="logo-container">
                    <div class="threat-logo">
                        <img class="header-logo-srch-rslts" src={headerLogo} alt="Threat Header Logo" />
                    </div>
                </div>
                <div class="threat-sidebar-menu">
                    <p class="menu-txt">Menu</p>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" selected class="dr-option-text">M</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                                <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">U</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo"/>
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">L</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo"/>
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">T</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">I</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">V</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">E</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">R</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">S</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="option-container">
                            <img src={gridAlt} alt="Grid alt" class="drop-gridlogo" />
                            <select class="dropdown-select">
                                <option value="" disabled selected class="dr-option-text">E</option>
                                {/* <!-- <option value="option1">Option 1.1</option>
                        <option value="option2">Option 1.2</option> --> */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
