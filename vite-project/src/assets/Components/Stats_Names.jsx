import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Stats_Names() {
      const [data, setData] = useState([]);
      const { nam11 } = useParams();
    
      useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/stat/${nam11}`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }, []);
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Languages</h1>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem'
        }}>
        {
            data?.names?.map((item, index) => {
                return(
                    <div style={{border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)',height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
                        <h1>Name: {item.name}</h1>
                        <h2>Language: {item.language.name}</h2>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Stats_Names