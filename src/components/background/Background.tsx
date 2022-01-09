import React from "react";
import "./background.scss";

function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

interface Props {
  windowSize: {
    width: number;
    height: number;
  };
}
export default function Background(props: Props) {
  const hItems: number = Math.floor(props.windowSize.height / 400);
  const vItems: number = Math.floor(props.windowSize.width / 400);
  const hStatRPos: number = (props.windowSize.height - hItems * 400) / 2;
  const vStatRPos: number = (props.windowSize.width - vItems * 400) / 2;

  let hLines: JSX.Element[] = [];
  let vLines: JSX.Element[] = [];

  for (var i = 0; i <= hItems; i++) {
    let lineStyle: React.CSSProperties = {
      top: hStatRPos + 400 * i,
      animationDelay: String(getRandom(0, 4000)) + "ms",
      animationDuration: String(getRandom(6000, 12000)) + "ms",
    };
    hLines.push(
      <div key={i} className="background__grid_hline" style={lineStyle}></div>
    );
  }
  for (var j = 0; j <= vItems; j++) {
    let lineStyle: React.CSSProperties = {
      left: vStatRPos + 400 * j,
      animationDelay: String(getRandom(0, 4000)) + "ms",
      animationDuration: String(getRandom(6000, 12000)) + "ms",
    };
    vLines.push(
      <div key={j} className="background__grid_vline" style={lineStyle}></div>
    );
  }

  return (
    <div className="background">
      <canvas
        id="background_canvas"
        className="background__canvas js-background-canvas"
      ></canvas>
      <div className="background__grid">
        {hLines}
        {vLines}
      </div>
    </div>
  );
}
