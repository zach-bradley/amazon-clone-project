import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './Login.css';
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password : ""
  });

  const handleChange = event => {
    const {name, value} = event.target;
    setFormData(data => ({...data, [name]:value}));
   }
  const handleSubmit = event => {
    event.preventDefault();
    const { email,password } = formData;
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        history.push("/");
    })
    .catch(error => alert(error.message))
  }
  const handleRegister = event => {
    event.preventDefault();    
    const { email,password } = formData;
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth) {
        history.push("/");
      }
    })
    .catch(error => alert(error.message))
  }
  return (
    <div className="Login">
      <Link to="/">
        <img className="Login__Logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo"/>
      </Link>
      <div className="Login__Container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input type="text" name="email" value={formData.email} onChange={handleChange}/>
          <h5>Password</h5>
          <input type="password" name="password" value={formData.password} onChange={handleChange}/>
          <button className="Login__SignInButton">Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>

        <button className="Login__RegisterButton" onClick={handleRegister}>Register A New Account</button>
      </div>
    </div>
  )
}

export default Login
