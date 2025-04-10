// GameOver.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function GameOver() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const scores = state?.scores || [];

  return (
    <div className="game-over">
      <h1>Game Over</h1>
      {scores.map((score, idx) => (
        <p key={idx}>Player {idx + 1}: {score} points</p>
      ))}
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
}

export default GameOver;
