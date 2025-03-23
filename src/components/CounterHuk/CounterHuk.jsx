import React from "react";
import { useState } from "react";

function CounterHuk() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handlerIncrementCounter = () => {
    setCount(count + step);
  };

  const handlerDecrementCounter = () => {
    setCount(count - step);
  };

  const handlerInputChange = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <div>
      {count}
      <button onClick={handlerDecrementCounter}>-</button>
      <button onClick={handlerIncrementCounter}>+</button>
      <br />
      <input type="number" value={step} onChange={handlerInputChange} />
    </div>
  );
}

export default CounterHuk;
