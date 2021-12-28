import React, { useState } from 'react'
const ChatMain = ({messages}) => {

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
    {messages.map(message => {
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
          {/* <div className="chat-msg-text">
            <img src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif" alt='' /></div>
          <div className="chat-msg-text">Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Pretium lectus quam id leo.</div> */}
        </div>
        </div>
      )
    })
    }
    </div>
  );
}
 
export default ChatMain;