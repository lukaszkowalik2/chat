import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from './App';
import Login from './components/Pages/Login'
import Redict from './components/Pages/Redict'
import SignUp from './components/Pages/SignUp'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/t/*' element={<App />}/>
        <Route path="/" element={<Redict/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
