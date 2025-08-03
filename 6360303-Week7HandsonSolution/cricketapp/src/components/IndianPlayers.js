import React from 'react';

const IndianPlayers = () => {
  const teamPlayers = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];

  const oddTeam = teamPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = teamPlayers.filter((_, index) => index % 2 === 0);

  const T20Players = ['Rohit', 'Pant', 'Virat'];
  const RanjiTrophyPlayers = ['Jadeja', 'Ashwin', 'Pujara'];
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
