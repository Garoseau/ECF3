import '../../App.css';
import React from 'react'
import { Link, Outlet,useNavigate } from "react-router-dom";
import { PersonIcon } from '@mui/icons-material/Person';
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
 		<Link className='navbar_text' to="/">Home</Link>
 		<Link className='navbar_text' to="/propos">Propos</Link>
 		<Link className='navbar_text' to="/Contact">Contact</Link>

 		<a class="navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG Star Citizen</a>
 		<a class="navbar_text" href="img/CV_Julien_Gomes.pdf" target="_blank">CV</a>
		<a className='navbar_text' onClick={handleClick}>Logout</a>
 	</div>

 	<Outlet />
 </>
 )
 }
export default NavbarAdmin;