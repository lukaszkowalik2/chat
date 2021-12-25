import React from 'react'
import './styles/main.scss'
import LeftSideBar from './components/leftSideBar';
import Chat from './components/chat'
import Details from './components/details';
import Header from './components/header';
const App = () => {
  return (
    <div class="app">
      <Header/>
    <div class="wrapper">
      <LeftSideBar/>
      <Chat/>
      <Details/>
    </div>
  </div>
);
}
 
export default App;