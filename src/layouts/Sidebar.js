import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar-container`}>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">Menu</div>
        <ul>
          <li className="sidebar-item">
            <a href="/">Dashboard</a>
          </li>
          <li className="sidebar-item">
            <a href="/alerts">Cảnh báo</a>
          </li>
          <li className="sidebar-item">
            <a href="/history">Lịch sử</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
