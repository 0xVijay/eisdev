import React from 'react';
import StatCard from './components/StatisticsWikipediaRow.jsx'; // Make sure the path to your Statistics component is correct
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
      <div style={{marginTop: "1%"}} className='stat-card-container'>
      <StatCard />
      </div>
      <div style={{marginTop: "2%"}} className='stat-card-container' >
      <StatCard />
      </div>
      <div style={{marginTop: "2%"}} className='stat-card-container'>
      <StatCard />
      </div>
      {/* <div className='card-container-1 card-container-2-dashboard'>
        <div className='card-2-dash'>
            
        </div>
      </div>
      <div className='card-container-1 card-container-3-dashboard'>
        <div className='card-2-dash'>
            
        </div>
      </div> */}
      </div>
      
    </div>
  );
};

export default Dashboard;