import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Dhawan', score: 60 },
    { name: 'Pant', score: 45 },
    { name: 'Kohli', score: 100 },
    { name: 'Jadeja', score: 50 },
    { name: 'Ashwin', score: 70 },
    { name: 'Shami', score: 30 },
    { name: 'Bumrah', score: 90 },
    { name: 'Rahul', score: 75 },
    { name: 'Surya', score: 65 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
