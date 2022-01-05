import React,{useState} from 'react'
import {EmojiIcon} from '../svgs'
import EmojiMenu from './EmojiMenu'
const Emoji = (e) => {
  const [isClicked,setClicked] = useState(false)
  const [x,setX] = useState()
  const handleClick = (e) => {
    setClicked(!isClicked)
    setX(e.clientX)
    console.log(x)
  }
  return (
    <>
    <button onClick={handleClick} style={{"backgroundColor":"transparent","marginRight":"12px","color":"rgb(193, 199, 205)","cursor":"pointer","marginTop":"6px"}}><EmojiIcon/></button>
    {isClicked? <EmojiMenu x={x}/>: null}
    </>
  );
}
 
export default Emoji;