import React, { useState } from "react";
import "./styles.css";
var textColor = "grey";

var casesDictionary = {
  "๐" : "Twelve OโClock",
  "๐ง" : "Twelve-Thirty",
  "๐" : "One OโClock",
  "๐" : "One-Thirty",
  "๐" : "Five OโClock",
  "๐" : "Nine OโClock",
  "๐" : "Ten OโClock",
  "๐" : "Eleven OโClock",
  "๐ฆ" : "Eleven-Thirty",
  "โฌ๏ธ" : "Up Arrow",
  "โ๏ธ" : "Up-Right Arrow",
  "โก๏ธ" : "Right Arrow",
  "โฌ๏ธ" : "Left Arrow",
  "โ๏ธ" : "Up-Down Arrow",
  "โ๏ธ" : "Left-Right Arrow",
  "โฉ๏ธ" : "Right Arrow Curving Left",
  "โช๏ธ" : "Left Arrow Curving Right",
  "โคด๏ธ" : "Right Arrow Curving Up",
  "๐" : "Clockwise Vertical Arrows",
  "๐" : "Counterclockwise Arrows Button",
  "๐" : "Back Arrow",
  "๐" : "End Arrow",
  "๐" : "On! Arrow",
  "๐" : "Top Arrow",
  "๐" : "Stop Sign",
  "๐" : "Muted Speaker",
  "๐" : "Bell with Slash",
  "๐น" : "Chart Increasing with Yen",
  "๐ง" : "ATM Sign",
  "๐ฎ" : "Litter in Bin Sign",
  "๐ฐ" : "Potable Water",
  "โฟ" : "Wheelchair Symbol",
  "๐น" : "Menโs Room",
  "๐บ" : "Womenโs Room",
  "๐ป" : "Restroom",
  "๐ผ" : "Baby Symbol",
  "โ ๏ธ" : "Warning",
  "๐ธ" : "Children Crossing",
  "๐ซ" : "Prohibited",
  "๐ณ" : "No Bicycles",
  "๐" : "No One Under Eighteen",
  "โข๏ธ" : "Radioactive",
  "โฃ๏ธ" : "Biohazard",
  "๐" : "Place of Worship",
  "โ" : "Gemini",
  "โ" : "Virgo",
  "โถ๏ธ" : "Play Button",
  "โ๏ธ" : "Eject Button",
  "โ๏ธ" : "Female Sign",
  "โ๏ธ" :"Male Sign",
  "๐" : "Heart with Arrow",
  "๐" : "Growing Heart",
  "๐" : "Heart Decoration",
  "๐" : "Broken Heart",
  "โค๏ธโ๐ฉน" : " Mending Heart",
  "๐งก" : "Orange Heart",
  "๐" : "Yellow Heart",
  "๐" : "Green Heart",
  "๐" : "Blue Heart",
  "๐ค" : "Black Heart",
  "๐ฏ" : "Hundred Points",
  "๐๏ธโ๐จ๏ธ" : "Eye in Speech Bubble",
  "๐ค" : "Zzz",
  "โจ๏ธ" : "White Flower",
  "๐" : "Cyclone",
  "๐" : "Speaker High Volume",
  "๐ฏ" : "Postal Horn",
  "๐" : "Bell",
  "๐ถ" : "Musical Notes",
  "โ" : "Plus",
  "โญ" : "Hollow Red Circle",
  "๐ข" : "Green Circle",
  "โช๏ธ" : "Black Medium Square",
  "๐ถ" : "Large Orange Diamond",
  "๐บ" : "Red Triangle Pointed Up",
  "๐ " : "Diamond with a Dot",
  "๐ฒ" : "White Square Button",
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
        <button onClick={likeClickHandler} style={{marginTop : "7px", cursor:"pointer", border : "2px solid rgb(49, 76, 94)", borderRadius :"0.5rem", padding:"0.4rem", boxShadow:"0px 0px 20px rgb(49, 76, 94)"}}>Likes๐</button>
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
        <p style={{fontSize : "0.7rem",paddingBottom:"2rem"}}>Made by Namrata Jain ยฉ Copyright</p>
      </footer>
    </div>
  );
}
