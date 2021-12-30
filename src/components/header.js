import React, { useEffect,useState} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'
import {Logo, DarkLight, Settings} from './svgs'
const Header = () => {
  const [uID, setID] = useState("")
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setID(uid)
        // ...
      } else {
        // User is signed out
        // ...
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