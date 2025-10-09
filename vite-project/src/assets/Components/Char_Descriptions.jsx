import React, { useState , useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function Char_Descriptions() {
  const { nam11 } = useParams();
  const[data, setData] = useState([]);
            useEffect(() => {
                fetch(`https://pokeapi.co/api/v2/characteristic/${nam11}`)
                    .then((response) => response.json())
                    .then((data) => setData(data))
            }, [])
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1>Descriptions</h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem'
      }}>
      {
        data?.descriptions?.map((item, index) => {
          return(
            <Link to = {`/desc_lang/${nam11}`}>
            <div className='Poke_Name' style={{border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)',height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
              <h1>Language: {item.language.name}</h1>
              <h2>{item.description}</h2>
            </div></Link>
          )
        })
      }
    </div>
    </div>
  )
}

export default Char_Descriptions