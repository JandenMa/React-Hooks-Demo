import React, { useState } from "react";

export const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      &emsp;
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      &emsp;
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
};
