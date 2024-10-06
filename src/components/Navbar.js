import React from "react";
import "./Navbar.scss";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Hệ Thống Báo Cháy Thông Minh</h1>
      <ul>
        <li>
          <i className="fas fa-user"></i> Admin
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
