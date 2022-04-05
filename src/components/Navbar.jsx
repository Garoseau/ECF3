import '../App.css';
import React from 'react'
import { Link, Outlet}from "react-router-dom";



function Navbar() {

 return (
 <>
 	<div class="navbar">
 		<Link className='gradient gB anime navbar_text' to="/">Home</Link>
		 <Link className='gradient gB anime navbar_text' to="/AB">Home2</Link>
 		<Link className='gradient gB anime navbar_text' to="/Propos">Propos</Link>
 		<Link className='gradient gB anime navbar_text' to="/Contact">Contact</Link>
 		<a class="gradient gB anime navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG StarCitizen</a>
 		<a class="gradient gB anime navbar_text" href="img/CV_Julien_Gomes.pdf" target="_blank">CV</a>
 		<Link className='gradient gB anime navbar_text' to="/Login">Login</Link>
 	</div>

 	<Outlet />
 </>
 )}

 export default Navbar