import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Damage_Relations() {
    const { dmgRel } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${dmgRel}`)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

const boxStyle = {
    border: '10px solid #ef5350',
    backgroundColor: 'rgba(239, 83, 80, 0.85)',
    height: '700px',
    textAlign: 'center',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    borderRadius: '15px',
    boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',
    overflowY: 'auto',
    maxHeight: '400px',
    msOverflowStyle: 'none',
    scrollbarWidth: 'thin',
    scrollbarColor: '#ffffff66 transparent'
};


    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ textAlign: 'center' }}>Damage Relations</h1>

            {/* Updated this wrapper to apply vertical spacing */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={boxStyle}>
                    <h1>Double Damage From:</h1>
                    {
                        data?.damage_relations?.double_damage_from?.map((item, index) => (
                            <h2 key={index}>{item.name}</h2>
                        ))
                    }
                </div>

                <div style={boxStyle}>
                    <h1>Double Damage To:</h1>
                    {
                        data?.damage_relations?.double_damage_to?.map((item, index) => (
                            <h2 key={index}>{item.name}</h2>
                        ))
                    }
                </div>

                <div style={boxStyle}>
                    <h1>Half Damage From:</h1>
                    {
                        data?.damage_relations?.half_damage_from?.map((item, index) => (
                            <h2 key={index}>{item.name}</h2>
                        ))
                    }
                </div>

                <div style={boxStyle}>
                    <h1>Half Damage To:</h1>
                    {
                        data?.damage_relations?.half_damage_to?.map((item, index) => (
                            <h2 key={index}>{item.name}</h2>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Damage_Relations;
