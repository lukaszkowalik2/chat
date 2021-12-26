import React from 'react'
import {Camera, Landscape,Plus,Pin,Emoji,Like} from './svgs'
import { collection, addDoc } from "firebase/firestore"; 
import db from '../../firebase'
// Add a new document in collection "cities"

const chatFooter = () => {

  const Submit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
  }
  return (
    <div class="chat-area-footer">
      <Camera/>
      <Landscape/>
      <Plus/>
      <Pin/>
      <form onSubmit={Submit}>
       <input type="text" placeholder="Type something here..."/>
      </form>
      <Emoji/>
      <Like/>
      </div>
  );
}
 
export default chatFooter;