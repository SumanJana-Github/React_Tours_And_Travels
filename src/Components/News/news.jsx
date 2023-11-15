import React from 'react';
import './news.css';
import imageOne from "../../Images/layer_30.png"
import imageTwo from "../../Images/layer_31.png"
import imageThree from "../../Images/layer_30_copy_2.png"
import imgcover from "../../Images/image.png"
import imgcover2 from "../../Images/image_2.png"

function News() {
  return (
    
    <div className="news_section">
    
    <h1>NEWS AND EVENTS</h1>
    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing este es un mensaje de prueba<br></br>industries for previewing layouts and visual mockups.</p>
    <div className='news_itembox'>

    <div className='one'>
        <img src={imageOne} alt="" className='maincoverimg'/>
        <h3>Living the Travel Lifestyle</h3>
        <div>
            
            <img src= {imgcover} alt="" />
            <h5>Admin</h5>
            <img src={imgcover2} alt="" />
            <h5>5th Jan, 2023</h5>

        </div>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <div className='two'>
        <img src={imageTwo}  alt=""  className='maincoverimg' />
        <h3>Living the Travel Lifestyle</h3>
        <div>

            <img src= {imgcover} alt="" />
            <h5>Admin</h5>
            <img src={imgcover2} alt="" />
            <h5>5th Jan, 2023</h5>

        </div>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <div className='three'>
        <img src={imageThree} alt=""  className='maincoverimg'/>
        <h3>Living the Travel Lifestyle</h3>
        <div>

            <img src= {imgcover} alt="" />
            <h5>Admin</h5>
            <img src={imgcover2} alt="" />
            <h5>5th Jan, 2023</h5>

        </div>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
  
    </div>

    </div>
   
  );
}

export default News;