import '../App.css';
import React from 'react'
import { Link, Outlet}from "react-router-dom";



function Navbar() {

 return (
 <>
 	<div class="navbar">
 		<Link className='gradient gB anime navbar_text' to="/home">Home</Link>
 		<Link className='gradient gB anime navbar_text' to="/propos">Propos</Link>
 		<Link className='gradient gB anime navbar_text' to="/contact">Contact</Link>
 		<a class="gradient gB anime navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG StarCitizen</a>
 		<a class="gradient gB anime navbar_text" href="img/CV_Julien_Gomes.pdf" target="_blank">CV</a>
 		<Link className='gradient gB anime navbar_text' to="/login">Login</Link>
 	</div>

 	<Outlet />
 </>
 )}

 export default Navbar