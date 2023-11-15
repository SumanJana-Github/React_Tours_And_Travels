import React from 'react';
import './luxury.css';
import luxuryimg from "../../Images/luxury_travel.png";
import pieceofmindimg from '../../Images/peace_of_mind_guaranteed.png';

function Luxury() {
  return (
    
    <div className="luxury_section">
        <img src={luxuryimg} alt="" className='luxuryimg'/>
    <img src={pieceofmindimg} alt="" />
    <div className='bluecircle'>
        FIND TOURS
    </div>
    </div>
   
  );
}

export default Luxury;