import React from "react";
import StatCard1 from "./components/StatisticsWikipediaRow.jsx";
import StatCard2 from "./components/StatisticsCertificateRow.jsx";
import Sidebar from "./Sidebar.js";
import Header from "./Header";
import "./Dashboard.css";
import "./SearchResults.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main-container">
      <Header />
      <Sidebar />
      <div className="ti-cards-container cards-container-das px-3">
        <div style={{ marginTop: "1%" }} className="stat-card-container">
          <StatCard1 />
        </div>
        <div style={{ marginTop: "2%" }} className="stat-card-container">
          <StatCard2 />
        </div>
        <div style={{ marginTop: "2%" }} className="stat-card-container">
          <StatCard1 />
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
