import React from "react";
import "./styles.css";

export default function App() {
  function inputChangeHandler(event) {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <h1>insiide outtt</h1>
      <input onChange={inputChangeHandler}></input>
    </div>
  );
}
