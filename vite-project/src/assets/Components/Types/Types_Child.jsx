import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Types_Child() {
  const { typechild } = useParams();

  const cardStyle = {
    fontSize: '50px',
    border: '10px solid #ef5350',
    backgroundColor: 'rgba(239, 83, 80, 0.85)',
    height: '300px',
    textAlign: 'center',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: '15px',
    boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
    textDecoration: 'none',
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Types</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        <Link to={`/damageRelations/${typechild}`} style={cardStyle} className='Poke_Name'>
          Damage Relations
        </Link>

        <Link to={`/gameIndicesT/${typechild}`} style={cardStyle} className='Poke_Name'>
          Game Indices
        </Link>

        <Link to={`/movesT/${typechild}`} style={cardStyle} className='Poke_Name'>
          Moves
        </Link>

        <Link to={`/pokemonsT/${typechild}`} style={cardStyle} className='Poke_Name'>
          Pokemons
        </Link>
      </div>
    </div>
  );
}

export default Types_Child;
