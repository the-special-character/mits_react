import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App1 from './App1'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App name="Virat Kohli" designation="Software Engineer" />
    <App1 name="Rohit Sharma" designation="Indian Caption" />
  </div>
);
