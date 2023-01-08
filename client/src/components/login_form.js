import React /*, { useState } */ from 'react'
import '../styles/login_form.css'
import qr from '../assets/qr_code.png'
//import {Link} from "react-router-dom";



const BasicForm = () => {
    return (
        <>
            <form action="">
                <div className="heading">
                    <h1>Scan The QR Code</h1>
                </div>
                <div className="QRCode">
                    <img className='qr' src={qr} alt="React" />
                </div>          
            </form>
        </>
    )
}

export default BasicForm