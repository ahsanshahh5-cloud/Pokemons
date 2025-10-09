import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import bgImage from './Images/abra-pokemon-1o.jpg';
import tpHd from './Images/pok-mon-go-logo-png-30.png';
import tpHd2 from './Images/pokemon-logo-png-1428.png';

function PokemonCardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div style={{ position: 'relative' }}>


      <div style={{ padding: '20px', color: 'nlack' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={tpHd2} 
            alt="Heading"
            style={{
              marginTop: '0px',
              height: '110px'
            }}
          />
          <img
            src={tpHd}
            alt="Heading"
            style={{
              marginTop: '50px',
              height: '60px'
            }}
          />
        </div>
        {data.map((item, index) => (
          <PokemonCard key={index} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
}

export default PokemonCardList
