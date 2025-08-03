import React from 'react';
import Counter from './components/Counter';
import SayWelcome from './components/SayWelcome';
import SyntheticClick from './components/SyntheticClick';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Currency Convertor</h1>
      <Counter />
      <hr />
      <SayWelcome />
      <hr />
      <SyntheticClick />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
