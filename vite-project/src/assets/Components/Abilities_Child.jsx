import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function Abilities_Child(props) {
    const { name2 } = useParams();
  return (
<div className="LinkCSS">
  <h2 style={{ fontSize: '40px' }}>
    <ul
      style={{
        gap: '40px',
        listStyleType: 'none',
        padding: 0,
        fontSize: '30px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <li>
        <Link className="link-hover" to={`./effect_changes/${props.abilityName}`}>
          Effect Entries
        </Link>
      </li>
      <li>
        <Link className="link-hover" to={`./flavor_text_entries/${props.abilityName}`}>
          Flavor Text Entries
        </Link>
      </li>
      <li>
        <Link className="link-hover" to={`./names/${props.abilityName}`}>
          Names
        </Link>
      </li>
    </ul>
  </h2>
</div>

  )
}

export default Abilities_Child