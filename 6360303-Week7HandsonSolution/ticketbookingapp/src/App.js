import React, { useState } from 'react';
import FlightDetails from './components/FlightDetails';
import UserPage from './components/UserPage';
import GuestPage from './components/GuestPage';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Ticket Booking App</h1>

      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      <hr />

      <FlightDetails />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
