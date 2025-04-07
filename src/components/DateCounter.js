import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "handleDec":
      return { ...state, count: state.count - state.step }; // Decrement by step
    case "handleInc":
      return { ...state, count: state.count + state.step }; // Increment by step
    case "setCount":
      return { ...state, count: action.payload }; // Set count directly
    case "setStep":
      return { ...state, step: action.payload }; // Set step value
    case "reset":
      return { count: 0, step: 1 }; // Reset to initial state
    default:
      throw new Error("Unknown action type");
  }

    // if (action.type === "handleInc") {
  //   return state + action.payload; // Fixed spelling
  // }
  // if (action.type === "handleDec") {
  //   return state - action.payload; // Fixed spelling
  // }
  // if (action.type === "setCount") {
  //   return action.payload; // Fixed spelling
  // }
}

function DateCounter() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state; // Destructure count and step from state

  const date = new Date("April 2 2025");
  date.setDate(date.getDate() + count);

  function handleDec() {
    dispatch({ type: "handleDec" });
  }

  function handleInc() {
    dispatch({ type: "handleInc" });
  }

  function handleRes() {
    dispatch({ type: "reset" });
  }

  function handleStepChange(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleStepChange}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={handleDec}>-</button>
        <button>{count}</button>
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