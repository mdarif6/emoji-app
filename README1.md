1- to print name only

import { useState } from "react";

export default function App() {
return (

<div className="App">
<h1> Welcome Md Arif</h1>
</div>
);
}

2- with variable

import { useState } from "react";

var userName = "Name with variable";

export default function App() {
return (

<div className="App">
<h1>{userName} </h1>
</div>
);
}

3- with style- BG color and text color

import { useState } from "react";

var userName = "Name with variable";
var color = "red";

export default function App() {
return (

<div className="App">
<h1 style={{ backgroundColor: color }}>{userName} </h1>
</div>
);
}

import { useState } from "react";

var userName = "Md Arif";

export default function App() {
return (

<div className="App">
<h1>
{" "}
Welcome, <span style={{ color: "blue" }}>{userName}</span>{" "}
</h1>
</div>
);
}

4-Prompt

import { useState } from "react";

var userName = prompt("Enter your username");

export default function App() {
return (

<div className="App">
<h1 style={{ backgroundColor: "red" }}> Welcome, {userName} </h1>
</div>
);
}

Question-
{" "} // from where it comes when sabe file

5- Clicked on Console---

import { useState } from "react";

var likeCounter = 0;

export default function App() {
function clickHandler() {
likeCounter = likeCounter + 1;
console.log("Clicked", likeCounter);
}
return (

<div className="App">
<h1>
Welcome, <span style={{ color: "blue" }}>Md Arif</span>
</h1>
<button onClick={clickHandler}>Click Me</button>
</div>
);
}

6- Clicked on Console and UI both--

import { useState } from "react";

export default function App() {
const [likeCounter, setLikecounter] = useState(0);
function clickHandler() {
var newLikeCounter = likeCounter + 1;
setLikecounter(newLikeCounter);
}
console.log("Clicked", likeCounter);

return (

<div className="App">
<h1>
Welcome, <span style={{ color: "blue" }}>Md Arif</span>
</h1>
<button onClick={clickHandler}>Click Me</button>
{likeCounter}
</div>
);
}

7- change value on console and UI---

import { useState } from "react";
import "./styles.css";

export default function App() {
var [userInput, setUserInput] = useState("");

function inputChangeHandler(event) {
console.log(event.target.value);
setUserInput(event.target.value);
}
return (

<div className="App">
<h1>
Welcome, <span style={{ color: "blue" }}>Md Arif</span>
</h1>
<input onChange={inputChangeHandler}></input>
<div> Welcome {userInput}</div>
</div>
);
}

Question for8- Here var taken outside the export(in below code)
and in emoji app- how it match wiht key and value, array, objects etc
What is key in object javascript

8- emaoji meaning displayed

import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
"😀": "Grinning Face",
"😗": "Kissing Face",
"😋": "Face Savoring Food",
"😴": "Sleeping Face",
"👿": "Angry Face with Horns",
"🧑🎤": "Singer",
};

export default function App() {
var [meaning, setMeaning] = useState("");

function emojiInputHandler(event) {
var userInput = event.target.value;
var meaning = emojiDictionary[userInput];
if (meaning === undefined) {
meaning = "This is not in our Database";
}
setMeaning(meaning);
}
return (

<div className="App">
<h1>
Welcome, <span style={{ color: "blue" }}>Md Arif</span>
</h1>
<input onChange={emojiInputHandler}></input>
<h2>{meaning}</h2>
</div>
);
}

9- List and its background Color add clicked with item--

import { useState } from "react";
import "./styles.css";

var shoppingList = [
"milk",
"bread",
"egg",
"salt",
"veg",
"flower",
"curd",
"butter",
];
export default function App() {
function getBg(index) {
if (index % 2 === 0) {
return "white";
}
return "gray";
}

function listItemClickHandler(item) {
console.log("Clicked", item);
}
return (

<div className="App">
<h1>
Welcome, <span style={{ color: "blue" }}>Md Arif</span>
</h1>
<ul>
{shoppingList.map(function (item, index) {
return (
<li
key={item}
onClick={() => listItemClickHandler(item)}
style={{ backgroundColor: getBg(index), padding: "1rem" }} >
{item}
</li>
);
})}
</ul>
</div>
);
}

10- emoji with two-input and click handler

import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
"😀": "Grinning Face",
"😗": "Kissing Face",
"😋": "Face Savoring Food",
"😴": "Sleeping Face",
"👿": "Angry Face with Horns",
"🧑🎤": "Singer",
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
var [meaning, setMeaning] = useState("");

function emojiInputHandler(event) {
var userInput = event.target.value;
var meaning = emojiDictionary[userInput];
if (meaning === undefined) {
meaning = "This is not in our Database";
}
setMeaning(meaning);
}

function emojiClickHandler(emoji) {
var meaning = emojiDictionary[emoji];
setMeaning(meaning);
}
return (

<div className="App">
<h1>
Welcome, <span style={{ color: "blue" }}>Md Arif</span>
</h1>
<input onChange={emojiInputHandler}></input>
<h2>{meaning}</h2>
<h3>emojis We Know </h3>
{emojiWeKnow.map(function (emoji) {
return (
<span
onClick={() => emojiClickHandler(emoji)}
style={{ fontSize: "4rem", padding: "1rem", cursor: "pointer" }}
key={emoji} >
{emoji}
</span>
);
})}
</div>
);
}

mani-
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

var userName = "Md Arif";

export default function App() {
return (

<div className="App">
<h1>
{" "}
Welcome, <span style={{ color: "blue" }}>{userName}</span>{" "}
</h1>

      <Header />
      <Header />
      <Header />
      <Header />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </div>

);
}

// export / import
// default export
// export default App;
// import App from "./app.js" default import
// named import export
// function mani(){
// return "hello"
// }

// export mani;
// import {mani} from "./adfad"

for others

function emojiInputHandler(event) {
let userInput = event.target.value;
// input from user === emoji
// userInput = emoji

    let result = emojiDictionary[userInput];
    console.log(result);
    if (result === undefined) {
      const emojiText = Object.values(emojiDictionary);
      for (let i = 0; i < emojiText.length; i++) {
        if (userInput.toLowerCase() === emojiText[i].toLowerCase()) {
          console.log(emojiText[i], knownEmoji[i]);
          result = knownEmoji[i];
        }
      }
    }
    // resutl = "meaning of emoje"
    setMatching(result);

}
