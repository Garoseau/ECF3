import '../../App.css';
import React from 'react'
import { Link, Outlet,useNavigate } from "react-router-dom";
import LogServices from "../../services/LogServices";


function NavbarAdmin() {
	const navigate = useNavigate();
	const handleClick = () =>{
    LogServices.logout();
    navigate('/login');
	}	
 	return (
 <>

 	<div class="navbar">
 		<Link className='gradient gB anime navbar_text' to="/">Home</Link>
 		<Link className='gradient gB anime navbar_text' to="/propos">Propos</Link>
 		<Link className='gradient gB anime navbar_text' to="/Contact">Contact</Link>

 		<a class="gradient gB anime navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG Star Citizen</a>
 		<a class="gradient gB anime navbar_text" href="img/CV_Julien_Gomes.pdf" target="_blank">CV</a>
		<a className='gradient gB anime navbar_text' onClick={handleClick}>Logout</a>
 	</div>

 	<Outlet />
 </>
 )
 }
export default NavbarAdmin;