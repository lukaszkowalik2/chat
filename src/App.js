import React, {useState,useEffect} from 'react'
import { onSnapshot, collection, orderBy, query }  from '@firebase/firestore';
import './styles/main.scss'
import 'firebase/storage';
import LeftSideBar from './components/leftSideBar';
import Chat from './components/chat'
import Details from './components/details';
import Header from './components/header';
import db from './firebase'
import Loading from './components/Pages/Loading'
const App = () => {
  const [path,setPath] = useState(window.location.href.split('/')[4])
  const [messages,setMessages] = useState(undefined)
  useEffect(() => {
    const q = query(collection(db, `${path}`),orderBy('id'))
      onSnapshot(q,(snapshot) => {
          setMessages(snapshot.docs.map(doc => doc.data()))
        })
        console.log(localStorage)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    {messages ? 
      <div className="app">
        <Header/>
        <div className="wrapper">
           <LeftSideBar/>
           <Chat path={path} messages={messages}/>
           <Details/>
        </div>
      </div>: <Loading/>}
    </>
);
}
 
export default App;