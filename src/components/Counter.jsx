import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // 👉 ვქვედა ასოებით ჯობია
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1> {/* აქ count გამოვიყენე */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
