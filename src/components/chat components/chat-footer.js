import React, {useState} from 'react'
import {Camera, Landscape,Plus,Pin,Emoji,Like} from '../svgs'
import { doc, setDoc  } from "firebase/firestore"; 
import db from '../../firebase'

const ChatFooter = ({path, messages}) => {
  const [text,setText] = useState("")
  const Submit = async (e) => {
    e.preventDefault();
    if (!text.replace(/\s/g, '').length || !text) {
      console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
    } else {
      let lastElement = messages[messages.length - 1];
      let id = lastElement.id + 1
      await setDoc(doc(db, `${path}`, `${id}`), {
        message: text.trim(),
        isImage: false,
        userID: localStorage.getItem('uid'),
        time: Date.now(),
        id: id
      });
      setText("")
    }
  }
  return (
    <div className="chat-area-footer">
      <Camera/>
      <Landscape/>
      <Plus/>
      <Pin/>
      <form onSubmit={Submit}>
       <input autoComplete="off" placeholder="Type something here..." value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <Emoji/>
      <Like/>
      </div>
  );
}
 
export default ChatFooter;