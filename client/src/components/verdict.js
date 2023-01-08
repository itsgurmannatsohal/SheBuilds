import React, { useState } from 'react';
import '../styles/verdict.css'

const Verdict = () => {
    return (
        <div>
            <h2 className='logo'>Logo</h2>

            <h1>Complaint ID:#11111</h1>
            <div className='rc'>
                <div className='rc-margin-u'></div>
                <p className='upp'>Verdicts</p>
                <div className='rc-margin-d'></div>
           </div>
           <div className='ver'>
                <h2>8/01/2023</h2>
                <h3 className='stat'>Statement of witness taken</h3>
           </div>
        </div>
    )
}

export default Verdict