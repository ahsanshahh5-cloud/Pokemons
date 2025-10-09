import React from 'react'
import { Link, useParams } from 'react-router-dom';

function Stats_Child() {
    const { child1 } = useParams();
    
  return (
    <>
    <h1 style={{textAlign: 'center'}}>Select</h1>
    <div>
        <h2 style={{fontSize: '40px', gap: '20px'}}><ul style={{gap: '50px',listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Link to = {`/char/${child1}`}><div className='Poke_Name' style={{fontSize: '50px',border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)', height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
              <li>Characteristics</li>
              </div></Link>
              <Link to = {`/nam/${child1}`}><div className='Poke_Name' style={{fontSize: '50px',border: '10px solid #ef5350',backgroundColor: 'rgba(239, 83, 80, 0.85)',height: '300px',textAlign: 'center',width: '500px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',color: 'white',borderRadius: '15px',boxShadow: '0px 0px 20px rgba(0,0,0,0.3)',}}>
                <li>Names</li>
                </div></Link>
        </ul></h2>
    </div>
    </>
  )
}

export default Stats_Child