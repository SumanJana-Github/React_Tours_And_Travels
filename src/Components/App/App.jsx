import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Findatour from '../FindATour/Findatour';
import Deals from '../Deals/deals';
import Bt from '../BeautifulTrips/beautifultrips';
import News from '../News/news';
import Luxury from '../Luxury/luxury';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Findatour/>
    <Deals/>
    <Bt/>
    <News/>
    <Luxury/>
    </>
  );
}

export default App;