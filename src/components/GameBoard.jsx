
import React, { useState } from "react";
import Card from "./Card";

function GameBoard({ cards, setCards, turn, setTurn, scores, setScores, players }) {
  const [selected, setSelected] = useState([]);

  const handleClick = (index) => {
    if (selected.includes(index) || cards[index].matched || selected.length >= 2) return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (cards[first].value === cards[second].value) {
        const updatedCards = [...cards];
        updatedCards[first].matched = true;
        updatedCards[second].matched = true;
        setCards(updatedCards);

        const updatedScores = [...scores];
        updatedScores[turn] += 1;
        setScores(updatedScores);

        setTimeout(() => setSelected([]), 1000);
      } else {
        setTimeout(() => {
          setSelected([]);
          if (players > 1) setTurn((turn + 1) % players);
        }, 1000);
      }
    }
  };
  

  return (
    <div className={`board ${cards.length === 36 ? "grid-6x6" : "grid-4x4"}`}>
      {cards.map((card, index) => (
        <Card className="----"
          key={index}
          index={index}
          value={card.value}
          flipped={card.matched || selected.includes(index)}
          onClick={() => handleClick(index)}
          src={card.src} 
        />
      ))}
      
      
    </div>
    
  );
}

export default GameBoard;
