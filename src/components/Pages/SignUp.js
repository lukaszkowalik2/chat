import React, {useEffect,useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, getDocs,doc, setDoc } from "firebase/firestore";

import db from '../../firebase'
import '../../styles/SignUp.scss'
import {auth} from '../../firebase'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [user,setUser] = useState(undefined)
  const [name, setName] = useState("")
  const [isVisable, setIsVisable] = useState(false)
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  useEffect(() =>{
    if(Boolean(user))
    window.location.href = window.location.origin + "/t/1"
    else
      return;
  },[user])
  const register = async () => {
    if(password===confirmPassword|| password<6){
      const q = query(collection(db, "userData"), where("name", "==", name));
      const querySnapshot = await getDocs(q)
      .then(
        async function(querySnapshot) {
          if(!querySnapshot.empty || name.length<4){
            document.getElementById("firstInput").style.borderColor="#cc0000";
            setIsVisable(true)
          } else {
              try{
                await createUserWithEmailAndPassword(auth, email, password).then( userCredential =>{
                   setDoc(doc(db,'userData', `${userCredential.user.reloadUserInfo.localId}`), {
                    name: name,
                    profilePhoto: 'https://firebasestorage.googleapis.com/v0/b/chat-6db9a.appspot.com/o/UserProfilesImages%2FDefault.png?alt=media&token=e62b854a-6a47-42ba-8aba-3c1ae3029934',
                    isDark: false,
                    color: 'blue'
                  });
                localStorage.setItem('uid', userCredential.user.reloadUserInfo.localId)
                }
                )
                window.location.href = window.location.origin + "/t/1"
              } catch(err){
                console.error(err.message);
              }
          }
        }
      )
    } else {
      let inputs = document.querySelectorAll(".password")
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = 'red'
      }
    }
}
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div id="loginBody">
      <div className="align">
  
      <div className="grid align__item">
    
        <div className="register">
    
          <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb"/><stop offset="100%" stopColor="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>
    
          <h2>Sign Up</h2>
    
          <form onSubmit={handleSubmit} className="form">
          <div className="form__field">
              <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value.replace(/[^a-z0-9]/gi,''))} id='firstInput' maxLength="10"/>
              <div id="errorName" style={{visibility: isVisable ? 'visible' : 'visibility:hidden'}}>Please choose a different name</div>
            </div>
    
            <div className="form__field">
              <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
    
            <div className="form__field">
              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className='password' maxLength="32"/>
            </div>
            <div className="form__field">
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className='password' maxLength="32"/>
            </div>
            <div className="form__field">
              <input type="submit" value="Sign Up" onClick={register}/>
            </div>
          <p>Already have an accout?<a href={window.location.origin + "/login"}>Log in</a></p>
          </form>
        </div>
      </div>
    </div>
    </div>
    );
}
 
export default Login;