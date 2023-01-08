import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from "./components/home";
import Navbar from "./components/navbar";
import RegisterComplaint from "./components/register_complaint";
import YourComplaint from "./components/your_complaint";
import OtherComplaint from "./components/other_complaint";
import ContactUs from "./components/contact_us";


import BasicForm from "./components/login_form"

function App (){
    return (
        <div className='main'>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/register_complaint' element={<RegisterComplaint />} />
                <Route path='/your_complaint' element={<YourComplaint />} />
                <Route path='/other_complaint' element={<OtherComplaint />} />
                <Route path='/contact_us' element={<ContactUs />} />
            </Routes>
        </Router>
        </div>
    )
}

export default App
