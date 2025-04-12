
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
    <div className="flex justify-center flex-col items-center h-screen bg-[#152938] ">
      <h1 className="font-bold text-[40px] text-[#FCFCFC]">memory</h1>
    <div className="flex w-[654px] h-[559px] justify-center flex-col rounded-[20px]  bg-[#FFFFFF] text-white">
      
      <h3>Game Type</h3>
      <div className="flex justify-evenly gap-4 mb-4">
      <button onClick={() => setGameType("numbers")} 
      className={gameType === "radius-[26px] text-[24px] font-bold bg-[#304859] w-[256px] h-[52px] text-[#FCFCFC]" 
      ?
       "selected" 
      :
        "radius-[26px] text-[24px] font-bold text-[#FCFCFC] bg-[#304859] w-[256px] h-[52px]  "
        }>Numbers</button>
      <button onClick={() => setGameType("images")} className={gameType === "radius-[26px] text-[24px] bg-[#304859] w-[256px] h-[52px] text-[#FCFCFC] font-bold" ? "selected" : "radius-[26px] text-[24px] font-bold bg-[#304859] w-[256px] h-[52px] text-[#FCFCFC]"}>Images</button>
</div>
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
    </div>
  );
}

export default Home;
