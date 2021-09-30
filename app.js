import "./styles.css";
import React, { useState } from "react";

var bollywoodRetro = [
  "aaja sanam madhur chandni mein hum (4.5/5)",
  "kisi ki muskurahaton pe ho nisar (5/5)",
  "mere sapnon ki rani (4.5/5)"
];
var soulSoothers = [
  "kabhi aditi (5/5)",
  "dil hi toh hai (4.5/5)",
  "hawayein (5/5)"
];
var workoutMusic = ["zinda (4.5/5)", "dhan te naan (5/5)", "ziddi dil (4.5/5)"];

export default function App() {
  var userName = "enter your name?";

  var [myMusic, setMyMusic] = useState(soulSoothers);

  function oneClickHandler() {
    setMyMusic(soulSoothers);
  }

  function twoClickHandler() {
    setMyMusic(bollywoodRetro);
  }
  function threeClickHandler() {
    setMyMusic(workoutMusic);
  }
  return (
    <div className="App">
      <div class="app">
        <h1 class="welcome">Welcome {userName}</h1>
        <h2>checkout my music suggestions.</h2>
        <button class="button-one" onClick={oneClickHandler}>
          soul soothers
        </button>
        <button class="button-one" onClick={twoClickHandler}>
          bollywood retro
        </button>
        <button class="button-one" onClick={threeClickHandler}>
          workout music
        </button>
        <hr />
        {myMusic.map((itemOne) => (
          <p class="music-list">{itemOne}</p>
        ))}
      </div>
    </div>
  );
}