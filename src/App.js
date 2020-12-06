import React from "react";
import "./styles.css";

var headingText = "insiide outtt";
var color = "red";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
    </div>
  );
}
