import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';


function App() {

  const [playerTurn,setPlayerTurn] = useState("X");
  const [infoText,setInfoText] = useState("Player turn: ")
  const [win,setWin] = useState([]);
  const [skip,setSkip] = useState(true)
  

  const clickedButton = (event) => {
    const id = event.target.id;
    var elem = document.getElementById(id);
    event.currentTarget.disabled = true;
    
    if(playerTurn == "X") {
      elem.innerHTML = "X"
      if(!checkWin(playerTurn)){
        setPlayerTurn("O");
      }
    } else {
      elem.innerHTML = "O"
      if(!checkWin(playerTurn)){
        setPlayerTurn("X");
      }
    }

    // Check if anyone wins
  };


  const checkWin = (playerTurn) => {
    var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var d = document.getElementById("d");
  var e = document.getElementById("e");
  var f = document.getElementById("f");
  var g = document.getElementById("g");
  var h = document.getElementById("h");
  var i = document.getElementById("i");
    if(a.innerHTML == playerTurn && d.innerHTML == playerTurn && g.innerHTML == playerTurn || b.innerHTML == playerTurn && e.innerHTML == playerTurn && h.innerHTML == playerTurn || c.innerHTML == playerTurn && f.innerHTML == playerTurn && i.innerHTML == playerTurn){
      setWin(true);
      return true;
    } else if (a.innerHTML == playerTurn && b.innerHTML == playerTurn && c.innerHTML == playerTurn || d.innerHTML == playerTurn && e.innerHTML == playerTurn && f.innerHTML == playerTurn || g.innerHTML == playerTurn && h.innerHTML == playerTurn && i.innerHTML == playerTurn){
      setWin(true);
      return true;
    } else if(a.innerHTML == playerTurn && e.innerHTML == playerTurn && i.innerHTML == playerTurn || c.innerHTML == playerTurn && e.innerHTML == playerTurn && g.innerHTML == playerTurn){
      setWin(true);
      return true;
    } 
  }

  useEffect(() => {
    if(skip){
      setSkip(false);
    }else {
      var a = document.getElementById("a");
      var b = document.getElementById("b");
      var c = document.getElementById("c");
      var d = document.getElementById("d");
      var e = document.getElementById("e");
      var f = document.getElementById("f");
      var g = document.getElementById("g");
      var h = document.getElementById("h");
      var i = document.getElementById("i");
      a.disabled = true;
      b.disabled = true;
      c.disabled = true;
      d.disabled = true;
      e.disabled = true;
      f.disabled = true;
      g.disabled = true;
      h.disabled = true;
      i.disabled = true;
      setInfoText("WINNER IS ");
    }
  },[win])
  

  const refreshGame = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> TicTacToe</h1>
      </header>
      <div className="App-body">
      <body>

        <div className="playerTurn">{infoText}{playerTurn}</div>
        <div>
          <button onClick={clickedButton} className="btn" id="a">a</button>
          <button onClick={clickedButton} className="btn" id="b">a</button>
          <button onClick={clickedButton} className="btn" id="c">a</button>
        </div>
        <div>
          <button onClick={clickedButton} className="btn" id="d">a</button>
          <button onClick={clickedButton} className="btn" id="e">a</button>
          <button onClick={clickedButton} className="btn" id="f">a</button>
        </div>
        <div>
          <button onClick={clickedButton} className="btn" id="g">a</button>
          <button onClick={clickedButton} className="btn" id="h">a</button>
          <button onClick={clickedButton} className="btn" id="i">a</button>
        </div>
        <div className="newGame">
          <button className="newGameBtn" onClick={refreshGame}>New Game!</button>
        </div>
      </body>
      </div>
    </div>
  );
}

export default App;
