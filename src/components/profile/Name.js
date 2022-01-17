import React, { useState } from 'react';
import db from '../../firebase'
import { collection, query, where, getDocs,doc, updateDoc } from "firebase/firestore";

const Name = ({disablePopup, username,setUpdatedName}) => {
  const [name,setName] = useState(username)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const q = query(collection(db, "userData"), where("name", "==", name));
    await getDocs(q).then(
      async function(querySnapshot) {
        if(!querySnapshot.empty || name.length<4){
          document.querySelector("form > .headerItem").textContent = "choose a different name"
          document.querySelector("form > .headerItem").style.color="#cc0000";
          document.querySelector("form > .inputName").style.borderColor="#cc0000";
        } else {
          async function updateUserData() {
          const userDataRef = doc(db, 'userData', `${localStorage.getItem('uid')}`)
          await updateDoc(userDataRef, {
            name: name
          });
          }
          updateUserData()
          setUpdatedName(name)
          disablePopup()
        }
      }
    )
  }
  const hadleClosePopup = (e) =>{
    if (e.target.className === "namePop"){
      disablePopup()
    } else {
      return 
    }
  }
  return (
    <div className="namePop" onClick={hadleClosePopup}>
      <div className="layer">
        <div className="focusLock">
          <div className="info">
           <div className="nameChange">Change your username</div>
           <div className="close" onClick={disablePopup}><svg className="closeIcon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>
          </div>
         <form onSubmit={handleSubmit} id="form">
            <div className="headerItem">Name</div>
            <input className="inputName" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
         </form>
         <div className="submit">
           <button className="cancel" onClick={disablePopup}>Cancel</button>
           <button className="submitBtn" onClick={handleSubmit}>Ready</button>
         </div>
       </div>
      </div>
    </div>
  );
}
 
export default Name;