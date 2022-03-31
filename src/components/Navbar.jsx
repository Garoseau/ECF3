import React, { Component, useState } from 'react'
import { ReactDOM } from 'react';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import '../App.css';

export default function PageNav(){
	const [page, setPage] = useState('');
	return(
		<>
		<header>
 		<div class="navbar">
 			<a href="index.html"class ="navbar_text"><span>Accueil</span></a>
 			<a href="propos.html"class="navbar_text"><span>Propos</span></a>
 			<a href="résumé.html" class="navbar_text"><span>Résumé</span></a>
 			<a href="contact.html"class="navbar_text"><span>Contact</span></a>
 			<a href="https://www.millenium.org/games/game-376" target="_blank" class="navbar_text"><span>MGG Star Citizen</span></a>
 			<a href="img/CV_Julien_Gomes.pdf" target="_blank" class="navbar_text"><span>CV</span></a>
 		</div>
 		</header>

		</>
	)
}

// export default function Navbar() {
// 	return (
// 		<div>
// 		<header>
// 		<div class="navbar">


// 			<a href="index.html"class ="navbar_text"><span>Accueil</span></a>
// 			<a href="propos.html"class="navbar_text"><span>Propos</span></a>
// 			<a href="résumé.html" class="navbar_text"><span>Résumé</span></a>
// 			<a href="contact.html"class="navbar_text"><span>Contact</span></a>
// 			<a href="https://www.millenium.org/games/game-376" target="_blank" class="navbar_text"><span>MGG Star Citizen</span></a>
// 			<a href="img/CV_Julien_Gomes.pdf" target="_blank" class="navbar_text"><span>CV</span></a>
// 		</div>
// 		</header>
// 		</div>
// 	)
// }
