import React, { useState } from 'react';
import '../styles/home.css'
import Home_img from '../assets/zwaard.png'
import Arrow from '../assets/arrow.png'

const Home = () => {
    return (
        <div className="homepage">
            <div className="img-box">
                <img src= {Home_img} />
            </div>
        <div className='home-box'>
             <div className="home1 dark1">
                <p className='para-light'>Register a Complaint</p>
                <h1><img className='arrow' src= {Arrow} /></h1>
            </div>
            <div className="home1 box">
                <p className='para'>Your Previous Complaints</p>
                <h1><img className='arrow' src= {Arrow} /></h1>
            </div>
            <div className="home1 box">
                <p className='para'>Other Complaints</p>
                <h1><img className='arrow' src= {Arrow} /></h1>
            </div>
            </div>
        </div>
    )
}

export default Home