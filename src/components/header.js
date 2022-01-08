import React, { useEffect,useState} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'
import {Logo, DarkLight} from './svgs'
import Settings from './Setting/Setting'
const Header = () => {
  const [uID] = useState(localStorage.getItem('uid'))
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        localStorage.setItem('uid', uid)
      } else {
        localStorage.setItem('uid', "")
      }
    });
  })
  return ( 
  <div className="header">
  <div className="logo">
    <Logo/>
  </div>
  <div className="search-bar">
   <input type="text" placeholder="Search..." />
  </div>
  <div className="user-settings">
   <div className="dark-light">
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