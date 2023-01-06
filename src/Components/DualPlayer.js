import React, { useEffect, useState, useNavigate } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DualPlayer() {
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
      toggleTurn();
    }
  };

  const toggleTurn = () => {
    if (turn === "X") {
      setTrun("O");
    } else {
      setTrun("X");
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
