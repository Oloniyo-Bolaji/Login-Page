import React, {useState} from 'react';
import './SignUp.css'


                 
const SignUp = ({signUp,onLogin, isChecked,setIsChecked,username,setUsername,firstname,setFirstname,lastname,setLastname,email,setEmail, phoneno, setPhoneno,password,setPassword, cpassword,setCpassword, show, cshow, showPassword, showCPassword}) => {
    


    return(
     <div className='sign'>
      <div className='sign-info'>
        <h2>Sign Up</h2>
        <div className='sign-info-div'>
          <div>
          <div className='input-div'>
            <input 
             type='text' 
             name='fname' 
             placeholder='Firstname' 
             value={firstname} 
             onChange={(e) => setFirstname(e.target.value)}/>
          </div>
          <div className='input-div'>
           <input 
            type='text' 
            name='lname' 
            placeholder='Lastname' 
            value={lastname} 
            onChange={(e) => setLastname(e.target.value)}/>
          </div>
          <div className='input-div'>
            <input 
             type='text'
             name='username' 
             placeholder='Username' 
             value={username}
             onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='input-div'>
           <input 
            type='email' 
            name='email' 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
           {(email.length > 0 && !email.includes('@gmail.com')) && <li className='email-list'>email must contain @gmail.com</li>}
          <div className='input-div'>
           <input 
            type='tel' 
            name='phoneno' 
            placeholder='Phone No' 
            value={phoneno} 
            onChange={(e) => setPhoneno(e.target.value)}/>
          </div>
          <div className='input-div'>
           <input
            type={show ? 'text' : 'password'}
            name='password' 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
           {password.length > 0 && <button 
            className='visible'
            onClick={showPassword}>{show ? 'Hide' : 'Show'}</button>}
          </div>
            {(password.length > 0 && password.length < 7) && <li className='pass-list'>password must be more than 8 characters</li>}
          <div className='input-div'>
           <input 
            type={cshow ? 'text' : 'password'}
            name='username' 
            placeholder='Confirm Password' 
            value={cpassword} 
            onChange={(e) => setCpassword(e.target.value)}/>
          {cpassword.length > 0 && <button 
           className='visible'
           onClick={showCPassword}>{cshow ? 'Hide' : 'Show'}</button>}
          </div>
            {password !== cpassword && cpassword.length > 0 && <li className='cpass-list'> password doesnt match</li>}
          </div>
          </div>
           <div>
              <input 
               className='check' 
               type='checkbox' 
               value={isChecked} 
               onChange={(e) => setIsChecked(e.target.value)}/>
              <span className='cond'>I agree to the terms and conditions</span>
          </div>
           <button className='sign-btn' onClick={signUp}>Sign Up</button>
         <p>Already A User?<span><button className='loginBtn' onClick={onLogin}>Login</button></span>
         </p>
        </div>
        </div>
    )
}

export default SignUp;