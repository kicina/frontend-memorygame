import React, { useEffect, useState } from 'react';

const cardImages = [
  { src: '/images/helmet.png', matched: false },
  { src: '/images/potion.png', matched: false },
  { src: '/images/ring.png', matched: false },
  { src: '/images/scroll.png', matched: false },
  { src: '/images/shield.png', matched: false },
  { src: '/images/sword.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffled);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prev =>
          prev.map(card =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 800);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prev => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4 drop-shadow">Memory Game</h1>
      <button
        onClick={shuffleCards}
        className="mb-6 px-6 py-2 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-100 transition"
      >
        New Game
      </button>

      <div className="grid grid-cols-4 gap-4 max-w-[500px]">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      <p className="mt-6 text-lg">Turns: {turns}</p>
    </div>
  );
}

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled && !flipped) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative w-[100px] h-[100px]">
      <div
        className={`w-full h-full transition-transform duration-300 ease-in-out ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <img
          src={flipped ? card.src : '/images/cover.png'}
          alt="card"
          onClick={handleClick}
          className="w-full h-full object-cover rounded-xl shadow-lg cursor-pointer"
        />
      </div>
    </div>
  );
}

export default App;
