import React, { useState } from "react";
import "./style.css";

function Quiz({ trigger }) {
  const [isStarted, setIsStarted] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleStartClick = () => {
    setIsStarted(true);
    trigger(true);
  };

  const handleResetClick = () => {
    setIsStarted(false);
    trigger(false);
  };

  const handleSubmitClick = () => {
    // Do something with the answer, e.g. validate it
  };

  return (
    <div>
      {isStarted ? (
        <div>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button className="submit-button" onClick={handleSubmitClick}>
            Submit
          </button>
          <button className="reset-button" onClick={handleResetClick}>
            Reset
          </button>
        </div>
      ) : (
        <button className="start-button" onClick={handleStartClick}>
          Start Quiz
        </button>
      )}
    </div>
  );
}

export default Quiz;
