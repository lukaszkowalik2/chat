import React, {useEffect} from 'react'
import { onSnapshot, collection } from '@firebase/firestore';
import './styles/main.scss'
import LeftSideBar from './components/leftSideBar';
import Chat from './components/chat'
import Details from './components/details';
import Header from './components/header';
import db from './firebase'
const App = () => {
  useEffect(() => {
    onSnapshot(collection(db, "1" ),(snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()))
    })
  });
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