import React from "react";
import "./AlertCard.scss";

const AlertCard = ({ type, message }) => {
  return (
    <div className={`card alert-card ${type}`}>
      <h3>{type === "fire" ? "Cảnh Báo Cháy" : "Cảnh Báo Gas"}</h3>
      <p>{message}</p>
    </div>
  );
};

export default AlertCard;
