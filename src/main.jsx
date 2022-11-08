import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { TodoProvider } from "./context/todoContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
