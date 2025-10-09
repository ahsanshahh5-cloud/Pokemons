import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Game_Indices() {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  let border;
  let bgColor;

    if(name === 'bulbasaur' || name === 'ivysaur' || name === 'venusaur'){
      border = '2px solid #25623eff';
      bgColor = '#2d902d';
    }else if(name === 'charmander' || name === 'charmeleon' || name === 'charizard'){
      border = '2px solid #533b09ff';
      bgColor = '#d48a1dff';
    }else if(name === 'squirtle' || name === 'wartortle' || name === 'blastoise'){
      border = '2px solid #093247ff';
      bgColor = '#1b7fbdff';
    }

  return (
    <div className="game-indices-container">
  <h1 className="game-indices-header">Game <br/> Indices</h1>
  <div className="game-indices-grid">
    {data?.game_indices?.map((item, index) => (
      <div
        key={index}
        className="game-index-card glow-box"
        style={{
          border: border,
          backgroundColor: bgColor,
        }}
      >
        <h2>{item.game_index}</h2>
        <h1>{item.version.name.toUpperCase()}</h1>
      </div>
    ))}
  </div>
</div>

  );
}

export default Game_Indices;
