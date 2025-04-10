// Card.jsx
import React from "react";

function Card({ index, value, flipped, onClick, src }) {
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={onClick}>
      {flipped ? (src ? <img src={src} alt={value} /> : value) : ""}
    </div>
  );
}

export default Card;
