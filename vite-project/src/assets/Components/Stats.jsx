import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Stats() {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(name);
  }, []);

  let width1, width2, width3, width4, width5;
  let num1, num2, num3, num4, num5;

  {
    if (name === 'bulbasaur') {
      width1 = '225px'; width2 = '245px'; width3 = '245px'; width4 = '325px'; width5 = '325px';
      num1 = '45'; num2 = '49'; num3 = '49'; num4 = '65'; num5 = '65';
    } else if (name === 'ivysaur') {
      width1 = '300px'; width2 = '310px'; width3 = '315px'; width4 = '400px'; width5 = '400px';
      num1 = '60'; num2 = '62'; num3 = '63'; num4 = '80'; num5 = '80';
    } else if (name === 'venusaur') {
      width1 = '400px'; width2 = '410px'; width3 = '415px'; width4 = '500px'; width5 = '500px';
      num1 = '80'; num2 = '82'; num3 = '83'; num4 = '100'; num5 = '100';
    } else if (name === 'charmander') {
      width1 = '195px'; width2 = '260px'; width3 = '215px'; width4 = '300px'; width5 = '250px';
      num1 = '39'; num2 = '52'; num3 = '43'; num4 = '60'; num5 = '50';
    } else if (name === 'charmeleon') {
      width1 = '290px'; width2 = '320px'; width3 = '290px'; width4 = '400px'; width5 = '325px';
      num1 = '58'; num2 = '64'; num3 = '58'; num4 = '80'; num5 = '65';
    } else if (name === 'charizard') {
      width1 = '390px'; width2 = '420px'; width3 = '390px'; width4 = '545px'; width5 = '425px';
      num1 = '78'; num2 = '84'; num3 = '78'; num4 = '109'; num5 = '85';
    } else if (name === 'squirtle') {
      width1 = '220px'; width2 = '240px'; width3 = '325px'; width4 = '250px'; width5 = '320px';
      num1 = '44'; num2 = '48'; num3 = '65'; num4 = '50'; num5 = '64';
    } else if (name === 'wartortle') {
      width1 = '295px'; width2 = '315px'; width3 = '400px'; width4 = '325px'; width5 = '400px';
      num1 = '59'; num2 = '63'; num3 = '80'; num4 = '65'; num5 = '80';
    } else if (name === 'blastoise') {
      width1 = '395px'; width2 = '415px'; width3 = '500px'; width4 = '425px'; width5 = '525px';
      num1 = '79'; num2 = '83'; num3 = '100'; num4 = '85'; num5 = '105';
    }
  }

  return (
    <div className="stats-container">
      <div className="stats-header">
        <h1 className="stats-title">Stats</h1>

        {data?.stats && (
          <div className="stats-content">
            <ul className="stats-names">
              <li>{data?.stats[0]?.stat?.name.toUpperCase()}</li>
              <li>{data?.stats[1]?.stat?.name.toUpperCase()}</li>
              <li>{data?.stats[2]?.stat?.name.toUpperCase()}</li>
              <li>{data?.stats[3]?.stat?.name.toUpperCase()}</li>
              <li>{data?.stats[4]?.stat?.name.toUpperCase()}</li>
            </ul>

            <div className="stats-bars">
              <div className="bar" style={{ width: width1 }}></div>
              <div className="bar" style={{ width: width2 }}></div>
              <div className="bar" style={{ width: width3 }}></div>
              <div className="bar" style={{ width: width4 }}></div>
              <div className="bar" style={{ width: width5 }}></div>
            </div>

            <div className="stats-values">
              <ul className="values-list">
                <li><h3>{num1}</h3></li>
                <li><h3>{num2}</h3></li>
                <li><h3>{num3}</h3></li>
                <li><h3>{num4}</h3></li>
                <li><h3>{num5}</h3></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stats;
