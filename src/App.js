import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "đ": "Grinning Face",
  "đ": "Kissing Face",
  "đ": "Face Savoring Food",
  "đ´": "Sleeping Face",
  "đŋ": "Angry Face with Horns",
  "đ¤": "Mic",
  "đ": "Heart with Arrow",
  "đ": "Beating Heart",
  "đ": "Broken Heart",
  "đ": "Green Heart",
  "đ": "Cyclone",
  "âŖī¸": "Club Suit",
  "đ": "Muted Speaker",
  "đ": "Bell",
  "đŽ": "Litter in Bin Sign",
  "đĩ": "No Mobile Phones",
  "âŦī¸": "Up Arrow",
  "âĄī¸ ": "Right Arrow",
  "âŦī¸": "Down Arrow",
  "âŦī¸": "Left Arrow",
  "âī¸": "Atom Symbol",
  "âļī¸": "Play Button",
  "â¸ī¸": "Pause Button",
  "đĻ": "Cinema",
  "đ´": "Mobile Phone Off",
  "âžī¸": "Infinity",
  "âģī¸": "Recycling Symbol",
  " ÂŠī¸": "Copyright",
  "đē": "Red Triangle Pointed Up",
};

let knownEmoji = Object.keys(emojiDictionary);
export default function App() {
  const [matching, setMatching] = useState("");

  // matching = state variable
  // var matching = ""

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
        } else {
          result = "failure to find it";
        }
      }
    }
    // resutl = "meaning of emoje"
    setMatching(result);
  }

  function emojiClickHandler(emoji) {
    let result = emojiDictionary[emoji];
    console.log(result);
    setMatching(result);
  }
  return (
    <div className="App">
      <Header />

      <input onChange={emojiInputHandler} style={{ margin: "0 23rem" }}></input>
      <h1>{matching}</h1>
      <h2>Known Emoji</h2>
      {knownEmoji.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)}>
          <div className="main">
            <div className="emoji">{emoji}</div>
          </div>
        </span>
      ))}
      <Footer />
    </div>
  );
}

// funtion
// function declaration
// function name() {
//   return "hello";
// }

// function expression
// const name = function () {
//   return "Mani";
// };

// arrow function modern syntax

// const name = () => {
//   return "mani"
// }

// short syntax
// const name = () => "helllo";

// fetch("url").then(function(response){
//   return response.json()
// }).then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log(error);
// })

// Anonymous function
// fetch("url")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(error => console.log(error))

// always try to use arrow function

// let and const
