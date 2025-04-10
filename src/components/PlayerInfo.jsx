// PlayerInfo.jsx
import React from "react";

function PlayerInfo({ turn, scores }) {
  return (
    <div className="players">
      {scores.map((score, idx) => (
        <div key={idx} className={turn === idx ? "player active" : "player"}>
          <p>Player {idx + 1}</p>
          <strong>{score}</strong>
        </div>
      ))}
    </div>
  );
}

export default PlayerInfo;
