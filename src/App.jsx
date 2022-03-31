import './App.css';
import React from 'react';
import Articles from './components/Articles';
import { BrowserRouter, BrowserRouter as Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Propos from './components/propos';
import Venta from './components/venta';
import Contact from './components/Contact'




function App() {
  return (
      <>

      <BrowserRouter>
        <Routes>

        {/* <Route element={<Venta/>}> */}
          <Route element={<Navbar/>}>
            <Route path="/" element={<Articles/>} />
            <Route path="/propos" element={<Propos/>} />
            <Route path="/Contact" element={<Contact/>}/>
          </Route>
        {/* </Route> */}

        </Routes>
      </BrowserRouter>

      </>
  );
}

export default App;
