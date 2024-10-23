import React from 'react';
import './Login.css'


const Login = ({onAccCreate, login, username,setUsername, password,setPassword, failed, show, showPassword}) => {
    return(
        <div className='login'>
         <div className='login-info'>
           <h2>Login</h2>
           {failed && <span className='incorrect' >Incorrect Username or Password</span>}
          <div className='input-div'>
             <input 
              type='text' 
              name='username'   
              placeholder='Username' 
              className='input'  
              value={username} 
              onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className='input-div'>
           <input 
               type= {show ? 'text' : 'password'} 
               name='username'
               placeholder='Password'
               className='input'
               value={password} 
               onChange={(e) => setPassword(e.target.value)}/>
          {password.length > 0 && <button 
           className='visible'
           onClick={showPassword}>{show ? 'Hide' : 'Show'}</button>}
        </div>
           <a href='#'>Forgot Password?</a>
           <button className='login-btn' onClick={login}>Login</button>
        <p>Not A User?<span><button className='create' onClick={onAccCreate}>Create Account</button></span></p>
         </div>
        </div>
    )
}

export default Login;