import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function PokemonCard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  let bgColor;
  let borderColor;
  let innerColor;
    if(props.name === 'bulbasaur'|| props.name === 'ivysaur' || props.name === 'venusaur'){
      bgColor = "#aae7bdff";
      borderColor = "4px solid #2ecc71";
      innerColor = "linear-gradient(145deg, #c8f7dc, #a3f0c1)";
    }else if(props.name === 'charmander'|| props.name === 'charmeleon' || props.name === 'charizard'){
      bgColor = '#faca9B';
      borderColor = '4px solid orange'
      innerColor = 'linear-gradient(145deg, #ffe2b8, #ffd28a)'
    }else if(props.name === 'squirtle'|| props.name === 'wartortle' || props.name === 'blastoise'){
      bgColor = '#B0D9E7';
      borderColor = '4px solid #005AB2'
      innerColor = "linear-gradient(145deg, #d4eef5, #8fc3d7)";
    }else if(props.name === 'caterpie'){
      bgColor = '#9C552E';
      borderColor = '4px solid #651700';
      innerColor = 'linear-gradient(145deg, #b26b42, #814323)';
    }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem",
        marginTop: "30px",
      }}
    >
      <Link to={`/poke_card/${props.name}`}>
        <div
          className="Poke_N"
          style={{
            border: borderColor,
            backgroundColor: bgColor,
            height: "500px",
            width: "450px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            color: "black",
            borderRadius: "20px",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease",
          }}
        >
          <div className="LinkCSS">
            {data?.sprites?.front_default && (
              <div
                className='spinning-border'
                style={{
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: borderColor,
                  margin: "30px auto 0",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  background: innerColor
                }}
              >
                <img
                  src={data.sprites.other.home.front_default}
                  alt="pokemon"
                  className='poke_img'
                  style={{
                    maxWidth: "85%",
                    maxHeight: "85%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            )}
          </div>
          <b style={{ fontSize: "50px", marginBottom: "0px", color: '#222222' }}>
            {props.name.toUpperCase()}
          </b>

        <div style={{ display: "flex", gap: '2rem', color: "black", fontSize: "25px", justifyContent: 'center' }}>
          <p style={{ margin: 0 }}>Weight <br/> <b>{data?.weight}</b></p>
          <p style={{ margin: 0 }}>Height <br/> <b>{data?.height}</b></p>
        </div>

        <div style={{ display: "flex", gap: '2rem', color: "black", fontSize: "25px", justifyContent: 'center' }}>
          <p>
            Types: <b>{data?.types?.map((item, index) => item.type.name).join("/")}</b>
          </p>
        </div>


        </div>
      </Link>
    </div>
  );
}



export default PokemonCard;
