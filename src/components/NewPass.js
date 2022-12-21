import React from 'react'
import './style.css'
import anim from './Union.png'
import logo from './logo.png'
function NewPass() {
  return (
    <>
    
    <div className='left'>
        <div className='left-content'>
        <p className='reset-heading'><b>Enter Your <br />
       New Password</b></p>
        {/* <div className='reset-content'><p>Please enter your email mobile number and we'll send the reset password to your email password</p></div> */}
        </div>
        <div><img src={anim} className="anim" alt='anim' /></div>
    </div>

    <div className='right'>
        <div className='right-content'>
       <div><h2> <img src={logo} className="logo" alt='anim' />&nbsp; Cyethack Solutions</h2></div>
        <div className='right-content-text'>
            
            <form>
                <h1 style={{textAlign:"center"}}><b>Reset Your Password</b></h1>
                <label for="pass">New Password<br />
                <input type="password" className='text-area' />
                </label><br />
                <label for="confpass">Confirm Password <br />
                <input type="password" className='text-area' />
                </label><br />
                
                <button type='submit' className='button-84'>Next Step</button>
            </form>
            
        </div>
            
        </div>
    </div>
    
    
    
    
    </>
  ) 
}

export default NewPass