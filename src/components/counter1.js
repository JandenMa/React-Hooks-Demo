import React, { useReducer } from "react";

const CounterRenducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return action.count;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return null;
  }
};

export const Counter1 = ({ initialCount }) => {
  const [state, dispatch] = useReducer(CounterRenducer, {
    count: initialCount
  });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      &emsp;
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      &emsp;
      <button
        onClick={() =>
          dispatch({ type: "reset", count: { count: initialCount } })
        }
      >
        Reset
      </button>
    </div>
  );
};
