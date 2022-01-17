import React, { useEffect,useState} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'
import {Logo, DarkLight} from './svgs'
import { doc, getDoc, updateDoc }  from '@firebase/firestore';
import Settings from './Setting/Setting'
import db from '../firebase'
const Header = () => {
  const [uID] = useState(localStorage.getItem('uid'))
  const [image,setImage] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        async function fetch(){
          const docRef = doc(db,"userData", uid)
          const docSnap = await getDoc(docRef);
          if(docSnap.exists()) {
            setImage(docSnap.data().profilePhoto)
          } else{
            console.log("No such document")
          }
        }
        fetch()
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
  <div className="user-settings">
   <div className="dark-light" onClick={handleThemeChange}>
      <DarkLight/>
   </div>
   <div className="settings">
    <Settings/>
   </div>
   {Boolean(uID) ? <a href={window.location.origin + "/profile" } className="user-profile"><img className="user-profile" src={image} alt="" /></a> : <a className="linkToLogIn" href={window.location.origin +"/login"}>Log In</a>}
  </div>
 </div>);
}
 
export default Header;