import "./App.css";

import HowToPlay from "./HowToPlay";
import ScoreCounter from "./ScoreCounter";
import Timer from "./Timer";
import Table from "./Rank";
import PremierLeagueTable from "./Rank/index2";
import Quiz from "./Quiz";

import { useState, useEffect } from "react";

function App() {
  const [hasQuizStarted, updateHasQuizStarted] = useState(null);

  function startTimer(status) {
    updateHasQuizStarted(status);
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  return (
    <div className="App">
      <h1>Can you name the players with 100 Premier League goals?</h1>
      <HowToPlay></HowToPlay>
      <div className="place_edges">
        <ScoreCounter></ScoreCounter>
        <Timer expiryTimestamp={time} shouldTimerStart={hasQuizStarted}></Timer>
      </div>
      <Quiz trigger={startTimer}></Quiz>
      <PremierLeagueTable trigger={hasQuizStarted}></PremierLeagueTable>
    </div>
  );
}

export default App;
