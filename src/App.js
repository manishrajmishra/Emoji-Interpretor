import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setlikeCounter] = useState(0);

  const [counter2, setlikeCounter2] = useState(0);

  function likeClickHandler2() {
    var newcount = counter2 + 1;
    setlikeCounter2(newcount);
  }
  function likeClickHandler() {
    var newcounter = counter + 1;
    setlikeCounter(newcounter);
  }
  return (
    <div className="App">
      <h1>insiide outtt</h1>
      <button onClick={likeClickHandler2}>Like Me 2</button> {counter2}
      <button onClick={likeClickHandler}>Like Me! </button> {counter}
    </div>
  );
}
