import React /*, { useState } */ from 'react';
import rights from "./assets/rights.png";
import './main.css'

import BasicForm from "./components/login_form"

const Main = () => {
    return (
        <div className="mainpage">
            <div className="imageRights">
                <img src={rights} alt="React" />
            </div>
            <div className="form">
                <BasicForm />
            </div>
        </div>
    )
}

export default Main
