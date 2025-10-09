import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Game_Indices_Version() {
    const[data, setData] = useState([]);
    const{ a12 } = useParams();
        useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/version/${a12}`)
                .then((response) => response.json())
                .then((data) => setData(data))
        }, [])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}> 
    <h1 style={{textAlign: 'center'}}>Names</h1>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '2rem'}}>
        {
            data?.names?.map((item, index) => {
                return(
                    <div style={{border: '10px solid #ef5350', height: '300px',backgroundColor: 'rgba(239, 83, 80, 0.85)',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
                        <h1>Language: {item.language.name}</h1>
                        <h1>{item.name}</h1>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Game_Indices_Version