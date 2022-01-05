import React from 'react';
import '../../styles/EmojiMenu.css'
const EmojiMenu = ({x}) => {
  console.log(x)
  return (
    <div className="EmojiMenu" style={{bottom: '12px', right:`10px`}}>
      <div id="wrapper">
        <input type="text" placeholder="search for emoji" autocomplete="off" className="search" />
      </div>
      heheh
    </div>
  );
}
 
export default EmojiMenu;