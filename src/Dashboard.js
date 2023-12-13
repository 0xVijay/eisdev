import React from "react"; // Make sure the path to your Statistics component is correct
import Sidebar from "./Sidebar.js";
import StatCard1, { StyledText } from "./components/StatisticsWikipediaRow.jsx";
import StatCard2 from "./components/StatisticsCertificateRow.jsx";
import StatCard3 from "./components/StatisticsTransparencyRow.jsx";
import Header from "./Header";
import "./Dashboard.css";
import "./SearchResults.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main-container">
      <Header />
      <Sidebar />
      <div className="ti-cards-container cards-container-das px-3">
        <StyledText fontSize={"25px"}>Statistics</StyledText>
        <div style={{ marginTop: "1%" }} className="stat-card-container">
          <StatCard1 />
        </div>
        <div style={{ marginTop: "2%"}} className="stat-card-container">
          <StatCard2 />
        </div>
        <div style={{ marginTop: "2%" }} className="stat-card-container">
          <StatCard3 />
        </div>
        {/* <div className='dash-chart-container'>
                    <AreaChart/>
                </div> */}
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
