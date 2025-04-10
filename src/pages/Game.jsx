// Game.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateCards, generateImageCards } from "../utils/gameLogic"; 
import GameBoard from "../components/GameBoard";
import Timer from "../components/Timer";
import PlayerInfo from "../components/PlayerInfo";

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const { players, gridSize, gameType } = location.state;
  
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [scores, setScores] = useState(new Array(players).fill(0));

  useEffect(() => {
    if (gameType === "numbers") {
      setCards(generateCards(gridSize)); 
    } else {
      setCards(generateImageCards(gridSize)); 
    }
  }, [gridSize, gameType]);

  const handleGameOver = () => {
    navigate("/game-over", { state: { scores } });
  };

  return (
    <div className="game">
      <div className="game-board-container">
        <GameBoard
          cards={cards}
          setCards={setCards}
          turn={turn}
          setTurn={setTurn}
          scores={scores}
          setScores={setScores}
          players={players}
        />
      </div>
      <div className="player-info-container">
        {players === 1 ? <Timer onTimeUp={handleGameOver} /> : <PlayerInfo turn={turn} scores={scores} />}
      </div>
    </div>
  );
}

export default Game;

