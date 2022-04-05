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
import NavbarAdmin from './components/admin/NavbarAdmin';
import DeleteArticles from './components/admin/DeleteArticles';



function App() {
return (
<>

  <BrowserRouter>
    <Routes>

      <Route element={<Navbar />}>

        <Route path="/" element={<Articles />}/>
        <Route path="/Propos" element={<Propos />}/>
        <Route path="/Contact" element={<Contact />}/>

      </Route>

      <Route element={<NavbarAdmin />}>

        <Route path="/" element={<Articles />}/>
        <Route path="/Propos" element={<Propos />}/>
        <Route path="/Contact" element={<Contact />}/>

      </Route>


      <Route path="Login" element={<Login/>} />
      <Route path="ArticleAdmin" element={<PrivateRoute><ArticlesB/></PrivateRoute>}/>
      <Route path="Admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
      <Route path="AddArticles" element={<PrivateRoute><AddArticles/></PrivateRoute>}/>
      <Route path="DeleteArticles" element={<PrivateRoute><DeleteArticles/></PrivateRoute>}/>
      
    </Routes>
  </BrowserRouter>

</>
);
}

export default App;
