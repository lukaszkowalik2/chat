import React, {useState,useEffect} from 'react'
import { onSnapshot, collection, orderBy, query, doc, getDoc }  from '@firebase/firestore';
import './styles/main.scss'
import 'firebase/storage';
import LeftSideBar from './components/leftSideBar';
import Chat from './components/chat'
import Details from './components/details';
import Header from './components/header';
import db from './firebase'
import Loading from './components/Pages/Loading'
const App = () => {
  const [path] = useState(window.location.href.split('/')[4])
  const [messages,setMessages] = useState(undefined)
  const [userData,setUserData] = useState()
  useEffect(() => {
    const q = query(collection(db, `${path}`),orderBy('id'))
      onSnapshot(q,(snapshot) => {
          setMessages(snapshot.docs.map(doc => doc.data()))
        })
        async function fetchUserData() {
          const docRef = doc(db, "userData", `${localStorage.getItem("uid")}`);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        }
        fetchUserData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(() => {
    if(Boolean(userData)) {
      document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
      switch(userData.color) {
        case 'purple':
          document.querySelectorAll('.color')[1].classList.add('selected');
          document.body.setAttribute('data-theme', 'purple');
          console.log('purple')
          break;
        case 'green':
          document.querySelectorAll('.color')[2].classList.add('selected')
          document.body.setAttribute('data-theme', 'green');
          console.log('green')
          break;
        case 'orange':
          document.querySelectorAll('.color')[3].classList.add('selected')
          document.body.setAttribute('data-theme', 'orange');
          console.log('orange')
          break;
        default:
          console.log('blue')
          break;
      }
      if(userData.isDark)
        document.body.classList.toggle('dark-mode');
      else
        return
      
    }
  },[userData])
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