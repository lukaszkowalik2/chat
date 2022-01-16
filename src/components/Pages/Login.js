import React, {useState} from 'react'
import '../../styles/SignUp.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('uid', user.uid)
      window.location.href = window.location.origin + "/t/1"
    })
  }
  return (
  <div id="loginBody">
    <div className="align">

    <div className="grid align__item">
  
      <div className="register">
  
        <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb"/><stop offset="100%" stopColor="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>
  
        <h2>Log In</h2>
  
        <form onSubmit={handleSubmit} className="form">
  
          <div className="form__field">
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
  
          <div className="form__field">
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form__field">
            <input type="submit" value="Sign Up"/>
          </div>
        <p>You don't have account?<a href={window.location.origin + "/signUp"}>Sign Up</a></p>
        </form>
      </div>
    </div>
  </div>
  </div>
  );
}
 
export default Login;
// {/* <div id="bodyLogin">
//     <div id="mainButton">
//     <div className="btn-text" onClick={() => document.getElementById('mainButton').className = 'active'}>Sign In</div>
// 	<div className="modal">
//   <div className="close-button"  onClick={() => document.getElementById('mainButton').className = ''}>x</div>
// 		<div className="form-title">Sign In</div>
// 		<div className="input-group">
// 			<input type="text" id="name" onBlur={checkInput} onChange={(e) => setEmail(e.target.value)} value={email}/>
// 			<label htmlFor="name">Username</label>
// 		</div>
// 		<div className="input-group">
// 			<input type="password" id="password" onBlur={checkInput} onChange={(e) => setPassword(e.target.value)}  value={password}/>
// 			<label htmlFor="password">Password</label>
// 		</div>
// 		<div className="form-button"onClick={click} >Go</div>
// 	</div>
// </div>
//   <a className="btn-text-link" href="http://localhost:3000/signup">Sign Up</a>
// </div> */}