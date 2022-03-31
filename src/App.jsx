import './App.css';
import React from 'react';
import PageNav from './components/Navbar'
import Articles from './components/Articles';
import { BrowserRouter as Link, Route, Router } from "react-router-dom";
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="content_wrapper">
      
      <Router>
        <Route path="/"/>
      </Router>

      <Navbar></Navbar>
      <Articles></Articles>
    </div>
  );
}

export default App;
