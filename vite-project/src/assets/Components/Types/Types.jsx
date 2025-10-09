import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Types() {
    const[data, setData] = useState([]);
    const { name } = useParams();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => setData(data))
    })
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
      <h1 style={{textAlign: 'center'}}>Types</h1>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem'
    }}>
        {
            data?.types?.map((item, index) => {
                return(
                    <Link to={`/types/${item.type.name}`}>
                    <div className='Poke_Name' style={{border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)',height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
                        <h1>Name: {item.type.name}</h1>
                        <h2>Slot: {item.slot}</h2>
                    </div></Link>
                )
            })
        }
    </div>
    </div>
  )
}

export default Types