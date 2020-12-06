import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setlikeCounter] = useState(0);

  function likeClickHandler() {
    var newcounter = counter + 1;
    setlikeCounter(newcounter);
  }
  return (
    <div className="App">
      <h1>insiide outtt</h1>
      <button onClick={likeClickHandler}>Like Me! </button> {counter}
    </div>
  );
}
