import React from "react";
import ReactDOM from "react-dom";
import "./components/reset.scss";
import "./components/var.scss";
import "./components/fonts.scss";
import "./components/animations.scss";
import "./components/base.scss";

import "./components/background.scss";

import myImg from "./static/image/style/image.png";

const App = () => {
  return (
    <div className="h1">
      React application title
      <img src={myImg} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
