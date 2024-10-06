import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; // Đảm bảo đường dẫn đúng
import Alerts from "./pages/Alerts"; // Đảm bảo đường dẫn đúng
import History from "./pages/History"; // Đảm bảo đường dẫn đúng
import MainLayout from "./layouts/MainLayout"; // Đảm bảo đường dẫn đúng

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
