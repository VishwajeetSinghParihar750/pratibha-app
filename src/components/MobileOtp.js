import React from 'react'
import './style.css'
import anim from './Union.png'
import logo from './logo.png'
function MobileOtp() {
    
  return (
    <>
    
    <div className='left'>
        <div className='left-content'>
        <p className='reset-heading'><b>Enter Your <br />
       New Password</b></p>
        <div className='reset-content'><p>We've sent you One Time Password OTP on your mobile number for verification. Please enter your 6-digit OTP</p></div>
        </div>
        <div><img src={anim} className="anim" alt='anim' /></div>
    </div>

    <div className='right'>
        <div className='right-content'>
       <div><h2> <img src={logo} className="logo" alt='anim' />&nbsp; Cyethack Solutions</h2></div>
        <div className='right-content-text'>
            
            <form style={{width:"70vh"}}>
                <h1 style={{textAlign:"center"}}><b>Mobile Number OTP</b></h1>
                <div style={{width:"59vh", marginBottom:"15%"}}>
                    <h3 style={{float:"left", display: "inline-block"}}>OTP</h3> 
                    <h3 style={{float:"right", display: "inline-block"}}>00:14</h3>
                </div>
                <input className='otp' type="text" id="digit-1" name="digit-1" data-next="digit-2" />
	<input className='otp' type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />
	<input className='otp' type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />
	<input className='otp' type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
	<input className='otp' type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
	<input className='otp' type="text" id="digit-6" name="digit-6" data-previous="digit-5" />
                
                <br />
                <br />
                <a href='#' style={{textDecoration:"underline", color:"#000"}}>Resend OTP</a> <br/>

                <button type='submit' style={{width:"60vh"}} className='button-84'>Done</button>
            </form>
            
        </div>
            
        </div>
    </div>
    
    
    
    
    </>
  ) 
}

export default MobileOtp