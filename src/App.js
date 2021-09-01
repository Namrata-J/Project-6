import React, { useState } from "react";
import "./styles.css";
var textColor = "grey";

var casesDictionary = {
  "🕛" : "Twelve O’Clock",
  "🕧" : "Twelve-Thirty",
  "🕐" : "One O’Clock",
  "🕜" : "One-Thirty",
  "🕔" : "Five O’Clock",
  "🕘" : "Nine O’Clock",
  "🕙" : "Ten O’Clock",
  "🕚" : "Eleven O’Clock",
  "🕦" : "Eleven-Thirty",
  "⬆️" : "Up Arrow",
  "↗️" : "Up-Right Arrow",
  "➡️" : "Right Arrow",
  "⬅️" : "Left Arrow",
  "↕️" : "Up-Down Arrow",
  "↔️" : "Left-Right Arrow",
  "↩️" : "Right Arrow Curving Left",
  "↪️" : "Left Arrow Curving Right",
  "⤴️" : "Right Arrow Curving Up",
  "🔃" : "Clockwise Vertical Arrows",
  "🔄" : "Counterclockwise Arrows Button",
  "🔙" : "Back Arrow",
  "🔚" : "End Arrow",
  "🔛" : "On! Arrow",
  "🔝" : "Top Arrow",
  "🛑" : "Stop Sign",
  "🔇" : "Muted Speaker",
  "🔕" : "Bell with Slash",
  "💹" : "Chart Increasing with Yen",
  "🏧" : "ATM Sign",
  "🚮" : "Litter in Bin Sign",
  "🚰" : "Potable Water",
  "♿" : "Wheelchair Symbol",
  "🚹" : "Men’s Room",
  "🚺" : "Women’s Room",
  "🚻" : "Restroom",
  "🚼" : "Baby Symbol",
  "⚠️" : "Warning",
  "🚸" : "Children Crossing",
  "🚫" : "Prohibited",
  "🚳" : "No Bicycles",
  "🔞" : "No One Under Eighteen",
  "☢️" : "Radioactive",
  "☣️" : "Biohazard",
  "🛐" : "Place of Worship",
  "♊" : "Gemini",
  "♍" : "Virgo",
  "▶️" : "Play Button",
  "⏏️" : "Eject Button",
  "♀️" : "Female Sign",
  "♂️" :"Male Sign",
  "💘" : "Heart with Arrow",
  "💗" : "Growing Heart",
  "💟" : "Heart Decoration",
  "💔" : "Broken Heart",
  "❤️‍🩹" : " Mending Heart",
  "🧡" : "Orange Heart",
  "💛" : "Yellow Heart",
  "💚" : "Green Heart",
  "💙" : "Blue Heart",
  "🖤" : "Black Heart",
  "💯" : "Hundred Points",
  "👁️‍🗨️" : "Eye in Speech Bubble",
  "💤" : "Zzz",
  "♨️" : "White Flower",
  "🌀" : "Cyclone",
  "🔊" : "Speaker High Volume",
  "📯" : "Postal Horn",
  "🔔" : "Bell",
  "🎶" : "Musical Notes",
  "➕" : "Plus",
  "⭕" : "Hollow Red Circle",
  "🟢" : "Green Circle",
  "▪️" : "Black Medium Square",
  "🔶" : "Large Orange Diamond",
  "🔺" : "Red Triangle Pointed Up",
  "💠" : "Diamond with a Dot",
  "🔲" : "White Square Button",
  "" : "Or choose any from below"
};

var emojisWeKnow = Object.keys(casesDictionary);

export default function App() {
  const [likeCounter, setLikeCounter] = useState(20);
  function likeClickHandler() {
    var newLikeCounter = likeCounter + 1;
    console.log("Clicked!", newLikeCounter);
    setLikeCounter(newLikeCounter);
  }
  var [userInput, setUserInput] = useState("User");
  function inputChangeHandler(event) {
    var name=(event.target.value);
    if(name === ""){
      setUserInput("User");
    }else
    setUserInput(event.target.value);
  }
  const[meaning, setMeaning] = useState("");
  function emojiInputHandler(event){
    var userInput = event.target.value;
    var meaning = casesDictionary[userInput];
    if(meaning === undefined){
      meaning = "Sorry! We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }
  function listItemClickHandler(emoji){
   var meaning = casesDictionary[emoji];
   setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{color : "rgb(180, 174, 88)",textShadow:"rgb(182, 178, 170) 1px 3px 10px", paddingTop:"1rem"}}>C-A-S-E-S Interpreter</h1>
      <input
        placeholder="Enter you name here"
        onChange={inputChangeHandler}
      ></input>
      <h3 style={{color:"rgb(49, 76, 94)"}}>
        Welcome!<span style={{ color: textColor }}>{userInput}</span>
        <div></div>
        <button onClick={likeClickHandler} style={{marginTop : "7px", cursor:"pointer", border : "2px solid rgb(49, 76, 94)", borderRadius :"0.5rem", padding:"0.4rem", boxShadow:"0px 0px 20px rgb(49, 76, 94)"}}>Likes💙</button>
      <span style={{color : textColor , fontSize : "medium"}}>{likeCounter}</span>
      </h3>
      <input style = {{width : "230px" , marginBottom : "4px"}} placeholder = "Enter the emoji to know the meaning" onChange = {emojiInputHandler}></input>
      <h4 style={{color: "rgb(211, 188, 112)"}}>{meaning}</h4>
      <p style={{color : "gray"}}>Emoji's list is below:)</p>
      <div style={{maxWidth:"300px",margin: "auto"}}>
      <div className="scrolling" style = {{height:"200px",maxWidth:"300px" , marginLeft :"3rem" , marginRight : "3rem" , overflow : "scroll"}}>
      <ul>
        {
        emojisWeKnow.map(function(emoji){
          return <li style = {{fontSize : "1.8rem" ,padding : "0.5rem", cursor : "pointer", listStyle : "none", textAlign : "left"}} 
          key={emoji} onClick = {() => listItemClickHandler(emoji)}>
          {emoji}</li>;
        })
        }
      </ul>
      </div>
      </div>
      <footer style={{height:"150px",color:"black", borderTopRightRadius:"1rem",borderTopLeftRadius:"1rem", backgroundColor : "rgb(175, 174, 88)",marginTop : "80px"}}>
        <p style={{paddingTop:"2rem"}}>C-A-S-E-S</p>
        <p style={{fontSize : "0.8rem"}}>Clock-Arrows-Symbols-Emojis-Sign</p>
        <p style={{fontSize : "0.7rem",paddingBottom:"2rem"}}>Made by Namrata Jain © Copyright</p>
      </footer>
    </div>
  );
}
