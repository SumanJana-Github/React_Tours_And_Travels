import React from 'react';
import './Hero.css'; 

function Hero() {
  return (

    <div className="hero-section">
        <div className='leftText'>
        <h1>WHERE YOUR JOURNEY BEGINS</h1>
      <p>Discover your next great adventure, become an explorer to get started</p>
        </div>

        <div className='rightForm'>
            <h1>SEARCH TOURS</h1>
            <p>Find Your Dream Tour Today</p>
            <input type="text" placeholder='Search Tour'/>
            <input type="text" placeholder='Destination'/>
            <input type="text" placeholder='Tour Type'/>
            <input type="text" placeholder='Month'/>
            <button type='submit'>SUBMIT</button>
        </div>
        <div className='bottomblock'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, nam. Culpa iste distinctio reprehenderit, molestias, dolorem deserunt quos ab dolore architecto cum ducimus inventore. Aut quia voluptatum maxime aperiam. Fugiat?</p>
        </div>
    </div>
    

  );
}

export default Hero;
