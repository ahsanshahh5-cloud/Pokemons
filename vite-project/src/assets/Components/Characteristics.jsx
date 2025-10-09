import React, { useState , useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function Characteristics() {
  const { nam1 } = useParams();
      const[data, setData] = useState([])
          useEffect(() => {
              fetch(`https://pokeapi.co/api/v2/stat/${nam1}`)
                  .then((response) => response.json())
                  .then((data) => setData(data))
          }, [])
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1>Characteristics</h1>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      {
        data?.characteristics?.map((item, index) => {
          {
            return(
              <Link to = {`/char_5/${item.url.split("/")[6]}`}>
              <div className='Poke_Name' style={{fontSize: '35px',border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)',height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
                <h2 key={index}>{item.url ? `Characteristics ${index+1}` : "Error"}</h2>
              </div></Link>
            )
          }
        })
      }
    </div>
    </div>
  )
}

export default Characteristics