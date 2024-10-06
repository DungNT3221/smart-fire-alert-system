import React from "react";
import AlertCard from "../components/AlertCard";
import AirQuality from "../components/AirQuality";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="content">
      <h2>Tổng quan</h2>
      <div className="card-container">
        <AlertCard type="fire" message="Phát hiện cháy!" />
        <AlertCard type="gas" message="Rò rỉ khí gas!" />
        <AirQuality />
      </div>
    </div>
  );
};

export default Dashboard;
