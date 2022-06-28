import React, { useState } from "react";
import "./login.scss";
import TextField from '@mui/material/TextField';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase'
import { Navigate, useNavigate } from "react-router-dom";
function Login() {

  const [errors,setError] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();
    console.log('Login button');

    //authentication

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    <Navigate to='/' />
    alert('alert')
    // ...
  })
  .catch((error) => {
    setError(true)
    // ..
  });
  }
  return (
    <>
      <div className="loginContainer">
        <form onSubmit={handleLogin}>
          <div className="formDiv">
            <TextField id="filled-basic" label="Email" variant="filled" color="success" margin="normal" onChange={e=>setEmail(e.target.value)} value={email}/>
            <TextField id="filled-basic" label="Password" variant="filled" color="success" margin="normal" type='password' onChange={e=>setPassword(e.target.value)} value={password}/>
            <button className="btn btn-primary" type="submit">Login</button>
            {errors && <span>Your Details Are Wrong.</span>}
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
