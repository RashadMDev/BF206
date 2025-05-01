import React, { useState, useEffect } from 'react';

const Timer = () => {
      const [time, setTime] = useState(0);
      const [isRunning, setIsRunning] = useState(false);
      const [faster, setfaster] = useState(false)
      const [intervalTime, setintervalTime] = useState(1000)

      useEffect(() => {
            if (!faster) {
                  setintervalTime(1000)
            } else setintervalTime(500)
            let intervalId;

            if (isRunning) {
                  intervalId = setInterval(() => {
                        setTime(prevTime => prevTime + 1);
                  }, intervalTime);
            }

            return () => clearInterval(intervalId);
      }, [isRunning, faster, intervalTime]);

      const handleStart = () => {
            setIsRunning(true);
      };

      const handleStop = () => {
            setIsRunning(false);
      };

      const handleReset = () => {
            setIsRunning(false);
            setTime(0);
      };

      function double() {
            setfaster(prev => !prev)
      }

      return (
            <div>
                  <h2>Time: {time} seconds</h2>
                  <button onClick={handleStart}>Start</button>
                  <button onClick={handleStop}>Stop</button>
                  <button onClick={handleReset}>Reset</button>
                  <button onClick={double}>
                        {
                              faster ? <div>slower</div> : <div>faster</div>
                        }
                  </button>
            </div>
      );
};

export default Timer;
