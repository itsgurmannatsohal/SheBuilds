import React, { useState } from 'react';
import '../styles/add_witness.css'

const Witness = () => {
    return (
        <div class="mainrc">
                <form  className='rc-form' action="submit">              
                <label>Name of the witness</label><br></br>
                <input type="text" /><br></br>
                <div className='horiz'>
                    <div>
                    <label>Address</label><br></br>
                    <input className='row-input1' type="text" />
                    </div>
                    <div>
                    <label>Phone Number</label><br></br>
                    <input className='row-input2' type="text" /><br></br>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Witness