import React from 'react'
import {Camera, Landscape,Plus,Pin,Emoji,Like} from './svgs'
// import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"

const chatFooter = () => {
  // await setDoc(doc(db, "cities", "LA"), {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // });
  const Submit = (e) => {
    e.preventDefault();
  }
  return (
    <div class="chat-area-footer">
      <Camera/>
      <Landscape/>
      <Plus/>
      <Pin/>
      <form onSubmit={Submit}>
       <input type="text" placeholder="Type something here..." o/>
      </form>
      <Emoji/>
      <Like/>
      </div>
  );
}
 
export default chatFooter;