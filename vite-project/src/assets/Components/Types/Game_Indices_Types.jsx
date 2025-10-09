import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Game_Indices_Types() {
    const{ git } = useParams();
    const[data, setData] = useState();
        useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/type/${git}`)
                .then((response) => response.json())
                .then((data) => setData(data))
        }, [])
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <h1 style={{textAlign: 'center'}}>Game Indices</h1>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '2rem'}}>
        {
            data?.game_indices?.map((item, index) => {
                return(
                    <div style={{border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)',height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
                        <h1>Game Index: {item.game_index}</h1>
                        <h2>{item.generation.name}</h2>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Game_Indices_Types