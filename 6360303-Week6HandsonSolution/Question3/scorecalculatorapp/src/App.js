import React from 'react';
import './Stylesheets/mystyle.css';

function App() {
  return (
    <div className="formatstyle">
      <h1 style={{ color: 'brown', fontWeight: 'bold' }}>Student Details:</h1>
      <p><strong>Name:</strong> <span className="Name">Steeve</span></p>
      <p><strong>School:</strong> <span className="School">DNV Public School</span></p>
      <p><strong>Total:</strong> <span className="Total">284Marks</span></p>
      <p><strong>Score:</strong> <span className="Score">94.67%</span></p>
    </div>
  );
}

export default App;



