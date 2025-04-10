
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(1);
  const [gridSize, setGridSize] = useState("4x4");
  const [gameType, setGameType] = useState("numbers");

  const startGame = () => {
    navigate("/game", { state: { players, gridSize, gameType } }); 
  };

  return (
    <div className="home">
      <h1>Memory Game</h1>
      <h3>Game Type</h3>
      <button onClick={() => setGameType("numbers")} className={gameType === "numbers" ? "selected" : ""}>Numbers</button>
      <button onClick={() => setGameType("images")} className={gameType === "images" ? "selected" : ""}>Images</button>

      <h3>Number of Players</h3>
      {[1, 2, 3, 4].map((num) => (
        <button key={num} onClick={() => setPlayers(num)} className={players === num ? "selected" : ""}>
          {num}
        </button>
      ))}

      <h3>Grid Size</h3>
      <button onClick={() => setGridSize("4x4")} className={gridSize === "4x4" ? "selected" : ""}>4x4</button>
      <button onClick={() => setGridSize("6x6")} className={gridSize === "6x6" ? "selected" : ""}>6x6</button>


      <button className="start-btn" onClick={startGame}>Start Game</button>
    </div>
  );
}

export default Home;
