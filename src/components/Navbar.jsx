import '../App.css';
import React, { Component, useState } from 'react'
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";


function Navbar() {
 return (
 <>

 	<div class="navbar">
 		<Link className='navbar_text' to="/">Home</Link>
 		<Link className='navbar_text' to="/propos">Propos</Link>
 		<Link className='navbar_text' to="/Contact">Contact</Link>

 		<a class="navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG Star Citizen</a>
 		<a class="navbar_text" href="img/CV_Julien_Gomes.pdf" target="_blank">CV</a>
		<Link className='navbar_text' to="/Login">Login</Link>
 	</div>

 	<Outlet />
 </>
 )
 }
export default Navbar;