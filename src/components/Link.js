import React from 'react'
import './style.css'
import anim from './Union.png'
import logo from './logo.png'
function Link() {
  return (
    <>
    
    <div className='link-main-div'>
        <div className='link-content'>
        <p className='reset-heading'><b>Link has been sent to your email
address and mobile number</b></p>
        {/* <div className='reset-content'><p>Please enter your email mobile number and we'll send the reset password to your email password</p></div> */}
        </div>
        <div><img src={anim} className="anim" alt='anim' /></div>
    </div>

   
    
    
    
    
    </>
  ) 
}

export default Link