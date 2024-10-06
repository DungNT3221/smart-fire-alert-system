import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar"; // Đảm bảo import Sidebar

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-layout">
      <Sidebar isOpen={true} />
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {children} {/* Sử dụng children để hiển thị các trang con */}
      </div>
    </div>
  );
};

export default MainLayout;
