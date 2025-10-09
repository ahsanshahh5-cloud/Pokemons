import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Desc_Language() {
  const { nam12 } = useParams();
  const[data, setData] = useState([]);
            useEffect(() => {
                fetch(`https://pokeapi.co/api/v2/language/${nam12}`)
                    .then((response) => response.json())
                    .then((data) => setData(data))
            }, [])
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Names</h1>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem' 
    }}>
    <div style={{border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)', height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
        <h2>ID: {data.id}</h2>
        <h2>ISO3166: {data.iso3166}</h2>
        <h2>ISO639: {data.iso639}</h2>
        <h2>Name: {data.name}</h2>
    </div>    
        {
            data?.names?.map((item, index) => {
                return(
                <div style={{border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)', height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
                    <h1>Language: {item.language.name}</h1>
                    <h2>{item.name}</h2>
                </div>                    
                )
            })
        }
    </div>
    </div>
  )
}

export default Desc_Language