import React from 'react';
import './deals.css';
import imgcover from '../../Images/899_499.png'

function Deals() {
  return (
    
    <div className="deals_section">
    
    <h1>DEALS AND DISCOUNTS</h1>

    <div className='deals_itembox'>

    <div className='one'>
        <div>
            <img src={imgcover} alt="" />
            <h2>SURFING</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <button>BOOK NOW</button>
        </div>
    </div>
    <div className='two'>
    <div>
            <img src={imgcover} alt="" />
            <h2>SURFING</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <button>BOOK NOW</button>
        </div>
    </div>
    <div className='three'>
    <div>
            <img src={imgcover} alt="" />
            <h2>SURFING</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <button>BOOK NOW</button>
        </div>
    </div>
  
    </div>

    </div>
   
  );
}

export default Deals;