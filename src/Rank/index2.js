import React, { useState, useEffect } from "react";

import "./style.css";

const PremierLeagueTable = ({ trigger }) => {
  const data = require("../data/League100.json");
  console.log(data);

  const [shouldShowData, updateShouldShowData] = useState(false);

  useEffect(() => {
    if (trigger) {
      updateShouldShowData(trigger);
    }
  }, [trigger]);

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Goals</th>
          <th>Clubs</th>
          <th>Player</th>
        </tr>
      </thead>
      <tbody>
        {shouldShowData ? (
          data.sort().map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.goals}</td>
              <td>{player.clubs}</td>
              {/* <td>{player.name || player.player}</td> */}
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PremierLeagueTable;
