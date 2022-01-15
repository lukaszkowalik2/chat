/* eslint-disable array-callback-return */
import React, { useRef, useEffect } from 'react'
import Normal from './messageTypes/Normal'
import Image from './messageTypes/Image'
const ChatMain = ({messages}) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  })
  const handleScroll = (event) => {
    console.log("wota,")
  // code here
  }
  useEffect(() => {
    scrollToBottom()
    localStorage.setItem("lastChat",`${window.location.href}`);
  }, [messages]);
  // console.table(messages)
  return (
    <div className="chat-area-main" onScroll={handleScroll} >
    {messages.map(message => {
    let d = new Date(message.time);
    let time=`${d.getDate()}/${(d.getMonth()+1)} ${d.getHours() < 10 ? "0"+ d.getHours() : d.getHours()}:${d.getMinutes() <10 ? "0"+ d.getMinutes() : d.getMinutes()}`;
    if(message.type === 'image'){
      return(
        <Image time={time} url={message.message} key={message.time} isMine={message.userID === localStorage.getItem("uid") ? true : false}/>
      )
    } else if (message.type === 'text'){
      return(
        <Normal time={time} message={message.message} key={message.time} isMine={message.userID === localStorage.getItem("uid") ? true : false} />
      )
    }
  })}
    <div ref={messagesEndRef} />
    </div>
  );
}
 
export default ChatMain;