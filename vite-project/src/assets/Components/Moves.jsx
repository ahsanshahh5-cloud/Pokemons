import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Moves() {
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
    <div className="moves-container">
  <h1 className="moves-header"><b>Moves:</b></h1>
  <div className="moves-grid">
    {data?.moves?.map((item, index) => (
      <div
        key={index}
        className="move-card glow-box"
        style={{
          border: border,
          backgroundColor: bgColor,
        }}
      >
        <h1>{item.move.name.toUpperCase()}</h1>
      </div>
    ))}
  </div>
</div>
  );
}

export default Moves;
