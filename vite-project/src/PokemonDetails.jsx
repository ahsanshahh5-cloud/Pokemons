import React, { useEffect, useState } from 'react'
import { useParams, Outlet, Link, Routes, Route, NavLink } from 'react-router-dom';
import extraImg from "./Images/ChatGPT Image Aug 26, 2025, 07_17_34 PM.png";
import extraImg2 from "./Images/flame.png";
import extraImg3 from "./Images/Adobe Express - file.png";
import extraImg4 from "./Images/Ladybug in Bold Flat Design.png";
import './Poke_Details.css'

function PokemonDetails() {
  const { name } = useParams();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    let bgColor;
    if(name === 'bulbasaur' || name === 'ivysaur' || name === 'venusaur'){
      bgColor = 'linear-gradient(to bottom, #58B988, #21874A)'
    }else if(name === 'charmander' || name === 'charmeleon' || name === 'charizard'){
      bgColor = 'linear-gradient(to bottom, #FE9606, #FF6301)';
    }else if(name === 'squirtle' || name === 'wartortle' || name === 'blastoise'){
      bgColor = 'linear-gradient(to bottom, #0076C1, #003F9A)';
    }else if(name === 'caterpie'){
      bgColor = 'linear-gradient(to bottom, #913A00, #621600)';
    }


  return (
    <div className='main_div' style={{background: bgColor, minHeight: '100vh', width: '100%'}}>

    <div className= 'nav'>
      <div className='lista'>
        <ul className="menu">
          <li>
            <NavLink 
              to='abilities' 
              style={{color: 'white'}}
            >
              Abilities
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='game_indices' 
              style={{color: 'white'}}
            >
              Game Indices
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='moves' 
              style={{color: 'white'}}
            >
              Moves
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='stats' 
              style={{color: 'white'}}
            >
              Stats
            </NavLink>
          </li>
          {/*}
          <li>
            <NavLink 
              to='types'
              style={{color: 'white'}}
            >
              Types
            </NavLink>
          </li>*/}
        </ul>
      </div>
    </div>

    <div>
    {data?.sprites?.front_default && (
      <div className='main_imgs_div'>
        {
          name === "bulbasaur" || name === "ivysaur" || name === "venusaur" ? (
            <img className = 'extraImg' src= {extraImg} alt="extra"/>
          ) : null}{
            name === 'charmander'|| name === 'charmeleon' || name === 'charizard' ? (
              <img className = 'extraImg2' src= {extraImg2} alt="extra"/>
            ) : null
          }{
            name === 'squirtle'|| name === 'wartortle' || name === 'blastoise' ? (
              <img className = 'extraImg3' src= {extraImg3} alt="extra"/>
            ) : null
          }{
            name === 'caterpie' ? (
              <img className = 'extraImg4' src= {extraImg4} alt="extra"/>
            ) : null
          }
        <div className='names_div'>
            <h1 className='small_h1'>
              {(data?.types[0]?.type?.name).toUpperCase()}
            </h1>
        <h1 className='large_h1'>{name}</h1></div>
        <img
          className='main_img'
          src= {data?.sprites?.other?.["official-artwork"]?.front_default}
        />
      </div>
    )}
    </div>
    <div className='outlet'>
      <Outlet />
    </div>
  </div>
  );
}

export default PokemonDetails;