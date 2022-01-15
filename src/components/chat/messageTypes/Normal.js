import React from 'react'
const Normal = ({time, isMine, message}) => {
  return(
    <div className={"chat-msg " + (isMine ? 'owner' : '')} >
      <div className="chat-msg-profile">
       <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
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