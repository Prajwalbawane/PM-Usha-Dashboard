import React from "react";
import CnBarChart from "../components/CnBarChart"; 
import RnPieChart from "../components/RnPieChart"; 

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <CnBarChart />
      <RnPieChart />
    </div>
  );
};

export default Dashboard;
