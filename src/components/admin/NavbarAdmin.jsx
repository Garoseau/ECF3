import '../../App.css';
import React from 'react'
import { Link, Outlet,useNavigate } from "react-router-dom";
import LogServices from "../../services/LogServices";
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

function NavbarAdmin() {
	const navigate = useNavigate();
	const handleClick = () =>{
    LogServices.logout();
    navigate('/login');
	}	
 	return (
 <>
 	<div className="navbar">
 		<Link className='gradient gB anime navbar_text' to="/">Home</Link>
 		<Link className='gradient gB anime navbar_text' to="/propos">Propos</Link>
 		<Link className='gradient gB anime navbar_text' to="/contact">Contact</Link>

 		<a className="gradient gB anime navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG Star Citizen</a>
 		<a className="gradient gB anime navbar_text" href="img/CV_Julien_Gomes.pdf" target="_blank">CV</a>
		<Link className='gradient gC anime navbar_text' to={`/add-product`}> Add</Link>
		<a className='gradient gD anime navbar_text' onClick={handleClick}> Sign Out</a>
 	</div>

 	<Outlet />
 </>
 )
 }
export default NavbarAdmin;