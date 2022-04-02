import './App.css';
import React from 'react';
import Articles from './components/Articles';
import { BrowserRouter, BrowserRouter as Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Propos from './components/Propos';
import Vanta from './components/Vanta';
import Contact from './components/Contact'
import Login from './components/admin/Login'
import Admin from './components/admin/Admin'
import PrivateRoute from './components/admin/PrivateRoute';




function App() {
return (
<>

  <BrowserRouter>
    <Routes>

      
      <Route element={<Navbar/>}>
        <Route path="/" element={<Articles/>}/>
        <Route path="/Home" element={<Articles/>}/>
        <Route path="/Propos" element={<Propos/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Route>
      <Route path="login" element={<Login/>} /> 
      <Route path="admin" element={<PrivateRoute><Admin /></PrivateRoute>}/> 


    </Routes>
  </BrowserRouter>

</>
);
}

export default App;
