import React from 'react';
function SayWelcome() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => handleClick("Welcome!")}>Say Welcome</button>
    </div>
  );
}

export default SayWelcome;
