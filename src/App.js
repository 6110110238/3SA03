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
        <img src="https://sv1.picz.in.th/images/2020/08/15/EAWbCy.md.png"/>
        <p>Game Card!</p>
        <WordCard value={word}/>
        <button onClick={refreshPage}><img src="https://sv1.picz.in.th/images/2020/08/15/EAWvhP.png"/></button> 
        <img src="https://sv1.picz.in.th/images/2020/08/15/EAdF4a.md.png"/>
      </header>
    </div>
  );
}

function refreshPage() {
  window.location.reload(false);
}

export default App;