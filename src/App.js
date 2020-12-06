import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [userInput, setUserInput] = useState("");
  function inputChangeHandler(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }
  return (
    <div className="App">
      <h1>insiide outtt</h1>
      <input onChange={inputChangeHandler}></input>
      <div>{userInput}</div>
    </div>
  );
}
