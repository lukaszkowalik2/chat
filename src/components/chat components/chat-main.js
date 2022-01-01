import React, { useRef, useEffect } from 'react'
const ChatMain = ({messages}) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    scrollToBottom()
    localStorage.setItem("lastChat",`${window.location.href}`);
  }, [messages]);
  console.log(messages)
  const messagesMap = messages.map(message =>{
    if(message.userID === localStorage.getItem("uid")){
      let d = new Date(message.time);
      let time=`${d.getDate()}/${(d.getMonth()+1)} ${d.getHours() < 10 ? "0"+ d.getHours() : d.getHours()}:${d.getMinutes() <10 ? "0"+ d.getMinutes() : d.getMinutes()}`;
      return(
        <div className="chat-msg owner" key={message.time}>
          <div className="chat-msg-profile">
           <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
           <div className="chat-msg-date">Message sent {time}</div>
      </div>
      <div className="chat-msg-content">
         <div className="chat-msg-text">{message.message}</div>
      </div>
     </div> 
      )
    } else {
      let d = new Date(message.time);
      let time=`${d.getDate()}/${(d.getMonth()+1)} ${d.getHours() < 10 ? "0"+ d.getHours() : d.getHours()}:${d.getMinutes() <10 ? "0"+ d.getMinutes() : d.getMinutes()}`;
      return(
        <div className="chat-msg" key={message.time}>
        <div className="chat-msg-profile">
           <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
           <div className="chat-msg-date">Message sent {time}</div>
        </div>
        <div className="chat-msg-content">
         <div className="chat-msg-text">{message.message}</div>
        </div>
        </div>
      )
    }
  })
  return (
    <div className="chat-area-main">
     {/* <div className="chat-msg owner">
      <div className="chat-msg-profile">
       <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
       <div className="chat-msg-date">Message seen 1.22pm</div>
      </div>
      <div className="chat-msg-content">
       <div className="chat-msg-text">Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂</div>
       <div className="chat-msg-text">Cras mollis nec arcu malesuada tincidunt.</div>
      </div>
     </div> */}
    {/* {messages.map(message => {
      let d = new Date(message.time);
      let time=`${d.getDate()}/${(d.getMonth()+1)} ${d.getHours() < 10 ? "0"+ d.getHours() : d.getHours()}:${d.getMinutes() <10 ? "0"+ d.getMinutes() : d.getMinutes()}`;
      return(
        <div className="chat-msg" key={message.time}>
        <div className="chat-msg-profile">
           <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
           <div className="chat-msg-date">Message sent {time}</div>
        </div>
        <div className="chat-msg-content">
         <div className="chat-msg-text">{message.message}</div>
        </div>
        </div>
      )
    })
    } */}
    {messagesMap}
    <div ref={messagesEndRef} />
    </div>
  );
}
 
export default ChatMain;