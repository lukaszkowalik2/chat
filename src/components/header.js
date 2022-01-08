import React, { useEffect,useState} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'
import {Logo, DarkLight} from './svgs'
import Settings from './Setting/Setting'
import { doc, updateDoc } from "firebase/firestore";
import db from '../firebase'
const Header = () => {
  const [uID] = useState(localStorage.getItem('uid'))
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        localStorage.setItem('uid', uid)
      } else {
        localStorage.clear()
      }
    });
  })
  const handleThemeChange = async (e) => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
      const userDataRef = doc(db, 'userData', `${localStorage.getItem('uid')}`)
      await updateDoc(userDataRef, {
        isDark: true
      });
    } else {
      const userDataRef = doc(db, 'userData', `${localStorage.getItem('uid')}`)
      await updateDoc(userDataRef, {
        isDark: false
      });
    }
    const userDataRef = doc(db, 'userData', `${localStorage.getItem('uid')}`)
    await updateDoc(userDataRef, {
      color: e.target.getAttribute('data-color')
    });
  }
  return ( 
  <div className="header">
  <div className="logo">
    <Logo/>
  </div>
  <div className="search-bar">
   <input type="text" placeholder="Search..." />
  </div>
  <div className="user-settings">
   <div className="dark-light" onClick={handleThemeChange}>
      <DarkLight/>
   </div>
   <div className="settings">
    <Settings/>
   </div>
   {Boolean(uID) ? <img className="user-profile account-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt=""/>: <a className="linkToLogIn" href="http://localhost:3000/login">Log In</a>}
  </div>
 </div>);
}
 
export default Header;