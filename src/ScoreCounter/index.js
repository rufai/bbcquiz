import React, { useState } from "react";

const ScoreCounter = () => {
  const [score, setScore] = useState(0);

  const handleCorrectAnswer = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <p>Score: {score} / 32</p>
      {/* <p>Correct answers: {score}</p> */}
      {/* <button onClick={handleCorrectAnswer}>Correct</button> */}
    </div>
  );
};

export default ScoreCounter;
