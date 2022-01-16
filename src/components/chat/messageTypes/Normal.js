import React,{useState} from 'react'
import { onSnapshot, query }  from '@firebase/firestore';
const Normal = ({time, isMine, message,reference}) => {
  const [name,setName] = useState()
  const [profileImage, setProfileImage] = useState()
  const q = query(reference)
  onSnapshot(q,(snapshot) => {
    setProfileImage(snapshot.data().profilePhoto)
    setName(snapshot.data().name)
    })
  return(
    <div className={"chat-msg " + (isMine ? 'owner' : '')} >
      <div className="chat-msg-profile">
      <div className="name">{isMine ? "" : name}</div>
       <img className="chat-msg-img" src={profileImage} alt="" />
       <div className="chat-msg-date">Message sent {time}</div>
  </div>
  <div className="chat-msg-content">
     <div className="chat-msg-text">
       {message}
     </div>
  </div>
 </div> 
  )
}
 
export default Normal;