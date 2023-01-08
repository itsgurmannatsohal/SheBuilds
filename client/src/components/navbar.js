import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import '../styles/navbar.css'
import Logo from '../assets/logo.png'
import Contact from '../assets/contact.png'

const Navbar = () => {
    return (
        <div className="main-navbar">
            <img className='logo' src= {Logo} />
            <div className='link'>
                <Link className='home' to="/">Home</Link>
                <Link className='reg' to="/register_complaint">Register Complaint</Link>
                <Link className='oth' to="/other_complaint">Other Complaints</Link>
                <Link className='your' to="/your_complaint">Your Complaints</Link>
            </div>
            <div className='contact'>
                <Link className='contact' to="/contact_us">Contact Us</Link>
                
            </div>
            <img className='girl' src= {Contact} />
        </div>
    );
  };
    
  export default Navbar;