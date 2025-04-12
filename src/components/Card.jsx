// Card.jsx
import React from "react";

function Card({ index, value, flipped, onClick, src }) {
  return (
    
    <div className={`w-[82px] h-[82px] bg-[#304859] rounded-lg card ${flipped ?"flipped" : ""}`} onClick={onClick}>
      {flipped ? (
        src ? <img className="" src={src} alt={value} /> : value) : ""}
    </div>
  );
}

export default Card;
