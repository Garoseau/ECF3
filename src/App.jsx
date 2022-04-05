import './App.css';
import React from 'react';
import Articles from './components/Articles';
import ArticlesB from './components/Articles copy';
import { BrowserRouter, BrowserRouter as Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Propos from './components/Propos';
import Contact from './components/Contact'
import Login from './components/admin/Login'
import Admin from './components/admin/Admin'
import PrivateRoute from './components/admin/PrivateRoute';
import AddArticles from './components/admin/AddArticles';



function App() {
return (
<>

  <BrowserRouter>
    <Routes>

      <Route element={<Navbar />}>

        <Route path="/" element={<Articles />}/>
        <Route path="/AB" element={<ArticlesB />}/>
        <Route path="/Propos" element={<Propos />}/>
        <Route path="/Contact" element={<Contact />}/>

      </Route>

      <Route path="Login" element={<Login/>} />
      <Route path="Admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
      <Route path="AddArticles" element={<PrivateRoute><AddArticles/></PrivateRoute>}/>

    </Routes>
  </BrowserRouter>

</>
);
}

export default App;
