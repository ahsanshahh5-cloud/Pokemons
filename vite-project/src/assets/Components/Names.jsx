import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

function Names(props) {
      const [data, setData] = useState([]);
        const { id21 } = useParams();

        useEffect(() => {
            fetch(props.url)
            .then((response) => response.json())
            .then((data) => setData(data));
  }, []);
  return (
    <>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <h1 style={{textAlign: 'center'}}>Names</h1>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '2rem'}}>
        {
            data?.names?.map((item, index) => {
                return(
                    <div>
                        <h2 style={{fontSize: '45px'}}>Name: {item.language.name} </h2>
                        <h2 style={{fontSize: '40px'}}> {item.name}</h2>
                    </div>
                )
            })
        }
    </div>
    </div>
    </>
  )
}

export default Names