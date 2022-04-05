import '../../App.css';
import React from 'react'
import { Link, Outlet,useNavigate } from "react-router-dom";
import LogServices from "../../services/LogServices";
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

function NavbarAdmin() {
	const navigate = useNavigate();
	const handleClick = () =>{
    LogServices.logout();
    navigate('/Login');
	}	
 	return (
 <>
 	<div className="navbar">
 		<Link className='gradient gB anime navbar_text' to="/">Home</Link>
 		<Link className='gradient gB anime navbar_text' to="/Propos">Propos</Link>
 		<Link className='gradient gB anime navbar_text' to="/Contact">Contact</Link>

 		<a className="gradient gB anime navbar_text" href="https://www.millenium.org/games/game-376" target="_blank">MGG Star Citizen</a>
 		<a className="gradient gB anime navbar_text" href="img/CV_Julien_Gomes.pdf" target="_blank">CV</a>
		 <Link className='gradient gValid anime navbar_text' to="/Admin">Home Admin</Link>
		<Link className='gradient gGold anime navbar_text' to='/AddArticles'> Add</Link>
		<Link className='gradient gError anime navbar_text' to={`/add-product`}> Delete</Link>

		<a className='gradient gError anime navbar_text' onClick={handleClick}>Sign Off</a>
 	</div>

 	<Outlet />
 </>
 )
 }
export default NavbarAdmin;