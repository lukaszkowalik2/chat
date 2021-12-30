import React, {useEffect,useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import '../../styles/SignUp.scss'
import {auth} from '../../firebase'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [user,setUser] = useState({})
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  useEffect(() => {
    document.getElementById('name').addEventListener("keyup", function(e) {
      if (e.key === 27 || e.key === 13) {
        document.getElementById('password').focus()
      }
    });
    document.getElementById('password').addEventListener("keyup", function(e) {
      if (e.key === 27 || e.key === 13) {
        document.getElementById('mainButton').className = ''
      }
    });
  })
  const checkInput = (e) => {
    if (e.target.value.length > 4){
      e.className = 'active';
    } else {
      e.className = '';
    }
  }
  const register = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(user.email)
    } catch(err){
      console.error(err.message);
    }
  }
  return (
<div id="bodyLogin">
    <div id="mainButton">
    <div className="btn-text" onClick={() => document.getElementById('mainButton').className = 'active'}>Sign Up</div>
	<div className="modal">
  <div className="close-button"  onClick={() => document.getElementById('mainButton').className = ''}>x</div>
		<div className="form-title">Sign Up</div>
		<div className="input-group">
			<input type="text" id="name" onBlur={checkInput} onChange={(e) => {setEmail(e.target.value)}} value={email}  />
			<label htmlFor="name">Username</label>
		</div>
		<div className="input-group">
			<input type="password" id="password" onBlur={checkInput} onChange={(e) => {setPassword(e.target.value)}} value={password}/>
			<label htmlFor="password">Password</label>
		</div>
    <div className="input-group">
			<input type="password" id="confirmPassword" onBlur={checkInput} onChange={(e) => {setConfirmPassword(e.target.value)}} value={confirmPassword} />
			<label htmlFor="password">Password Confirm</label>
		</div>
		<div className="form-button"onClick={register}>Go</div>
	</div>
</div>
  <a className="btn-text-link" href="http://localhost:3000/login">Log in</a>
</div>
  );
}
 
export default Login;