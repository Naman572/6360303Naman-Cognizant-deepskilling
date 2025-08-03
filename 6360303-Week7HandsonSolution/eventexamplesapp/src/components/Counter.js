import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  const handleIncrementClick = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
