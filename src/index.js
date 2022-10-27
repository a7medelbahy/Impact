import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init(5000);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
