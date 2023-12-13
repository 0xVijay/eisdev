import React from 'react';
import StatCard from './components/StatisticsWikipediaRow.jsx'; 
import AreaChart from './AreaChartComponent.js';
import Sidebar from './Sidebar.js';
import Header from './Header';
import './Dashboard.css';
import './SearchResults.css';

const Dashboard = () => {
    return (
        <div className='dashboard-main-container'>
            <Header />
            <Sidebar />
            <div className='ti-cards-container cards-container-dash'>
                <div style={{ marginTop: "1%" }} className='stat-card-container'>
                    <StatCard />
                </div>
                <div style={{ marginTop: "2%" }} className='stat-card-container' >
                    <StatCard />
                </div>
                <div className='dash-chart-container'>
                    <AreaChart/>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;