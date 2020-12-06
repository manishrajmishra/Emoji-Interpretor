import React from "react";
import "./styles.css";

// var userName = "Manish Raj";
var userName = prompt("Give me Your Name");

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>
        Welcome <span style={{ color: "green" }}>{userName}</span>
      </h1>
    </div>
  );
}
