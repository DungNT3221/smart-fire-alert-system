import React from "react";
import "./AirQuality.scss";

const AirQuality = () => {
  return (
    <div className="card air-quality">
      <h3>Chất Lượng Không Khí</h3>
      <p>CO2: 500 ppm</p>
      <p>CO: 20 ppm</p>
      <p>Nồng độ bụi: 35 µg/m³</p>
    </div>
  );
};

export default AirQuality;
