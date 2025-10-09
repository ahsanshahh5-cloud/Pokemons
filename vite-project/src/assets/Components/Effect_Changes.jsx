import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

function Effect_Changes(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (  
    <>
        <div style={{ display: 'flex' }}>
    </div>
    <div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // centers horizontally
      gap: '2rem',
    }}>
      {
        data?.effect_entries?.map((item, index) => {
          return(
              <div>
                <div className='LinkCSS'>
                  <h2>Language: {item.language.name.toUpperCase()}</h2>
                </div>
              <p>{item.effect}</p>
              <p>{item.short_effect}</p>
            </div>
          )
        })
      }
    </div>
    </div>
    </>
  );
}

export default Effect_Changes;
