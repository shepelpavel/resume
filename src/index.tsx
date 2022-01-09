import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import axios from "axios";
import "./components/css/reset.scss";
import "./components/css/var.scss";
import "./components/css/fonts.scss";
import "./components/css/animations.scss";
import "./components/css/base.scss";

import Background from "./components/background/Background";

export default function App() {
  const windowSize: {
    width: number;
    height: number;
  } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  return (
    <div>
      <Background windowSize={windowSize} />
      <div className="h1">React application title</div>
      <div className="h1">React application title</div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
