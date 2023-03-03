import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
import "./fonts/Manrope/Montserrat-Italic.ttf";
import "./fonts/Manrope/Montserrat-SemiBold.ttf";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
