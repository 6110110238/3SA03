import React from 'react';
import './App.css';
import WordCard from './WordCard';

var word = "";
var randWord = Math.floor(Math.random() * 6);

switch (randWord) {
  case 0: word = "Hello"; break;
  case 1: word = "Black"; break;
  case 2: word = "Pink"; break;
  case 3: word = "Space"; break;
  case 4: word = "Super"; break;
  case 5: word = "Market"; break;
}

function App() {
  return (
    <div id="Card Game">
      <header className="App-header">
        <WordCard value={word}/>
      </header>
    </div>
  );
}

export default App;