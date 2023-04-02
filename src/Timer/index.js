import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp, shouldTimerStart }) => {
  const { seconds, minutes, start, reset } = useTimer({
    expiryTimestamp,
    autoStart: false,
  });
  useEffect(() => {
    if (shouldTimerStart) {
      start();
    }
  }, [shouldTimerStart]);

  return (
    <div>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
