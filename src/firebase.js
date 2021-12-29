// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCoQx_YGkvZYvnOoGruJgA3jAT2LKDcRjg",
  authDomain: "chat-6db9a.firebaseapp.com",
  projectId: "chat-6db9a",
  storageBucket: "chat-6db9a.appspot.com",
  messagingSenderId: "659878072234",
  appId: "1:659878072234:web:d2af6c181f8d665dbfa5d3",
  measurementId: "G-FQH34YHB55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export default getFirestore()
export const auth = getAuth(app);