import React, {useState} from 'react'
import {Camera, Landscape,Plus,Like} from '../svgs'
import { doc, setDoc  } from "firebase/firestore"; 
import db from '../../firebase'
import FileUpload from './FileUpload'
import Emoji from '../Emoji/Emoji'
const ChatFooter = ({path, messages}) => {
  const [text,setText] = useState("")
  const Submit = async (e) => {
    e.preventDefault();
    if (!text.replace(/\s/g, '').length || !text) {
      console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
    } else {
      let lastElement = messages[messages.length - 1];
      let id = parseInt(lastElement.id) + 1
      await setDoc(doc(db, `${path}`, `${id}`), {
        message: text.trim(),
        type: 'text',
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
      <FileUpload messages={messages} path={path}/>
      <form onSubmit={Submit}>
       <input autoComplete="off" placeholder="Type something here..." value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <Emoji/>
      <Like/>
      </div>
  );
}
 
export default ChatFooter;