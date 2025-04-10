// Timer.jsx
import React, { useEffect, useState } from "react";

function Timer({ onTimeUp }) {
  const [time, setTime] = useState(120); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [onTimeUp]);

  return <div className="timer">Time: {time}s</div>;
}

export default Timer;
