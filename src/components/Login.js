import React from 'react'
import './style.css'
import anim from './Union.png'
import logo from './logo.png'
function Login() {
  return (
    <>
    
    <div className='left'>
        <div className='left-content'>
        <p className='reset-heading'><b>Company <br />
       Manager Portal</b></p>
        <div className='reset-content'><p><ul>
            <li>
                points
            </li>
            <li>
                points
            </li>
            <li>
                points
            </li>
            </ul></p></div>
        </div>
        <div><img src={anim} className="anim" alt='anim' /></div>
    </div>

    <div className='right'>
        <div className='right-content'>
       <div><h2> <img src={logo} className="logo" alt='anim' />&nbsp; Cyethack Solutions</h2></div>
        <div className='right-content-text'>
            
            <form>
                <h1 style={{textAlign:"center"}}><b>Log In</b></h1>
                <label for="email">Email<br />
                <input type="email" className='text-area' />
                </label><br />
                <label for="pass">Password <br />
                <input type="password" className='text-area' />
                </label><br />
                <a href='#' style={{textDecoration:"underline", color:"#000"}}>Forgot Password?</a> <br/>
                <button type='submit' className='button-84'>Done</button>
            </form>
            
        </div>
            
        </div>
    </div>
    
    
    
    
    </>
  ) 
}

export default Login