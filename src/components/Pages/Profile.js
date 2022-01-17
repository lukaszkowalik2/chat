import React, { useState, useEffect } from 'react'
import '../../styles/profile.scss'
import {onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc }  from '@firebase/firestore';
import db from '../../firebase'
import {auth} from '../../firebase'
import Name from '../profile/Name'
import ProfileImage from '../profile/ProfileImage'
const Profile = () => {
  const [user] = useState()
	const [profilePhoto,setProfilePhoto] = useState()
	const [name,setName] = useState()
	const [nameIsClicked,setNameIsClicked] = useState(false)
	const [profileImageisClicked,setProfileImageIsClicked] = useState(false)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return
    } else {
      window.location.href = 'http://localhost:3000/login'
    }
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        async function fetch(){
          const docRef = doc(db,"userData", uid)
          const docSnap = await getDoc(docRef);
          if(docSnap.exists()) {
						setProfilePhoto(docSnap.data().profilePhoto)
						setName(docSnap.data().name)
          } else{
            console.log("No such document")
          }
					localStorage.setItem('uid', uid)
        }
        fetch()
      } else {
        localStorage.clear()
				window.location.href = window.location.origin + "/login"
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])
  return (
    <div id="bodyProfile">
			{nameIsClicked ? <Name disablePopup={() =>setNameIsClicked(false) } setUpdatedName={setName} username={name}/> : "" }
			{profileImageisClicked? <ProfileImage disablePopup={() =>setProfileImageIsClicked(false) } setUpdatedName={setProfilePhoto} profilePhoto={profilePhoto}/> : ""}
    <div className="card-container">
		<div className="item">
			<div className="headerItem"> Profile Image</div>
			<div className="flex">
				<div className="photo">	
					<img src={profilePhoto} alt="" />
				</div>
				<button className="change" onClick={() => setProfileImageIsClicked(true)}>Change</button>
			</div>
		</div>
		<div className="item">
			<div className="headerItem">USER NAME</div>
			<div className="flex">
				<div className="text">{name}</div>
				<button className="change" onClick={() => setNameIsClicked(true)}>Change</button>	
			</div>
		</div>
		<div className="item">
			<div className="headerItem">ADRESS EMAIL</div>
			<div className="flex">
				<div className="text">Doesnt work yet</div>
				<button className="change" disabled>Change</button>
			</div>
		</div>
		<div className="item">
			<div className="headerItem">PASSWORD</div>
			<div className="flex">
				<div className="text">Doesnt work yet</div>
				<button className="change" disabled>Change</button>
			</div>
		</div>
</div>
		<div className="returnflex">
			<div className="return">
				<a href={window.location.origin + "/t"}>Return</a>
			</div>
		</div>
</div>
  );
}
 
export default Profile;