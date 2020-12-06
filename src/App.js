import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😍": "smiling face with heart-eyes",
  "😘": "face blowing a kiss",
  "😚": "kissing face with closed eyes",
  "💣": "bomb",
  "👋": "waving hand",
  "👏": "clapping hands",
  "🙌": "raising hands",
  "🤝": "handsake"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "Either We don't have this in our database or you don't have entered anything";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App" style={{ backgroundColor: "gray" }}>
      <h1 style={{ color: "yellow" }}>inside outt!</h1>
      <h1 style={{ color: "green" }}>Enter the emoji in the box</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3 style={{ color: "red" }}>
        {" "}
        Emojis in Our Database are listed Below{" "}
      </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
