import './App.css';
import React from 'react';
import PageNav from './components/Navbar'
import Articles from './components/Articles';
import { BrowserRouter, BrowserRouter as Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';




function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
      <Route element={<Navbar/>}>
      <Route path="/" element={<Articles/>} />

      </Route>

      </Routes>
      </BrowserRouter>


      </>
  );
}

export default App;
