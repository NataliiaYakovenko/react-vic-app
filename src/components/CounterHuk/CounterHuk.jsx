import React from "react";
import { useState } from "react";

function CounterHuk() {
  const [count, setCount] = useState(0);

  const handlerIncrementCounter = () => {
    setCount(count + 1);
  };

  const handlerDecrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {count}
      <button onClick={handlerDecrementCounter}>-</button>
      <button onClick={handlerIncrementCounter}>+</button>
    </div>
  );
}

export default CounterHuk;
