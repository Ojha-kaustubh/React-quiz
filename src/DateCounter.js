import { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date('april 2 2025');
  date.setDate(date.getDate() + count);

  function handleDec () {
    setCount(count - step);
  }

  function handleInc () {
    setCount(count + step);
  }

  function handleRes () {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="counter">
      <div>
        <input type="range" min="0" max="10" value={count} 
        onChange={(e) => setCount(e.target.value)}/>
        <span>{step}</span>
      </div>

      <div>
        <button onClick={handleDec}>-</button>
        <button value={count} onChange={(e) => Number(setCount(e.target.value))}>{count}</button>
        <button onClick={handleInc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={handleRes}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
