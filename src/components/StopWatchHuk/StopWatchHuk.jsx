import React, { useEffect, useState } from "react";

function StopWatchHuk() {
  const [count, setCount] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(true);

  const tick = () => {
    // const newCount = new Date(count.valueOf());
    // newCount.setSeconds(count.getSeconds() + 1);
    setCount((count) => {
      const newCount = new Date(count.valueOf());
      newCount.setSeconds(count.getSeconds() + 1);
      return newCount;
    });
  };

  const start = () => {
    setIsRunning((isRunning) => isRunning);
  };

  const reset = () => {
    setCount(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  useEffect(() => {
    let id;

    if (isRunning) {
      id = setTimeout(tick, 1000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [tick]);

  return (
    <article>
      <div>{count.toLocaleTimeString("en-GB")}</div>
      <button onClick={start}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </article>
  );
}

export default StopWatchHuk;
