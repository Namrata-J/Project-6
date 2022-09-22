import React, { useState } from "react";
import "./styles.css";

var casesDictionary = {
  "🕛": "Twelve O’Clock",
  "🕧": "Twelve-Thirty",
  "🕐": "One O’Clock",
  "🕜": "One-Thirty",
  "🕔": "Five O’Clock",
  "🕘": "Nine O’Clock",
  "🕙": "Ten O’Clock",
  "🕚": "Eleven O’Clock",
  "🕦": "Eleven-Thirty",
  "⬆️": "Up Arrow",
  "↗️": "Up-Right Arrow",
  "➡️": "Right Arrow",
  "⬅️": "Left Arrow",
  "↕️": "Up-Down Arrow",
  "↔️": "Left-Right Arrow",
  "↩️": "Right Arrow Curving Left",
  "↪️": "Left Arrow Curving Right",
  "⤴️": "Right Arrow Curving Up",
  "🔃": "Clockwise Vertical Arrows",
  "🔄": "Counterclockwise Arrows Button",
  "🔙": "Back Arrow",
  "🔚": "End Arrow",
  "🔛": "On! Arrow",
  "🔝": "Top Arrow",
  "🛑": "Stop Sign",
  "🔇": "Muted Speaker",
  "🔕": "Bell with Slash",
  "💹": "Chart Increasing with Yen",
  "🏧": "ATM Sign",
  "🚮": "Litter in Bin Sign",
  "🚰": "Potable Water",
  "♿": "Wheelchair Symbol",
  "🚹": "Men’s Room",
  "🚺": "Women’s Room",
  "🚻": "Restroom",
  "🚼": "Baby Symbol",
  "⚠️": "Warning",
  "🚸": "Children Crossing",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🔞": "No One Under Eighteen",
  "☢️": "Radioactive",
  "☣️": "Biohazard",
  "🛐": "Place of Worship",
  "♊": "Gemini",
  "♍": "Virgo",
  "▶️": "Play Button",
  "⏏️": "Eject Button",
  "♀️": "Female Sign",
  "♂️": "Male Sign",
  "💘": "Heart with Arrow",
  "💗": "Growing Heart",
  "💟": "Heart Decoration",
  "💔": "Broken Heart",
  "❤️‍🩹": " Mending Heart",
  "🧡": "Orange Heart",
  "💛": "Yellow Heart",
  "💚": "Green Heart",
  "💙": "Blue Heart",
  "🖤": "Black Heart",
  "💯": "Hundred Points",
  "👁️‍🗨️": "Eye in Speech Bubble",
  "💤": "Zzz",
  "♨️": "White Flower",
  "🌀": "Cyclone",
  "🔊": "Speaker High Volume",
  "📯": "Postal Horn",
  "🔔": "Bell",
  "🎶": "Musical Notes",
  "➕": "Plus",
  "⭕": "Hollow Red Circle",
  "🟢": "Green Circle",
  "▪️": "Black Medium Square",
  "🔶": "Large Orange Diamond",
  "🔺": "Red Triangle Pointed Up",
  "💠": "Diamond with a Dot",
  "🔲": "White Square Button",
  "": "Or choose any from below"
};

var emojisWeKnow = Object.keys(casesDictionary);

export default function App() {
  const [userInput, setUserInput] = useState("User");
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var name = event.target.value;
    if (name === "") {
      setUserInput("User");
    } else setUserInput(event.target.value);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = casesDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry! We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function listItemClickHandler(emoji) {
    var meaning = casesDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>C-A-S-E-S Interpreter</h1>
      <input placeholder="Enter you name here" onChange={inputChangeHandler} />
      <h3>
        Welcome!
        <span>{userInput}</span>
      </h3>
      <input
        placeholder="Enter the emoji to know the meaning"
        onChange={emojiInputHandler}
      />
      <h4>{meaning}</h4>
      <p>Emoji's list is below :-)</p>
      <div>
        <div className="scrolling">
          <ul>
            {emojisWeKnow.map(function (emoji) {
              return (
                <li
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    fontSize: "2rem",
                    padding: "0.2rem"
                  }}
                  key={emoji}
                  onClick={() => listItemClickHandler(emoji)}
                >
                  {emoji}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <footer>
        <p>C-A-S-E-S</p>
        <p style={{ fontSize: "0.8rem" }}>Clock-Arrows-Symbols-Emojis-Sign</p>
        <p style={{ fontSize: "0.7rem", margin: "0rem" }}>
          Made by Namrata Jain © Copyright
        </p>
      </footer>
    </div>
  );
}
