import { useState } from 'react';
import './LoginSignUp.css';
const LoginSignUp = () => {
    const [action,setAction] = useState("Login");
   
    

        
    

    return(
<>
<div className="container">
    <div id="center">
         <h1>{action}</h1>
    </div>
           
            <div className="inputs">
              <input type="email" placeholder='Email' className='email'/>
              {action === "Sign Up" ? <div></div>:   <input type="password"placeholder='Password' className='passwd' />}
               {action === "Login" ? <div></div> : <div className='inputs-1'>
                 <input type="password"placeholder='Create Password' className='passwd' />
              
                <input type="password" placeholder='Confirm Password' className='passwd'/>
                
                </div>}
               
            </div>
            {action === "Sign Up" ? <div></div> :   <h1 className='forgot-passwd'><a href="#">Forgot Password?</a></h1>}
          
            <div className="buttons">
                <button className='submit'onClick={()=> setAction("Sign Up")} >SIGN UP</button>
                {action === "Login" ?  <button className='submit'onClick={()=> setAction("Login")} >SIGN IN</button>: <div></div>}
               {action === "Sign Up" ?  <a href="#" onClick={()=> setAction("Login")} >Sign In</a> : <div></div> }
              
              
            </div>
        </div>
</>
    )
        
    
}
export default LoginSignUp