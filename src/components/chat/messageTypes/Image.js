import React from 'react'
const Image = ({time, isMine, url, name, profileImage}) => {
  return(
    <div className={"chat-msg " + (isMine ? 'owner' : '')}>
      <div className="chat-msg-profile">
      <div className="name">{name}</div>
       <img className="chat-msg-img" src={profileImage} alt="" />
       <div className="chat-msg-date">Message sent {time}</div>
  </div>
  <div className="chat-msg-content">
     <div className="chat-msg-image">
       <img src={url} alt="" />
     </div>
  </div>
 </div> 
  )
}
 
export default Image;