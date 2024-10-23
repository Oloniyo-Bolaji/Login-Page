import React, {useState} from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';



function App() {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
 const [show, setShow] = useState(false)
const [cshow, setCShow] = useState(false)

  const onLogin = () =>{
    setIsUser(true)
  }

 const onAccCreate = () => {
  setIsUser(false)
 }

  const signUp = () => {
    if(firstname.length !== 0 && lastname.length !== 0 && username.length !== 0 && email.includes('@gmail.com') && password.length > 7 && password === cpassword && isChecked){
      setSuccess(true)
      setIsUser(true)
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setUsername('')
      setPassword('')
      console.log('success')
    }else{
      console.log('failed')
    }
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  }
    
    
  const login = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      setSuccess(true);
      console.log('Login successful');
    }
    if ((username !== storedUsername || password !== storedPassword) && username.length !== 0 && password.length !== 0){
      setFailed(true)
    }
    setTimeout(() => {
      setSuccess(false);
      setFailed(false)
    }, 1000);
  }
  
 const showPassword = () => {
   setShow(!show)
 }
 const showCPassword = () => {
   setCShow(!cshow)
 }
   return (
    <div className="App">
      <div className='container'>
        <div className='cont'>
          {/*Image Container*/}
         <div className='img-container'>
           <img src="./Flower.jpeg" alt='flower image'/>
         </div>
           {/*SignUp and Login Page */}
           <div className="flip-container">
             <div className={`flipper ${isUser ? 'isUser' : ''}`}>
               <div className="front">
                <SignUp 
                  username={username}
                  setUsername={setUsername}
                  firstname={firstname}
                  setFirstname={setFirstname}
                  lastname={lastname}
                  setLastname={setLastname}
                  email={email}
                  setEmail={setEmail}
                  phoneno={phoneno}
                  setPhoneno={setPhoneno}
                  password={password}
                  setPassword={setPassword}
                  cpassword={cpassword}
                  setCpassword={setCpassword}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  onLogin={onLogin}
                  signUp={signUp}
                  show={show}
                  showPassword={showPassword}
                  cshow={cshow}
                  showCPassword={showCPassword}
                  />
               </div>
               <div className="back">
                <Login 
                 onAccCreate={onAccCreate}
                 login={login}
                 username={username}
                 setUsername={setUsername}
                 password={password}
                 setPassword={setPassword}
                 failed={failed}
                 show={show}
                 showPassword={showPassword}
                 />
               </div>
             </div>
           </div>

        </div>
        {success && <div className='success'>Successful</div>}
      </div>
    </div>
  );
}

export default App;