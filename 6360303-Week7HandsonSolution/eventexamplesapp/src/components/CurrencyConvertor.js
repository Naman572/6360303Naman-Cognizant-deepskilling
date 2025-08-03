import React, { useState } from 'react';
function CurrencyConvertor() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const converted = (parseFloat(inr) / 90).toFixed(2); 
    setEuro(converted);
  };

  return (
    <div>
      <h3>INR to Euro Converter</h3>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={inr}
        onChange={(e) => setInr(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>Equivalent in Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
