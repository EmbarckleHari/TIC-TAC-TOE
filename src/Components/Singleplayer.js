import React, { useEffect, useState, useNavigate } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Singleplayer() {
  let gameState = false;
  const location = useLocation();
  const [turn, setTrun] = useState("X");
  const [grid, setGrid] = useState(new Array(9).fill(""));

  const Player1 = location.state.Player1;
  const Player2 = location.state.Player2;

  const winningPosiblity = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const onCellClick = (index) => {
    const _grid = [...grid];
    if (_grid[index] === "" && !gameState) {
      _grid[index] = turn;
      setGrid(_grid);
      getNum(index);
      computerMove(_grid, index);
    }
  };

  const winIndex = [];
  const getNum = (index) => {
    for (let i = 0; i <= 7; i++) {
      const computerNumber = winningPosiblity[i];
      const _isAvaliabe = computerNumber.includes(index);
      if (_isAvaliabe) {
        winIndex.push(computerNumber);
      }
    }
  };

  const computerMove = (_grid, index) => {
    const computerIndex = winIndex;
    console.log("WinIndex",winIndex);
    for (let i = 0; i <= winIndex.length - 1; i++) {
      const _autoCheck = computerIndex[i];
      console.log(_autoCheck);
      let a = _autoCheck[0];
      let b = _autoCheck[1];
      let c = _autoCheck[2];
      console.log("a", a, "b", b, "c", c);
      if (_grid[a] === "") {
        _grid[a] = "O";
      } else if (_grid[b] === "") {
        _grid[b] = "O";
      } else {
        _grid[c] = "O";
      }
      // return;
    }
  };

  const ClearScreen = () => {
    setGrid(new Array(9).fill(""));
  };

  handleResultValidation();

  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningPosiblity[i];
      let a = grid[winCondition[0]];
      let b = grid[winCondition[1]];
      let c = grid[winCondition[2]];

      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      alert((turn === "X" ? " Player 2 " : " Player 1 ") + "Won the Game");
      gameState = true;
    }
    let drawMatch = !grid.includes("");
    if (drawMatch && !roundWon) {
      alert("the match has DRAWN");
      gameState = false;
      return;
    }
  }

  return (
    <div className="baselayout">
      <header className="baselayout_header">
        <p>{Player1.toUpperCase()}</p>
        <h1>Tic Tac Toe</h1>
        <p>{Player2.toUpperCase()}</p>
      </header>
      <div className="layout">
        {grid.map((data, index) => (
          <input
            type="text"
            value={data}
            id={`col${index + 1}`}
            onClick={() => onCellClick(index)}
            required
            readOnly
          />
        ))}
      </div>
      <div className="baselayout_buttons">
        <button className="newGame_btn btn">
          <Link to="/">New Game</Link>
        </button>
        <button className="reset_btn btn" onClick={ClearScreen}>
          Reset
        </button>
      </div>
    </div>
  );
}
