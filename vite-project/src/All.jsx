import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function All() {
  const { all } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (all) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${all}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [all]);

  return (
    <div>
      <Navbar pokemon={data} /> {/* ✅ Passing the data */}
    </div>
  );
}

export default All;
