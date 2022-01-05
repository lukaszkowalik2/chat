import React,{useState} from 'react'
import {SettingsIcon} from '../svgs'
import {BiLogOut} from 'react-icons/bi'
import {auth} from '../../firebase'
import { signOut } from "firebase/auth";
const Settings = () => {
  const [isClicked,setClicked] = useState(false)
  const [x,setX] = useState()
  const Click = (e) => {
    setClicked(!isClicked)
    setX(e.clientX)
  }
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('uid')
      setClicked(false)
      window.location.reload(false);
    } catch (err){
     console.log(err)
    } 
  }
  return (
    <>
      <SettingsIcon onClick={Click}/>
      {isClicked ? <div className="settingsPanel" style={{top: '60px', left: `${x}px` }}><div id="logout" onClick={logout}>Logout<BiLogOut size='20px'/></div></div>: null}
    </>
  );
}
 
export default Settings;