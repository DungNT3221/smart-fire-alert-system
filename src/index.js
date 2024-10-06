import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss"; // Đảm bảo đường dẫn chính xác đến file CSS hoặc SCSS
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Phải đúng với <div id="root"></div> trong index.html
);
