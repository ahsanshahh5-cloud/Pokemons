import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';

function Flavor_Text_Entries(props) {
    const[data, setData] = useState([]);
    const { id11 } = useParams();
        useEffect(() => {
            fetch(props.url)
                .then((response) => response.json())
                .then((data) => setData(data))
        }, [])
  return (
    <>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    }}> 
        {
            data?.flavor_text_entries?.map((item, index) => {
                return(
                <div>
                    <div className='LinkCSS'>
                    <div>
                        <h1>Language: {item.language.name.toUpperCase()}</h1>
                    </div></div>
                    <h3>{item.flavor_text}</h3>
                </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Flavor_Text_Entries