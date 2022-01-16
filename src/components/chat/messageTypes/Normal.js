import React from 'react'
const Normal = ({time, isMine, message,name, profileImage}) => {
  return(
    <div className={"chat-msg " + (isMine ? 'owner' : '')} >
      <div className="chat-msg-profile">
        <div className="name">{name}</div>
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